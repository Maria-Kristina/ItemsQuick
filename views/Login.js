import React from 'react';
import {Container, Content,Text, Header, Button} from 'native-base';
import FormTextInput from '..components/FormTextInput';
import useSignupForm from '..hooks/LoginHooks';
import {AsyncStorage} from 'react-native';


const Login = (props) => {
    const loginButton = () => {
        props.navigation.navigate('Home');
    };
    const signupButton = () => {
        props.navigation.navigate('Signup');
    };
    return(
        <Container>
            <Header>
                <Text>
                    Login page
                </Text>
            </Header>
            <Content>
                <Button onPress={loginButton}>
                    <Text>
                        Login!
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
