import { useRouteError, Link } from 'react-router-dom'
const Error = () => {
  const routeError = useRouteError()
  console.log(routeError)
  if (routeError.status === 404) {
    return (
      <div>
        <Link to={'/'}>
          <button className="btn">HOME</button>
        </Link>
      </div>
    )
  }
  return <h2>{routeError.message}</h2>
}
export default Error
