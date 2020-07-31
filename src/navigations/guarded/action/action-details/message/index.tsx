import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Avatar, Divider} from 'react-native-elements';
import {
  font_xs,
  MAIN_GRAY,
  COLOR_BORDER,
} from '../../../../../config/global-styles';
import {useSelector} from 'react-redux/lib/hooks/useSelector';
import {getTaskForUsers} from '../../../../../services/getUser';
import moment from 'moment';
import {GeneralChatIcon} from '../../../../../svg-components/general-chat';
import {getConversationForTask} from '../../../../../services/message';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {CHAT_SCREEN} from '../../../../../config/navigation-config';

/**
 * 9a1506 - task identifier
 * f1741c - msg id
 * dacc8f - msg id 2
 *
 */
const Message = () => {
  const navigation = useNavigation();
  const [generalChatData, setGeneralChatData] = React.useState<
    undefined | null | any
  >();
  const [privateChat, setPrivateChat] = React.useState<
    undefined | null | any
  >();
  const [pChat, setPChat] = React.useState<undefined | null | any>([]);

  const selected = useSelector((state) => state.issueActon.selectedAction);

  React.useEffect(() => {
    getConversationForTask(selected.id, (res) => {
      console.log(JSON.stringify(res) + 'conversation retrieved');
      // setData(res);
      !res[0].privateChats && setGeneralChatData(res);

      if (res[0].privateChats) {
        setPrivateChat([
          {id: res[0].id, name: 'General Chat'},
          ...res[0].privateChats.map((e) => ({
            id: e.id,
            name: e.name || e.taskName,
            senderId: e.creator.id,
            senderName: e.creator.fullname,
          })),
        ]);
        console.log(
          JSON.stringify(
            res[0].privateChats.map((e) => ({
              id: e.id,
              name: e.name || e.taskName,
              senderId: e.creator.id,
              senderName: e.creator.fullname,
            })),
          ) + 'xxx',
        );
      }
    });
  }, []);
  return (
    <View style={{flex: 1}}>
      {generalChatData &&
        generalChatData.length > 0 &&
        generalChatData.map((chat, i) => (
          <TouchableOpacity
            onPress={() => {
              // alert(JSON.stringify(chat));
              navigation.navigate(CHAT_SCREEN, {
                title: chat.name || 'General Chat',
                id: chat.id,
                senderId: chat.senderId,
                senderName: chat.senderName,
              });
            }}>
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
                  {/* <Avatar rounded source={{uri: users.avatarUrl}} /> */}
                  <View
                    style={{
                      height: 50,
                      width: 50,
                      borderRadius: 100,
                      backgroundColor: MAIN_GRAY,
                    }}>
                    <GeneralChatIcon color={COLOR_BORDER} />
                  </View>
                </View>
                <View style={{flex: 4, flexDirection: 'column'}}>
                  <Text style={{fontSize: font_xs}}>
                    {/* {chat.name && !chat.taskName === null
                      ? 'General Chat'
                      : chat.name} */}
                    {chat.taskName && chat.taskName !== selected.name
                      ? chat.taskName
                      : chat.name === null
                      ? 'General Chat'
                      : chat.name}
                  </Text>
                  {/* <Text style={{color: MAIN_GRAY}}>
                  {i === 0 ? "General Chat" : users.organization.name}
                </Text> */}
                </View>
                <View style={{flex: 2, flexDirection: 'column'}}>
                  {/* <Text style={{color: MAIN_GRAY}}>
                  {users.notification && `Notification sent`}
                </Text> */}
                  {/* <Text style={{color: MAIN_GRAY}}>
                  {users.notification &&
                    moment(users.notification.sentAt).format('DD,MM,YYYY')}
                </Text> */}
                </View>
              </View>
              <View
                style={{height: 0.5, backgroundColor: MAIN_GRAY, width: '80%'}}
              />
            </View>
          </TouchableOpacity>
        ))}
      {privateChat &&
        privateChat.length > 0 &&
        privateChat.map((chat, i) => (
          <ScrollView>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(CHAT_SCREEN, {
                  title: chat.name,
                  id: chat.id,
                  senderId: chat.senderId,
                  senderName: chat.senderName,
                })
              }>
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
                    {/* <Avatar rounded source={{uri: users.avatarUrl}} /> */}
                    <View
                      style={{
                        height: 50,
                        width: 50,
                        borderRadius: 100,
                        backgroundColor: MAIN_GRAY,
                      }}>
                      <GeneralChatIcon color={COLOR_BORDER} />
                    </View>
                  </View>
                  <View style={{flex: 4, flexDirection: 'column'}}>
                    <Text style={{fontSize: font_xs}}>{chat.name}</Text>
                    {/* <Text style={{color: MAIN_GRAY}}>
                  {i === 0 ? "General Chat" : users.organization.name}
                </Text> */}
                  </View>
                  <View style={{flex: 2, flexDirection: 'column'}}>
                    {/* <Text style={{color: MAIN_GRAY}}>
                  {users.notification && `Notification sent`}
                </Text> */}
                    {/* <Text style={{color: MAIN_GRAY}}>
                  {users.notification &&
                    moment(users.notification.sentAt).format('DD,MM,YYYY')}
                </Text> */}
                  </View>
                </View>
                <View
                  style={{
                    height: 0.5,
                    backgroundColor: MAIN_GRAY,
                    width: '80%',
                  }}
                />
              </View>
            </TouchableOpacity>
          </ScrollView>
        ))}
      {/* {data && data.users.length === 0 && (
        <View style={styles.card}>
          <Text style={{color: MAIN_GRAY}}>
            No one is assigned to this task
          </Text>
        </View>
      )} */}
    </View>
  );
};

export default Message;

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
