/* tslint:disable-next-line:no-unused-variable */
import * as React from 'react';
import {View, Text, ViewStyle, TextStyle} from 'react-native';
import {NavigationLogo} from '../../svg-components/navigation-logo';
// import { FiltersIcon } from '../../../svg-components/filters-icon';
import {getTouchable} from '../../utils/touchable';

interface Props {
  icon: JSX.Element;
  title: string | JSX.Element;
  onLogoPress: () => void;
}

const Header = (props: Props) => {
  const {title, onLogoPress, icon} = props;
  const Touchable = getTouchable();
  return (
    <View style={views.header}>
      <View style={views.logoWrapper}>
        <Touchable onPress={onLogoPress}>
          <View style={views.logo}>
            <NavigationLogo />
          </View>
        </Touchable>
      </View>
      <View style={views.sectionWrapper}>
        <View style={views.sectionIconWrapper}>
          <View style={views.sectionIcon}>{icon}</View>
        </View>
        <View style={views.sectionTitleWrapper}>
          <Text style={text.sectionTitle}>{title}</Text>
        </View>
        <View style={views.sectionControlWrapper}>
          {/*<View
                        style={views.sectionControl}
                    >
                        <FiltersIcon color={'#8E8E8E'} />
                    </View>*/}
        </View>
      </View>
    </View>
  );
};

export default Header;

const views: {[key: string]: ViewStyle} = {
  header: {
    backgroundColor: '#f0f0f0',
    flexDirection: 'row',
    flexShrink: 0,
    height: 56,
    elevation: 10,
    borderBottomWidth: 0.3,
  },
  logoWrapper: {
    width: 56,
    height: 56,
    flexGrow: 0,
    flexShrink: 0,
    backgroundColor: '#0c4176',
  },
  logo: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionWrapper: {
    flexGrow: 1,
    flexDirection: 'row',
  },
  sectionIconWrapper: {
    borderRightWidth: 1,
    borderRightColor: '#cdcdcd',
    flexShrink: 0,
    flexGrow: 0,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  sectionIcon: {
    width: 36,
    height: 36,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 50,
    backgroundColor: '#46db1d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitleWrapper: {
    flexGrow: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  sectionControlWrapper: {
    flexShrink: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  sectionControl: {
    width: 36,
    height: 36,
    borderRadius: 50,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
};

const text: {[key: string]: TextStyle} = {
  sectionTitle: {
    color: '#a4a4a4',
    fontSize: 22,
  },
};
