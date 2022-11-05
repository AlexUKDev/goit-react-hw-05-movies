import { AiFillHome } from 'react-icons/ai';
import { RiMovieFill } from 'react-icons/ri';

import { HeaderBox, NavWrap, LinkItem } from './AppBar.Syled';

const NavItemConfig = [
  { href: '/', text: 'Home', icon: AiFillHome },
  { href: '/movies', text: 'Movies', icon: RiMovieFill },
];

export const AppBar = () => {
  return (
    <HeaderBox>
      <NavWrap>
        {NavItemConfig.map(({ href, text, icon: Icon }) => {
          return (
            <LinkItem to={href}>
              <Icon size="15" />
              {text}
            </LinkItem>
          );
        })}
      </NavWrap>
    </HeaderBox>
  );
};
