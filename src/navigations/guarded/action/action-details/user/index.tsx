import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar, Divider} from 'react-native-elements';
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
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              key={i}
              style={{
                alignItems: 'center',
                //   justifyContent: 'center',
                flexDirection: 'row',
                height: 80,
              }}>
              <View style={{flex: 1}}>
                <Avatar rounded source={{uri: users.avatarUrl}} />
              </View>
              <View style={{flex: 4, flexDirection: 'column'}}>
                <Text style={{fontSize: font_xs}}>{users.fullname}</Text>
                <Text style={{color: MAIN_GRAY}}>
                  {users.organization.name}
                </Text>
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
            <View
              style={{height: 0.5, backgroundColor: MAIN_GRAY, width: '80%'}}
            />
          </View>
        ))}
      {data && data.users.length === 0 && (
        <View style={styles.card}>
          <Text style={{color: MAIN_GRAY}}>
            No one is assigned to this task
          </Text>
        </View>
      )}
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    alignItems: 'center',
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});
