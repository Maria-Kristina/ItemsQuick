import React from 'react';
import {Container, Content, Header, Text, Button} from 'native-base';
import FormTextInput from '../components/FormTextInput';
import useSearchForm from '../hooks/SearchHooks';

//Post search page

const Search = () => {

    const searchAsync = async (url) => {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
      };

    const {inputs, handleSearchChange} = useSearchForm();

    const searchButton = () => {
        searchAsync('http://media.mw.metropolia.fi/wbma/tags/'+inputs.search);
        console.log('Url fetched from: http://media.mw.metropolia.fi/wbma/tags/'+inputs.search);
    };

    return(
        <Container>
            <Header>
                <Text>
                    Search page
                </Text>
            </Header>
            <Content>
                <FormTextInput
                autoCapitalize='none'
                placeholder='Search'
                onChangeText={handleSearchChange}
                value={inputs.search}
                >
                </FormTextInput>
                <Button onPress={searchButton()}>
                    <Text>
                        Search
                    </Text>
                </Button>
            </Content>
        </Container>
    );
};

export default Search;
