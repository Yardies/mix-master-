import Navbar from '../components/Navbar'
import { Outlet, useNavigate, useNavigation } from 'react-router-dom'

const HomeLayout = () => {
  const navigation = useNavigation()
  const contextValue = 'man'
  return (
    <>
      <Navbar />
      <section className="page">
        {navigation.state === 'loading' ? (
          <div className="loading"></div>
        ) : (
          <Outlet context={contextValue} />
        )}
      </section>
    </>
  )
}
export default HomeLayout
