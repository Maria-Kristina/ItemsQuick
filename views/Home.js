import React from 'react';
import {Container, Content, Header, Text, Button} from 'native-base';
import List from '../components/List';

// Home page

const Home = (props) => {
    const {navigation} = props;
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
                <List navigation={navigation}>
                </List>
            </Content>
        </Container>
    );
};

export default Home;
