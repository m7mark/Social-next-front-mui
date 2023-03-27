import { dehydrate, QueryClient } from '@tanstack/react-query'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Friend } from '../../src/components/screens/Friend/Friend'
import { UserService } from '../../src/services/user/user.service'

function FriendPage() {
  return <Friend />
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['getUserStaticProps', id], () =>
    UserService.getById(String(id)).then(({ data }) => data)
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default FriendPage
