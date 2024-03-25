import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useLoaderData, Link, Navigate } from 'react-router-dom'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const singleDrinkQuery = (id) => {
  return {
    queryKey: ['drink', id],
    queryFn: async () => {
      const { data } = await axios.get(`${url}${id}`)
      return data
    },
  }
}
export const loader =
  (queryclient) =>
  async ({ params }) => {
    const { yardsId: id } = params
    await queryclient.ensureQueryData(singleDrinkQuery(id))
    return { id }
  }
const Drink = () => {
  const { id } = useLoaderData()

  const { data } = useQuery(singleDrinkQuery(id))

  if (!data) return <Navigate to="/" />

  const singleDrink = data.drinks[0]

  if (!data) {
    return <Navigate to={'/'} />
  }
  const drinks = data.drinks[0]
  const {
    strAlcoholic: alcoholic,
    strCategory: category,
    strDrink: name,
    strGlass: glass,
    strDrinkThumb: image,
  } = singleDrink

  return (
    <>
      <Link to={'/'} className="btn">
        Home
      </Link>
      <div>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <h3>{category}</h3>
        <h3>{alcoholic}</h3>
        <h3>{glass}</h3>
      </div>
    </>
  )
}
export default Drink
