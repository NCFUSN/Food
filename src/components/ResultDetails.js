import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

const ResultDetails = ({result}) => {
  return (<View style = {styles.container}>
    <Image source = {{uri: result.image_url }} style = {styles.image}/>
    <Text style = {styles.name} > {result.name} </Text>
    <Text style = {styles.reviews} > {result.rating} Stars {result.review_count} Reviews.</Text>
    </View>);
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginTop: 10,
  },
  name: {
    fontWeight: 'bold'
  },
  reviews: {
    fontSize: 14,
    marginBottom: 9
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 4,
    marginBottom: 7
  }
});

export default ResultDetails;
