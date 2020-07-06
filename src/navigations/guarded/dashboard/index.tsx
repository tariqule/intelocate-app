import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Accordion, Button, Container, Content, Footer, Icon} from 'native-base';
import React from 'react';
import {
  Modal,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  ActivityIndicator,
  RefreshControl,
  TouchableWithoutFeedback,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import DropDownPicker from 'react-native-dropdown-picker';
import {Divider, Header, Input} from 'react-native-elements';
import CategoryCard from '../../../components/categories-card';
import DropDownX from '../../../components/dropdown';
import HeaderComponent from '../../../components/header';
import {
  ACTIVE_BLUE,
  COLOR_BORDER,
  MAIN_BLUE,
  MAIN_GRAY,
  MAIN_RED,
  TEST_BORDER,
  font_md,
  font_sm_md,
} from '../../../config/global-styles';
import {getCategories} from '../../../services/getCategories';
import {getExternalUsers} from '../../../services/getUser';
import {sendIssue} from '../../../services/issue';
import {retrieveUserInfo} from '../../../services/local-storage';
import {
  getListLocationByOrganization,
  getListOrganizationWithLocation,
  getListTenantsWithLocation,
} from '../../../services/organizations';
import {NavigationDashboardIcon} from '../../../svg-components/navigation-dashboard';
import Action from './actions';
import Announcement from './announcement';
import Calender from './calendar';
import Location from './location';
import Status from './status';
import PopUp from 'react-native-modal';
import {Modal_PopUp} from '../../../components/popup';
import {_NfcOn, _cleanUp} from '../../../components/nfc';
import * as Animatable from 'react-native-animatable';
import {getUserByNfc} from '../../../services/nfc';
import {NetworkConsumer, checkInternetConnection} from 'react-native-offline';
import {OfflineModeIcon} from '../../../svg-components/offline-mode-icon';
import OfflineMode from '../../../components/offline';
import {useDispatch} from 'react-redux/lib/hooks/useDispatch';
import {
  report_issue_fn,
  clear_queue,
  offline_category_list,
  offline_organization_list,
  offline_organizaton_location_list,
  offline_external_user_list,
  offline_organizations,
} from '../../../redux/action/offline';
import {useSelector} from 'react-redux/lib/hooks/useSelector';
import {getOfflineOrganizations} from '../../../services/offline';

const dataArray = [
  {
    title: 'Announcements:',
    content: <Announcement />,
  },
  {title: 'Actions:', content: <Action />},
  {title: 'Calendar:', content: <Calender />},
  {title: 'Statuses:', content: <Status />},
  {title: 'Locations:', content: <Location />},
];

const _renderHeader = (item, expanded) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          height: 70,
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#ffff',
        }}>
        <Text style={{fontWeight: '400', fontSize: 20, color: MAIN_GRAY}}>
          {item.title}
        </Text>

        {expanded ? (
          <Icon style={{fontSize: 18}} name="ios-arrow-up" type="Ionicons" />
        ) : (
          <Icon style={{fontSize: 18}} name="ios-arrow-down" type="Ionicons" />
        )}
      </View>
      <Divider />
    </View>
  );
};
const _renderContent = (item) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        padding: 10,
      }}>
      {item.content}
    </View>
  );
};

/**
 * @DASHBOARD_MAIN
 */
const dashboard = () => {
  const navigation = useNavigation();

  const [modalVisibility, setModalVisibility] = React.useState(false);
  const [headerTitleState, setHeaderTitleState] = React.useState('');
  const [showPopup, setShowPopup] = React.useState(false);
  const [IssueNumber, setIssueNumber] = React.useState('');
  // const [nfcId, setNfcId] = React.useState();
  const [refreshComponent, setRefreshComponent] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [refreshingCom, setRefreshingCom] = React.useState(false);
  //etag
  const [etagLocationId, setEtagLocationId] = React.useState('');

  const offlineQueuedData = useSelector(
    (state) => state.reportIssue.offlineData,
  );
  const isConnected = useSelector((state) => state.network.isConnected);

  const submitIssueResponse = useSelector(
    (state) =>
      state.reportIssue.responseData &&
      state.reportIssue.responseData.map((e) => e.issueNumber),
  );

  const dispatch = useDispatch();

  const newLocal_1 = '[DASHBOARD] [REPORT_ISSUE_RESPONSE]';

  React.useEffect(() => {
    console.log(JSON.stringify(submitIssueResponse) + newLocal_1);

    if (isConnected && offlineQueuedData) {
      /**@ONLY.OFFLINE**/
      getOfflineOrganizations((res) => dispatch(offline_organizations(res)));
      // setEtagLocationId('Tag');

      refreshComponent ? setRefreshComponent(false) : setRefreshComponent(true);
      retrieveUserInfo().then((res) => {
        dispatch(report_issue_fn(res.organization.id, offlineQueuedData));
      });
    }

    const newLocal = '[DASHBOARD] => offline queued items';
    console.log(JSON.stringify(offlineQueuedData) + newLocal);
  }, []);

  const _handleBack = () => {
    _cleanUp();
    setModalVisibility(false);
  };

  const _handleReportIssueButton = () => {
    setModalVisibility(true);
    setHeaderTitleState('Log Issue');
  };
  const _onRefresh = () => {
    setRefreshingCom(true);
    // alert(isConnected);
    if (isConnected) {
      // setEtagLocationId('Tag');

      // refreshComponent ? setRefreshComponent(false) : setRefreshComponent(true);
      retrieveUserInfo().then((res) => {
        dispatch(report_issue_fn(res.organization.id, offlineQueuedData));
        setRefreshingCom(false);
      });
    } else Alert.alert('Offline Mode', 'You are currently offline.');
  };
  return (
    <Container
      style={{
        top: Platform.select({android: '0%', ios: '4.2%'}),
      }}>
      <OfflineMode />

      <HeaderComponent
        title="Dashboard"
        icon={<NavigationDashboardIcon />}
        onLogoPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      {!refreshing ? (
        <Content
          refreshControl={
            <RefreshControl
              refreshing={refreshingCom}
              onRefresh={_onRefresh}></RefreshControl>
          }
          style={{backgroundColor: COLOR_BORDER}}>
          <Accordion
            dataArray={dataArray}
            animation={true}
            expanded={true}
            renderHeader={_renderHeader}
            renderContent={_renderContent}
          />
        </Content>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" />
        </View>
      )}

      <ActionButton
        buttonColor={ACTIVE_BLUE}
        style={{bottom: Platform.OS === 'android' ? 20 : 100}}>
        <ActionButton.Item
          buttonColor={MAIN_RED}
          title="Report Issue"
          onPress={_handleReportIssueButton}>
          <Icon name="md-create" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>

      <ActionModal
        modalVisible={modalVisibility}
        onPressBackButton={_handleBack}
        headerTitle={headerTitleState}
        didSubmit={(submitted) => {
          setShowPopup(submitted);
          // console.log(issueNumber);
          // setIssueNumber(issueNumber);
        }}
        // nfcLocationId={etagLocationId}
        loading={(refreshing) => setRefreshing(refreshing)}
      />
      {showPopup && (
        <Modal_PopUp
          isVisible={showPopup}
          title="Issue Submitted"
          issueNumber={`Issue #${submitIssueResponse}`}
          onPress={() => setShowPopup(false)}></Modal_PopUp>
      )}
    </Container>
  );
};
export default dashboard;

/***********************************************************************
 * @FLOATING_ACTION_MODAL
 ***********************************************************************/

interface actionModalProps {
  modalVisible: boolean;
  onPressBackButton: () => void;
  headerTitle: string;
  didSubmit?: (boolean) => void;
  nfcLocationId?: string;
  loading?: (boolean) => void;
}
export const ActionModal = (props: actionModalProps) => {
  const offlineCategories = useSelector(
    (state) => state.reportIssue.offlineCategories,
  );
  const offlineSubCategories = useSelector(
    (state) => state.reportIssue.offlineSubCategories,
  );
  const offlineOrganizationList = useSelector(
    (state) => state.reportIssue.offlineOrganizationList,
  );
  const offlineOrganizationLocationList = useSelector(
    (state) => state.reportIssue.offlineOrganizationLocationList,
  );
  const offlineExternalUsersList = useSelector(
    (state) => state.reportIssue.offlineExternalUsersList,
  );

  const offlineOrganizationsPacketData = useSelector(
    (state) => state.reportIssue.offlineOrganizations,
  );

  const isConnected = useSelector((state) => state.network.isConnected);

  const [organization, setOrganization] = React.useState(
    offlineOrganizationList,
  );
  const [categories, setCategories] = React.useState(
    offlineCategories ? offlineCategories : [],
  );
  const [subCategories, setSubCategories] = React.useState(
    offlineSubCategories ? offlineSubCategories : [],
  );
  const [categoriesIssue, setCategoriesIssue] = React.useState([]);
  const [userLocations, setUserLocations] = React.useState(
    offlineOrganizationLocationList,
  );
  const [selectedIconColor, setIconSelectedColor] = React.useState(MAIN_GRAY);
  const [selectedCategory, setSelectedCategory] = React.useState([]);
  const [externalUsers, setExternalUsers] = React.useState(
    offlineExternalUsersList
      ? offlineExternalUsersList
      : offlineExternalUsersList,
  );

  //organization id
  const [useOrganizationID, setUserOrganization] = React.useState('');
  const [selectedCategoryId, setSelectedCategoryId] = React.useState('');
  const [selectedLocationId, setSelectedLocationId] = React.useState('');
  const [externalCreatorID, setExternalCreatorId] = React.useState('');
  const [selectedCategoryIssue, setSelectedCategoryIssue] = React.useState('');
  const [submitBtnColor, setSubmitBtnColor] = React.useState(COLOR_BORDER);

  //after submitting
  const [showPopup, setShowPopup] = React.useState(true);

  //nfc
  const [etagLocationId, setEtagLocationId] = React.useState('');

  //redux
  const dispatch = useDispatch();

  React.useEffect(() => {
    _NfcOn((res) => {
      getUserByNfc(res, (res) => {
        Alert.alert('NFC tag found!', res);
        setEtagLocationId(res.organizationId);
        getListOrganizationWithLocation(
          res.organizationId,
          'CREATE_PROJECT',
          (resOrg) => {
            getListTenantsWithLocation((resTenants) => {
              setOrganization([...resOrg.data, ...resTenants.data]);
            });
          },
        );
      });

      // setNfcId(res);
    });

    console.log(
      JSON.stringify(offlineOrganizationList) + 'offline organaization',
    );

    // !isConnected &&
    //   setOrganization(
    //     offlineOrganizationsPacketData.map((e) => {
    //       let tenantName = e && e.name;
    //       let ienantId = e & e.id;
    //       let _locationsId = e._location && e._location.map((v) => v.id);
    //       let _locationName = e._location && e._location.map((n) => n.name);
    //       let tenant = [{name: tenantName, id: ienantId}];
    //       let _location = [{name: _locationName, id: _locationsId}];

    //       return [...tenant, ..._location];
    //     }),
    //   );
    //tenant
    // offlineOrganizationsPacketData.map((e) => {
    //   return {id: e.id, name: e.name};
    // }),
    //org
    // offlineOrganizationsPacketData
    //       .map((e) => {
    //         return e._organizations.map((v) => {
    //           return {id: v.id, name: v.name, locations: v._locations};
    //         });
    //       })
    //       .flatMap((e) => e)
    // if (!isConnected) {
    //   setOrganization(
    //     offlineOrganizationsPacketData.map((e) => {
    //       let mapOrg = e._organizations
    //         .map((v) => {
    //           return {id: v.id, name: v.name, locations: v._locations};
    //         })
    //         .flatMap((e) => e);

    //       let mapTenant = [{id: e.id, name: e.name, locations: e._locations}];
    //       return [...mapOrg, ...mapTenant];
    //     })[0],
    //   );
    // }
    
    setOrganization(
      offlineOrganizationsPacketData.map((e) => {
        let mapOrg = e._organizations
          .map((v) => {
            return {id: v.id, name: v.name, locations: v._locations};
          })
          .flatMap((e) => e);

        let mapTenant = [{id: e.id, name: e.name, locations: e._locations}];
        return [...mapOrg, ...mapTenant];
      })[0],
    );
    console.log(
      JSON.stringify(
        offlineOrganizationsPacketData.map((e) => {
          let mapOrg = e._organizations
            .map((v) => {
              return {id: v.id, name: v.name, locations: v._locations};
            })
            .flatMap((e) => e);

          let mapTenant = [{id: e.id, name: e.name, locations: e._locations}];
          return [...mapOrg, ...mapTenant];
        })[0],
      ) + '@Here in now',
    );

    getCategories((res) => {
      dispatch(offline_category_list(res.data));
      setCategories(res.data);
    });

    getExternalUsers((res) => {
      dispatch(offline_external_user_list(res.users));
      setExternalUsers(res.users);
    });

    retrieveUserInfo().then((res) => {
      setUserOrganization(res.organization.id);

      // getListOrganizationWithLocation(
      //   res.organization.id,
      //   'CREATE_PROJECT',
      //   (resOrg) => {
      //     getListTenantsWithLocation((resTenants) => {
      //       dispatch(
      //         offline_organization_list([...resOrg.data, ...resTenants.data]),
      //       );
      //       setOrganization([...resOrg.data, ...resTenants.data]);
      //     });

      //     // setOrganization([...organization, ...res.data]);
      //   },
      // );
    });

    // getListOrganization()
  }, []);

  const Back = (props) => (
    <TouchableOpacity onPress={props.onPressBack}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '80%',
        }}>
        <Icon name="arrow-back" style={{color: '#FFF'}} />
        <Text style={{color: '#FFF'}}>Back</Text>
      </View>
    </TouchableOpacity>
  );

  const _onPressCategory = (data, index) => {
    const catIssueSet = (data) => {
      data.number ? setCategoriesIssue(data) : setCategoriesIssue([]);
    };
    console.log(JSON.stringify(index));
    setSelectedCategoryId(data.id);
    setSubmitBtnColor(ACTIVE_BLUE);

    data._children && setSelectedCategory(data._children);
    setCategoriesIssue([]);
    setSubCategories([]);
    if (
      data.id !== 3887 &&
      data.id !== 2084 &&
      data.id !== 1994 &&
      data.id !== 3778
    ) {
      if (data._children) {
        setSubCategories(data._children);

        setCategoriesIssue([]);
      }
    } else {
      setCategoriesIssue(data._children);
      setSubCategories([]);
    }
  };
  const _onPressSubCategory = (data, index) => {
    console.log(JSON.stringify(data));
    data._children && setCategoriesIssue(data._children);
  };

  const _onChangeCategoryIssue = (val) => {
    setSelectedCategoryIssue(val);
    console.log(val);
  };

  const _onChangeLocation = (id) => {
    setSelectedLocationId(id);
    console.log(id);
    // getListLocationByOrganization(organization.id, (res) =>
    // setUserLocations(res.data),
    // );
  };
  //
  const _onChangeOrganization = (val, data) => {
    console.warn(JSON.stringify(data) + ' ====> pressed data');
    if (isConnected) {
      getListLocationByOrganization(val, (res) => {
        console.log(JSON.stringify(res.data) + 'on press organization');
        // offlineOrganizationList(res.data);
        dispatch(offline_organizaton_location_list(res.data));
        setUserLocations(res.data);
      });
    } else {
      setUserLocations(data.locations);
    }
    console.log(val);
  };
  const _onChangeExternalUsers = (val) => {
    setExternalCreatorId(val);
  };

  const submitIssueResponse = useSelector(
    (state) => state.reportIssue.responseData,
  );

  const _onPressSubmit = () => {
    const task = {
      categoryId: selectedCategoryId,
      locationId: props.nfcLocationId || selectedLocationId,
      externalCreatorId: externalCreatorID,
      name: selectedCategoryIssue,
      status: 'NEW',
    };

    dispatch(
      report_issue_fn(useOrganizationID, {
        tasks: [JSON.stringify(task)],
      }),
    );
    props.onPressBackButton();
    if (!isConnected) {
      Alert.alert('', 'Issue submission is queued!');
    } else {
      props.loading(true);
      setTimeout(() => {
        props.loading(false);
        setShowPopup(true);

        props.didSubmit(true);
      }, 5000);
    }

    // sendIssue(
    //   useOrganizationID,
    //   {
    //     tasks: [JSON.stringify(task)],
    //   },
    //   (res) => {
    //     setShowPopup(true);
    //     // setIssueNumber();
    //     console.log(JSON.stringify(res));

    //     props.didSubmit(
    //       true,
    //       res.data.map((d) => d.issueNumber),
    //     );
    //     props.onPressBackButton();
    //   },
    // );
  };
  const ref = React.createRef();

  return (
    <Modal
      animationType="slide"
      transparent={false}
      ref={ref}
      visible={props.modalVisible}
      onRequestClose={props.onPressBackButton}>
      <Container style={{flex: 1}}>
        <OfflineMode />
        <Header
          containerStyle={[
            {
              backgroundColor: MAIN_BLUE,
              paddingTop: Platform.OS === 'android' ? 0 : 40,
            },
          ]}>
          <Back onPressBack={props.onPressBackButton} />
          <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold'}}>
            {props.headerTitle}
          </Text>
          <Animatable.View
            animation="pulse"
            duration={1000}
            easing={'ease'}
            iterationCount={100}>
            <Icon
              name="nfc"
              type="MaterialCommunityIcons"
              style={{color: 'white'}}></Icon>
          </Animatable.View>
        </Header>
        <Content>
          <View
            style={{
              flexDirection: 'column',

              justifyContent: 'center',
            }}>
            <View>
              <Text style={styles.issueTitle}>Organization:</Text>

              <DropDownX
                // value={organization.id}

                data={organization}
                organization={true}
                // defaultValue={Location}
                // disabled={true}
                id={true}
                containerStyle={{
                  borderWidth: 1,
                  width: '95%',
                  alignSelf: 'center',
                  borderColor: ACTIVE_BLUE,
                }}
                onChange={(val, data) => _onChangeOrganization(val, data)}
                style={{width: '100%'}}
              />
            </View>
            <View style={{}}>
              <Text style={styles.issueTitle}>Location:</Text>

              <DropDownX
                data={userLocations}
                defaultValue={userLocations}
                id={true}
                organization={true}
                // disabled={true}
                containerStyle={{
                  borderWidth: 1,
                  width: '95%',
                  alignSelf: 'center',
                  borderColor: ACTIVE_BLUE,
                }}
                onChange={(val) => _onChangeLocation(val)}
                style={{width: '100%'}}
              />
            </View>

            <Text style={styles.issueTitle}>Issue:</Text>

            <View style={{}}>
              <View>
                <CategoryCard
                  data={categories}
                  onPress={(data, index) => _onPressCategory(data, index)}
                />
              </View>
              <View>
                {subCategories && subCategories.length > 0 && (
                  <CategoryCard
                    subCategories={true}
                    data={subCategories}
                    onPress={(data, index) => _onPressSubCategory(data, index)}
                  />
                )}
              </View>
              <Text style={styles.issueTitle}>Details:</Text>
              <Text style={styles.issueCategorizeTitle}>
                Categorize the issue:
              </Text>
              <Text style={styles.issueCategorizeTitle}>Category Issue:</Text>
              <DropDownX
                data={categoriesIssue}
                // defaultValue={Location}
                // disabled={true}
                containerStyle={{
                  borderWidth: 1,
                  width: '95%',
                  alignSelf: 'center',
                  borderColor: ACTIVE_BLUE,
                }}
                onChange={(val) => _onChangeCategoryIssue(val)}
                style={{width: '100%'}}
              />

              <Text style={styles.issueCategorizeTitle}>Submitted By:</Text>
              <DropDownX
                data={externalUsers}
                id={true}
                // defaultValue={Location}
                // disabled={true}
                containerStyle={{
                  borderWidth: 1,
                  width: '95%',
                  alignSelf: 'center',
                  borderColor: ACTIVE_BLUE,
                }}
                onChange={(val, index) => _onChangeExternalUsers(val)}
                style={{width: '100%'}}
              />
              <Text style={styles.issueCategorizeTitle}>Notes:</Text>
              <Input />
            </View>
          </View>
        </Content>
        <Footer style={{backgroundColor: 'transparent'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              width: '100%',
              paddingRight: 30,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'transparent',

                width: 80,
                justifyContent: 'center',
              }}
              onPress={props.onPressBackButton}>
              <Text>Cancel</Text>
            </TouchableOpacity>
            <Button
              onPress={_onPressSubmit}
              disabled={selectedCategory ? false : true}
              style={{
                backgroundColor: submitBtnColor,
                width: 80,
                justifyContent: 'center',
              }}>
              <Text style={{color: '#FFF'}}>Submit</Text>
            </Button>
          </View>
        </Footer>
      </Container>
    </Modal>
  );
};

const styles = StyleSheet.create({
  dropDown: {
    borderWidth: 1,
    borderColor: ACTIVE_BLUE,
    borderRadius: 2,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  issueTitle: {
    fontSize: 20,
    left: 2,
    padding: 10,
  },
  issueCategorizeTitle: {
    fontSize: 15,
    // left: 10,
    padding: 10,
    color: MAIN_GRAY,
  },
  col: {
    // justifyContent: 'center',
    alignContent: 'center',
    borderWidth: TEST_BORDER,
    alignItems: 'center',
    height: 80,
  },
  iconCategory: {
    color: MAIN_GRAY,
    fontSize: 20,
  },
  colText: {
    color: MAIN_GRAY,
    // padding: ,
    fontSize: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
