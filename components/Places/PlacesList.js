import { FlatList, StyleSheet, Text, View } from 'react-native';

import PlaceItem from './PlaceItem';

import { Colors } from '../../constants/colors';

const PlacesList = ({ places }) => {
  return !places || places.length === 0 ? (
    <View style={styles.fallbackContainer}>
      <Text style={styles.fallbackText}>There is no places yet</Text>
    </View>
  ) : (
    <FlatList
      data={places}
      keyExtractor={(place) => place.id}
      renderItem={({ item }) => <PlaceItem place={item} />}
      style={styles.list}
    />
  );
};

export default PlacesList;

const styles = StyleSheet.create({
  list: {
    margin: 24,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary200,
  },
});
