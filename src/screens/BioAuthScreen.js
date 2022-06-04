import React from 'react';
import { TouchableHighlight, Button } from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';
import { SafeAreaView } from 'react-native-safe-area-context';

const BioAuthScreen = () => {
    const isBiometricSupport = async () => {
        let { available, biometryType } =
            await ReactNativeBiometrics.isSensorAvailable();
        if (available && biometryType === ReactNativeBiometrics.TouchID) {
            console.log('TouchID is supported', biometryType);
        } else if (available && biometryType === ReactNativeBiometrics.FaceID) {
            console.log('FaceID is supported', biometryType);
        } else if (available && biometryType === ReactNativeBiometrics.Biometrics) {
            console.log('Biometrics is supported', biometryType);
        } else {
            return console.log('Biometrics not supported', biometryType);
        }
        let { success, error } = await ReactNativeBiometrics.simplePrompt({
            promptMessage: 'Sign in with Touch ID',
            // cancelButtonText: 'Close',
        });
        console.log({ success, error });
    };

    return (
        <SafeAreaView>
            <TouchableHighlight
                style={{
                    height: 60,
                }}>
                <Button
                    title="Login with Biometrics"
                    color="#fe7005"
                    onPress={isBiometricSupport}
                />
            </TouchableHighlight>
        </SafeAreaView>
    )
};

export default BioAuthScreen;