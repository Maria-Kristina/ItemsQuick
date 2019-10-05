/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {ListItem as BaseListItem, Text, Image, TouchableOpacity, Right, Thumbnail, Left, Title} from 'native-base';

const getThumbnail = (url) => {
  const [thumbnails, setThumbnails] = useState({});
  async function fetchUrl() {
    const response = await fetch('http://media.mw.metropolia.fi/wbma/media/' + url);
    const json = await response.json();
    setThumbnails(json.thumbnails);
  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return thumbnails;
};

const ListItem = (props) => {
  const {navigation, singleMedia} = props;
  const tn = getThumbnail(props.singleMedia.file_id);
  return (
    <BaseListItem onPress={
      ()=> {
          //file & desc used in imageview com from here
          //v ei toimi, alkup, muoto
        //navigation.push('Single', {file: singleMedia.filename, desc: singleMedia.description});
        //navigation.navigate('Single');
        navigation.push('Single', singleMedia);
      }
    }>
      <Right>
        <Thumbnail
          source={{uri: 'http://media.mw.metropolia.fi/wbma/uploads/' + tn.w160}}
        />
      </Right>
      <Left>
        <Text> {props.singleMedia.title} </Text>
        <Text> {props.singleMedia.description} </Text>
      </Left>
    </BaseListItem>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object.isRequired,
};

export default ListItem;
