import PlaceForm from '../components/Places/PlaceForm';
import { insertPlace } from '../utils/database';

const AddPlace = ({ navigation }) => {
  const createPlaceHandler = (placeData) => {
    insertPlace(placeData);
    navigation.navigate('AllPlaces', { placeData });
  };

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
};

export default AddPlace;
