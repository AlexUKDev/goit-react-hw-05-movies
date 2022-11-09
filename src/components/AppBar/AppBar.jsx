import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { RiMovieFill } from 'react-icons/ri';

import { HeaderBox, NavWrap, NavLinkItem } from './AppBar.Syled';

const NavItemConfig = [
  { href: '/', text: 'Home', icon: AiFillHome },
  { href: '/movies', text: 'Movies', icon: RiMovieFill },
];

export const AppBar = () => {
  return (
    <>
      <HeaderBox>
        <NavWrap>
          {NavItemConfig.map(({ href, text, icon: Icon }) => {
            return (
              <NavLinkItem to={href} key={text}>
                <Icon size="15" />
                {text}
              </NavLinkItem>
            );
          })}
        </NavWrap>
      </HeaderBox>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
