import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import ScrollableTabBar from '../../../../../components/tab-bar/index';
import AccordianX from '../../../../../components/accordianX';
import ActionStatus from '../action-status';
import ProjectInfo from '../project-info';
import LocationInfo from '../locationInfo';
import Budget from '../budgets';
import Actual from '../actuals';
import {getSpecificTask} from '../../../../../services/getAction';
import {useSelector} from 'react-redux';
import {ChecklistIcon} from '../../../../../svg-components/checklist-icon';
import {
  MAIN_GRAY,
  COLOR_BORDER,
  MAIN_GREEN,
  MAIN_BLUE,
  font_sm,
  font_xs,
} from '../../../../../config/global-styles';
import {getFormForIssue, getFilesForIssue} from '../../../../../services/issue';
import {CheckedIcon} from '../../../../../svg-components/checked-icon';
import FormX from '../../../issue/forms';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Avatar} from 'react-native-elements';
export const TabView = (props) => {
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
  const actionMainData = [
    {title: 'Status:', content: <ActionStatus />},
    {
      title: 'Project Details:',
      content: (
        <ProjectInfo
        // category={props.category}
        // subCategory={props.subCategory}
        />
      ),
    },
    {
      title: 'Location Details:',
      content: <LocationInfo />,
    },
    {title: 'Budget & Estimates:', content: <Budget />},
    {
      title: 'Actuals:',
      content: (
        <Actual
          vendorData={props.vendorData}
          externalUsers={props.externalUsers}
          organizations={props.organizations}
          creatorName={props.creatorName}
          finPeriod={props.finPeriod}
          actualData={props.actualData}
        />
      ),
    },
  ];
  const _onPressFormCheckList = () => {
    setShowForm(true);
  };

  return (
    <ScrollableTabView
      initialPage={0}
      locked={false}
      renderTabBar={() => <ScrollableTabBar />}>
      <ScrollView tabLabel="md-home" style={styles.tabView}>
        <View style={styles.card}>
          <AccordianX data={actionMainData} />
        </View>
      </ScrollView>
      <ScrollView tabLabel="checklist" style={styles.tabView}>
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
                <Text style={{color: MAIN_GRAY, fontSize: 10}}>
                  (Submitted)
                </Text>
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
      </ScrollView>

      <ScrollView tabLabel="ios-chatboxes" style={styles.tabView}>
        <View style={styles.card}>
          <Text>Messenger</Text>
        </View>
      </ScrollView>
      <ScrollView tabLabel="ios-attach" style={styles.tabView}>
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
      </ScrollView>
      {/* <ScrollView
        tabLabel="nfc"
        type={'MaterialCommunityIcons'}
        style={styles.tabView}>
        <View style={styles.card}>
          <Text>NFC feature is not avaiable.</Text>
        </View>
      </ScrollView> */}
    </ScrollableTabView>
  );
};

const styles = StyleSheet.create({
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
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
