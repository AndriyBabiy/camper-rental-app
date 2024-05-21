import { useDispatch, useSelector } from 'react-redux';
import { setTypeFilterValue } from '../../redux/filterSlice';
import { selectTypeFilter } from '../../redux/selectors';

const typeOptions = [
  { key: 'Van', label: 'Van' },
  { key: 'Fully Integrated', label: 'Fully Integrated' },
  { key: 'Alcove', label: 'Alcove' },
];

export const TypeFilter = () => {
  const dispatch = useDispatch();
  const filterType = useSelector(selectTypeFilter);

  const handleToggle = type => {
    dispatch(setTypeFilterValue(type));
  };

  return (
    <div>
      <h3>Vehicle Type</h3>
      {typeOptions.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => handleToggle(key)}
          className={filterType === key ? 'selected' : ''}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
