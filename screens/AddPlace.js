import PlaceForm from '../components/Places/PlaceForm';

const AddPlace = ({ navigation }) => {
  const createPlaceHandler = (placeData) => {
    navigation.navigate('AllPlaces', { placeData });
  };

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
};

export default AddPlace;
