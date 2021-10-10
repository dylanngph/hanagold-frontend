import UikitMenu from 'components/Menu/UikitMenu';
import useKardiachain from 'hooks/useKardiachain';
import { usePriceByTokenAddress } from 'hooks/usePrice';
import { languageList } from 'config/localization/languages'
import { useTranslation } from 'contexts/Localization/index'
import useTheme from 'hooks/useTheme'
import config from './config'
import address from '../../constants/contracts';

const Menu = (props) => {
  const { isDark, toggleTheme } = useTheme()
  const {account, onConnect, onLogout} = useKardiachain()
  const { currentLanguage, setLanguage, t } = useTranslation()
  const hngPrice = usePriceByTokenAddress(address.hng)
  
  return (
    <UikitMenu
      account={account}
      login={onConnect}
      logout={onLogout}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={currentLanguage.code}
      langs={languageList}
      setLang={setLanguage}
      tokenPriceUsd={hngPrice}
      links={config(t)}
      profile={null}
      {...props}
    />
  )
}

export default Menu
