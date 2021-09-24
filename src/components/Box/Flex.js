import styled from "styled-components";
import { flexbox } from "styled-system";
import Box from "./Box";

const Flex = styled(Box)`
  display: flex;
  ${flexbox}
  ${`@media (max-width: 800px)`} {
    flex-direction: column;
  }
`;

export default Flex;
