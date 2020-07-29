import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Accordion, Container, Content, Icon} from 'native-base';
import React from 'react';
import {
  ActivityIndicator,
  Alert,
  Platform,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import {Divider} from 'react-native-elements';
import {useDispatch} from 'react-redux/lib/hooks/useDispatch';
import {useSelector} from 'react-redux/lib/hooks/useSelector';
import HeaderComponent from '../../../components/header';
import {_cleanUp} from '../../../components/nfc';
import OfflineMode from '../../../components/offline';
import {
  ACTIVE_BLUE,
  COLOR_BORDER,
  MAIN_GRAY,
  MAIN_RED,
  TEST_BORDER,
} from '../../../config/global-styles';
import {REPORT_ISSUE} from '../../../config/navigation-config';
import {
  offline_organizations,
  report_issue_fn,
} from '../../../redux/action/offline';
import {actionStats, totalActionCount} from '../../../redux/action/stats';
import {getStats} from '../../../services/getStats';
import {retrieveUserInfo} from '../../../services/local-storage';
import {getOfflineOrganizations} from '../../../services/offline';
import {NavigationDashboardIcon} from '../../../svg-components/navigation-dashboard';
import Action from './actions';
import Announcement from './announcement';
import Calender from './calendar';
import Location from './location';
import Status from './status';

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
  const loadingAction = useSelector((state) => state.issueActon.loading);

  const didSubmitAction = useSelector((state) => state.issueActon.didSubmit);

  const [modalVisibility, setModalVisibility] = React.useState(false);
  const [headerTitleState, setHeaderTitleState] = React.useState('');
  const [showPopup, setShowPopup] = React.useState(didSubmitAction);
  const [IssueNumber, setIssueNumber] = React.useState('');
  // const [nfcId, setNfcId] = React.useState();
  const [refreshComponent, setRefreshComponent] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(loadingAction);
  const [refreshingCom, setRefreshingCom] = React.useState(false);
  //etag
  const [etagLocationId, setEtagLocationId] = React.useState('');
  const [offlineCount, setOfflineCount] = React.useState(0);

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
    // NetInfo.addEventListener((state) => {
    //   console.log('Connection type', state.type);
    //   console.log('Is connected?', state.isConnected);
    //   if (state.isConnected) {
    //     // if (offlineCount === 1) {
    //     _onRefresh();
    //     // setOfflineCount(0);
    //     // }
    //   } else {
    //     // setOfflineCount(1);
    //   }
    // });

    getStats((res) => {
      console.log(
        JSON.stringify(res) +
          '===> Action Stats Retrieved. [Dashboard] [USE_EFFECT]',
      );
      let sum = res.data
        .map((o) => o.cnt)
        .reduce((a, c) => {
          return a + c;
        });

      console.log(sum + 'RESULT COUNT');
      dispatch(actionStats(res.data));
      dispatch(totalActionCount(sum));
    });
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
    // setModalVisibility(true);
    navigation.navigate(REPORT_ISSUE);

    setHeaderTitleState('Log Issue');
  };
  const _onRefresh = () => {
    setRefreshingCom(true);
    // alert(isConnected);
    if (isConnected) {
      // setEtagLocationId('Tag');
      /**RELEASE OFFLINE DATA */
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
    </Container>
  );
};
export default dashboard;

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
