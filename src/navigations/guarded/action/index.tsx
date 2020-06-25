import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
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
} from '../../../config/global-styles';
import {Card, Divider} from 'react-native-elements';
import {ChecklistIcon} from '../../../svg-components/checklist-icon';
import {NavigationActionsIcon} from '../../../svg-components/navigation-actions';
import {ACTION_INFO} from '../../../config/navigation-config';
import {getAction} from '../../../services/getAction';
import {IconByCode} from '../../../svg-components/categories-icons/index';
const index = () => {
  const navigation = useNavigation();

  const actionData = [
    {
      title: 'Audit Fenwick Brackell',
      name: 'Fenwick Bracknell',
      actionNumber: 'Action #032332',
      created: '2/4/2020',
      status: 'NEW',
    },
    {
      title: 'Leaking Unit Canary Wharf',
      name: 'Fenwick Bracknell',
      actionNumber: 'Action #032332',
      created: '2/2/2020',
      status: 'PENDING APPROVAL',
    },
  ];
  const CardItem = (item) => (
    <TouchableOpacity onPress={item.onPress}>
      <Card style={{flex: 1}}>
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
                borderRadius: 100,
                backgroundColor: COLOR_BORDER,
                justifyContent: 'center',
                alignItems: 'center',
                // padding: 12,
              }}>
              {item.iconCode ? IconByCode(item.iconCode) : <ChecklistIcon />}
            </View>
          </View>
          <View style={{flexDirection: 'column', flex: 3}}>
            <Text
              style={{
                color: ACTIVE_BLUE,
                fontSize: font_sm,
                fontWeight: 'bold',
              }}>
              {item.title}
            </Text>
            <Text style={{color: BLACK, fontSize: font_xs}}>{item.name}</Text>

            <Text style={{color: BLACK, fontSize: font_xs}}>
              {item.actionNumber}
            </Text>
            <Text style={{color: BLACK, fontSize: font_xs}}>
              {item.created}
            </Text>
          </View>
        </View>
        <View style={{padding: 10}}>
          <Divider style={{borderWidth: 1, borderColor: COLOR_BORDER}} />
        </View>
        <View>
          <TouchableOpacity style={{width: '100%'}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  color: MAIN_GRAY,
                  fontWeight: 'bold',
                }}>
                STATUS: {item.status}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Card>
    </TouchableOpacity>
  );

  const [dbActionData, setDbActionData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [count, setCount] = React.useState(2609);
  const getActionsParams = {
    index: 0,
    count: count,
    sort: 'recently_updated_desc',
  };

  React.useEffect(() => {
    setIsLoading(true);
    getAction(getActionsParams, (response) => {
      console.log(JSON.stringify(response));
      setDbActionData(response.data);
      setIsLoading(false);
    });
  }, []);

  const showStatus = [
    {label: 'NEW', value: 'NEW'},
    {label: 'CANCELLED', value: 'CANCELLED'},
    {label: 'IN PROGRESS', value: 'INPROGRESS'},
  ];

  function getStatus(input) {
    if (showStatus.length) {
      var v = showStatus.filter(function (element) {
        return element.value === input;
      });
      if (v.length) return v[0].label;
      else return null;
    } else return null;
  }
  return (
    <View style={{backgroundColor: COLOR_BORDER, flex: 1}}>
      <HeaderComponent
        title={`Actions (${count})`}
        icon={<NavigationActionsIcon />}
        onLogoPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      {isLoading === false ? (
        <FlatList
          data={dbActionData}
          renderItem={({item}) => (
            <CardItem
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
              onPress={() => navigation.navigate(ACTION_INFO, {item})}
            />
          )}
          keyExtractor={(item) => item.id}></FlatList>
      ) : (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <ActivityIndicator size={'large'} />
        </View>
      )}
    </View>
  );
};

export default index;
