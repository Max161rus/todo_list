import styled, {css} from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: inset 0 -2px 1px rgb(0 0 0 / 30%);
  height: 50px;

  @media  (max-width: 500px) {
    height: 65px;
  }
`;

export const Count = styled.p`
  color: #4d4d4d;
  font-weight: 500;
`;

export const Filter = styled.div`
  @media  (max-width: 500px) {
        display: flex;
        flex-direction: column;
  }
`;

export const FilterButton = styled.button`
  border: 1px solid white;
  border-radius: 2px;
  color: #4d4d4d;
  font-weight: 500;
  background-color: white;
  margin-right: 5px;
  :hover {
    border-color: orange;
  }
  ${props =>
    props.filter  &&
    css`
    border: 1px solid orange;
  `}; 
`;

export const BtnClear = styled.div`
  width: 100px; 
`;

export const Clear = styled.button`
  color: #4d4d4d;
  font-weight: 500;
  border: none;
  background-color: white;
  :hover {
    text-decoration: underline;
  }
`;