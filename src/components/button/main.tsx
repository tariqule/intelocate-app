/* tslint:disable-next-line:no-unused-variable */
import * as React from 'react';
import {Button} from './index';
import {FormTextStyles, FormStyles} from '../../config/global-styles';
interface Props {
  title: string | JSX.Element;
  onPress: () => void;
  disabled?: boolean;
}

export const ButtonMain = (props: Props) => (
  <Button
    {...props}
    textStyles={FormTextStyles.buttonMain}
    viewStyles={FormStyles.buttonMain}
  />
);
