import React from 'react';
import {Container, Content, Text, Header, Button} from 'native-base';
import FormTextInput from '../components/FormTextInput';
import useSignUpForm from '../hooks/SignUpHooks';
import {AsyncStorage} from 'react-native';


const Signup = (props) => {
    const {inputs, handleUsernameChange, handlePasswordChange, handlePasswordAgainChange, handleEmailChange} = useSignUpForm();

    const signUpAsync = async (url, data) => {
        if (inputs.password==inputs.passwordAgain) {
            const url2 = url+'username/'+inputs.username;
            const response = await fetch(url2);
            const json = await response.json();
            console.log('password check ok')
 
            // check if username is available
            if (json.available == true) {
                console.log('true, next posting to server');
                const response = await fetch(url, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data),
                });
                const json = await response.json();
                console.log('Answer: ', json);
            } else {
                console.log('false');
            
            };
        }
        else {
            console.log('passwords not matching')
        }
    };

    const  hdcbhjb = async (url, data) => {
        
        
        //await AsyncStorage.setItem('userToken', json.token);
        // setting user data to asyncStorege
        //await AsyncStorage.setItem('user', JSON.stringify(json.user));
        //props.navigation.navigate('Home');
      };

    const signUpButton = () => {
        signUpAsync('http://media.mw.metropolia.fi/wbma/users/', inputs);
    };

    return(
        <Container>
            <Header>
                <Text>
                    Signup page
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
                    value={inputs.password}/>
                <FormTextInput
                    autoCapitalize='none'
                    placeholder='Password again'
                    secureTextEntry={true}
                    onChangeText={handlePasswordAgainChange}
                    value={inputs.passwwordAgain}/>    
                <FormTextInput
                    autoCapitalize='none'
                    placeholder='Email'
                    onChangeText={handleEmailChange}
                    value={inputs.email}/>
                <Button onPress={signUpButton}>
                    <Text>
                        Sign up!
                    </Text>
                </Button>
            </Content>
        </Container>
    );
};

export default Signup;
