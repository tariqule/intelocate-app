import React from 'react';
import {View, Text} from 'react-native';
import {FormStyles, FormTextStyles} from '../../../../../config/global-styles';
import Location from '../../../dashboard/location';

const LocationInfo = (props) => {
  const {data} = props;
  //   const {} = props.location;
  // const identifier = data.identifier === undefined ? '0' : data.identifier;
  // const name = data.name;
  // const countryCode = data.country_code;
  // const cityName = data.country;
  // const address1 = data.address_1;
  const identifier = '86FA';
  const name = 'Brooks Fields';
  const countryCode = 'BAZ';
  const cityName = 'London';
  const address1 = '23 Pharmacy ave';
  return (
    <View>
      <View style={FormStyles.formRow}>
        <View style={FormStyles.formCellHalf}>
          <Text style={{...FormTextStyles.formLabel, fontWeight: 'bold'}}>
            Number:
          </Text>
          <Text style={FormStyles.formFieldView}>{identifier}</Text>
        </View>
        <View style={FormStyles.formCellHalf}>
          <Text style={{...FormTextStyles.formLabel, fontWeight: 'bold'}}>
            Name:
          </Text>
          <Text style={FormStyles.formFieldView}>{name}</Text>
        </View>
        <View style={FormStyles.formCellHalf}>
          <Text style={{...FormTextStyles.formLabel, fontWeight: 'bold'}}>
            Address:
          </Text>
          <Text style={FormStyles.formFieldView}>
            {`${countryCode} ${cityName}, ${address1}`}
          </Text>
        </View>
      </View>
      <View style={{paddingBottom: 10}}>
        <Location />
      </View>
    </View>
  );
};

export default LocationInfo;
