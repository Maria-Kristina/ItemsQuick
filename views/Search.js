import React from 'react';
import {Container, Content, Header, Text} from 'native-base';
import FormTextInput from '../components/FormTextInput';
import useSearchForm from '../hooks/SearchHooks';


const Search = () => {

    const {inputs, handleSearchChange} = useSearchForm();

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
            </Content>
        </Container>
    );
};

export default Search;
