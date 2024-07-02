// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, Text, ScrollView, FlatList, View } from 'react-native';

// App.js code 
const App = () => {
    return (
        <SafeAreaView style={appStyles.container}>
            <Text style={appStyles.title}>Bedtime Stories</Text>
            <StoryList />
        </SafeAreaView>
    );
};

const appStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginVertical: 20,
    },
});

// StoryList.js code
const mockStories = [
    { id: '1', title: 'The Sleepy Owl', content: 'Once upon a time...' },
    { id: '2', title: 'Dreamland Adventure', content: 'In a faraway land...' },
    { id: '3', title: 'Moonlit Pond', content: 'On a calm night...' },
];

const StoryList = () => {
    const renderItem = ({ item }) => (
        <View style={storyStyles.storyContainer}>
            <Text style={storyStyles.storyTitle}>{item.title}</Text>
            <Text style={storyStyles.storyContent}>{item.content}</Text>
        </View>
    );

    return (
        <FlatList
            data={mockStories}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={storyStyles.list}
        />
    );
};

const storyStyles = StyleSheet.create({
    list: {
        padding: 20,
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
});

export default App;