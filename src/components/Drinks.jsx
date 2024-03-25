import { Link } from 'react-router-dom'

const Drinks = ({ drinks }) => {
  if (!drinks) {
    return <h3>no drinks found</h3>
  }
  return (
    <div className="drinks">
      {drinks.map((drink) => {
        const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink
        return (
          <div key={id}>
            <h3>{name}</h3>
            <img src={image} alt={name} className="img" />
            <Link to={`/Drink/${id}`} className="btn">
              Show
            </Link>
          </div>
        )
      })}
    </div>
  )
}
export default Drinks
