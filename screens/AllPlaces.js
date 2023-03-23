import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import PlacesList from '../components/Places/PlacesList';
import { fetchPlaces } from '../utils/database';

const AllPlaces = ({ route }) => {
  const isFocused = useIsFocused();
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  useEffect(() => {
    async function loadedPlaces() {
      const places = await fetchPlaces();

      setLoadedPlaces(places);
    }

    if (isFocused) {
      loadedPlaces();
      //setLoadedPlaces((curPlaces) => [...curPlaces, route.params.placeData]);
    }
  }, [isFocused]);

  return <PlacesList places={loadedPlaces} />;
};

export default AllPlaces;
