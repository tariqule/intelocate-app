import {Platform} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import ImagePicker from 'react-native-image-picker';

export const IsAndroid = Platform.OS === 'android';

export const openImagePicker = (
  getImageUri: Function,
  title?: string,
  customButtons?: Array<object>,
  onPressCustomButton?: Function,
) => {
  let options = {
    title: title || 'Select Image',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  return ImagePicker.showImagePicker(options, (response) => {
    if (response.didCancel) {
    } else if (response.error) {
      alert(`Error:  ${response.error}`);
    } else if (response.customButton) {
      // console.log("User tapped custom button: ", response.customButton);
      {
        onPressCustomButton;
      }
    } else {
      const source = {uri: response.uri};
      console.log('FROM IMAGE SOURCE\n\n' + JSON.stringify(response));
      console.log(`Image Picked -----> ${source.uri}`);
      getImageUri(source.uri, response.type, response.fileName, response.data);
    }
  });
};
