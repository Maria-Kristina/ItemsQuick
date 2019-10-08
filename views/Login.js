import React from 'react';
import {Container, Content, Text, Header, Button} from 'native-base';
import FormTextInput from '../components/FormTextInput';
import useLoginForm from '../hooks/LoginHooks';
import {AsyncStorage} from 'react-native';


const Login = (props) => {
    const signInAsync = async (url, data) => {
        // async fetch:
        const response = await fetch(url, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data),
        });
        const json = await response.json();
        await AsyncStorage.setItem('userToken', json.token);
        // setting user data to asyncStorege
        await AsyncStorage.setItem('user', JSON.stringify(json.user));
        props.navigation.navigate('Home');
      };

    //button functions WILL BE DELETED LATER
    const seeAppButton = () => {
        props.navigation.navigate('Home');
    };
    const signupButton = () => {
        props.navigation.navigate('Signup');
    };
    //button functions until here

    const {inputs, handleUsernameChange, handlePasswordChange} = useLoginForm();
    //login button function
    const loginButton = () => {
        signInAsync('http://media.mw.metropolia.fi/wbma/login', inputs);
    };
    return(
        <Container>
            <Header>
                <Text>
                    Login page
                </Text>
            </Header>
            <Content>
                <FormTextInput
                    autoCapitalize='none'
                    placeholder='Username'
                    onChangeText={handleUsernameChange}
                    value={inputs.username}/>
                <FormTextInput
                    autoCapitalize='none'
                    placeholder='Password'
                    secureTextEntry={true}
                    onChangeText={handlePasswordChange}
                    value={inputs.password} />
                <Button onPress={loginButton}>
                    <Text>
                        Login
                    </Text>
                </Button>
                <Button onPress={seeAppButton}>
                    <Text>
                        See app without login!
                    </Text>
                </Button>
                <Button onPress={signupButton}>
                    <Text>
                        Create account
                    </Text>
                </Button>
            </Content>
        </Container>
    )
}

export default Login;
