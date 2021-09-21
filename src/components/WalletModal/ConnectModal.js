import React from "react";
import Modal from "components/Modal/Modal";
import WalletCard from "components/WalletModal/WalletCard";

const ConnectModal = ({ login, onDismiss = () => null }) => (
  <Modal title="Connect to a wallet" onDismiss={onDismiss}>
    <WalletCard
        login={login}
        onDismiss={onDismiss}
    />
  </Modal>
);

export default ConnectModal;
