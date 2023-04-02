import { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import OutlinedButton from '../components/UI/OutlinedButton';

import { fetchPlaceDetails } from '../utils/database';
import { Colors } from '../constants/colors';

const PlaceDetails = ({ route, navigation }) => {
  const selectedPlaceId = route.params.placeId;
  const [fetchedPlace, setFetchedPlace] = useState();

  useEffect(() => {
    async function loadPlaceData() {
      const place = await fetchPlaceDetails(selectedPlaceId);
      setFetchedPlace(place);
      navigation.setOptions({
        title: place?.title,
      });
    }

    loadPlaceData();
  }, [selectedPlaceId]);

  function showOnMapHandler() {
    // console.log(fetchedPlace.lat, fetchedPlace.lng);
    navigation.navigate('Map', {
      initialLat: fetchedPlace.location.lat,
      initialLng: fetchedPlace.location.lng,
    });
  }

  return fetchedPlace ? (
    <ScrollView>
      <Image style={styles.image} source={{ uri: fetchedPlace?.imageUri }} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{fetchedPlace?.address}</Text>
        </View>
        <OutlinedButton icon="map" onPress={showOnMapHandler}>
          View on Map
        </OutlinedButton>
      </View>
    </ScrollView>
  ) : (
    <View style={styles.fallback}>
      <Text>Loading Place Data...</Text>
    </View>
  );
};

export default PlaceDetails;

const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '35%',
    minHeight: 300,
    width: '100%',
  },
  locationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
