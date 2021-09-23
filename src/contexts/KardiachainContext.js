import { connectorLocalStorageKey } from 'constants/index'
import React, { useState, useEffect } from 'react'
import Web3 from 'web3'
import PropTypes from 'prop-types'

const KardiachainContext = React.createContext({ isKardiachainInstalled: false, library: undefined })

// This context maintain 2 counters that can be used as a dependencies on other hooks to force a periodic refresh
const KardiachainContextProvider = ({ children }) => {
  const [isKardiachainInstalled, setIsKardiachainInstalled] = useState(false)
  const [library, setLibrary] = useState(undefined)
  const [account, setAccount] = useState(undefined)

  const handleConnect = async () => {
    await window.kardiachain.enable()
    const web = new Web3(window.kardiachain)
    const [accounts] = await web.eth.getAccounts()
    setAccount(accounts)
    window.localStorage.setItem(connectorLocalStorageKey, accounts)
  }

  const handleLogout = () => {
    setAccount('')
    window.localStorage.removeItem(connectorLocalStorageKey)
  }

  useEffect(() => {
    if (window.kardiachain) {
      setLibrary(window.kardiachain)
      if (window.kardiachain.isKaiWallet) {
        setIsKardiachainInstalled(true)
        const account = window.localStorage.getItem(connectorLocalStorageKey)
        if (account) {
          handleConnect()
        }
      } else {
        setIsKardiachainInstalled(false)
      }
    }
  }, [])

  useEffect(() => {
    if (window.kardiachain) {
      const handleAccountsChanged = (accounts) => {
        console.log("Handling 'accountsChanged' event with payload", accounts)
        if (accounts.length > 0) {
          setAccount(accounts[0])
          window.localStorage.setItem(connectorLocalStorageKey, accounts[0])
        }
      }

      window.kardiachain.on('accountsChanged', handleAccountsChanged)

      return () => {
        if (window.kardiachain.removeListener) {
          window.kardiachain.removeListener('accountsChanged', handleAccountsChanged)
        }
      }
    }
  }, [])

  return (
    <KardiachainContext.Provider
      value={{ isKardiachainInstalled, library, account, onConnect: handleConnect, onLogout: handleLogout }}
    >
      {children}
    </KardiachainContext.Provider>
  )
}

KardiachainContextProvider.propTypes = {
  children: PropTypes.node,
}

export { KardiachainContext, KardiachainContextProvider }
