import {ScrollView, Text, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, View} from "react-native";

const loginScreen = () => {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior = {Platform.OS == "ios" ? "padding" : "height"} style = {{flex: 1}} keyboardVerticalOffset = {Platform.OS == "ios" ? 30 : 0}>
            <ScrollView contentContainerStyle = {{flexGrow: 1}} keyboardShouldPersistTaps = "handled">
                <View style = {styles.container}>
                    
                    <Text style = {styles.header}>Login Screen</Text>
                    <TextInput style = {styles.inputDesign} placeholder = "Email" />
                    <TextInput style = {styles.inputDesign} placeholder = "Password" secureTextEntry = {true} />

                    <TouchableOpacity style = {styles.button}>
                        <Text style = {styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
}

export default loginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    header: {
        fontSize: 30,
        fontWeight: "bold",
        marginVertical: 40,
    },
    inputDesign: {
        width: "80%",
        height: 50,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    button: {
        backgroundColor: "blue",
        width: "80%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginVertical: 10,
    },
    buttonText:{
        color: "white",
        fontWeight: "bold",
    }
});