import Flex from 'components/Box/Flex';
import LinkExternal from 'components/Link/LinkExternal';
import Text from 'components/Text/Text';
import styled from 'styled-components';

const listProductsServices = [
  {
    title: 'DIPO',
    subTitle: 'dipo.livetrade.io',
    href: 'https://dipo.livetrade.io/'
  },
  {
    title: 'Digital Asset Banking',
    subTitle: 'nexo.livetrade.io',
    href: 'https://nexo.livetrade.io/'
  },
  {
    title: 'LiveTrade App',
    subTitle: 'livetrade.io',
    href: 'https://livetrade.vn/'
  },
]

const WrapperCard = styled.div`
  background: linear-gradient(180deg, #1C1D3D 0%, #101133 100%);
  border-radius: 20px;
  padding-top: 37px;
  padding-bottom: 54px;
  margin: 20px;
`

const Card = styled.div`
  flex: 1;
  background: ${({ theme}) => theme.colors.secondary};
  border-radius: 50px;
  padding: 24px;
  position: relative;
  text-align: center;
  margin: 0 20px;
  color: ${ ({theme}) => theme.colors.primary };
  cursor: pointer;
  margin-bottom: 10px;

  &:hover{
    opacity: 0.9;
  }
  a{
    justify-content: center;
    color: ${ ({theme}) => theme.colors.primary };
    font-size: 20px;
    &:hover{
      text-decoration: none;
    }
  }
`

const ProductsServices = () => {
  return (
      <WrapperCard>
        <Text mb="4" textAlign="center" fontSize="30px">LiveTrade Products & Services</Text>
        <Flex justifyContent="space-between" flexWrap="wrap">
          {
            listProductsServices.map((item, index)=>(
              <Card key={index}>
                <LinkExternal href={item.href} fontSize="20px">{item.title}</LinkExternal>
                <Text fontSize="14px" color="primary">{item.subTitle}</Text>
              </Card>
            ))
          }
        </Flex>
      </WrapperCard>
  );
};

export default ProductsServices;