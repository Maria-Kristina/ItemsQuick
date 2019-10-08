import React from 'react';
import {Container, Content, Text, Header, Button, Card, CardItem} from 'native-base';
import {Image} from 'react-native';

const ImageView = (props) => {
    const url = props.navigation.getParam('url');
    
    return(
        <Container>
            <Header>
                <Text>
                    Image here!
                </Text>
            </Header>
            <Content>
                <Card>
                    <CardItem>
                        <Image source={{uri: url}}style={{height: 400, width: 400}}></Image>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    );
};

export default ImageView;
