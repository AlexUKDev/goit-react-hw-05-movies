import { FcSearch } from 'react-icons/fc';
import { Box, InputSearch, Form, Button } from './SearchBox.Styled';
export const SearchBox = ({
  searchParamsHandler,
  submitHandler,
  searchValue,
}) => {
  return (
    <Box>
      <Form onSubmit={submitHandler}>
        <Button type="submit" className="subBtn">
          <FcSearch size={25} className="searchIcon" />
        </Button>
        <InputSearch
          type="text"
          onChange={searchParamsHandler}
          value={searchValue}
        />
      </Form>
    </Box>
  );
};
