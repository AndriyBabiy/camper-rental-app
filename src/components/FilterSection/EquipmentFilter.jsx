import { useDispatch, useSelector } from 'react-redux';
import { setEquipmentFilterValue } from '../../redux/filterSlice';
import { selectEquipmentFilter } from '../../redux/selectors';

const equipmentOptions = [
  { key: 'airConditioner', label: 'AC' },
  { key: 'automatic', label: 'Automatic' },
  { key: 'kitchen', label: 'Kitchen' },
  { key: 'tv', label: 'TV' },
  { key: 'shower', label: 'Shower/WC' },
  { key: 'wc', label: 'WC' },
  { key: 'toilet', label: 'Toilet' },
];

export const EquipmentFilter = () => {
  const dispatch = useDispatch();
  const filterEquipment = useSelector(selectEquipmentFilter);

  const handleToggle = equipment => {
    dispatch(
      setEquipmentFilterValue({
        equipment,
        value: !filterEquipment[equipment],
      })
    );
  };

  return (
    <div>
      <h3>Vehicle Equipment</h3>
      {equipmentOptions.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => handleToggle(key)}
          className={filterEquipment[key] ? 'selected' : ''}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
