import styled, {css} from 'styled-components';

export const ListItem = styled.li`
  list-style-type: none;
`;

export const ListClear = styled.button`
  color: #cc9a9a;
  text-align: center;
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 5px;
  opacity: 0;
  border: none;
  background-color: white;
  :hover {
    color: #af5b5e;
  }
  @media (max-width: 500px) {
    margin-right: 10px;
  }
`;

export const ListWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  min-height: 50px;
  box-shadow: inset 0 -2px 1px rgb(0 0 0 / 30%);
  position: relative;
  :hover ${ListClear} {
    opacity: 1;
  }
`;

export const Img = styled.img`
  width: 35px;
  margin-right: 10px; 
  @media (max-width: 500px) {
    width: 30px;
  }
  @media (max-width: 450px) {
    width: 25px;
  }
`;

export const ListText = styled.input`
  position: absolute;
  height: 40px;
  border: 0px;
  width: 97%;
  font-size: 24px;
  margin-bottom: 2px;
  background-color: white;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  color: inherit;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  left: 5px;
  @media (max-width: 500px) {
    font-size: 20px;
  }
  @media (max-width: 450px) {
    font-size: 15px;
  }
`;

export const ListTodo = styled.label`
  height: auto;
  border: 0px;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 79%;
  font-size: auto;
  margin-right: 15px;
  background-color: white;
  word-break: break-all;
  ${props =>
    props.complited  &&
    css`
    text-decoration: line-through;
    color: grey;
    opacity: 0.5;
  `}; 
`;

