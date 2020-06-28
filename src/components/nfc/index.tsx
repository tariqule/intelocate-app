import React from 'react';
import {View, Text, TouchableOpacity, Platform} from 'react-native';
import NfcManager, {NfcTech} from 'react-native-nfc-manager';

// class Nfc extends React.Component {
//   componentDidMount() {
//     NfcManager.start();
//   }

//   componentWillUnmount() {
//     this._cleanUp();
//   }

//   render() {
//     return (
//       <View style={{padding: 20}}>
//         <Text>NFC </Text>
//         <TouchableOpacity
//           style={{
//             padding: 10,
//             width: 200,
//             margin: 20,
//             borderWidth: 1,
//             borderColor: 'black',
//           }}
//           onPress={this._test}>
//           <Text>Test</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={{
//             padding: 10,
//             width: 200,
//             margin: 20,
//             borderWidth: 1,
//             borderColor: 'black',
//           }}
//           onPress={this._cleanUp}>
//           <Text>Cancel Test</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }

export const _cleanUp = () => {
  NfcManager.cancelTechnologyRequest().catch(() => 0);
};

export const _NfcOn = async (responseTag) => {
  try {
    let tech = Platform.OS === 'ios' ? NfcTech.MifareIOS : NfcTech.NfcA;
    let resp = await NfcManager.requestTechnology(tech, {
      alertMessage: 'NFC is ready!',
    });
    console.warn(resp);

    // the NFC uid can be found in tag.id
    let tag = await NfcManager.getTag();
    responseTag(tag.id);
    console.warn(tag);

    if (Platform.OS === 'ios') {
      resp = await NfcManager.sendMifareCommandIOS([0x30, 0x00]);
    } else {
      resp = await NfcManager.transceive([0x30, 0x00]);
    }
    console.warn(resp);

    _cleanUp();
  } catch (ex) {
    console.warn('NFC', ex);
    _cleanUp();
  }
};

// export default Nfc;
