import styled from 'styled-components';

export const FilterSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 360px;
`;

export const FilterBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Filters = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const FiltersHeading = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: var(--placeholder-color);
`;

export const FilterCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FilterCategoryHeading = styled.h4`
  font-size: 20px;
  font-weight: 600;
  border-bottom: 1px solid var(--border-soft-color);
`;

export const EquipmentFilters = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const TypeFilters = styled.div`
  display: flex;
  gap: 10px;
`;

export const TypeFilterButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 112px;
  height: 105px;
  text-align: center;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  transition: border-color var(--animation-cubicBezier);

  &.active {
    border-color: var(--red-cl);
  }

  &:hover,
  &:focus {
    border-color: var(--red-cl);
    cursor: pointer;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: var(--placeholder-color);
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 18px 18px 18px 44px;
  background-color: var(--main-bg-cl);
  border-radius: 10px;
  border: none;
  &::placeholder {
    color: var(--placeholder-color);
  }
`;

export const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
