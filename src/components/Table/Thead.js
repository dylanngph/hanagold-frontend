import styled from 'styled-components';

const Wrapper = styled.thead`
  background: linear-gradient(90.49deg, rgba(255, 255, 255, 0.17) 6.72%, rgba(255, 255, 255, 0.07) 77.46%);
`;

const Thead = ({children}) => {
  return (
      <Wrapper>
        {children}
      </Wrapper>
  );
};

export default Thead;