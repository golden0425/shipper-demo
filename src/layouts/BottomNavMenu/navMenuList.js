import Home from '@/assets/icon/BottomNavMenu/Home.png'
import HomeCheck from '@/assets/icon/BottomNavMenu/HomeCheck.png'
import Order from '@/assets/icon/BottomNavMenu/Order.png'
import OrderCheck from '@/assets/icon/BottomNavMenu/OrderCheck.png'
import Mine from '@/assets/icon/BottomNavMenu/Mine.png'
import MineCheck from '@/assets/icon/BottomNavMenu/MineCheck.png'

export const navMenuList = [
  {
    title: '首页',
    key: 'Home',
    icon: Home,
    selectedIcon: HomeCheck,
    toPage: '/Home'
  },
  {
    title: '订单',
    key: 'Order',
    icon: Order,
    selectedIcon: OrderCheck,
    toPage: '/Order'
  },
  {
    title: '我的',
    key: 'My',
    icon: Mine,
    selectedIcon: MineCheck,
    toPage: '/My'
  }
]
