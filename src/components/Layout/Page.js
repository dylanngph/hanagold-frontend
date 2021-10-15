import BigNumber from 'bignumber.js';
import { usePriceByTokenAddress } from 'hooks/usePrice';
import address from 'constants/contracts'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router'
import { DEFAULT_META, getCustomMeta } from 'config/meta'
import Container from './Container'

const StyledPage = styled(Container)`
  min-height: 100vh;
  color: #fff;
  background-color: #16171B;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  padding: 58px 20px;
  
  ${({ theme }) => theme.mediaQueries.xs} {
    padding-top: 100px;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    padding-top: 24px;
    padding-bottom: 24px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-top: 32px;
    padding-bottom: 32px;
  }
`

const PageMeta = () => {
  const { t } = useTranslation()
  const { pathname } = useLocation()

  const kscPriceUsd = new BigNumber(usePriceByTokenAddress(address.hng))
  const cakePriceUsdDisplay = kscPriceUsd.gt(0)
    ? `$${kscPriceUsd.toNumber().toLocaleString(undefined, {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3,
      })}`
    : ''

  const pageMeta = getCustomMeta(pathname, t) || {}
  const { title, description, image } = { ...DEFAULT_META, ...pageMeta }
  const pageTitle = cakePriceUsdDisplay ? [title, cakePriceUsdDisplay].join(' - ') : title

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Helmet>
  )
}

const Page = ({ children, ...props }) => {
  return (
    <>
      <PageMeta />
      <StyledPage {...props}>{children}</StyledPage>
    </>
  )
}

export default Page
