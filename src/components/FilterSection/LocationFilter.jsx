import { useDispatch } from 'react-redux';
import { setLocationFilterValue } from '../../redux/filterSlice';

export const LocationFilter = () => {
  const dispatch = useDispatch();

  const handleLocationChange = event => {
    dispatch(setLocationFilterValue(event.target.value));
  };

  return (
    <div>
      <label>Location</label>
      <input
        type="text"
        onChange={handleLocationChange}
        placeholder="Enter location"
      />
    </div>
  );
};
