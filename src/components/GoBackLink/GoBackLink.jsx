import { IoMdArrowRoundBack } from 'react-icons/io';
import { GoBackNavLink } from './GoBackLink.Styled';

export const GoBackLink = ({ to, state }) => {
  return (
    <GoBackNavLink to={to} className="GoBackLink" state={{ from: state }}>
      <IoMdArrowRoundBack className="BackIcon" size={11} />
      Go back
    </GoBackNavLink>
  );
};
