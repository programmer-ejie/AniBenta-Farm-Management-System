import { View, Text, StyleSheet } from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to AniBenta Farm Management Systems</Text>
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
});
