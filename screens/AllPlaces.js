import PlacesList from '../components/Places/PlacesList';

const AllPlaces = () => {
  return (
    <PlacesList
      places={[
        { id: 1, title: 'First' },
        { id: 2, title: 'Second' },
      ]}
    />
  );
};

export default AllPlaces;
