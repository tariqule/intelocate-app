/* tslint:disable-next-line:no-unused-variable */
import * as React from 'react';
import { FormStyles, FormTextStyles } from '../../global-styles';
import { Button } from './index';


interface Props {
    title: string | JSX.Element;
    onPress: () => void;
    disabled?: boolean;
}

export const ButtonSecond = (props: Props) => (
    <Button
        { ...props }
        textStyles={FormTextStyles.buttonSecond}
        viewStyles={FormStyles.buttonSecond}
    />
);
