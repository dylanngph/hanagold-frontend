import Button from 'components/Button/Button'
import PageHeader from 'components/PageHeader/PageHeader'
import Text from 'components/Text/Text';
import { useParams } from 'react-router-dom'
import { useFarmFromLpAddress, useFetchUserData } from 'store/hooks'

const withAuthFarm = (Component) => (props) => {
  const { lpAddress } = useParams()
  const farm = useFarmFromLpAddress(lpAddress)
  useFetchUserData(lpAddress)

  if (!farm)
    return (
      <div className="container text-center  mx-auto px-3">
        <PageHeader logo="/hng-logo.png" />
        <Text>Not found</Text>
        <Button className="mx-auto" onClick={() => history.push('/farms')}>
          Back
        </Button>
      </div>
    )

  return <Component {...props} />
}

export default withAuthFarm
