import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { HelpInfo } from '../HelpInfo';

const HelpPage6 = () => {
    return (
        <ScrollView>
            <HelpInfo 
                title={'title'}
                description={'description'}
            />
        </ScrollView>
    );
};

export default HelpPage6;