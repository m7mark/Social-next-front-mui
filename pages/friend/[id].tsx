import { GetStaticPaths, GetStaticProps } from 'next'
import { Friend } from '../../src/components/screens/Friend/Friend'
import { UserService } from '../../src/services/user/user.service'
import { UserDto } from '../../src/shared/types/user.types'

interface IFriendPage {
  userData: UserDto
}

function FriendPage({ userData }: IFriendPage) {
  return <Friend userData={userData} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { data: users } = await UserService.getUsers({ limit: 100 })
    const paths = users.docs.map((u) => ({
      params: { id: u._id },
    }))

    return {
      paths,
      fallback: 'blocking',
    }
  } catch (e) {
    return {
      paths: [],
      fallback: false,
    }
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { data: userData } = await UserService.getById(String(params?.id))
    return {
      props: { userData },
    }
  } catch (e) {
    return {
      props: {},
      notFound: true,
    }
  }
}

export default FriendPage
