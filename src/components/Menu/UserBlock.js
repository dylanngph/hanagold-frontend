import useKardiachain from 'hooks/useKardiachain'
import React from "react"
import { useLocation } from "react-router-dom"
import {Button,Menu,MenuItem,Divider,Link} from "@mui/material"
import useWalletModal from "components/WalletModal/useWalletModal"
import MenuLink from "components/Menu/MenuLink"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styled from '@emotion/styled'

const UserBlock = () => {
  const {account, onConnect, onLogout } = useKardiachain()
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(onConnect, onLogout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  
  const location = useLocation()
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>
      {account ? (
        <>
          <LogButton
            id="basic-button"
            variant='contained'
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={
              // onPresentAccountModal();
              handleClick
              }
          >
            {accountEllipsis} <KeyboardArrowDownIcon/>
          </LogButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                width: '200px',
                bgcolor: '#2D2E33',
                color: '#fff',
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: '#2D2E33',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
                '& li:hover': {
                  bgcolor: 'rgba(255,255,255,.1)'
                }
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={
                handleClose
            }>
              <MenuLink style={{width:'100%', height: '100%'}} href="/my-account">
                My account
              </MenuLink>
            </MenuItem>
            <Divider sx={{borderColor:'#454545'}} />
            <MenuItem 
            onClick={() => {
              onPresentAccountModal();
              handleClose()
            }
            }
            >
              Logout
            </MenuItem>
          </Menu>
        </>
        
      ) : (
        <LogButton
          variant='contained'
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          Connect
        </LogButton>
      )}
    </div>
  );
};

const LogButton = styled(Button)`
  background-color: rgba(255, 194, 71);
  box-shadow: none;
  color: #000;
  &:hover {
    background-color: rgba(255, 194, 71, .8);
    box-shadow: none;
  }
`
export default React.memo(UserBlock, (prevProps, nextProps) => prevProps.account === nextProps.account);
