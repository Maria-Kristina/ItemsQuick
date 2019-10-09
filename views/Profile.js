import React from 'react';
import {Container, Content, Text, Header, Button} from 'native-base';
import {AsyncStorage} from 'react-native';

//User profile page

const Profile = (props) => {

    const logoutButton = async () => {
        await AsyncStorage.clear();
        console.log('AsyncStorage cleared!');
        props.navigation.navigate('Login');
    };
return (
    <Container>
        <Header>
            <Text>Profile</Text>
        </Header>
        <Content>
            <Button onPress={logoutButton}>
                <Text>
                    Log out
                </Text>
            </Button>
        </Content>
    </Container>
    );
};

export default Profile;
