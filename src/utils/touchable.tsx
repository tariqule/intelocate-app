import * as React from 'react';
import {
    Platform, TouchableOpacity, TouchableNativeFeedback, TouchableOpacityProps,
    TouchableNativeFeedbackProps
} from 'react-native';


type Props = (TouchableOpacityProps | TouchableNativeFeedbackProps) & { children?: any; };

export function getTouchable() {
    return Platform.OS === 'ios' ?
        (props: Props) => <TouchableOpacity {...props} />
    :
        (props: Props) => <TouchableNativeFeedback {...props} />;
}
