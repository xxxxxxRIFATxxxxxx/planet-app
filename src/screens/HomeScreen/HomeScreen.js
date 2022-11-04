import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, VirtualizedList } from 'react-native';
import { planetData } from '../../data/planetData';
import Planet from './Planet';

const getItem = (data, index) => {
    return {
        id: Math.random().toString(12).substring(0),
        title: `Item ${index+1}`
    }
};

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.main}>
                <View style={styles.header}>
                    <Text style={styles.title}>THE PLANETS</Text>
                </View>

                <VirtualizedList
                    data={planetData}
                    initialNumToRender={4}
                    renderItem={({ item }) => <Planet planet={item} />}
                    keyExtractor={item => item.name}
                    getItemCount={(data) => data.length}
                    getItem={(data, index) => data[index]}
                    style={styles.planetListContainer}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1B2430',
    },

    main: {
        padding: 30
    },
    
    title: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        padding: 15,
    },

    header: {
        borderBottomWidth: 0.3,
        borderBottomColor: 'white'
    },

    planetListContainer: {
        marginBottom: 50
    }
});

export default HomeScreen;