import styled from 'styled-components';
import svg123 from '../../svgs/Landpage-svgs/123.svg';
import svg5 from '../../svgs/Landpage-svgs/5.svg';

const DecorationContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  background-image: url(${svg123}), url(${svg5});
  background-size: 25%, 20%;
  background-position: top right, bottom left;
  background-repeat: no-repeat, no-repeat;
  z-index: 0;

  @media (max-width: 768px) {
    background-size: 40%, 30%;
    background-position: top right, bottom left;
  }
`;

const Decoration: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <DecorationContainer>{children}</DecorationContainer>;
};

export default Decoration;