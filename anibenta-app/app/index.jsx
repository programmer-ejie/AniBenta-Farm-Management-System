import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Link} from "expo-router";

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to AniBenta Farm Management Systems</Text>
            <Link href = "/tabs/auth/login" style = {styles.button}>
               <Text style = {styles.buttonText}>LOGIN</Text>
            </Link>
        </View>
    );
};

export default Home;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        color: '#111',
    },
    button:{
        backgroundColor: '#007AFF',
        borderRadius: 5,
        padding: 10,
        margin: 10,
        size: 20,
    },
    buttonText:{
        color: '#fff',
        fontWeight: '600',
        textAlign: 'center',
    }
});
