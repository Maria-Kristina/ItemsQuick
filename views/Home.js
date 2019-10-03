import React from 'react';
import {Container, Content, Header, Text, Button} from 'native-base';


const Home = (props) => {
    singleButton = () => {
        props.navigation.navigate('Single');
    };

    return (
        <Container>
            <Header>
                <Text>
                    Home page
                </Text>
            </Header> 
            <Content>
                <Button onPress={singleButton}>
                    <Text>
                        Single post test
                    </Text>
                </Button>
            </Content>
        </Container>
    );
};

export default Home;
