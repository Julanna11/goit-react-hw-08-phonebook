import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/contacts/contacts-slice';
import { FilterContainer, Input, Span, Label } from './Filter.styled';
import { getFilter } from 'redux/contacts/contacts-selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const setFilterContact = event =>
    dispatch(filterContact(event.currentTarget.value));

  return (
    <FilterContainer>
      <Label>
        <Span>Find contacts by name</Span>
        <Input
          name="filter"
          type="text"
          value={filter}
          onChange={setFilterContact}
          required={false}
        />
      </Label>
    </FilterContainer>
  );
};
