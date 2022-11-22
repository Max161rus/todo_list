import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
`;

export const Heading = styled.h1`
  width: 100%;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
`;

export const NewTodo = styled.div`
  display: flex;
  box-shadow: inset 0 -2px 1px rgb(0 0 0 / 30%);
  background-color: white;
  height: 50px;
`;


export const NewTodoLabelNonActive = styled.label`
  font-size: 30px;
  font-weight: 300;
  margin-left: 20px;
  margin-right: 20px;
  transform: rotate(90deg);
  opacity: 0.5;
  @media (max-width: 500px) {
    font-size: 25px;
    font-weight: 250;
    margin-left: 15px;
    margin-right: 15px;
  }
  @media (max-width: 450px) {
    font-size: 20px;
    font-weight: 200;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const NewTodoLabelActive = styled.label`
  font-size: 30px;
  font-weight: 300;
  margin-left: 20px;
  margin-right: 20px;
  transform: rotate(90deg);
  opacity: 1;
  @media (max-width: 500px) {
    font-size: 25px;
    font-weight: 250;
    margin-left: 15px;
    margin-right: 15px;
  }
  @media (max-width: 450px) {
    font-size: 20px;
    font-weight: 200;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const NewTodoWrapper = styled.div`
  display: flex;
  width: 50px;
`;

export const NewTodoText = styled.input`
  padding: 16px 16px 16px 10px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  color: inherit;
  outline: none;
  ::placeholder {
    color: #d9d9d9
  }
  @media (max-width: 500px) {
    font-size: 20px;
    padding-left: 0x;
  }
  @media (max-width: 450px) {
    font-size: 15px;
  }
`;





