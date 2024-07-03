// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const mockStories = [
    {
        id: '1',
        title: 'The Sleepy Owl',
        content: 'Once upon a time, in a deep dark forest, there lived a sleepy owl named Ollie. Ollie was different from other owls. He loved to sleep and would spend most of his nights snoozing away. One day, he met Lucy the firefly, who taught him the beauty of the night. Together, they journeyed through the forest, discovering wonders and making friends. Ollie realized that the night was not just for sleeping but for living too!'
    },
    {
        id: '2',
        title: 'Dreamland Adventure',
        content: 'In a faraway land, there was a magical place called Dreamland. Every night, children all over the world would visit Dreamland in their dreams. One night, a little boy named Tim found himself on an adventure in Dreamland. He met talking stars, floating islands, and friendly dragons. With the help of his new friends, Tim overcame his fears and learned the power of courage and imagination. He woke up feeling braver and happier than ever before.'
    },
    {
        id: '3',
        title: 'Moonlit Pond',
        content: 'On a calm night, Lily the frog sat by the Moonlit Pond. The pond was special, glowing under the moon’s gentle light. Lily often dreamt of exploring the world beyond the pond. One night, a wise turtle named Tuck offered to guide her. Together, they embarked on a journey filled with enchanting sights and sounds. Lily saw the grandeur of nature and felt a profound connection with every living thing. She returned home with a heart full of gratitude and wonder.'
    },
];

const StoryList = ({ navigation }) => {
    const handlePress = (story) => {
        navigation.navigate('StoryDetail', { story });
    };

    return (
        <View style={styles.list}>
            {mockStories.map((story) => (
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

// App.js
const Stack = createStackNavigator();

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
        padding: 20,
    },
    list: {
        flex: 1,
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
});