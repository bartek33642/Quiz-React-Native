import React, { useState } from 'react';
import { View,StyleSheet, FlatList, RefreshControl, Text } from 'react-native';

const data = [
  { key: '1', nick: 'Marek', score: 2, total: 3, type: 'Film', date: '2022-11-22' },
  { key: '2', nick: 'Ania', score: 1, total: 3, type: 'Muzyka', date: '2022-11-23' },
  { key: '3', nick: 'Tomek', score: 2, total: 4, type: 'Ogólne', date: '2022-11-24' },
];

const Results = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // ... fetch new data
    setRefreshing(false);
  }

  return (
    <View style={styles.container}>
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={styles.containerNicks}>
          <View><Text>Nick: {item.nick}</Text></View>
          <View><Text>Wynik: {item.score}/{item.total}</Text></View>
          <View><Text>Quiz: {item.type}</Text></View>
          <View><Text>Data: {item.date}</Text></View>
        </View>
      )}
      keyExtractor={item => item.key}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
  },
  containerNicks: {
    backgroundColor: 'lightgrey',
    margin: 5,
    padding: 5,
    borderRadius: 10,
  }
});

export default Results;