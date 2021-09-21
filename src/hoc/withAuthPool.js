import Button from 'components/Button/Button'
import PageHeader from 'components/PageHeader/PageHeader'
import Text from 'components/Text/Text';
import { useParams } from 'react-router-dom'
import { useFetchPoolUserData, usePoolFromPid } from 'store/hooks'

const withAuthPool = (Component) => (props) => {
  const { pid } = useParams()
  const pool = usePoolFromPid(pid)
  useFetchPoolUserData()

  if (!pool)
    return (
      <div className="container text-center  mx-auto px-3">
        <PageHeader logo="/logo.png" />
        <Text>Not found</Text>
        <Button className="mx-auto" onClick={() => history.push('/castles')}>
          Back
        </Button>
      </div>
    )

  return <Component {...props} />
}

export default withAuthPool
