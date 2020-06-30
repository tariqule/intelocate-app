import React from 'react';
import {View, Text} from 'react-native';
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

const ActionInfo = ({route}) => {
  const {item} = route.params;
  const navigation = useNavigation();
  const [specificTask, setSpecificTask] = React.useState([]);

  const dispatch = useDispatch();
  const _onPressBackButton = () => {
    navigation.goBack();
  };
  React.useEffect(() => {
    getSpecificTask(item.id, (res) => {
      console.log(JSON.stringify(res) + 'SBajs');
      dispatch(selectedAction(res.data));
      setSpecificTask(res.data);
    });
  }, []);
  return (
    <View style={{flex: 1}}>
      <HeaderX title="Action Detail" onPress={_onPressBackButton} />

      <View style={{flex: 2}}>
        <ActionHeader title={item.name} actionNumber={item.issueNumber} />
      </View>
      <Divider />
      <View style={{flex: 8}}>
        <TabView
          id={item.id}
          location={'specificTask.location'}
          category={specificTask.category && 'specificTask.category'}
          subCategory={'specificTask.subCategory && specificTask.subCategory'}
        />
      </View>
    </View>
  );
};

export default ActionInfo;
