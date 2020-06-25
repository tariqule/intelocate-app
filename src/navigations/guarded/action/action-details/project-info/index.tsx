import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  FormStyles,
  FormTextStyles,
  ACTIVE_BLUE,
} from '../../../../../config/global-styles';
import DropDown from '../../../../../components/dropdown';
import {PADDING_TOP} from '../action-status';
import {
  getCategories,
  getSubCategories,
} from '../../../../../services/getCategories';

const ProjectDetails = (props) => {
  const [categories, setCategories] = React.useState(props.category || []);
  const [catSelected, setCatSelected] = React.useState('');
  const [subCategories, setSubCategories] = React.useState(
    props.subCategory || [],
  );

  const subCategory = true;
  const category = true;
  const issue = true;
  const description = 'we are having issues';
  const tags = true;
  const subLocationName = false;
  const editable = true;
  const canEditTask = true;

  React.useEffect(() => {
    getCategories((res) => setCategories(res.data));
  }, []);

  const _onChangeCategory = (val) => {
    setCatSelected(val);
    getSubCategories(val, (res) =>
      res.data && res.data.length > 0
        ? setSubCategories(res.data)
        : setSubCategories([]),
    );
  };
  return (
    <View>
      <View style={{}}>
        <View style={styles.category}>
          <Text style={styles.categoryText}>Category:</Text>
          <View style={{paddingTop: PADDING_TOP}}>
            <DropDown
              data={categories}
              style={{width: '100%'}}
              containerStyle={styles.dropDown}
              onChange={_onChangeCategory}
            />
          </View>
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryText}>Sub Category:</Text>
          <View style={{paddingTop: PADDING_TOP, paddingBottom: PADDING_TOP}}>
            <DropDown
              data={subCategories}
              style={{width: '100%'}}
              containerStyle={styles.dropDown}
              onChange={(val) => console.log(val)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProjectDetails;

const styles = StyleSheet.create({
  dropDown: {
    borderWidth: 1,
    borderColor: ACTIVE_BLUE,
    borderRadius: 2,
  },
  category: {
    paddingTop: PADDING_TOP,
  },
  categoryText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
  },
});
