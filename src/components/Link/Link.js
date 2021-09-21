import styled from "styled-components";
import getExternalLinkProps from "utils/getExternalLinkProps";
import Text from "components/Text/Text";

const StyledLink = styled(Text)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    text-decoration: underline;
  }
  svg{
    margin-left: 4px;
  }
`;

const Link = ({ external, ...props }) => {
  const internalProps = external ? getExternalLinkProps() : {};
  return <StyledLink as="a" bold {...internalProps} {...props} />;
};

Link.defaultProps = {
  color: "primary",
};

export default Link;
