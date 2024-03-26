import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle, formHeading, inputOptions, formStyles as styles } from "../styles/styles";
import { Button, TextInput } from "react-native-paper";
import Footer from "../components/Footer";

const Verify = ({ navigation }) => {
    const [otp, setOtp] = useState("");
    const [password, setPassword] = useState("");



    const loading = false;
    const submitHandler = () => {
        // alert("hi")
        navigation.navigate("login")
    }
    return (
        <>
            <View style={defaultStyle}>
                {/* Heading */}
                <View style={{ marginBottom: 20 }}>
                    <Text style={formHeading}>Reset Password</Text>
                </View>
                <View style={styles.container}>
                    <TextInput {...inputOptions} placeholder="OTP" keyboardType="number-pad" value={otp} onChangeText={setOtp} />
                    <TextInput {...inputOptions} placeholder="Enter New Password" secureTextEntry={true} value={password} onChangeText={setPassword} />



                    <Button loading={loading} textColor={colors.color2} disabled={otp === "" || password === ""} style={styles.btn} onPress={submitHandler}>Reset Password</Button>
                    <Text style={styles.or}>OR</Text>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("forgetpassword")}>
                        <Text style={styles.link}>Resend OTP</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Footer activeRoute="profile" />
        </>
    );
};



export default Verify;
