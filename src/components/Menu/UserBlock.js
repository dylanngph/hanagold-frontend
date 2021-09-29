import useKardiachain from 'hooks/useKardiachain';
import React from "react";
import Button from "components/Button/Button";
import useWalletModal from "components/WalletModal/useWalletModal";

const UserBlock = () => {
  const {account, onConnect, onLogout } = useKardiachain()
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(onConnect, onLogout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <div>
      {account ? (
        <Button
          scale="sm"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </Button>
      ) : (
        <Button
          scale="sm"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          Connect
        </Button>
      )}
    </div>
  );
};

export default React.memo(UserBlock, (prevProps, nextProps) => prevProps.account === nextProps.account);
