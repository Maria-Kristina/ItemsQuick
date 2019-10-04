import React from 'react';
import {Container, Content, Text, Header, Button, Card, CardItem} from 'native-base';
import {Image} from 'react-native';

const ImageView = (props) => {
    const fileName = props.navigation.getParam('file');
    const url = 'http://media.mw.metropolia.fi/wbma/uploads/' + fileName;
    console.log('Props in ImageView: ', props);
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
