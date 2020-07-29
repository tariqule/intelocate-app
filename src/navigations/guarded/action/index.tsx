import NetInfo from '@react-native-community/netinfo';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Icon} from 'native-base';
import React from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Platform,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import {Card, Divider} from 'react-native-elements';
import {useDispatch} from 'react-redux/lib/hooks/useDispatch';
import {useSelector} from 'react-redux/lib/hooks/useSelector';
import HeaderComponent from '../../../components/header';
import {_cleanUp} from '../../../components/nfc';
import OfflineMode from '../../../components/offline';
import {
  ACTIVE_BLUE,
  BLACK,
  COLOR_BORDER,
  font_sm,
  font_xs,
  MAIN_GRAY,
  MAIN_RED,
  TEST_BORDER,
} from '../../../config/global-styles';
import {ACTION_INFO, REPORT_ISSUE} from '../../../config/navigation-config';
import {selectedAction} from '../../../redux/action/issue-action';
import {
  offline_action_list,
  report_issue_fn,
  shouldDispatchOffline,
} from '../../../redux/action/offline';
import {actionStats, totalActionCount} from '../../../redux/action/stats';
import {getAction} from '../../../services/getAction';
import {getStats} from '../../../services/getStats';
import {retrieveUserInfo} from '../../../services/local-storage';
import {IconByCode} from '../../../svg-components/categories-icons/index';
import {ChecklistIcon} from '../../../svg-components/checklist-icon';
import {NavigationActionsIcon} from '../../../svg-components/navigation-actions';

const index = () => {
  const navigation = useNavigation();

  const CardItem = (item) => (
    <TouchableOpacity onPress={item.onPress}>
      <Card
        containerStyle={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{flex: 1}}>
            <View
              style={{
                height: 60,
                width: 60,
                padding: 4,
                borderRadius: 100,
                backgroundColor: COLOR_BORDER,
                justifyContent: 'center',
                alignItems: 'center',
                // padding: 12,
              }}>
              {item.iconCode ? (
                IconByCode(item.iconCode)
              ) : (
                <View style={{height: 30, width: 30}}>
                  <ChecklistIcon />
                </View>
              )}
            </View>
          </View>
          <View style={{flexDirection: 'column', flex: 3}}>
            <View>
              <Text
                style={{
                  color: ACTIVE_BLUE,
                  fontSize: font_sm,
                  fontWeight: 'bold',
                }}>
                {item.title}
              </Text>
            </View>
            <View>
              <Text style={{color: BLACK, fontSize: font_xs}}>{item.name}</Text>
            </View>
            <View>
              <Text style={{color: BLACK, fontSize: font_xs}}>
                {item.actionNumber}
              </Text>
            </View>
            <View>
              <Text style={{color: BLACK, fontSize: font_xs}}>
                {item.created}
              </Text>
            </View>
          </View>
        </View>
        <View style={{padding: 10}}>
          <Divider style={{borderWidth: 1, borderColor: COLOR_BORDER}} />
        </View>
        <View>
          <TouchableOpacity>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}>
              <Text
                style={{
                  color: MAIN_GRAY,
                  fontWeight: 'bold',
                  width: '100%',
                  textAlign: 'center',
                }}>
                STATUS: {item.status}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Card>
    </TouchableOpacity>
  );

  const isConnected = useSelector((state) => state.network.isConnected);
  const offlineActionList = useSelector(
    (state) => state.reportIssue.offlineAllActionList,
  );
  const offlineQueuedData = useSelector(
    (state) => state.reportIssue.offlineData,
  );

  const actionStatsCount = useSelector((state) => state.actionStats.totalCnt);
  const getUserOrgId = useSelector((state) => state.userReducer.organizationId);

  const refreshMode = useSelector(
    (state) => state.reportIssue.shouldDispatchOfflineData,
  );
  const [dbActionData, setDbActionData] = React.useState(offlineActionList);
  const [isLoading, setIsLoading] = React.useState(false);
  const [count, setCount] = React.useState(actionStatsCount || 0);
  const [refreshing, setRefreshing] = React.useState(false);
  const [modalVisibility, setModalVisibility] = React.useState(false);
  const [headerTitleState, setHeaderTitleState] = React.useState('');
  const [showPopup, setShowPopup] = React.useState(false);
  const [refreshingFullWindow, setRefreshingFullWindow] = React.useState(false);
  const [abortConnection, setAbortConnection] = React.useState(false);
  const [fetchData, setFetchData] = React.useState(10);

  const getActionsParams = {
    index: 0,
    count: fetchData,
    sort: 'recently_updated_desc',
  };

  const getCurrentStats = async () => {
    await getStats((res) => {
      console.log(
        JSON.stringify(res) +
          '===> Action Stats Retrieved. [Dashboard] [USE_EFFECT]',
      );
      let sum = res.data
        .map((o) => o.cnt)
        .reduce((a, c) => {
          return a + c;
        });
      setCount(sum);
      console.log(sum + 'RESULT COUNT');
      dispatch(actionStats(res.data));
      dispatch(totalActionCount(sum));
    });
  };

  React.useEffect(() => {
    // NetInfo.addEventListener((state) => {
    //   console.log('Connection type', state.type);
    //   console.log('Is connected?', state.isConnected);
    //   console.log(
    //     'dispatching................................................',
    //   );

    //   if (state.isConnected) {
    //     // alert('offlineCount');
    //     if (offlineCount === 1) {
    //       alert('on');
    //       dispatch(shouldDispatchOffline(false));
    //       _onRefresh();

    //       // getCurrentActionList();
    //       setOfflineCount(0);
    //     }
    //   } else {
    //     alert('pff');
    //     // alert(offlineCount);
    //     setOfflineCount(1);
    //   }
    // });
    navigation.addListener('focus', () => {
      NetInfo.fetch().then((state) => {
        console.log('Connection type', state.type);
        // alert('Is connected?' + state.isConnected);
        if (state.isConnected) {
          _onRefresh();
        } else {
        }
      });
      // if (isConnected) {
      //   alert(isConnected);
      // } else {
      //   alert(isConnected);
      // }
      // NetInfo.addEventListener((state) => {
      //   console.log('Connection type', state.type);
      //   console.log('Is connected?', state.isConnected);
      //   console.log(
      //     'dispatching................................................',
      //   );

      //   if (state.isConnected) {
      //     console.warn('...refreshing');
      //     getCurrentStats();
      //     // _onRefresh();
      //   } else {
      //     console.warn('0ff');
      //   }
      // });
      // if (refreshMode) {
      // console.log('refreshMode on -- dispatched' + refreshMode);
      // } else {
      // console.warn('refreshMode off -- ' + refreshMode);
      // _onRefresh();
      // }
    });
    if (isConnected) {
      getCurrentStats();
      setIsLoading(true);
      getAction(getActionsParams, (response) => {
        console.log(JSON.stringify(response));
        dispatch(offline_action_list(response.data));
        setDbActionData(response.data);
        setIsLoading(false);
      });
    } else {
      console.warn('You are currently viewing offline.');
    }
    return function cleanup() {
      navigation.addListener('focus', () => {});
      navigation.removeListener('focus', () => {
        console.log('focused');
        _onRefresh();
      });

      // setAbortConnection(true);
    };
  }, []);

  const showStatus = [
    {label: 'NEW', value: 'NEW'},
    {label: 'CANCELLED', value: 'CANCELLED'},
    {label: 'IN PROGRESS', value: 'INPROGRESS'},
    {label: 'COMPLETE', value: 'COMPLETE'},
  ];

  const getCurrentActionList = async () => {
    setRefreshing(true);

    await retrieveUserInfo().then(async (res) => {
      await dispatch(report_issue_fn(res.organization.id, offlineQueuedData));
      getCurrentStats();
      await getAction(
        getActionsParams,
        async (response) => {
          console.log(JSON.stringify(response));

          setDbActionData(response.data);

          setRefreshing(false);

          console.log('releasing offline... ');
        },
        (err) => {
          console.warn(err + '[ACTION] [OFFLINE-DISPATCH-ERROR]');
          setRefreshing(false);
          dispatch(shouldDispatchOffline(false));
        },
      );
    });
  };
  const _onRefresh = async () => {
    if (isConnected) {
      setRefreshing(true);

      await retrieveUserInfo().then(async (res) => {
        await dispatch(report_issue_fn(res.organization.id, offlineQueuedData));
        getCurrentStats();
        await getAction(
          getActionsParams,
          async (response) => {
            console.log(JSON.stringify(response));

            setDbActionData(response.data);

            setRefreshing(false);

            console.log('releasing offline... ');
          },
          (err) => {
            console.warn(err + '[ACTION] [OFFLINE-DISPATCH-ERROR]');
            setRefreshing(false);
            dispatch(shouldDispatchOffline(false));
          },
        );
      });
    } else {
      Alert.alert('Offline Mode', 'You are currently viewing offline.');
    }
  };
  function getStatus(input) {
    if (showStatus.length) {
      var v = showStatus.filter(function (element) {
        return element.value === input;
      });
      if (v.length) return v[0].label;
      else return null;
    } else return null;
  }
  const dispatch = useDispatch();
  const _handleReportIssueButton = () => {
    navigation.navigate(REPORT_ISSUE);
  };
  const _handleBack = () => {
    _cleanUp();
    setModalVisibility(false);
  };
  const submitIssueResponse = useSelector(
    (state) => state.reportIssue.responseData,
  );
  return (
    <View style={{backgroundColor: COLOR_BORDER, flex: 1}}>
      <OfflineMode />

      <HeaderComponent
        title={`Actions (${count})`}
        icon={<NavigationActionsIcon />}
        onLogoPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      {isLoading === false ? (
        <View>
          {/* <ScrollView nestedScrollEnabled={true}> */}
          <FlatList
            data={dbActionData}
            onEndReached={() => {
              setFetchData(fetchData + 10);
              _onRefresh();
            }}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={_onRefresh}></RefreshControl>
            }
            renderItem={({item}) => (
              <CardItem
                key={item.id}
                title={item.name}
                name={item.location !== undefined ? item.location.name : ''}
                actionNumber={item.issueNumber}
                created={item.createdAt}
                status={getStatus(item.status)}
                iconCode={
                  item.category &&
                  item.category.iconCode && {
                    code: item.category.iconCode,
                    color: MAIN_GRAY,
                  }
                }
                onPress={() => {
                  console.log(JSON.stringify(item));
                  dispatch(selectedAction(item));
                  navigation.navigate(ACTION_INFO, {item});
                }}
              />
            )}
            keyExtractor={(item) => item.id}></FlatList>
          {/* </ScrollView> */}
          <ActionButton
            buttonColor={ACTIVE_BLUE}
            style={{
              bottom: Platform.OS === 'android' ? 100 : 100,
            }}>
            <ActionButton.Item
              buttonColor={MAIN_RED}
              title="Report Issue"
              onPress={_handleReportIssueButton}>
              <Icon name="md-create" style={styles.actionButtonIcon} />
            </ActionButton.Item>
          </ActionButton>

          {/* <ActionModal
            modalVisible={modalVisibility}
            onPressBackButton={_handleBack}
            headerTitle={headerTitleState}
            didSubmit={(submitted) => {
              setShowPopup(submitted);
              getCurrentActionList();
              // console.log(issueNumber);
              // setIssueNumber(issueNumber);
            }}
            // nfcLocationId={etagLocationId}
            loading={(refreshing) => setIsLoading(refreshing)}
          /> */}
          {/* {showPopup && (
            <Modal_PopUp
              isVisible={showPopup}
              title="Issue Submitted"
              issueNumber={`Issue #${submitIssueResponse.map(
                (e) => e.issueNumber,
              )}`}
              onPress={() => setShowPopup(false)}></Modal_PopUp>
          )} */}
        </View>
      ) : (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <ActivityIndicator size={'large'} />
        </View>
      )}
    </View>
  );
};

export default index;

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
