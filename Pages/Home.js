import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native';

const Home = () => {
    return (
        <View style={styles.home}>
            <View style={styles.liveHeader}>
                <Text style={styles.text}>Live Now</Text>
                <Text style={styles.separatorLine}></Text>
            </View>
            <View style={styles.liveSection}>
                <Text style={styles.text}>There are currently no live sessions...</Text>
            </View>
            <View style={styles.upcomingHeader}>
                <Text style={styles.text}>Upcoming</Text>
                <Text style={styles.separatorLine}></Text>
            </View>
            <View style={styles.upcomingSection}>
                <Text style={styles.text}>There are currently no upcoming sessions...</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    home: {
        backgroundColor: '#1f2029',
        flex: 1,
        padding: 25,
    },
    text: {
        color: "#008080"
    },
    liveHeader: {
        flex: 0.25, 
        flexDirection: 'row',
        alignItems: 'center'
    },
    liveSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center"
    },
    upcomingHeader: {
        flex: 0.25,
        flexDirection: 'row',
        alignItems: 'center'
    },
    upcomingSection: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },  
    separatorLine: {
        flex: 1,
        height: 1,
        marginLeft: 5,
        marginRight: 5,
        borderColor: '#008080',
        borderWidth: 1,
    },
})

export default Home