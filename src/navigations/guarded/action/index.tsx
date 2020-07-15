import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  Alert,
  Platform,
  StyleSheet,
} from 'react-native';
import HeaderComponent from '../../../components/header';
import {NavigationDashboardIcon} from '../../../svg-components/navigation-dashboard';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {
  MAIN_GRAY,
  COLOR_BORDER,
  ACTIVE_BLUE,
  font_md,
  font_sm,
  BLACK,
  font_xs,
  MAIN_RED,
  TEST_BORDER,
} from '../../../config/global-styles';
import {Card, Divider} from 'react-native-elements';
import {ChecklistIcon} from '../../../svg-components/checklist-icon';
import {NavigationActionsIcon} from '../../../svg-components/navigation-actions';
import {ACTION_INFO} from '../../../config/navigation-config';
import {getAction} from '../../../services/getAction';
import {IconByCode} from '../../../svg-components/categories-icons/index';
import OfflineMode from '../../../components/offline';
import {selectedAction} from '../../../redux/action/issue-action';
import {useDispatch} from 'react-redux/lib/hooks/useDispatch';
import {useSelector} from 'react-redux/lib/hooks/useSelector';
import {offline_action_list} from '../../../redux/action/offline';
import {ScrollView} from 'react-native-gesture-handler';
import ActionButton from 'react-native-action-button';
import {Icon} from 'native-base';
import {ActionModal} from '../dashboard/index';
import {_cleanUp} from '../../../components/nfc';
import {Modal_PopUp} from '../../../components/popup';
import {getStats} from '../../../services/getStats';
import {actionStats, totalActionCount} from '../../../redux/action/stats';
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

  const actionStatsCount = useSelector((state) => state.actionStats.totalCnt);

  const [dbActionData, setDbActionData] = React.useState(offlineActionList);
  const [isLoading, setIsLoading] = React.useState(false);
  const [count, setCount] = React.useState(actionStatsCount || 0);
  const [refreshing, setRefreshing] = React.useState(false);
  const [modalVisibility, setModalVisibility] = React.useState(false);
  const [headerTitleState, setHeaderTitleState] = React.useState('');
  const [showPopup, setShowPopup] = React.useState(false);
  const [refreshingFullWindow, setRefreshingFullWindow] = React.useState(false);
  const [abortConnection, setAbortConnection] = React.useState(false);

  const getActionsParams = {
    index: 0,
    // count: count,
    sort: 'recently_updated_desc',
  };

  const getCurrentStats = () => {
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
      setCount(sum);
      console.log(sum + 'RESULT COUNT');
      dispatch(actionStats(res.data));
      dispatch(totalActionCount(sum));
    });
  };

  React.useEffect(() => {
    if (isConnected && !abortConnection) {
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
      return function cleanup() {
        setAbortConnection(true);
      };
    };
  }, []);

  const showStatus = [
    {label: 'NEW', value: 'NEW'},
    {label: 'CANCELLED', value: 'CANCELLED'},
    {label: 'IN PROGRESS', value: 'INPROGRESS'},
  ];
  const getCurrentActionList = () => {
    getCurrentStats();
    setRefreshing(true);
    getAction(getActionsParams, (response) => {
      console.log(JSON.stringify(response));
      setDbActionData(response.data);
      setRefreshing(false);
    });
  };
  const _onRefresh = () => {
    if (isConnected) {
      getCurrentActionList();
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
    setModalVisibility(true);
    setHeaderTitleState('Log Issue');
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
          <ScrollView
            nestedScrollEnabled={true}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={_onRefresh}></RefreshControl>
            }>
            <FlatList
              data={dbActionData}
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
          </ScrollView>
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

          <ActionModal
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
          />
          {showPopup && (
            <Modal_PopUp
              isVisible={showPopup}
              title="Issue Submitted"
              issueNumber={`Issue #${submitIssueResponse.map(
                (e) => e.issueNumber,
              )}`}
              onPress={() => setShowPopup(false)}></Modal_PopUp>
          )}
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
