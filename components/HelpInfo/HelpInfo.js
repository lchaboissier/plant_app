
import React, { useState } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    ScrollView,
    View,
} from 'react-native';

export const HelpInfo = ({ title, description }) => {
    return (
        <ScrollView>
            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{title}</Text>
                <View
                    style={{
                        borderBottomColor: 'grey',
                        borderBottomWidth: 1,
                        marginVertical: 10,
                    }}
                />
                <Text style={{ fontSize: 16 }}>{description}</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    title: {
        fontSize: 16,
        flex: 1,
    },
});

export default HelpInfo;