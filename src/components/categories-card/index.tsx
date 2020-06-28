import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {ACTIVE_BLUE, COLOR_BORDER, MAIN_GRAY} from '../../config/global-styles';
import {Card} from 'react-native-elements';
import {CustomIcon} from '../customIcon';

interface categoriesCardProps {
  data: any;
  onPress: (data, index) => void;
  subCategories?: boolean;
}
const CategoryCard = (props: categoriesCardProps) => {
  const [selectedCategory, setSelectedCategory] = React.useState('');
  const [defaultSelection, setDefaultSelection] = React.useState('');
  const [onPressChange, setOnPressChange] = React.useState(false);

  const _onPressCategory = (data, index) => {
    console.log(index);
    setOnPressChange(true);
    setDefaultSelection(props.data[0].id);
    setSelectedCategory(data.id);
    props.onPress(data, index);
    // setIconBgSelectedColor(ACTIVE_BLUE);
    // data.id === selectedCategory
    //   ? setIconBgSelectedColor(ACTIVE_BLUE)
    //   : setIconBgSelectedColor(COLOR_BORDER);
  };

  return (
    <Card
      containerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: props.subCategories && COLOR_BORDER,
      }}>
      <View
        style={{
          width: '100%',
          flexWrap: 'wrap',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {props.data.map((data, index) => (
          <View
            key={data.id}
            style={{
              flexDirection: 'column',
              paddingLeft: 5,
              width: '25%',
              height: 100,
              alignItems: 'center',
              justifyContent: 'center',
              alignContent: 'center',
              alignSelf: 'center',
            }}>
            <View
              style={{
                height: 80,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity onPress={() => _onPressCategory(data, index)}>
                <CustomIcon
                  backgroundColor={
                    !props.subCategories
                      ? data.id === selectedCategory
                        ? ACTIVE_BLUE
                        : COLOR_BORDER
                      : data.id === selectedCategory
                      ? ACTIVE_BLUE
                      : 'white'
                  }
                  iconCode={{
                    code: data.iconCode,
                    color: data.id === selectedCategory ? 'white' : MAIN_GRAY,
                  }}
                />
              </TouchableOpacity>
            </View>
            <View style={{height: 20}}>
              <Text style={styles.colText}>{data.name}</Text>
            </View>
          </View>
        ))}
      </View>
    </Card>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  colText: {
    color: MAIN_GRAY,
    // padding: ,
    fontSize: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
