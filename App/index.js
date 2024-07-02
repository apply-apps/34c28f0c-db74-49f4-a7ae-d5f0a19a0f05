// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const mockStories = [
    { id: '1', title: 'The Sleepy Owl', content: 'Once upon a time... Full story of The Sleepy Owl.' },
    { id: '2', title: 'Dreamland Adventure', content: 'In a faraway land... Full story of Dreamland Adventure.' },
    { id: '3', title: 'Moonlit Pond', content: 'On a calm night... Full story of Moonlit Pond.' },
];

const StoryList = ({ navigation }) => {
    const handlePress = (story) => {
        navigation.navigate('StoryDetail', { story });
    };

    return (
        <View style={styles.list}>
            {mockStories.map(story => (
                <TouchableOpacity key={story.id} onPress={() => handlePress(story)} style={styles.storyContainer}>
                    <Text style={styles.storyTitle}>{story.title}</Text>
                    <Text style={styles.storyContent}>{story.content.substring(0, 30)}...</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const StoryDetail = ({ route }) => {
    const { story } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.storyTitle}>{story.title}</Text>
                <Text style={styles.storyContent}>{story.content}</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default function App() {
    return (
        <NavigationContainer>
            <SafeAreaView style={styles.container}>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Stories"
                        component={StoryList}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="StoryDetail"
                        component={StoryDetail}
                        options={{ title: 'Story' }}
                    />
                </Stack.Navigator>
            </SafeAreaView>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    list: {
        flex: 1,
        padding: 20,
        backgroundColor: '#000',
    },
    storyContainer: {
        backgroundColor: '#1a1a1a',
        padding: 20,
        marginVertical: 10,
        borderRadius: 10,
    },
    storyTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    storyContent: {
        fontSize: 16,
        color: '#bbb',
    },
    storyContent: {
        fontSize: 18,
        color: '#bbb',
    },
});