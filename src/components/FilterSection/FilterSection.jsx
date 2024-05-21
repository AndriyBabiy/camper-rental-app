import { useDispatch, useSelector } from 'react-redux';
import {
  EquipmentFilters,
  FilterBlock,
  FilterCategory,
  FilterCategoryHeading,
  FilterSectionContainer,
  Filters,
  FiltersHeading,
  Input,
  Label,
  SearchButton,
  TypeFilterButton,
  TypeFilters,
} from './FilterSection.styled';
import {
  selectEquipmentFilter,
  selectFilteredProducts,
  selectLocationFilter,
  selectTypeFilter,
} from '../../redux/selectors';
import {
  setEquipmentFilterValue,
  setLocationFilterValue,
  setTypeFilterValue,
} from '../../redux/filterSlice';

const vehicleEquipmentData = [
  { id: 'hob', label: 'Hob' },
  { id: 'radio', label: 'Radio' },
  { id: 'CD', label: 'CD' },
  { id: 'airConditioner', label: 'Air Conditioner' },
  { id: 'beds', label: 'Beds' },
  { id: 'kitchen', label: 'Kitchen' },
  { id: 'engine', label: 'Engine' },
  { id: 'airConditioner-card', label: 'Air Conditioner Card' },
  { id: 'transmission', label: 'Transmission' },
  { id: 'adults', label: 'Adults' },
  { id: 'TV', label: 'TV' },
  { id: 'bathroom', label: 'Bathroom' },
];

const vehicleTypeData = ['Van', 'Fully Integrated', 'Alcove'];

export const FilterSection = () => {
  const dispatch = useDispatch();
  const locationFilter = useSelector(selectLocationFilter);
  const equipmentFilter = useSelector(selectEquipmentFilter);
  const typeFilter = useSelector(selectTypeFilter);
  const filteredProducts = useSelector(selectFilteredProducts);

  const handleLocationChange = e => {
    dispatch(setLocationFilterValue(e.target.value));
  };

  const handleEquipmentChange = e => {
    const { name, checked } = e.target;
    dispatch(setEquipmentFilterValue({ ...equipmentFilter, [name]: checked }));
  };

  const handleTypeChange = type => {
    dispatch(setTypeFilterValue(type));
  };

  const handleSearch = () => {
    console.log(filteredProducts);
  };

  return (
    <FilterSectionContainer>
      <FilterBlock>
        <Label htmlFor="location">Location</Label>
        <Input
          type="text"
          id="location"
          value={locationFilter}
          onChange={handleLocationChange}
          placeholder="Enter location"
        />
      </FilterBlock>
      <Filters>
        <FiltersHeading>Filters</FiltersHeading>
        <FilterCategory>
          <FilterCategoryHeading>Vehicle equipment</FilterCategoryHeading>
          <EquipmentFilters>
            {vehicleEquipmentData.map(({ id, label }) => (
              <FilterBlock key={id}>
                <input
                  type="checkbox"
                  name={id}
                  checked={equipmentFilter[id]}
                  onChange={handleEquipmentChange}
                />
                <svg width="20" height="20">
                  <use href={`#${id}`} />
                </svg>
                {label}
              </FilterBlock>
            ))}
          </EquipmentFilters>
        </FilterCategory>
        <FilterCategory>
          <FilterCategoryHeading>Vehicle type</FilterCategoryHeading>
          <TypeFilters>
            {vehicleTypeData.map(type => (
              <TypeFilterButton
                key={type}
                className={typeFilter === type ? 'active' : ''}
                onClick={() => handleTypeChange(type)}
              >
                {type}
              </TypeFilterButton>
            ))}
          </TypeFilters>
        </FilterCategory>
      </Filters>
      <SearchButton onClick={handleSearch}>Search</SearchButton>
    </FilterSectionContainer>
  );
};
