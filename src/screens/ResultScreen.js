// NOTE: Presents the full information

import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList} from 'react-native';
import yelp from '../api/yelp'
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { createKeyboardAwareNavigator } from 'react-navigation';

const ResultScreen = ({navigation}) => {
  const [result, setResult] = useState(null)
  const businessId = navigation.getParam('id');
  

  const getBusiness = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data)
    console.log(result)
  };

  useEffect(() => {
    getBusiness(businessId);
  }, []);

  if(!result) {
    return null
  }

  return (
    <View style = {styles.container}>
    <ScrollView>

    <FlatList 
      horizontal
      data = { result.photos }
      keyExtractor = { (photo) => photo }
      renderItem = { ({ item }) => {
        return (
          <Image source = {{uri: item}} style = {styles.galleryItem} />
        )
      }}
    />

    <View style = {styles.addressView}>
      <Text style = {styles.title}>{result.name}</Text>
      <Text style = {styles.address}>
        <Entypo name = "address" style = {styles.iconStyle} /> 
        {result.location.display_address.join(', ')}
      </Text>
      <Text style = {styles.address}>
        <Feather name = "phone" style = {styles.iconStyle} /> 
        {result.display_phone}
      </Text>
    </View>
    </ScrollView>
  </View>)
};

const styles = StyleSheet.create({
  container: {
    margin: 6,
    flex: 1
  },
  galleryItem: {
    height: 150,
    width: 200,
    marginBottom: 6,
    marginLeft: 6
  },
  addressView: {
    height: 150,
    width: '100%',
    marginTop: 12,
    marginBottom: 6,
    backgroundColor: '#F0EEEE',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12
  },
  address: {
    fontSize: 18
  },
  iconStyle: {
    fontSize: 25,
    alignSelf: 'flex-start'
  }
})

export default ResultScreen
