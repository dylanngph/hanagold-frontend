import Flex from 'components/Box/Flex';
import Dropdown from 'components/Dropdown/Dropdown';
import Link from 'components/Link/Link';
import Text from 'components/Text/Text';
import { homeSocials, socials } from 'config/index';
import React from 'react';
import styled from 'styled-components';

const WrapperCard = styled.div`
  background: linear-gradient(180deg, #1C1D3D 0%, #101133 100%);
  border-radius: 20px;
  padding: 40px;
  margin: 20px;
`

const Icon = styled.img`
  margin: 0 15px;
  cursor: pointer;
`

const Community = () => {
  return (
      <WrapperCard>
        <Text mb="4" textAlign="center" fontSize="30px">Follow us and join the community</Text>
        <Flex justifyContent="center" flexWrap="wrap">
          {homeSocials.map((social, index) => {
            if (social.items) {
              return (
                  <Dropdown key={index} position="top" target={<Icon
                      src={`/icon/${social.icon}`}
                  />}>
                    {social.items.map((item) => (
                        <Link external key={item.label} href={item.href || '/'} aria-label={item.label} color="textSubtle">
                          {item.label}
                        </Link>
                    ))}
                  </Dropdown>
              );
            }

            return (
                <Icon
                    key={index}
                    src={`/icon/${social.icon}`}
                    onClick={()=> window.open(social.href, '_blank')}
                />
            );
          })}
        </Flex>
      </WrapperCard>
  );
};

export default Community;