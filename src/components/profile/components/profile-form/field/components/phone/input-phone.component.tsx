import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { IRefereceInput } from '../../field-factory.model';
import {
    colorsInput,
    stylesFactoryForm,
    zoomIn,
    zoomOut
} from '../../field-factory.styles';
import * as Animatable from 'react-native-animatable';
import { TextInputMask } from 'react-native-masked-text';
import { stylesInputPhone } from './input-phone.styles';

export const InputPhone = (props: IRefereceInput) => {
    const { t } = useTranslation();
    const styles = { ...stylesFactoryForm, ...stylesInputPhone };

    return (
        <View style={styles.formControl}>
            <TextInput
                secureTextEntry={props.secureTextEntry || false}
                textAlign="left"
                style={[
                    styles.input,
                    {
                        zIndex: 1,
                        elevation: 1,
                        position: 'relative'
                    }
                ]}
                label={props.label}
                onChangeText={props.onChangeReference(props.name)}
                value={props.value}
                theme={colorsInput}
                error={props.error && props.touched ? true : false}
                render={(props) => (
                    <TextInputMask
                        type={'cel-phone'}
                        style={styles.mask}
                        options={{
                            maskType: 'INTERNATIONAL'
                        }}
                        onChangeText={props.onChangeText}
                        value={props.value}
                    />
                )}
            />
            <Button
                loading={props.isLoad}
                icon="content-save-outline"
                color={'#333939'}
                labelStyle={{ fontSize: 25, marginLeft: '3%' }}
                style={styles.btn}
                onPress={props.handleSubmitReference}
                disabled={
                    props.defaultValue === props.value
                        ? true
                        : props.isLoad
                        ? true
                        : false
                }
            >
                <Text style={{ display: 'none', fontSize: 0 }}>text</Text>
            </Button>
            <Animatable.Text
                animation={props.error && props.touched ? zoomIn : zoomOut}
                style={styles.inputError}
            >
                {t(props.error || 'error.req')}
            </Animatable.Text>
        </View>
    );
};
