import React from 'react';
import {View, Text, TouchableOpacity, Platform} from 'react-native';
import NfcManager, {NfcTech} from 'react-native-nfc-manager';

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
