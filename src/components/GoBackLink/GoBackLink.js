import { IoMdArrowRoundBack } from 'react-icons/io';
import { GoBackNavLink } from './GoBackLink.Styled';

export const GoBackLink = ({ to }) => {
  return (
    <GoBackNavLink to={to} className="GoBackLink">
      <IoMdArrowRoundBack className="BackIcon" size={11} />
      Go back
    </GoBackNavLink>
  );
};
