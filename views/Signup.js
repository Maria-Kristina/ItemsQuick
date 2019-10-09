import React from 'react';
import {Container, Content, Text, Header, Button} from 'native-base';
import FormTextInput from '../components/FormTextInput';
import useSignUpForm from '../hooks/SignUpHooks';
import {AsyncStorage} from 'react-native';


const Signup = (props) => {
    const {inputs, handleUsernameChange, handlePasswordChange, handlePasswordAgainChange, handleEmailChange} = useSignUpForm();

    const signUpAsync = async (url, data) => {
        if (inputs.password==inputs.passwordAgain) {
            //delete password check so it wont be sent to server
            delete inputs.passwordAgain;
            const url2 = url+'username/'+inputs.username;
            const response = await fetch(url2);
            const json = await response.json();
            console.log('password check ok')
 
            if (json.available == true) { // if username is available
                
                console.log('true, next posting to server');
                const response = await fetch(url, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data),
                });
                const json = await response.json();
                console.log('Answer: ', json);
                

                //log user in automatically
                const body = {username: inputs.username,
                              password: inputs.password};
                const autoLoginData = {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(body),
                }
                console.log('AutoLoginData: ', autoLoginData);
                const autoLogin = await fetch('http://media.mw.metropolia.fi/wbma/login/', autoLoginData);
                const autoLoginJson = await autoLogin.json();
                console.log(autoLoginJson); 
                await AsyncStorage.setItem('userToken', autoLoginJson.token);
                await AsyncStorage.setItem('user', JSON.stringify(autoLoginJson.user));
                //navigate to home screen
                props.navigation.navigate('Home');

            } else {
                //tell user username not available!
            };
        }
        else {
            console.log('passwords not matching')
            //tell user passwords dont match!
        }
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
                    value={inputs.passwordAgain}/>    
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
