import React from 'react';
import {Container, Content, Text, Header, Button, Card, CardItem} from 'native-base';
import {Image} from 'react-native';

// Single post page

const Single = (props) => {
    const {navigation} = props;
    const fileName = navigation.getParam('filename');
    const description = navigation.getParam('description');
    const url = 'http://media.mw.metropolia.fi/wbma/uploads/' + fileName;

    const imageViewButton = () => {
        navigation.push('ImageView', {url: url});
    };

    const toPaymentButton = () => {
        navigation.push('Payment')
    };
    
    return(
        <Container>
            <Header>
                <Text>
                    Single post
                </Text>
            </Header>
            <Content>
                <Image
                    source={{uri: url}}
                    style={{height:100, width: 100}}
                    >
                </Image>
                <Card>
                    <Text>
                        {description}
                    </Text>
                </Card>
                <Button onPress={imageViewButton}>
                    <Text>
                        Image test
                    </Text>
                </Button>
                <Button onPress={toPaymentButton}>
                    <Text>
                        Buy
                    </Text>
                </Button>
            </Content>
        </Container>
    );
};

export default Single;
