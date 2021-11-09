import { Redirect } from 'react-router-dom'
import DetailBounty from './components/DetailBounty'
const OLD_PATH_STRUCTURE = /^[0-9]$/

function RedirectToDetailBounty(props) {
  const {
    match: {
      params: { id },
    },
  } = props
  if (!OLD_PATH_STRUCTURE.test(id)) {
    return <Redirect to="/bounty" />
  }

  return <DetailBounty {...props} />
}
export default RedirectToDetailBounty
