import Header from './home/header'
import Info from './home/info'
import Discord from './home/discord'
import Navbar from './navbar/navbar'

export default function Home() {
  return (
    <div className="home">
      <Header />
      <Info />
      <Discord />
    </div>
  )
}
