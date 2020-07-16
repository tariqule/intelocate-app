import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  MAIN_GRAY,
  MAIN_DARK_ORANGE,
  MAIN_RED,
  FormStyles,
  FormTextStyles,
  FormInputStyles,
  COLOR_BORDER,
  ACTIVE_BLUE,
  MAIN_GREEN,
} from '../../../../../config/global-styles';
import DropDown from '../../../../../components/dropdown';
// import {TextInput} from 'react-native-gesture-handler';
// import {DatePicker} from '../../../../components/date-picker';
import {TextInput} from 'react-native-gesture-handler';
import {Input} from 'react-native-elements';

import DatePicker from '../../../../../components/date-picker';
import {useSelector} from 'react-redux/lib/hooks/useSelector';
import {updateAction} from '../../../../../services/getAction';
import {onChange} from 'react-native-reanimated';
import {useDispatch} from 'react-redux/lib/hooks/useDispatch';
import {selectedAction} from '../../../../../redux/action/issue-action';

export const PADDING_TOP = 10;

export enum TaskPriority {
  High = 2,
  Medium = 1,
  Low = 0,
}
export enum TaskStatus {
  New = 'NEW',
  Progress = 'INPROGRESS',
  Complete = 'COMPLETE',
}

const ActionStatus = () => {
  const showStatus = [
    {label: 'New', value: 'NEW'},
    {label: 'Cancelled', value: 'CANCELLED'},
    {label: 'In Progress', value: 'INPROGRESS'},
    {label: 'Complete', value: 'COMPLETE'},
  ];
  const [statusText, setStatusText] = React.useState();
  const [subStatus, setSubStatus] = React.useState('');
  const [changedValue, setChangedValue] = React.useState('');

  const _onChangeSubStatus = (val) => {
    setSubStatus(val);
  };
  const selected = useSelector((state) => state.issueActon.selectedAction);
  const dispatch = useDispatch();
  const _onChange = (val) => {
    setChangedValue(val);
    updateAction(selected.id, {status: val}, (res) =>
      dispatch(selectedAction(res.data)),
    );
  };
  React.useEffect(() => {
    console.log(selected.startDate);
  }, []);
  const _onChangeStartDate = (date) => {
    // setChangedValue(val);
    updateAction(selected.id, {startDate: date}, (res) =>
      dispatch(selectedAction(res.data)),
    );
  };
  const _onChangeEndDate = (date) => {
    updateAction(selected.id, {dueDate: date}, (res) =>
      dispatch(selectedAction(res.data)),
    );
  };
  function GetPriority(value: TaskPriority) {
    switch (value) {
      case TaskPriority.Low:
        return 'Low Priority';
      case TaskPriority.Medium:
        return 'Medium Priority';
      case TaskPriority.High:
        return 'High Priority';
    }
  }
  function GetPriorityColor(value: TaskPriority) {
    switch (value) {
      case TaskPriority.Low:
        return MAIN_GREEN;
      case TaskPriority.Medium:
        return MAIN_DARK_ORANGE;
      case TaskPriority.High:
        return MAIN_RED;
    }
  }
  function GetStatusPercentage(value: TaskStatus) {
    switch (value) {
      case TaskStatus.New:
        return '0%';
      case TaskStatus.Progress:
        return '33%';
      case TaskStatus.Complete:
        return '100%';
    }
  }
  function GetStatusPercentageColor(value: TaskStatus) {
    switch (value) {
      case TaskStatus.New:
        return 'transparent';
      case TaskStatus.Progress:
        return MAIN_DARK_ORANGE;
      case TaskStatus.Complete:
        return MAIN_GREEN;
    }
  }

  return (
    <View style={{}}>
      <View style={{...styles.priority}}>
        <View
          style={{
            ...styles.priorityBubble,
            backgroundColor: GetPriorityColor(selected.priority),
          }}
        />
        <Text style={styles.priorityText}>
          {GetPriority(selected.priority)}
        </Text>
      </View>
      <View
        style={{
          ...styles.progressWrapper,
          height: MAIN_DARK_ORANGE ? 10 : 0,
        }}>
        <View
          style={{
            ...styles.progress,
            backgroundColor: GetStatusPercentageColor(selected.status),
            height: MAIN_DARK_ORANGE ? 10 : 0,
            // width: `${progress.value}%`,
            width: GetStatusPercentage(selected.status),
          }}
        />
      </View>
      <View style={styles.overallStatus}>
        <Text style={styles.priorityText}>Overall Status:</Text>
        <View style={{paddingTop: PADDING_TOP}}>
          <DropDown
            value={selected.status || changedValue}
            data={showStatus}
            showStatus={true}
            style={{width: '100%'}}
            containerStyle={styles.dropDown}
            onChange={(val) => _onChange(val)}
          />
        </View>
      </View>
      <View style={styles.overallStatus}>
        <Text style={styles.priorityText}>Sub Status:</Text>
        <View style={{}}>
          <Input
            containerStyle={{width: '100%'}}
            inputContainerStyle={{borderColor: ACTIVE_BLUE}}
            inputStyle={{color: MAIN_GRAY}}
            labelStyle={{color: MAIN_GRAY}}
            onChange={_onChangeSubStatus}
            value={subStatus}></Input>
        </View>
      </View>
      <View style={{}}>
        <Text style={styles.priorityText}>Start Date:</Text>
        <View style={{}}>
          <DatePicker
            onChange={(date) => _onChangeStartDate(date)}
            defaultDate={selected.startDate}
          />
        </View>
      </View>
      <View style={{paddingTop: PADDING_TOP}}>
        <Text style={styles.priorityText}>End Date:</Text>
        <View style={{paddingBottom: PADDING_TOP}}>
          <DatePicker
            onChange={(date) => _onChangeEndDate(date)}
            defaultDate={selected.dueDate}
          />
        </View>
      </View>
    </View>
  );
};

export default ActionStatus;

const styles = StyleSheet.create({
  dropDown: {
    borderWidth: 1,
    borderColor: ACTIVE_BLUE,
    borderRadius: 2,
  },
  priority: {
    paddingTop: PADDING_TOP,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  priorityBubble: {
    borderRadius: 50,
    height: 10,
    width: 10,
    marginRight: 10,
  },
  priorityText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
  },
  overallStatus: {
    paddingTop: PADDING_TOP,
  },

  progressWrapper: {
    // marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 5,
    backgroundColor: '#e0e0e0',
  },
  progress: {
    borderRadius: 5,
  },
});
