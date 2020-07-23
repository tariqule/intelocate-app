import React from 'react';
import {View, Text} from 'react-native';
import {Grid, Row, Col, Icon, Button} from 'native-base';
import {
  TEST_BORDER,
  MAIN_GRAY,
  ACTIVE_BLUE,
  COLOR_BORDER,
} from '../../../../../../config/global-styles';
import {Input} from 'react-native-elements';
import {ActualItem} from '../types';
import {Currency, formatCost} from '../utils';
import {updateInvoice} from '../../../../../../services/accounting';
import {TouchableOpacity} from 'react-native-gesture-handler';
interface invoiceGridProps {
  invoicedata: any;
}
export const InvoiceGrid = (props: invoiceGridProps) => {
  const emptyField = {
    id: '',
    invoiceNumber: '',
    description: '',
    hours: '',
    actualCost: '',
  };
  const [invoiceListData, setInvoiceListData] = React.useState([emptyField]);
  const [newFieldsData, setnewFieldsData] = React.useState([]);
  const [invoiceNumber, setInvoiceNumber] = React.useState<
    undefined | null | number
  >();
  const [newInvoice, setNewInvoice] = React.useState<undefined | null | any>();

  const [description, setDescription] = React.useState<string | undefined>();
  const [newDescription, setNewDescription] = React.useState<any | undefined>();

  const [hrs, setHrs] = React.useState<number | undefined>();
  const [newHrs, setNewHrs] = React.useState<any | undefined>();

  const [cost, setCost] = React.useState<number | undefined | string>();

  const [newCost, setNewCost] = React.useState<any | undefined>();

  const [isTypingInvoiceNumber, setIsTypingInvoiceNumber] = React.useState<
    boolean | undefined
  >(false);
  const [isTypingDescription, setIsTypingDescription] = React.useState<
    boolean | undefined
  >(false);
  const [isTypingInvoiceHrs, setIsTypingInvoiceHrs] = React.useState<
    boolean | undefined
  >(false);
  const [isTypingInvoiceCost, setIsTypingInvoiceCost] = React.useState<
    boolean | undefined
  >(false);

  //   const [];

  const {invoicedata} = props;

  React.useEffect(() => {
    console.log(JSON.stringify(invoicedata) + 'run');
    invoicedata && setInvoiceListData(invoicedata);
  });
  function getTotalCost(data: ActualItem[], currency: Currency): string {
    const totalCost = data.reduce(
      (prev, vendor) => prev + vendor.actualCost,
      0,
    );
    return formatCost(totalCost, currency);
  }

  function getTotalHours(data: ActualItem[]): string {
    const totalHours = data.reduce((prev, vendor) => prev + vendor.hours, 0);
    return String(totalHours);
  }

  const _onChangeInvoiceNumber = (val, data) => {
    setIsTypingInvoiceNumber(true);
    setInvoiceNumber(Number(val));
    setNewInvoice({...data, invoiceNumber: Number(val)});
  };
  const _onChangeInvoiceDescription = (val, data) => {
    setIsTypingDescription(true);
    setDescription(val);
    setNewDescription({...data, description: val});
  };
  const _onChangeInvoiceHrs = (val, data) => {
    setIsTypingInvoiceHrs(true);
    setHrs(Number(val));
    setNewHrs({...data, hours: Number(val)});
  };
  const _onChangeInvoiceCost = (val, data) => {
    setIsTypingInvoiceCost(true);
    setCost(val);
    setNewCost({...data, actualCost: Number(val)});
  };
  const _onBlurInvoiceNumber = () => {
    // setIsTypingInvoiceNumber(false);
  };
  const _onBlurInvoiceDescription = () => {
    // setIsTypingDescription(false);
  };
  const _onBlurInvoiceHrs = () => {
    // setIsTypingInvoiceHrs(false);
  };
  const _onBlurInvoiceCost = () => {
    // setIsTypingInvoiceCost(false);
  };
  const _onSubmitSave = () => {
    let createrId = invoicedata.map((e) => e);
    console.log(JSON.stringify(createrId) + '--+');

    const update = (data) => ({
      cost: data.actualCost,
      description: data.description,
      externalCreatorId: data.externalCreatorId,
      finPeriod: data.finPeriod,
      hours: data.hours,
      invoiceDate: data.invoiceDate,
      invoiceNumber: String(data.invoiceNumber),
      vendorId: data.vendorId,
    });
    newInvoice &&
      updateInvoice(newInvoice.id, update(newInvoice), (res) =>
        console.log(JSON.stringify(res) + 'updated invoice number'),
      );
    newDescription &&
      updateInvoice(newDescription.id, update(newDescription), (res) =>
        console.log(JSON.stringify(res) + 'updated invoice description'),
      );
    newHrs &&
      updateInvoice(newHrs.id, update(newHrs), (res) =>
        console.log(JSON.stringify(res) + 'updated hrs'),
      );
    newCost &&
      updateInvoice(newCost.id, update(newCost), (res) =>
        console.log(JSON.stringify(res) + 'updated cost'),
      );
  };

  return (
    <Grid>
      <Row>
        <Col
          style={{
            borderWidth: TEST_BORDER,
            height: 50,
            // width: 85,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: MAIN_GRAY,
          }}>
          <Text style={{color: 'white'}}>Invoice#</Text>
        </Col>
        <View style={{width: 1, backgroundColor: 'white'}} />
        <Col
          style={{
            borderWidth: TEST_BORDER,
            height: 50,
            // width: 85,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: MAIN_GRAY,
          }}>
          <Text style={{color: 'white'}}>Description</Text>
        </Col>
        <View style={{width: 1, backgroundColor: 'white'}} />
        <Col
          style={{
            borderWidth: TEST_BORDER,
            height: 50,
            // width: 85,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: MAIN_GRAY,
          }}>
          <Text style={{color: 'white'}}>Hrs</Text>
        </Col>
        <View style={{width: 1, backgroundColor: 'white'}} />
        <Col
          style={{
            borderWidth: TEST_BORDER,
            height: 50,
            // width: 85,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: MAIN_GRAY,
          }}>
          <Text style={{color: 'white'}}>Cost</Text>
        </Col>
      </Row>
      {invoiceListData.map((data, i) => (
        <Row style={{paddingTop: 5}} key={i}>
          <Col
            style={{
              borderWidth: TEST_BORDER,
              height: 50,
              // width: 85,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: COLOR_BORDER,
            }}>
            <Input
              onBlur={_onBlurInvoiceNumber}
              // containerStyle={{width: '100%'}}
              keyboardType="numeric"
              inputContainerStyle={{borderColor: ACTIVE_BLUE}}
              inputStyle={{color: MAIN_GRAY}}
              labelStyle={{color: MAIN_GRAY}}
              onChange={(val) => {
                _onChangeInvoiceNumber(val.nativeEvent.text, data);
                // console.log(val.nativeEvent.text);
              }}
              value={
                isTypingInvoiceNumber
                  ? String(invoiceNumber)
                  : data.invoiceNumber
                  ? String(data.invoiceNumber)
                  : ''
              }></Input>
          </Col>
          <View style={{width: 1, backgroundColor: 'white'}} />
          <Col
            style={{
              borderWidth: TEST_BORDER,
              height: 50,
              // width: 85,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: COLOR_BORDER,
            }}>
            <Input
              onBlur={_onBlurInvoiceDescription}
              // containerStyle={{width: '100%'}}
              inputContainerStyle={{borderColor: ACTIVE_BLUE}}
              inputStyle={{color: MAIN_GRAY}}
              labelStyle={{color: MAIN_GRAY}}
              onChange={(val) => {
                _onChangeInvoiceDescription(val.nativeEvent.text, data);
                console.log(JSON.stringify(data));
              }}
              value={
                isTypingDescription
                  ? description
                  : data.description
                  ? String(data.description)
                  : ''
              }></Input>
          </Col>
          <View style={{width: 1, backgroundColor: 'white'}} />
          <Col
            style={{
              borderWidth: TEST_BORDER,
              height: 50,
              // width: 85,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: COLOR_BORDER,
            }}>
            <Input
              onBlur={_onBlurInvoiceHrs}
              // containerStyle={{width: '100%'}}
              inputContainerStyle={{borderColor: ACTIVE_BLUE}}
              inputStyle={{color: MAIN_GRAY}}
              labelStyle={{color: MAIN_GRAY}}
              keyboardType="numeric"
              onChange={(val) => {
                _onChangeInvoiceHrs(val.nativeEvent.text, data);
              }}
              value={
                isTypingInvoiceHrs
                  ? String(hrs)
                  : data.hours
                  ? String(data.hours)
                  : ''
              }></Input>
          </Col>
          <View style={{width: 1, backgroundColor: 'white'}} />
          <Col
            style={{
              borderWidth: TEST_BORDER,
              height: 50,
              width: 80,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: COLOR_BORDER,
            }}>
            <Input
              onBlur={_onBlurInvoiceCost}
              // containerStyle={{width: '100%'}}
              inputContainerStyle={{
                borderColor: ACTIVE_BLUE,
              }}
              inputStyle={{color: MAIN_GRAY}}
              labelStyle={{color: MAIN_GRAY}}
              keyboardType="numeric"
              onChange={(val) => {
                console.log(JSON.stringify(data));

                // console.log(val.nativeEvent.text.replace('$', ''));
                _onChangeInvoiceCost(
                  val.nativeEvent.text.replace('$', ''),
                  data,
                );
              }}
              value={
                isTypingInvoiceCost
                  ? `${cost}`
                  : data.actualCost
                  ? `$${String(data.actualCost)}`
                  : ''
              }></Input>
          </Col>
        </Row>
      ))}
      {newFieldsData.map((data, i) => (
        <Row style={{paddingTop: 5}} key={i}>
          <Col
            style={{
              borderWidth: TEST_BORDER,
              height: 50,
              // width: 85,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: COLOR_BORDER,
            }}>
            <Input
              onBlur={_onBlurInvoiceNumber}
              // containerStyle={{width: '100%'}}
              keyboardType="numeric"
              inputContainerStyle={{borderColor: ACTIVE_BLUE}}
              inputStyle={{color: MAIN_GRAY}}
              labelStyle={{color: MAIN_GRAY}}
              onChange={(val) => {
                _onChangeInvoiceNumber(val.nativeEvent.text, data);
                // console.log(val.nativeEvent.text);
              }}
              value={
                isTypingInvoiceNumber
                  ? String(invoiceNumber)
                  : data.invoiceNumber
                  ? String(data.invoiceNumber)
                  : ''
              }></Input>
          </Col>
          <View style={{width: 1, backgroundColor: 'white'}} />
          <Col
            style={{
              borderWidth: TEST_BORDER,
              height: 50,
              // width: 85,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: COLOR_BORDER,
            }}>
            <Input
              onBlur={_onBlurInvoiceDescription}
              // containerStyle={{width: '100%'}}
              inputContainerStyle={{borderColor: ACTIVE_BLUE}}
              inputStyle={{color: MAIN_GRAY}}
              labelStyle={{color: MAIN_GRAY}}
              onChange={(val) => {
                _onChangeInvoiceDescription(val.nativeEvent.text, data);
                console.log(JSON.stringify(data));
              }}
              value={
                isTypingDescription
                  ? description
                  : data.description
                  ? String(data.description)
                  : ''
              }></Input>
          </Col>
          <View style={{width: 1, backgroundColor: 'white'}} />
          <Col
            style={{
              borderWidth: TEST_BORDER,
              height: 50,
              // width: 85,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: COLOR_BORDER,
            }}>
            <Input
              onBlur={_onBlurInvoiceHrs}
              // containerStyle={{width: '100%'}}
              inputContainerStyle={{borderColor: ACTIVE_BLUE}}
              inputStyle={{color: MAIN_GRAY}}
              labelStyle={{color: MAIN_GRAY}}
              keyboardType="numeric"
              onChange={(val) => {
                _onChangeInvoiceHrs(val.nativeEvent.text, data);
              }}
              value={
                isTypingInvoiceHrs
                  ? String(hrs)
                  : data.hours
                  ? String(data.hours)
                  : ''
              }></Input>
          </Col>
          <View style={{width: 1, backgroundColor: 'white'}} />
          <Col
            style={{
              borderWidth: TEST_BORDER,
              height: 50,
              width: 80,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: COLOR_BORDER,
            }}>
            <Input
              onBlur={_onBlurInvoiceCost}
              // containerStyle={{width: '100%'}}
              inputContainerStyle={{
                borderColor: ACTIVE_BLUE,
              }}
              inputStyle={{color: MAIN_GRAY}}
              labelStyle={{color: MAIN_GRAY}}
              keyboardType="numeric"
              onChange={(val) => {
                console.log(JSON.stringify(data));

                // console.log(val.nativeEvent.text.replace('$', ''));
                _onChangeInvoiceCost(
                  val.nativeEvent.text.replace('$', ''),
                  data,
                );
              }}
              value={
                isTypingInvoiceCost
                  ? `${cost}`
                  : data.actualCost
                  ? `$${String(data.actualCost)}`
                  : ''
              }></Input>
          </Col>
        </Row>
      ))}

      <Row>
        <Col
          style={{
            borderWidth: TEST_BORDER,
            height: 50,
            // width: 85,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              if (newFieldsData.length !== 0) {
                setnewFieldsData((oldField) => [...oldField, newFieldsData]);
              } else {
                setnewFieldsData([emptyField]);
              }
            }}>
            <Icon style={{color: 'gray'}} type="Entypo" name="plus"></Icon>
          </TouchableOpacity>
        </Col>
        <View style={{width: 2}} />

        <Col
          style={{
            borderWidth: TEST_BORDER,
            height: 50,
            // width: 85,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>Total</Text>
        </Col>
        <View style={{width: 1, backgroundColor: 'white'}} />

        <Col
          style={{
            borderWidth: TEST_BORDER,
            height: 50,
            // width: 85,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: MAIN_GRAY,
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            {getTotalHours(invoicedata) && getTotalHours(invoicedata)}
          </Text>
        </Col>
        <View style={{width: 1, backgroundColor: 'white'}} />
        <Col
          style={{
            borderWidth: TEST_BORDER,
            height: 50,
            // width: 85,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: MAIN_GRAY,
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            {getTotalCost(invoicedata, 'CAD') &&
              getTotalCost(invoicedata, 'CAD')}
          </Text>
        </Col>
      </Row>

      <Row style={{paddingTop: 10}}>
        <Col
          style={{
            width: '100%',
            flexWrap: 'wrap',
            alignContent: 'flex-end',
            borderWidth: TEST_BORDER,
          }}>
          <Button
            onPress={_onSubmitSave}
            // disabled={selectedCategory && !loading ? false : true}
            style={{
              backgroundColor: ACTIVE_BLUE,
              width: 80,
              height: 30,
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white'}}>Save</Text>
          </Button>
        </Col>
      </Row>
    </Grid>
  );
};
