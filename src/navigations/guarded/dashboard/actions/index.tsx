import React from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  RefreshControl,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {Divider} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {
  ACTIVE_BLUE,
  COLOR_BORDER,
  MAIN_GRAY,
  MAIN_RED,
  TEST_BORDER,
} from '../../../../config/global-styles';
import DropDown from '../../../../components/dropdown';
import {
  getAction,
  updateAction,
  getDashboardAction,
} from '../../../../services/getAction';
import {getCurrentUser} from '../../../../services/getUser';
import {useNavigation} from '@react-navigation/native';
import {ACTION_INFO} from '../../../../config/navigation-config';
import {useDispatch} from 'react-redux';
import {offline_action_list} from '../../../../redux/action/offline';
import {useSelector} from 'react-redux/lib/hooks/useSelector';
import {selectedAction} from '../../../../redux/action/issue-action';
import * as Animatable from 'react-native-animatable';

function Item(data) {
  const showStatus = [
    {label: 'New', value: 'NEW'},
    {label: 'Cancelled', value: 'CANCELLED'},
    {label: 'In Progress', value: 'INPROGRESS'},
    {label: 'Complete', value: 'COMPLETE'},
  ];
  const changeSubstring = 30;
  const [val, setVal] = React.useState();
  const actionTitle = data.title;
  return (
    <View style={{flex: 1, borderWidth: TEST_BORDER}}>
      <View style={{flexDirection: 'row', height: 60}}>
        {data.hasUnreadEvents ? (
          <View
            style={{height: 50, width: 3, backgroundColor: MAIN_RED}}></View>
        ) : (
          <View
            style={{
              height: 50,
              width: 3,
              backgroundColor: 'transparent',
            }}></View>
        )}

        <View style={{flex: 6, justifyContent: 'center', paddingLeft: 5}}>
          <TouchableOpacity onPress={data.onPressAction}>
            <Text style={{color: ACTIVE_BLUE}}>
              {actionTitle.length > changeSubstring
                ? actionTitle.substring(0, changeSubstring).concat('...')
                : actionTitle}
            </Text>
          </TouchableOpacity>
        </View>

        {/* <TouchableWithoutFeedback onPress={data.onPressDropDown}> */}
        <View style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}>
          <DropDown
            // id={}
            data={showStatus}
            onChange={(val) => {
              setVal(val);
              data.onChangeDropDownValue(val);
            }}
            showStatus={true}
            mode="dialog"
            value={data.status || val}
            containerStyle={{
              borderWidth: 1,
              borderRadius: 5,
              borderColor: ACTIVE_BLUE,
              height: 40,
              width: '80%',
            }}
            style={{borderWidth: 1, borderColor: ACTIVE_BLUE}}
          />
        </View>
        {/* </TouchableWithoutFeedback> */}
      </View>

      <Divider />
    </View>
  );
}

function headerComponent() {
  return (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',

        // alignItems: 'center',
      }}>
      <View
        style={{
          //   flex: 7,
          backgroundColor: COLOR_BORDER,
          paddingLeft: 5,
          width: '66%',
          justifyContent: 'center',
        }}>
        <Text style={{color: MAIN_GRAY}}>Task:</Text>
      </View>
      <View
        style={{
          //   flex: 2,
          width: '33%',
          paddingLeft: 5,
          backgroundColor: COLOR_BORDER,
          justifyContent: 'center',
        }}>
        <Text style={{color: MAIN_GRAY}}>Status:</Text>
      </View>
    </View>
  );
}
const Action = () => {
  const navigation = useNavigation();
  const isConnected = useSelector((state) => state.network.isConnected);
  const offlineActionList = useSelector(
    (state) => state.reportIssue.offlineAllActionList,
  );

  const [dbActionData, setDbActionData] = React.useState(offlineActionList);
  const [dropDownValue, setDropDownValue] = React.useState('');
  const [refreshing, setRefreshing] = React.useState(false);
  const [abortConnection, setAbortConnection] = React.useState(false);
  const getActionsParams = {
    index: 0,
    count: 60,
    sort: 'recently_updated_desc',
  };

  const dispatch = useDispatch();
  React.useEffect(() => {
    if (isConnected && !abortConnection) {
      setRefreshing(true);
      getDashboardAction(getActionsParams, (response) => {
        console.log(JSON.stringify(response));
        dispatch(offline_action_list(response.data));
        setDbActionData(response.data);

        setRefreshing(false);
      });
    } else {
      Alert.alert('Offline Mode', 'You are currently viewing offline.');
    }
    return function cleanup() {
      setAbortConnection(true);
    };
  }, []);

  const _onPressDropdown = (item) => {
    console.log('Here');
  };
  const _onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      getAction(getActionsParams, (response) => {
        console.log(JSON.stringify(response));
        setDbActionData(response.data);
      });
    }, 1000);
  };
  return (
    <Animatable.View animation="fadeInDown">
      <ScrollView nestedScrollEnabled={true} style={{height: 350}}>
        {!refreshing ? (
          <FlatList
            data={dbActionData}
            renderItem={({item}) => (
              <Item
                key={item.id}
                title={item.name}
                status={item.status}
                hasUnreadEvents={item.hasUnreadEvents}
                onPressAction={() => navigation.navigate(ACTION_INFO, {item})}
                // onPressDropDown={() => _onPressDropdown(item)}
                onChangeDropDownValue={(val) => {
                  console.log(val + ' => Changed val');
                  updateAction(item.id, {status: val}, (res) => {
                    getAction(getActionsParams, (response) => {
                      console.log(JSON.stringify(response));

                      dispatch(selectedAction(item));
                      setDbActionData(response.data);
                    });
                  });
                  setDropDownValue(val);
                }}
              />
            )}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={headerComponent}
            ListHeaderComponentStyle={{height: 40}}
            nestedScrollEnabled={true}
            refreshing={true}
          />
        ) : (
          <ActivityIndicator />
        )}
      </ScrollView>
    </Animatable.View>
  );
};
export default Action;
