import React, {Component} from 'react';
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
// import Constants from 'expo-constants';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import {Icon} from 'native-base';
import {MAIN_GRAY, font_md, font_sm_md} from '../../config/global-styles';

export default class AccordionX extends Component {
  state = {
    activeSections: [],
    collapsed: true,
    multipleSelect: false,
  };

  toggleExpanded = () => {
    this.setState({collapsed: !this.state.collapsed});
  };

  setSections = (sections) => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Text style={styles.headerText}>{section.title}</Text>
        {isActive ? (
          <Icon style={{fontSize: 18}} name="ios-arrow-up" type="Ionicons" />
        ) : (
          <Icon style={{fontSize: 18}} name="ios-arrow-down" type="Ionicons" />
        )}
      </Animatable.View>
    );
  };

  renderContent(section, _, isActive) {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        {section.content}
      </Animatable.View>
    );
  }

  render() {
    const {multipleSelect, activeSections} = this.state;

    return (
      <View style={styles.container}>
        <ScrollView>
          <Accordion
            activeSections={
              activeSections.length > 0 ? activeSections : [0, 1, 2, 3, 4]
            }
            sections={this.props.data}
            touchableComponent={TouchableOpacity}
            expandMultiple={true}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={400}
            onChange={this.setSections}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    padding: 10,
  },
  headerText: {
    textAlign: 'left',
    fontSize: font_sm_md,
    fontWeight: '200',
  },
  content: {
    // padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    // padding: 10,
    backgroundColor: 'rgba(255,255,255,255)',
  },
  inactive: {
    paddingTop: 10,
    backgroundColor: '#fff',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: MAIN_GRAY,
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});
