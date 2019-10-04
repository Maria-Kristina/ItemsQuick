/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
import React, {useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import {MediaContext} from '../contexts/MediaContext';
import {List as BaseList, Container} from 'native-base';

const useFetch = (url) => {
  const [media, setMedia] = useContext(MediaContext);
  const [loading, setLoading] = useState(true);
  const fetchUrl = async () => {
    const response = await fetch(url);
    const json = await response.json();
    setMedia(json);
    console.log(json);
    setLoading(false);
  };
  useEffect(fetchUrl, []);
  return [media, loading];
};

const List = (props) => {
  const [media, loading] = useFetch('http://media.mw.metropolia.fi/wbma/tags/items');
  return (
    <Container>
      <BaseList
        dataArray={media}
        renderRow={
          (item) => <ListItem
            navigation={props.navigation}
            singleMedia={item}
          />
        }
        keyExtractor={(item, index) => index.toString()}
      />
    </Container>
  );
};

List.propTypes = {
  mediaArray: PropTypes.array,
};

export default List;
