import React from 'react';
import { Text, View, Header, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import db from '../config'
import * as firebase from 'firebase';

export default class WriteStoryScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            author: '',
            story: ''            
        }
    }

submitStory = () => {
    db.collection('stories').add({
        title: this.state.title,
        author: this.state.author,
        story: this.state.story,
    })
}

render() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TextInput style={styles.inputBox}
                placeholder="Title"
                onChangeText={(text) => { this.setState({ title: text }) }}
            />
            <TextInput style={styles.inputBox}
                placeholder="Author"
                onChangeText={(text) => { this.setState({ author: text }) }}
            />
            <TextInput multiline={true} style={styles.storyInputBox}
                placeholder="Write story"
                onChangeText={(text) => { this.setState({ story: text }) }}
            />

            <TouchableOpacity style={styles.submitButton}
                onPress={this.submitStory()} >
                <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}
}

const styles = StyleSheet.create({
    inputView: {
        flexDirection: 'row',
        margin: 20
    },
    inputBox: {
        width: 400,
        height: 40,
        borderWidth: 1.5,
        borderRightWidth: 0,
        fontSize: 20,
        marginTop: 20
    },
    storyInputBox: {
        width: 400,
        height: 400,
        borderWidth: 1.5,
        borderRightWidth: 0,
        fontSize: 20,
        marginTop: 20
    },
    submitButton: {
        backgroundColor: 'green',
        width: 100,
        height: 50,
        marginTop: 20
    },
    submitButtonText: {
        padding: 10,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: "bold",
        color: 'white'
    }

});
