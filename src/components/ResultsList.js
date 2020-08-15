

import React from 'react';
import ResultDetails from './ResultDetails'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native';
import {withNavigation} from 'react-navigation';

const ResultsList = ({ title, results, navigation }) => {
  if(!results.length) {
    return null;
  }
  return(
    <View style = {styles.container}>
      <Text style = {styles.title}>{title} ({results.length} places)</Text>
      <FlatList
        horizontal
        data = { results }
        keyExtractor = { (result) => result.id }
        showsHorizontalScrollIndicator = {false}
        renderItem = { ({ item }) => {
          return (
            <TouchableOpacity onPress = {() => navigation.navigate('Result', {id: item.id})}>
            <ResultDetails result = { item } />
            </TouchableOpacity>
          )
        }}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginLeft: 15,
    fontSize: 25,
    fontWeight: 'bold'
  },
  container: {
    marginBottom: 10
  }
});

export default withNavigation(ResultsList);
