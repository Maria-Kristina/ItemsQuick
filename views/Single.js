import React from 'react';
import {Container, Content, Text, Header, Button} from 'native-base';
import {setRecoveryProps} from 'expo/build/ErrorRecovery/ErrorRecovery';

const Single = (props) => {
    const imageViewButton = () => {
        props.navigation.navigate('ImageView');
    };
    return(
        <Container>
            <Header>
                <Text>
                    Single post
                </Text>
            </Header>
            <Content>
                <Button onPress={imageViewButton}>
                    <Text>
                        Image test
                    </Text>
                </Button>
            </Content>
        </Container>
    );
};

export default Single;
