import React from 'react';
import {Container, Content, Text, Header, Button, Card, CardItem} from 'native-base';
import {Image} from 'react-native';


const Single = (props) => {
    const imageViewButton = () => {
        const {navigation} = props;
        //file ja desc lähetetään ImageView
        navigation.push('ImageView', {file: navigation.getParam('filename')});
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
