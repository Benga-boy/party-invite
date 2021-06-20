import { Fragment } from "react"
import {Iprops} from '../interfaces'




const Cards: React.FC<Iprops> = ({ people }) => {

  const peopleMap = () => {
    return people.map(person => (
      <li key={person.name} className='List'>
        <div className="List-header">
        <img src={person.pic} alt={person.name} className='List-img' />
        <h2>{person.name}</h2>
        </div>
        <p>{person.age}</p>
        <p className='List-note'>{person.description}</p>
      </li>
    ))
  }


  return (
    <Fragment>
      <ul>{peopleMap()}</ul>
    </Fragment>
  )
}

export default Cards
