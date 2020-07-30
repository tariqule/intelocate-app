import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {getFormForIssue, getFilesForIssue} from '../../../../../services/issue';
import {Avatar} from 'react-native-elements';
import {
  MAIN_BLUE,
  MAIN_GRAY,
  font_xs,
} from '../../../../../config/global-styles';

const Files = () => {
  const selected = useSelector((state) => state.issueActon.selectedAction);
  const [loading, setLoading] = React.useState<boolean>(true);

  //files
  const [filesData, setFilesData] = React.useState<any | []>();

  React.useEffect(() => {
    getFilesForIssue(selected.id, (response) => {
      //show single file
      //only first file will show
      console.log(JSON.stringify(response) + 'files found');
      setFilesData(response);
    });
  }, []);
  return (
    <View>
      {filesData &&
        filesData.data[0].files.length > 0 &&
        filesData.data[0].files.map((e, i) => (
          <View
            key={i}
            style={[
              styles.card,
              {
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              },
            ]}>
            <View style={{flex: 1}}>
              <Avatar
                source={{
                  uri: `https://mobile.intelocate.com/api/files/${e.id}/${e.fileName}`,
                }}
                size="medium"
                // title={e.fileName}
                // onPress={() => console.log('Works!')}
                activeOpacity={0.7}
              />
            </View>
            <View style={{flex: 4}}>
              <Text style={{color: MAIN_BLUE, fontSize: font_xs}}>
                {e.fileName}
              </Text>
              <Text style={{color: MAIN_GRAY}}>
                Posted by: {e.sender.fullname}
              </Text>
            </View>
          </View>
        ))}
      {filesData && filesData.data && filesData.data[0].files.length === 0 && (
        <View
          style={[
            styles.card,
            {
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}>
          <Text> No files found.</Text>
        </View>
      )}
    </View>
  );
};

export default Files;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,

    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});
