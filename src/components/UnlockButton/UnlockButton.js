import Button from 'components/Button/Button';
import useWalletModal from 'components/WalletModal/useWalletModal';
import useKardiachain from 'hooks/useKardiachain';

const UnlockButton = (props) => {
  const { onConnect, onLogout } = useKardiachain()
  const { onPresentConnectModal } = useWalletModal(onConnect, onLogout)

  return (
      <Button
          onClick={onPresentConnectModal} {...props}>
        Unlock Wallet
      </Button>
  )
}

export default UnlockButton
