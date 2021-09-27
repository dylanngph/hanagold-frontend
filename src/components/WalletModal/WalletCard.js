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
      style={{ display: 'flex' , justifyContent: "space-between" }}
      mb={mb}
    >
      <img className="mr-2" width="32" src="/tokens/kai.png" />
      <Text bold color="#000" mr="16px">
        Kardia Extension Wallet Connect
      </Text>
      
    </Button>
  );
};

export default WalletCard;
