import React, {useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import HeaderX from '../../../components/headerX';
import {useNavigation} from '@react-navigation/native';
import {GiftedChat} from 'react-native-gifted-chat';
import emojiUtils from 'emoji-utils';
import SlackMessage from './SlackMessage';
import {getMessageForTask, sendMessageForTask} from '../../../services/message';

const Chat = ({route}, props) => {
  const {title, id, senderId, senderName} = route.params;
  const [messages, setMessages] = React.useState<undefined | null | any>([]);

  const navigation = useNavigation();

  const storeMessage = useCallback((newMessages) => {
    setMessages((prevMessages) => [...newMessages, ...prevMessages]);
    // messages.length == 0 && setMessages(newMessages);
  }, []);

  React.useEffect(() => {
    getMessageForTask(id, (res) => {
      let receivedMessage = res.map((chatRoom) => {
        // setFlowerName(chatRoom.flower.firstName);
        // return chatRoom.messages.map(message => {
        return Object.assign(
          {},
          {
            _id: chatRoom.id,
            text: chatRoom.msgText,
            createdAt: chatRoom.createdAt,
            user: {
              _id: chatRoom.sender.id,
              name: chatRoom.sender.fullname,
              // chatRoom.sender.id === senderId
              //     ? userName
              //     : chatRoom.flower.firstName,
              // avatar: chatRoom.sender.avatar
              //   ? chatRoom.sender.avatarUrl
              //   : 'https://cha-shc.ca/_images/_hi5/forum-user.jpg',
              avatar: 'https://cha-shc.ca/_images/_hi5/forum-user.jpg',
            },
            image:
              chatRoom.fileName !== null
                ? `https://mobile.intelocate.com/api/files/${chatRoom.id}/${chatRoom.fileName}`
                : null,
          },
        );
        // });
      });
      console.log(JSON.stringify(receivedMessage) + 'MESSAGE RECEIVED X');
      storeMessage(receivedMessage);
      // res.map((message) => {
      //   let msg = {
      //     _id: message.id,
      //     text: message.mesText,
      //     createdAt: new Date(),

      //     user: {
      //       _id: message.sender.id,
      //       name: message.sender.fullname,
      //     },
      //   };
      //   storeMessage(msg);
      // });

      console.log(JSON.stringify(res) + 'messages');
    });

    // setMessages([
    //   {
    //     _id: 2,
    //     text: 'This is a quick reply. Do you love Gifted Chat? (checkbox)',
    //     createdAt: new Date(),
    //     quickReplies: {
    //       type: 'checkbox', // or 'radio',
    //       values: [
    //         {
    //           title: 'Yes',
    //           value: 'yes',
    //         },
    //         {
    //           title: 'Yes, let me show you with a picture!',
    //           value: 'yes_picture',
    //         },
    //         {
    //           title: 'Nope. What?',
    //           value: 'no',
    //         },
    //       ],
    //     },
    //     user: {
    //       _id: 2,
    //       name: 'React Native',
    //     },
    //   },
    // ]);
  }, []);
  const onSend = (messages = []) => {
    console.log(JSON.stringify(messages));
    sendMessageForTask(id, {text: messages[0].text}, (res) => {
      console.log(JSON.stringify(res) + 'Message sent..');
    });
    storeMessage(messages);
  };

  const renderMessage = (props) => {
    const {
      currentMessage: {text: currText},
    } = props;

    let messageTextStyle;

    // Make "pure emoji" messages much bigger than plain text.
    if (currText && emojiUtils.isPureEmojiString(currText)) {
      messageTextStyle = {
        fontSize: 28,
        // Emoji get clipped if lineHeight isn't increased; make it consistent across platforms.
        lineHeight: Platform.OS === 'android' ? 34 : 30,
      };
    }

    return <SlackMessage {...props} messageTextStyle={messageTextStyle} />;
  };

  return (
    <View style={{flex: 1}}>
      <HeaderX
        title={title || 'Loading..'}
        onPress={() => navigation.goBack()}
      />

      <View style={{flex: 1}}>
        <GiftedChat
          showUserAvatar={true}
          showAvatarForEveryMessage={true}
          messages={messages}
          alwaysShowSend
          onSend={(messages) => onSend(messages)}
          user={{
            _id: senderId,
            avatar: 'https://cha-shc.ca/_images/_hi5/forum-user.jpg',
            name: senderName,
          }}
          messagesContainerStyle={{
            paddingTop: props.paddingTop,
            // paddingBottom: 60,
          }}
          renderMessage={renderMessage}
        />
        {/* {Platform.OS === 'android' && (
          <KeyboardAvoidingView behavior="padding" />
        )} */}
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});
