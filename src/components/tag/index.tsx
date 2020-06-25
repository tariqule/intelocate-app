/* tslint:disable-next-line:no-unused-variable */
import * as React from 'react';
import { View, Text } from 'react-native';


interface Props {
    value: string;
}

export function Tag(props: Props) {
    const { value } = props;
    return (
        <View
            style={{
                borderRadius: 5,
                backgroundColor: '#676767'
            }}
        >
            <Text
                style={{
                    color: '#ffffff'
                }}
            >
                {value}
            </Text>
        </View>
    );
}
