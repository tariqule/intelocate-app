import {DrawerActions, useNavigation} from '@react-navigation/native';
import {
  Accordion,
  Button,
  Col,
  Container,
  Content,
  Footer,
  Grid,
  Icon,
  Row,
} from 'native-base';
import React from 'react';
import {
  Modal,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import DropDownPicker from 'react-native-dropdown-picker';
import {Card, Divider, Header, Input} from 'react-native-elements';
import HeaderComponent from '../../../components/header';
import {
  ACTIVE_BLUE,
  COLOR_BORDER,
  MAIN_BLUE,
  MAIN_GRAY,
  MAIN_RED,
  TEST_BORDER,
} from '../../../config/global-styles';
import {NavigationDashboardIcon} from '../../../svg-components/navigation-dashboard';
import Action from './actions';
import Announcement from './announcement';
import Calender from './calendar';
import Location from './location';
import Status from './status';
const dataArray = [
  {
    title: 'Announcements:',
    content: <Announcement />,
  },
  {title: 'Actions:', content: <Action />},
  {title: 'Calendar:', content: <Calender />},
  {title: 'Statuses:', content: <Status />},
  {title: 'Locations:', content: <Location />},
];

const _renderHeader = (item, expanded) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          height: 70,
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#ffff',
        }}>
        <Text style={{fontWeight: '400', fontSize: 20, color: MAIN_GRAY}}>
          {item.title}
        </Text>

        {expanded ? (
          <Icon style={{fontSize: 18}} name="ios-arrow-up" type="Ionicons" />
        ) : (
          <Icon style={{fontSize: 18}} name="ios-arrow-down" type="Ionicons" />
        )}
      </View>
      <Divider />
    </View>
  );
};
const _renderContent = (item) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        padding: 10,
      }}>
      {item.content}
    </View>
  );
};

/**
 * @DASHBOARD_MAIN
 */
const dashboard = () => {
  const navigation = useNavigation();

  const [modalVisibility, setModalVisibility] = React.useState(false);
  const [headerTitleState, setHeaderTitleState] = React.useState('');

  const _handleBack = () => {
    setModalVisibility(false);
  };

  const _handleReportIssueButton = () => {
    setModalVisibility(true);
    setHeaderTitleState('Log Issue');
  };
  return (
    <Container
      style={{
        top: Platform.select({android: '0%', ios: '4.2%'}),
      }}>
      <HeaderComponent
        title="Dashboard"
        icon={<NavigationDashboardIcon />}
        onLogoPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      <Content padder style={{backgroundColor: COLOR_BORDER}}>
        <Accordion
          dataArray={dataArray}
          animation={true}
          expanded={true}
          renderHeader={_renderHeader}
          renderContent={_renderContent}
        />
      </Content>
      <ActionButton
        buttonColor={ACTIVE_BLUE}
        style={{bottom: Platform.OS === 'android' ? 20 : 100}}>
        <ActionButton.Item
          buttonColor={MAIN_RED}
          title="Report Issue"
          onPress={_handleReportIssueButton}>
          <Icon name="md-create" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
      {/* <FloatingActionButton onPress={_handleFloatingActionPress} /> */}
      <ActionModal
        modalVisible={modalVisibility}
        onPressBackButton={_handleBack}
        headerTitle={headerTitleState}
      />
      {/* <Navigation opened={true} hide={() => {}} /> */}
    </Container>
  );
};
export default dashboard;

/**
 * @FLOATING_ACTION_MODAL
 */
interface actionModalProps {
  modalVisible: boolean;
  onPressBackButton: () => void;
  headerTitle: string;
}
const ActionModal = (props: actionModalProps) => {
  const [organization, setOrganization] = React.useState('L.K. Bennett');
  const [Location, setLocation] = React.useState('Brook Street');

  const Back = (props) => (
    <TouchableOpacity onPress={props.onPressBack}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '80%',
        }}>
        <Icon name="ios-arrow-back" type="Ionicons" style={{color: '#FFF'}} />
        <Text style={{color: '#FFF'}}>Back</Text>
      </View>
    </TouchableOpacity>
  );
  const organizationData = [
    {label: 'L.K. Bennett', value: 'L.K. Bennett'},
    {label: 'France', value: 'france'},
  ];
  const locationData = [
    {label: 'Brook Street', value: 'Brook Street'},
    {label: 'France', value: 'france'},
  ];
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={props.modalVisible}
      onRequestClose={props.onPressBackButton}>
      <Container style={{flex: 1}}>
        <Header
          containerStyle={[
            {
              backgroundColor: MAIN_BLUE,
              paddingTop: Platform.OS === 'android' ? 0 : 40,
            },
          ]}>
          <Back onPressBack={props.onPressBackButton} />
          <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold'}}>
            {props.headerTitle}
          </Text>
        </Header>
        <Content>
          <View
            style={{
              flexDirection: 'column',

              justifyContent: 'center',
            }}>
            <View>
              <Text style={styles.issueTitle}>Organization:</Text>
              <DropDown
                data={organizationData}
                defaultValue={organization}
                onChangeItem={(item) => setOrganization(item.value)}
                style={{width: '95%', alignSelf: 'center'}}
              />
            </View>
            <View style={{}}>
              <Text style={styles.issueTitle}>Location:</Text>
              <DropDown
                data={locationData}
                defaultValue={Location}
                onChangeItem={(item) => setOrganization(item.value)}
                style={{width: '95%', alignSelf: 'center'}}
              />
              <DropDown
                data={locationData}
                // defaultValue={Location}
                disabled={true}
                onChangeItem={(item) => setOrganization(item.value)}
                style={{width: '95%', alignSelf: 'center'}}
              />
            </View>

            <Text style={styles.issueTitle}>Issue:</Text>
            <Card>
              <Grid style={{borderWidth: TEST_BORDER}}>
                <Row style={{}}>
                  <Col style={styles.col}>
                    <CustomIcon name="clipboard-check" type="FontAwesome5" />
                    <Text style={styles.colText}>Audit</Text>
                  </Col>
                  <Col style={styles.col}>
                    <CustomIcon name="broom" type="FontAwesome5" />
                    <Text style={styles.colText}>Cleaning</Text>
                  </Col>
                  <Col style={styles.col}>
                    <CustomIcon
                      name="truck-delivery"
                      type="MaterialCommunityIcons"
                    />
                    <Text style={styles.colText}>Deliveries and Return</Text>
                  </Col>
                  <Col style={styles.col}>
                    <CustomIcon name="snowflake" type="FontAwesome5" />
                    <Text style={styles.colText}>Disinfection</Text>
                  </Col>
                  <Col style={styles.col}>
                    <CustomIcon name="tools" type="Octicons" />
                    <Text style={styles.colText}>General Maintenance</Text>
                  </Col>
                </Row>

                <Row style={{}}>
                  <Col style={styles.col}>
                    <CustomIcon name="people" type="MaterialIcons" />
                    <Text style={styles.colText}>HR</Text>
                  </Col>
                  <Col style={styles.col}>
                    <CustomIcon name="heart" type="AntDesign" />
                    <Text style={styles.colText}>Health and Safety</Text>
                  </Col>
                  <Col style={styles.col}>
                    <CustomIcon
                      name="store-mall-directory"
                      type="MaterialIcons"
                    />
                    <Text style={styles.colText}>In Store Events</Text>
                  </Col>
                  <Col style={styles.col}>
                    <CustomIcon name="voice" type="MaterialCommunityIcons" />
                    <Text style={styles.colText}>Marketing</Text>
                  </Col>
                  <Col style={styles.col}>
                    <CustomIcon name="md-pricetag" type="Ionicons" />
                    <Text style={styles.colText}>Merchandising</Text>
                  </Col>
                </Row>

                <Row style={{}}>
                  <Col style={styles.col}>
                    <CustomIcon name="calculator" type="Entypo" />
                    <Text style={styles.colText}>OPS</Text>
                  </Col>
                  <Col style={styles.col}>
                    <CustomIcon name="attach-money" type="MaterialIcons" />
                    <Text style={styles.colText}>POS</Text>
                  </Col>
                  <Col style={styles.col}>
                    <CustomIcon name="tool" type="AntDesign" />
                    <Text style={styles.colText}>Planned Maintenance</Text>
                  </Col>
                  <Col style={styles.col}>
                    <CustomIcon name="snowflake" type="FontAwesome5" />
                    <Text style={styles.colText}>Scheduling</Text>
                  </Col>
                  <Col style={styles.col}>
                    <CustomIcon name="people" type="MaterialIcons" />
                    <Text style={styles.colText}>Social Distancing</Text>
                  </Col>
                </Row>

                <Row style={{}}>
                  <Col style={styles.col}>
                    <CustomIcon name="ios-people" type="Ionicons" />
                    <Text style={styles.colText}>Staffing</Text>
                  </Col>
                  <Col style={styles.col}></Col>
                  <Col style={styles.col}></Col>
                  <Col style={styles.col}></Col>
                  <Col style={styles.col}></Col>
                </Row>
              </Grid>
            </Card>
            <View style={{}}>
              <Text style={styles.issueTitle}>Details:</Text>
              <Text style={styles.issueCategorizeTitle}>
                Categorize the issue:
              </Text>

              <DropDown
                data={locationData}
                defaultValue={Location}
                onChangeItem={(item) => setOrganization(item.value)}
                style={{width: '95%', alignSelf: 'center'}}
              />
              <Text style={styles.issueCategorizeTitle}>Submitted By:</Text>
              <DropDown
                data={locationData}
                defaultValue={Location}
                onChangeItem={(item) => setOrganization(item.value)}
                style={{width: '95%', alignSelf: 'center'}}
              />
              <Text style={styles.issueCategorizeTitle}>Notes:</Text>
              <Input />
            </View>
          </View>
        </Content>
        <Footer style={{backgroundColor: 'transparent'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              width: '100%',
              paddingRight: 30,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'transparent',

                width: 80,
                justifyContent: 'center',
              }}
              onPress={props.onPressBackButton}>
              <Text>Cancel</Text>
            </TouchableOpacity>
            <Button
              disabled
              style={{
                backgroundColor: COLOR_BORDER,
                width: 80,
                justifyContent: 'center',
              }}>
              <Text style={{color: '#FFF'}}>Submit</Text>
            </Button>
          </View>
        </Footer>
      </Container>
    </Modal>
  );
};

interface dropdownprops {
  data: any;
  defaultValue: any;
  onChangeItem: (item) => void;
  style?: any;
  disabled?: boolean;
}
const DropDown = (props: dropdownprops) => (
  <DropDownPicker
    items={props.data}
    disabled={props.disabled}
    defaultValue={props.defaultValue}
    containerStyle={[
      {height: 60, borderColor: ACTIVE_BLUE, borderWidth: 0.5},
      props.style,
    ]}
    style={{backgroundColor: '#fafafa'}}
    dropDownStyle={{backgroundColor: '#fafafa'}}
    onChangeItem={(item) => props.onChangeItem(item)}
  />
);

interface iconBackgroundProps {
  name: string;
  type: string;
}
const CustomIcon = (props: iconBackgroundProps) => (
  <View
    style={{
      height: 50,
      width: 50,
      borderRadius: 100,
      backgroundColor: COLOR_BORDER,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <Icon
      name={props.name}
      type={props.type}
      style={styles.iconCategory}></Icon>
  </View>
);
const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  issueTitle: {
    fontSize: 20,
    left: 2,
    padding: 10,
  },
  issueCategorizeTitle: {
    fontSize: 15,
    // left: 10,
    padding: 10,
    color: MAIN_GRAY,
  },
  col: {
    // justifyContent: 'center',
    alignContent: 'center',
    borderWidth: TEST_BORDER,
    alignItems: 'center',
    height: 80,
  },
  iconCategory: {
    color: MAIN_GRAY,
    fontSize: 20,
  },
  colText: {
    color: MAIN_GRAY,
    // padding: ,
    fontSize: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
