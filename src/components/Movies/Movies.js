import { Outlet } from 'react-router-dom';

import { Wrap, InputSearch } from './Movies.Syled';

export const Movies = () => {
  return (
    <Wrap>
      <InputSearch type="text" onChange={e => console.log(e.target.value)} />
      <Outlet />
    </Wrap>
  );
};
