import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Linking, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const PlanetScreen = ({ route }) => { 
    const { 
        name,  
        img, 
        description, 
        rotationTime, 
        revolutionTime, 
        radius, 
        avgTemp, 
        wikiLink, 
        structure, 
        surface 
    } = route.params.planet;

    const navigation = useNavigation();

    const handleBack = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.main}>
                    <TouchableOpacity
                        onPress={handleBack}
                    >
                        <Entypo name="chevron-thin-left" size={18} color="rgba(225, 225, 225, 0.6)" />
                    </TouchableOpacity>

                    <View style={styles.imageContainer}>
                        <Text style={[ styles.whiteText, styles.largeFont ]}>{name}</Text>
                        
                        <Image
                            source={{uri: img,}}
                            style={styles.image}
                        />
                    </View>

                    <View style={styles.textContainer}>
                        <Text style={[styles.whiteText, styles.textCenter]}>{description}</Text>
                        <Text 
                            style={[styles.mutedText, styles.textCenter, styles.textUnderline, styles.wiki]}
                            onPress={() => Linking.openURL(wikiLink)}
                        >
                            Wikipedia
                        </Text>
                    </View>

                    <View style={styles.infoContainer}>
                        <View style={styles.tableRow}>
                            <Text style={styles.mutedText}>Rotation Time</Text>
                            <Text style={[ styles.whiteText, styles.mediumFont ]}>{rotationTime}</Text>
                        </View>

                        <View style={styles.tableRow}>
                            <Text style={styles.mutedText}>Revolution Time</Text>
                            <Text style={[ styles.whiteText, styles.mediumFont ]}>{revolutionTime}</Text>
                        </View>

                        <View style={styles.tableRow}>
                            <Text style={styles.mutedText}>Radius</Text>
                            <Text style={[ styles.whiteText, styles.mediumFont ]}>{radius}</Text>
                        </View>

                        <View style={styles.tableRow}>
                            <Text style={styles.mutedText}>Average Temparature</Text>
                            <Text style={[ styles.whiteText, styles.mediumFont ]}>{avgTemp}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1B2430',
    },
    
    main: {
        flex: 1,
        padding: 30
    },

    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },

    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },

    infoContainer: {
        flex: 1,
        marginBottom: 20
    },

    image: {
        width: 200,
        height: 200,   
    },

    whiteText: {
        color: 'rgba(255, 255, 255, 0.8)'
    },

    mutedText: {
        color: 'rgba(225, 225, 225, 0.6),',
    },

    textUnderline: {
        textDecorationLine: 'underline'
    },

    textCenter: {
        textAlign: 'center',
    },

    wiki: {
        paddingTop: 5
    },

    tableRow: {
        borderBottomWidth: 1,
        borderColor: 'rgba(225, 225, 225, 0.6)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 10,
    },

    mediumFont: {
        fontSize: 16
    },

    largeFont: {
        fontSize: 32,
        marginBottom: 20,
        fontWeight: 'bold'
    }
});

export default PlanetScreen;