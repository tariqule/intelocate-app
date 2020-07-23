import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import HeaderX from '../../../../components/headerX';
import {useNavigation} from '@react-navigation/native';
import ActionHeader from '../../../../components/action-header';
import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import {Icon} from 'native-base';
import {TabView} from './tab-view';
import {Divider} from 'react-native-elements';
import {getSpecificTask} from '../../../../services/getAction';
import {useDispatch} from 'react-redux/lib/hooks/useDispatch';
import {selectedAction} from '../../../../redux/action/issue-action';
import {deviceheight, deviceWidth} from '../../../../config/global-styles';
import {getExternalUsers} from '../../../../services/getUser';
import {setExternalUsers} from '../../../../redux/action/user';
import {getAcctuals} from '../../../../services/accounting';
import {getInvoices} from './actuals/utils';
import {
  setAcctualData,
  setActualInvoice,
  setOrganization,
} from '../../../../redux/action/task';
import {getAllOrganizations} from '../../../../services/organizations';

const ActionInfo = ({route}) => {
  const {item} = route.params;
  const navigation = useNavigation();
  const [specificTask, setSpecificTask] = React.useState([]);
  const [taskId, setTaskId] = React.useState<undefined | null | ''>();

  const [actual, setActual] = React.useState<undefined | null | any>();
  const [invoiceData, setInvoiceData] = React.useState<
    undefined | null | any
  >();
  const [org, setOrg] = React.useState<undefined | null | any>();
  const [externalUser, setExternalUsers] = React.useState<
    undefined | null | any
  >();
  // const [taskId, setTaskId] = React.useState<undefined | null | any>();

  const creatorName = actual && actual.map((actual) => actual.creatorName)[0];
  const setVendorId = actual && actual.map((actual) => actual.vendorId)[0];
  const finPeriod = actual && actual.map((actual) => actual.finPeriod)[0];

  const dispatch = useDispatch();
  const _onPressBackButton = () => {
    navigation.goBack();
  };
  React.useEffect(() => {
    console.log(`height: ${deviceheight} width: ${deviceWidth} `);
    getSpecificTask(item.id, (res) => {
      console.log(JSON.stringify(res) + 'SBajs');
      dispatch(selectedAction(res.data));

      setSpecificTask(res.data);

      getAcctuals(res.data.id, (res: any) => {
        console.log(
          JSON.stringify(res) + 'Acutual retrived *** [Action Detail-Index]',
        );

        if (res.actuals) {
          setActual(res.actuals);
          setAcctualData(res.actuals);
          setInvoiceData(getInvoices(res.actuals).reverse());
          setActualInvoice(getInvoices(res.actuals).reverse());
        }
      });
    });
    getAllOrganizations((res) => {
      setOrganization(res);
      setOrg(res);
    });
    getExternalUsers((res) => {
      // dispatch(setExternalUsers(res.users));
      setExternalUsers(res.users);
    });
  }, []);
  return (
    <View style={{flex: 1}}>
      <HeaderX title="Action Detail" onPress={_onPressBackButton} />

      <View style={{flex: deviceheight >= 992 ? 1 : 1.6}}>
        <ActionHeader title={item.name} actionNumber={item.issueNumber} />
      </View>
      <Divider />
      <View style={{flex: 6}}>
        <TabView
          id={item.id}
          location={'specificTask.location'}
          category={specificTask.category && 'specificTask.category'}
          subCategory={'specificTask.subCategory && specificTask.subCategory'}
          vendorData={invoiceData}
          externalUsers={externalUser}
          organizations={org}
          creatorName={creatorName}
          finPeriod={finPeriod}
          actualData={actual}
        />
      </View>
    </View>
  );
};

export default ActionInfo;
