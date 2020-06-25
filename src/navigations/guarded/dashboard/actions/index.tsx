import React from 'react';
import {FlatList, Text, View} from 'react-native';
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
import {getAction} from '../../../../services/getAction';
import {getCurrentUser} from '../../../../services/getUser';

function Item(data) {
  const changeSubstring = 30;

  const actionTitle = data.title;
  return (
    <View style={{flex: 1, borderWidth: TEST_BORDER}}>
      <View style={{flexDirection: 'row', height: 60}}>
        <View style={{height: 50, width: 3, backgroundColor: MAIN_RED}}></View>
        <View style={{flex: 6, justifyContent: 'center', paddingLeft: 5}}>
          <Text style={{color: ACTIVE_BLUE}}>
            {actionTitle.length > changeSubstring
              ? actionTitle.substring(0, changeSubstring).concat('...')
              : actionTitle}
          </Text>
        </View>
        <View style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}>
          <DropDown
            mode="dialog"
            value={data.status}
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
  const [dbActionData, setDbActionData] = React.useState([]);

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

  return (
    <ScrollView nestedScrollEnabled={true} style={{height: 350}}>
      <FlatList
        data={dbActionData}
        renderItem={({item}) => <Item title={item.name} status={item.status} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={headerComponent}
        ListHeaderComponentStyle={{height: 40}}
        nestedScrollEnabled={true}
      />
    </ScrollView>
  );
};
export default Action;
