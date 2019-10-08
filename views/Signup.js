import React from 'react';
import {Container, Content, Text, Header, Button} from 'native-base';
import FormTextInput from '../components/FormTextInput';
import useSignUpForm from '../hooks/SignUpHooks'


const Signup = (props) => {
    const {inputs, handleUsernameChange, handlePasswordChange} = useSignUpForm();
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
                    value={inputs.password} />
            </Content>
        </Container>
    );
};

export default Signup;
