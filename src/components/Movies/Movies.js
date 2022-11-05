import { Outlet } from 'react-router-dom';

import { Wrap, InputSearch } from './Movies.Syled';

export const Movies = () => {
  return (
    <Wrap>
      <InputSearch type="text" />
      <Outlet />
    </Wrap>
  );
};

// export default Movies;

// onChange={inputOnChange} value={inputValue}
