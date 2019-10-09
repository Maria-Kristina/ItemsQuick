import React from 'react';
import {Text, Container, Header, Content} from 'native-base';

//Dummy payment page

const Payment = (props) => {
    return (
        <Container>
            <Header>
                <Text>
                    Payment
                </Text>
            </Header>
            <Content>
                <Text>
                    Pay using Visa etc.
                </Text>
            </Content>
        </Container>
    );
};

export default Payment;