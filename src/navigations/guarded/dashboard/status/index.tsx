import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Container} from 'native-base';
import {
  TEST_BORDER,
  MAIN_GRAY,
  ACTIVE_BLUE,
} from '../../../../config/global-styles';
import * as Animatable from 'react-native-animatable';

const Status = () => {
  return (
    <View style={{justifyContent: 'center'}}>
      <Animatable.View animation="fadeInDown">
        <GridComponentLayout />
      </Animatable.View>
    </View>
  );
};

export default Status;

class GridComponentLayout extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col
            style={{
              borderWidth: TEST_BORDER,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: MAIN_GRAY}}>New</Text>
            <Text
              style={{fontWeight: 'bold', color: ACTIVE_BLUE, fontSize: 24}}>
              2202
            </Text>
          </Col>
          <Col
            style={{
              borderWidth: TEST_BORDER,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: MAIN_GRAY}}>In Progress</Text>
            <Text
              style={{fontWeight: 'bold', color: ACTIVE_BLUE, fontSize: 24}}>
              2202
            </Text>
          </Col>
          <Col
            style={{
              borderWidth: TEST_BORDER,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: MAIN_GRAY}}>Complete</Text>
            <Text
              style={{fontWeight: 'bold', color: ACTIVE_BLUE, fontSize: 24}}>
              22
            </Text>
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              borderWidth: TEST_BORDER,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: MAIN_GRAY}}>Cancelled</Text>
            <Text
              style={{fontWeight: 'bold', color: ACTIVE_BLUE, fontSize: 24}}>
              2
            </Text>
          </Col>
          <Col
            style={{
              borderWidth: TEST_BORDER,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: MAIN_GRAY}}>Pending Approval</Text>
            <Text
              style={{fontWeight: 'bold', color: ACTIVE_BLUE, fontSize: 24}}>
              1922
            </Text>
          </Col>
          <Col
            style={{
              borderWidth: TEST_BORDER,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: MAIN_GRAY}}>New</Text>
            <Text
              style={{fontWeight: 'bold', color: ACTIVE_BLUE, fontSize: 24}}>
              2202
            </Text>
          </Col>
        </Row>
      </Grid>
    );
  }
}
