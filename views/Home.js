import React from 'react';
import {Container, Content, Header, Text} from 'native-base';


const Home = (props) => {
    const {navigation} = props;
    return (
        <Container>
            <Header>
                <Text>
                    Home page
                </Text>
            </Header> 
        </Container>
    );
};

export default Home;
