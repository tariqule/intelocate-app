import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CheckedIcon} from '../../../../../svg-components/checked-icon';
import {getFormForIssue, getFilesForIssue} from '../../../../../services/issue';
import {useSelector} from 'react-redux/lib/hooks/useSelector';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {MAIN_GRAY, MAIN_GREEN} from '../../../../../config/global-styles';
import FormX from '../../../issue/forms';

export default function CheckList() {
  const selected = useSelector((state) => state.issueActon.selectedAction);

  //forms
  const [specificTaskForm, setSpecificTaskForm] = React.useState<any>({});
  const [formData, setFormData] = React.useState<any>();
  const [isFormDone, setIsFormDone] = React.useState<boolean>();
  const [showForm, setShowForm] = React.useState<boolean>();
  const [loading, setLoading] = React.useState<boolean>(true);

  //files
  const [filesData, setFilesData] = React.useState<any | []>();

  React.useEffect(() => {
    setLoading(true);
    getFormForIssue(
      selected.id,
      (response) => {
        console.log(JSON.stringify(response) + 'forms retrieved');
        response && setSpecificTaskForm(response.data[0]);
        setLoading(false);
      },
      // setSpecificTaskForm(response)
    );
    getFilesForIssue(selected.id, (response) => {
      //show single file
      //only first file will show
      console.log(JSON.stringify(response) + 'files found');
      setFilesData(response);
    });
  }, []);
  const _onPressFormCheckList = () => {
    setShowForm(true);
  };

  return (
    <View>
      <View style={styles.checkListCard}>
        {specificTaskForm !== undefined &&
        specificTaskForm &&
        specificTaskForm.forms &&
        specificTaskForm.forms.length !== 0 ? (
          <TouchableOpacity onPress={_onPressFormCheckList}>
            <View style={{alignItems: 'center'}}>
              <View
                style={{
                  height: 40,
                  width: 40,
                  padding: 4,
                  borderRadius: 100,
                  backgroundColor: MAIN_GREEN,
                  justifyContent: 'center',
                  alignItems: 'center',
                  // padding: 12,
                }}>
                <View style={{height: 20, width: 20}}>
                  <CheckedIcon color={'white'} />
                </View>
              </View>
              <Text style={{color: MAIN_GRAY}}>
                {specificTaskForm === undefined
                  ? ''
                  : specificTaskForm.forms[0].title}
              </Text>
              <Text style={{color: MAIN_GRAY, fontSize: 10}}>(Submitted)</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <Text style={{color: MAIN_GRAY, fontSize: 10}}>
            There are no checklists
          </Text>
        )}
      </View>
      <FormX
        auditForm={(formData) => setFormData(formData)}
        merchandisingForm={(formData) => setFormData(formData)}
        isFormFilled={(boolean) => setIsFormDone(boolean)}
        isFormComplete={(boolean) => setIsFormDone(boolean)}
        isModalVisible={showForm}
        title={
          loading === false
            ? specificTaskForm.forms.length > 0
              ? specificTaskForm.forms[0].title
              : ''
            : ''
        }
        onBackButtonPress={() => setShowForm(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  checkListCard: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    width: '50%',
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});
