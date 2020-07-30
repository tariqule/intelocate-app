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

const Chat = ({route}, props) => {
  const {title} = route.params;
  const [messages, setMessages] = React.useState<undefined | null | any>([]);

  const navigation = useNavigation();

  const storeMessage = useCallback((newMessages) => {
    setMessages((prevMessages) => [...newMessages, ...prevMessages]);
  }, []);

  React.useEffect(() => {
    setMessages([
      {
        _id: 2,
        text: 'This is a quick reply. Do you love Gifted Chat? (checkbox)',
        createdAt: new Date(),
        quickReplies: {
          type: 'checkbox', // or 'radio',
          values: [
            {
              title: 'Yes',
              value: 'yes',
            },
            {
              title: 'Yes, let me show you with a picture!',
              value: 'yes_picture',
            },
            {
              title: 'Nope. What?',
              value: 'no',
            },
          ],
        },
        user: {
          _id: 2,
          name: 'React Native',
        },
      },
    ]);
  }, []);
  const onSend = (messages = []) => {
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
            _id: 1,
            avatar:
              'https://www.detectiveconanworld.com/wiki/images/4/46/The_Criminal_Profile.jpg',
            name: 'React Native',
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
