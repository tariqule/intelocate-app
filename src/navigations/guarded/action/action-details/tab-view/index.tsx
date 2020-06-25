import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from '../../../../../components/tab-bar/index';
import AccordianX from '../../../../../components/accordianX';
import ActionStatus from '../action-status';
import ProjectInfo from '../project-info';
import LocationInfo from '../locationInfo';
import Budget from '../budgets';
import Actual from '../actuals';
import {getSpecificTask} from '../../../../../services/getAction';

export const TabView = (props) => {
  const [specificTask, setSpecificTask] = React.useState(null);

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
    // {title: 'Actuals:', content: <Actual />},
  ];

  return (
    <ScrollableTabView
      initialPage={0}
      locked={false}
      renderTabBar={() => <TabBar />}>
      <ScrollView tabLabel="md-home" style={styles.tabView}>
        <View style={styles.card}>
          <AccordianX data={actionMainData} />
        </View>
      </ScrollView>
      <ScrollView tabLabel="md-checkbox" style={styles.tabView}>
        <View style={styles.card}>
          <Text>Friends</Text>
        </View>
      </ScrollView>
      <ScrollView tabLabel="ios-chatboxes" style={styles.tabView}>
        <View style={styles.card}>
          <Text>Messenger</Text>
        </View>
      </ScrollView>
      <ScrollView tabLabel="ios-attach" style={styles.tabView}>
        <View style={styles.card}>
          <Text>No Files Found.</Text>
        </View>
      </ScrollView>
      <ScrollView
        tabLabel="nfc"
        type={'MaterialCommunityIcons'}
        style={styles.tabView}>
        <View style={styles.card}>
          <Text>NFC feature is not avaiable.</Text>
        </View>
      </ScrollView>
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
});
