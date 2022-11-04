import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Planet = ({ planet }) => {
    const navigation = useNavigation();
    const handlePlanetPress = () => {
        navigation.navigate('Planet', { planet: planet });
    };

    return (
        <TouchableOpacity
            onPress={handlePlanetPress}
        >
            <View style={styles.planet}>
                <View style={styles.circleAndName}>
                    <View style={[ styles.circle, { backgroundColor: planet.color } ]}></View>
                    <Text style={styles.planetText}>{planet.name}</Text>
                </View>
                <Entypo name="chevron-thin-right" size={16} color="white" />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    planet: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 0.3,
        borderBottomColor: 'rgba(255, 255, 255, 0.3)',
        paddingTop: 20,
        paddingBottom: 20
    },

    circle: {
        width: 35, 
        height: 35,
        borderRadius: "100%",
    },

    circleAndName: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },

    planetText: {
        color: 'white',
        fontSize: 18,
        paddingLeft: 20
    }
});

export default Planet;