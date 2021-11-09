import Button from 'components/Button/Button'
import PageHeader from 'components/PageHeader/PageHeader'
import Text from 'components/Text/Text';
import { useParams } from 'react-router-dom'
import { useFarmOutsideFromLpAddress, useFetchUserDataOutside } from 'store/hooks';

const withAuthFarmOutside = (Component) => (props) => {
  const { lpAddress } = useParams()
  const farm = useFarmOutsideFromLpAddress(lpAddress)
  useFetchUserDataOutside(lpAddress)

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

export default withAuthFarmOutside
