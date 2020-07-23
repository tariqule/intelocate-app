import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TextField from '../../../../../components/text-field';
import {useSelector} from 'react-redux';
import {updateAction} from '../../../../../services/getAction';
import {useDispatch} from 'react-redux';
import {selectedAction} from '../../../../../redux/action/issue-action';
const Budget = (props) => {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.issueActon.selectedAction);

  const [costCode, setCostCode] = React.useState('');
  const [isTypeCost, setIsTypeCostCode] = React.useState(false);
  const [budget, setBudget] = React.useState('');
  const [isTypeBuget, setIsTypeBuget] = React.useState(false);
  const [estimatedHourly, setEstimatedHourly] = React.useState('');
  const [isTypeEstimatedHourly, setIsTypeEstimatedHourly] = React.useState(
    false,
  );
  const [estimatedCost, setEstimatedCode] = React.useState('');
  const [isTypeEstimatedCost, setIsTypeEstimatedCost] = React.useState(false);

  React.useEffect(() => {
    console.log(selected.budget + 'Budget+');
    // alert(selected.budget);
  }, []);
  const _onChangeBudet = (val) => {
    setIsTypeBuget(true);
    setBudget(val.nativeEvent.text);
  };
  const _onBlurBudget = () => {
    setIsTypeBuget(false);
    updateAction(selected.id, {budget}, (res) =>
      dispatch(selectedAction(res.data)),
    );
  };
  const _onChangeCostCode = (val) => {
    setIsTypeCostCode(true);
    setCostCode(val.nativeEvent.text);
  };
  const _onBlurCostCode = () => {
    setIsTypeCostCode(false);
    updateAction(selected.id, {costCode}, (res) =>
      dispatch(selectedAction(res.data)),
    );
  };
  const _onChangeEstimatedCost = (val) => {
    setIsTypeEstimatedCost(true);
    setEstimatedCode(val.nativeEvent.text);
  };
  const _onBlurEstimatedCost = () => {
    setIsTypeEstimatedCost(false);
    updateAction(selected.id, {estimatedCost}, (res) =>
      dispatch(selectedAction(res.data)),
    );
  };
  const _onChangeEstimatedHourly = (val) => {
    setIsTypeEstimatedHourly(true);
    setEstimatedHourly(val.nativeEvent.text);
  };
  const _onBlurEstimatedHourly = () => {
    setIsTypeEstimatedHourly(false);
    updateAction(selected.id, {hourlyRate: estimatedHourly}, (res) =>
      dispatch(selectedAction(res.data)),
    );
  };

  const textFieldData = [
    {
      title: 'Cost Code: ',
      onChange: (val) => _onChangeCostCode(val),
      value: isTypeCost
        ? costCode
        : selected.costCode
        ? String(selected.costCode)
        : '',
      onBlur: () => _onBlurCostCode(),
    },
    {
      title: 'Budget:',
      onChange: (val) => _onChangeBudet(val),
      value: isTypeBuget
        ? budget
        : selected.budget !== null
        ? String(selected.budget)
        : '',
      onBlur: () => _onBlurBudget(),
    },
    {
      title: 'Estimated hourly Rate',
      onChange: (val) => _onChangeEstimatedHourly(val),
      value: isTypeEstimatedHourly
        ? estimatedHourly
        : selected.hourlyRate
        ? String(selected.hourlyRate)
        : '',
      onBlur: () => _onBlurEstimatedHourly(),
    },
    {
      title: 'Estimated Cost',
      onChange: (val) => _onChangeEstimatedCost(val),
      value: isTypeEstimatedCost
        ? estimatedCost
        : selected.estimatedCost
        ? String(selected.estimatedCost)
        : '',
      onBlur: () => _onBlurEstimatedCost(),
    },
  ];
  return (
    <View>
      <View style={{paddingTop: 10}}>
        <TextField data={textFieldData} />
      </View>
    </View>
  );
};

export default Budget;

const styles = StyleSheet.create({});
