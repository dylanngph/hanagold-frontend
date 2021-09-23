import React from "react";
import Button from "components/Button/Button";
import Text from "components/Text/Text";
import LinkExternal from "components/Link/LinkExternal";
import Flex from "components/Box/Flex";
import Modal from "components/Modal/Modal";
import CopyToClipboard from "components/WalletModal/CopyToClipboard";

const AccountModal = ({ account, logout, onDismiss = () => null }) => (
  <Modal title="Your wallet" onDismiss={onDismiss}>
    <Text
      fontSize="20px"
      bold
      style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" }}
    >
      {account}
    </Text>
    <Flex mb="32px">
      <LinkExternal small href={`https://explorer.kardiachain.io/address/${account}`} mr="16px">
        View on kardiachain
      </LinkExternal>
      <CopyToClipboard toCopy={account}>Copy Address</CopyToClipboard>
    </Flex>
    <Flex justifyContent="center">
      <Button
        scale="sm"
        onClick={() => {
          logout();
          onDismiss();
        }}
      >
        Logout
      </Button>
    </Flex>
  </Modal>
);

export default AccountModal;
