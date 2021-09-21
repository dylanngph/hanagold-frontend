import ButtonMenu from 'components/ButtonMenu/ButtonMenu';
import ButtonMenuItem from 'components/ButtonMenu/ButtonMenuItem';
import styled from 'styled-components';

const FarmTabButtons = () => {

  return (
      <Wrapper>
        <ButtonMenu variant="secondary">
          <ButtonMenuItem >
            Digital Assets
          </ButtonMenuItem>
          <ButtonMenuItem>
            Tokenized Stocks
          </ButtonMenuItem>
        </ButtonMenu>
      </Wrapper>
  );
};

export default FarmTabButtons;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    padding-left: 12px;
    padding-right: 12px;
  }

  ${({theme}) => theme.mediaQueries.sm} {
    margin-left: 16px;
  }
`;
