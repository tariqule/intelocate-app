import React from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  RefreshControl,
  Alert,
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
import {getAction, updateAction} from '../../../../services/getAction';
import {getCurrentUser} from '../../../../services/getUser';
import {useNavigation} from '@react-navigation/native';
import {ACTION_INFO} from '../../../../config/navigation-config';

function Item(data) {
  const changeSubstring = 30;
  const [val, setVal] = React.useState();
  const actionTitle = data.title;
  return (
    <View style={{flex: 1, borderWidth: TEST_BORDER}}>
      <View style={{flexDirection: 'row', height: 60}}>
        <View style={{height: 50, width: 3, backgroundColor: MAIN_RED}}></View>
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
            onChange={(val) => {
              setVal(val);
              data.onChangeDropDownValue(val);
            }}
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
  const [dbActionData, setDbActionData] = React.useState([]);
  const [dropDownValue, setDropDownValue] = React.useState('');
  const [refreshing, setRefreshing] = React.useState(false);

  const getActionsParams = {
    index: 0,
    count: 100,
    sort: 'recently_updated_desc',
  };

  React.useEffect(() => {
    getAction(getActionsParams, (response) => {
      console.log(JSON.stringify(response));
      setDbActionData(response.data);
    });
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
    <ScrollView nestedScrollEnabled={true} style={{height: 350}}>
      <FlatList
        data={dbActionData}
        renderItem={({item}) => (
          <Item
            key={item.id}
            title={item.name}
            status={item.status}
            onPressAction={() => navigation.navigate(ACTION_INFO, {item})}
            // onPressDropDown={() => _onPressDropdown(item)}
            onChangeDropDownValue={(val) => {
              console.log(val + ' => Changed val');
              updateAction(item.id, {status: val}, (res) => {
                getAction(getActionsParams, (response) => {
                  console.log(JSON.stringify(response));
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
      />
    </ScrollView>
  );
};
export default Action;
