import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar} from 'react-native-elements';
import {font_xs, MAIN_GRAY} from '../../../../../config/global-styles';
import {useSelector} from 'react-redux/lib/hooks/useSelector';
import {getTaskForUsers} from '../../../../../services/getUser';
import moment from 'moment';
const User = () => {
  const [data, setData] = React.useState<undefined | null | any>();
  const selected = useSelector((state) => state.issueActon.selectedAction);

  React.useEffect(() => {
    getTaskForUsers(selected.id, (res) => {
      console.log(JSON.stringify(res) + 'users retrieved');
      setData(res[0]);
    });
  }, []);
  return (
    <View style={{flex: 1}}>
      {data &&
        data.users.length > 0 &&
        data.users.map((users, i) => (
          <View
            key={i}
            style={{
              alignItems: 'center',
              //   justifyContent: 'center',
              flexDirection: 'row',
              height: 100,
            }}>
            <View style={{flex: 1}}>
              <Avatar rounded source={{uri: users.avatarUrl}} />
            </View>
            <View style={{flex: 4, flexDirection: 'column'}}>
              <Text style={{fontSize: font_xs}}>{users.fullname}</Text>
              <Text style={{color: MAIN_GRAY}}>{users.organization.name}</Text>
            </View>
            <View style={{flex: 2, flexDirection: 'column'}}>
              <Text style={{color: MAIN_GRAY}}>
                {users.notification && `Notification sent`}
              </Text>
              <Text style={{color: MAIN_GRAY}}>
                {users.notification &&
                  moment(users.notification.sentAt).format('DD,MM,YYYY')}
              </Text>
            </View>
          </View>
        ))}
    </View>
  );
};

export default User;

const styles = StyleSheet.create({});
