import { Box, InputSearch } from './SearchBox.Styled';
export const SearchBox = ({ onChangeFn, searchValue }) => {
  return (
    <Box>
      <InputSearch type="text" onChange={onChangeFn} value={searchValue} />
    </Box>
  );
};
