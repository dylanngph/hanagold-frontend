import Page from "./Page"
import { useLocation } from 'react-router-dom'
import TabHeader from "components/TabHeader/TabHeader"
import { useMemo } from "react"
import { useEffect } from "react"

const PATH_SWAP = ['/swap', '/liquidity', '/add', '/find', '/remove', '/zap', '/pipe']

const LayoutSwap = ({ children }) => {
    const location = useLocation()
    const pathname = location?.pathname

    const isRouteSwap = useMemo(() => {
        return !!PATH_SWAP.find(
            (item) => pathname?.substring(0, item?.length) && pathname?.substring(0, item?.length)?.toLowerCase() === item,
        )
    }, [pathname])
    
    useEffect(() => {
        if (!isRouteSwap) {
            window.scrollTo(0, 0)
        }
    }, [pathname])

    return(
        isRouteSwap
        ?
            <Page>
                <TabHeader/>
                { children }
            </Page>
        :
        null
    )
}

export default LayoutSwap