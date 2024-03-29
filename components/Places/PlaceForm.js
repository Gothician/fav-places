import { useCallback, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import ImagePicker from './ImagePicker';
import LocationPicker from './LocationPicker';
import Button from '../UI/Button';

import { Place } from '../../models/place';
import { Colors } from '../../constants/colors';

const PlaceForm = ({ onCreatePlace }) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [pickedImage, setPickedImage] = useState();
  const [pickedLocation, setPickedLocation] = useState();

  const changeTitleHandler = (enteredText) => {
    setEnteredTitle(enteredText);
  };

  const imagePickedHandler = (imageUri) => {
    setPickedImage(imageUri);
  };

  const locationPickedHandler = useCallback((location) => {
    setPickedLocation(location);
  }, []);

  const savePlaceHandler = () => {
    const placeData = new Place(enteredTitle, pickedImage, pickedLocation);
    onCreatePlace(placeData);
  };

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          onChangeText={changeTitleHandler}
          value={enteredTitle}
          style={styles.input}
        />
      </View>
      <ImagePicker onImagePicked={imagePickedHandler} />
      <LocationPicker onLocationPicked={locationPickedHandler} />
      <Button onPress={savePlaceHandler}>Add Place</Button>
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});
