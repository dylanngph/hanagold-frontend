import React from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";

const WalletCard = ({ onDismiss, mb, login }) => {
  return (
    <Button
      width="100%"
      onClick={() => {
        login();
        onDismiss();
      }}
      style={{ justifyContent: "space-between" }}
      mb={mb}
    >
      <Text bold color="primary" mr="16px">
        Kardia Extension Wallet Connect
      </Text>
      <img className="mr-2" width="32" src="/tokens/kai.png" />
    </Button>
  );
};

export default WalletCard;
