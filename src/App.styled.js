import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;

  @media (max-width: 500px) {
        width: 300px;
  }
  
  @media (max-width: 450px) {
        width: 250px;
  }
`;

export default Section;