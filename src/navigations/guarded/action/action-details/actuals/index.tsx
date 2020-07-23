import * as _ from 'lodash';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import DatePicker from '../../../../../components/date-picker';
import DropDown from '../../../../../components/dropdown';
import TextField from '../../../../../components/text-field';
import {getAcctuals} from '../../../../../services/accounting';
import {getExternalUsers} from '../../../../../services/getUser';
import {getAllOrganizations} from '../../../../../services/organizations';
import {InvoiceGrid} from './invoice-grid';
import {ActualItem, VendorBlock} from './types';
import {getGroupKey, isNewInvoice} from './utils';
import {toUTCString} from '../../../../../utils/datetime';
import moment from 'moment';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  ACTIVE_BLUE,
  font_sm,
  MAIN_GRAY,
} from '../../../../../config/global-styles';
const Actual = (props) => {
  const EmptyVendor = {
    invoices: [
      {
        creatorName: '',
        description: '',
        minutes: 0,
        actualCost: 0,
        invoiceNumber: '',
        invoiceDate: '',
        vendorId: '',
        vendorName: '',
        externalCreatorId: null,
        externalCreatorName: null,
        finPeriod: '2',
        hours: 0,
      },
    ],
    vendorId: '',
    name: '',
    invoiceDate: '',
  };
  const [financialPeriod, setFinancialPeriod] = React.useState('');
  const [newVendorData, setnewVendorData] = React.useState([]);

  React.useEffect(() => {
    console.log(JSON.stringify(props.vendorData) + 'Vendors');
    console.log(JSON.stringify(props.actualData) + 'actualData');
    console.log(JSON.stringify(props.finPeriod) + 'finPeriod');
    console.log(JSON.stringify(props.organizations) + 'organizations');
  }, []);
  const textFieldData = [
    {
      title: 'Financial Period ',
      onChange: (val) => setFinancialPeriod(val),
      value:
        financialPeriod !== ''
          ? financialPeriod
          : props.finPeriod !== undefined
          ? props.finPeriod
          : '',
    },
  ];
  // const nameData = [{value: 'Alio Company', label: 'Alio Company'}];
  return (
    <View>
      <View style={{paddingTop: 10}}>
        <TextField data={textFieldData} />
      </View>
      <View style={{}}>
        <Text style={styles.text}>Name:</Text>
        <DropDown
          data={props.externalUsers}
          value={props.creatorName}
          style={{width: '100%'}}></DropDown>
      </View>
      {props.vendorData &&
        props.vendorData.map((data: any, i) => (
          <View style={{backgroundColor: '#F9F9F9', padding: 15}} key={i}>
            <View style={{}}>
              <Text style={styles.text}>Vendor*:</Text>
              <DropDown
                value={data.name && data.name}
                data={props.organizations}
                style={{width: '100%'}}></DropDown>
            </View>
            <View style={{paddingTop: 10}}>
              <Text style={styles.text}>Date*:</Text>
              <DatePicker
                onChange={(date) => console.log(date)}
                placeHolderText={
                  !data.invoiceDate
                    ? 'Select Date'
                    : moment(data.invoiceDate).format('MM/DD/YYYY') &&
                      moment(data.invoiceDate).format('MM/DD/YYYY')
                }
              />
            </View>
            <InvoiceGrid
              invoicedata={data.invoices && data.invoices.reverse()}
            />
          </View>
        ))}
      {newVendorData.map((data: any, i) => (
        <View style={{backgroundColor: '#F9F9F9', padding: 15}} key={i}>
          <View style={{}}>
            <Text style={styles.text}>Vendor*:</Text>
            <DropDown
              value={data.name && data.name}
              data={props.organizations}
              style={{width: '100%'}}></DropDown>
          </View>
          <View style={{paddingTop: 10}}>
            <Text style={styles.text}>Date*:</Text>
            <DatePicker
              onChange={(date) => console.log(date)}
              placeHolderText={
                !data.invoiceDate
                  ? 'Select Date'
                  : moment(data.invoiceDate).format('MM/DD/YYYY') &&
                    moment(data.invoiceDate).format('MM/DD/YYYY')
              }
            />
          </View>
          <InvoiceGrid invoicedata={data.invoices && data.invoices.reverse()} />
        </View>
      ))}
      <View
        style={{
          width: '100%',
          borderWidth: 1,
          borderColor: ACTIVE_BLUE,
          borderRadius: 5,
        }}>
        <TouchableOpacity
          onPress={() => {
            if (newVendorData.length !== 0) {
              setnewVendorData((oldVendor) => [...oldVendor, EmptyVendor]);
            } else {
              setnewVendorData([EmptyVendor]);
            }
          }}>
          <Text
            style={{
              fontSize: font_sm,
              alignSelf: 'center',
              alignContent: 'center',
              textAlign: 'center',
              width: '100%',
              color: MAIN_GRAY,
            }}>
            Add Vendor
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Actual;

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
  },
});
