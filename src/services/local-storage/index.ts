import {AsyncStorage} from 'react-native';

const USER_INFO = '@USER_INFO';
const TOKEN = '@TOKEN';

export const storeToken = async (params) => {
  try {
    await AsyncStorage.setItem(TOKEN, params.jwt);
  } catch (error) {
    console.log(error + ' - ERROR FROM STORAGE [TOKEN STORAGE]');
  }
};

export const getToken = async () => {
  try {
    const retrievedItem = await AsyncStorage.getItem(TOKEN);
    return retrievedItem;
  } catch (error) {
    console.log(error.message);
  }
  return;
};

/**
 *
 * @param - Takes an object as a params
 *
 * Stores all the user info in the local storage.
 */
export const storeUserInfo = async (params) => {
  try {
    await AsyncStorage.setItem(USER_INFO, JSON.stringify(params));
  } catch (error) {
    console.log(error + ' - ERROR FROM STORAGE');
  }
};

/**
 *
 * @param getData all the user data stored in a JSON object.
 * @returns a callback function.
 */
export const retrieveUserInfo = async () => {
  try {
    const retrievedItem = await AsyncStorage.getItem(USER_INFO);
    const item = JSON.parse(retrievedItem);
    console.log(
      JSON.stringify(item) +
        ' ==> Retrieving data from  [FROM RETRIEVE STORAGE]',
    );
    return item;
  } catch (error) {
    console.log(error.message);
  }
  return;
};
