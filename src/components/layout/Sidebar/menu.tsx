import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined'
import Face5OutlinedIcon from '@mui/icons-material/Face5Outlined'
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined'

export const sideMenu = [
  { title: 'Home', icon: <Face5OutlinedIcon color="primary" />, link: '/me' },
  {
    title: 'Friends',
    icon: <Diversity1OutlinedIcon color="primary" />,
    link: '/friends',
  },
  {
    title: 'Messages',
    icon: <ForumOutlinedIcon color="primary" />,
    link: '/messages',
  },
]
