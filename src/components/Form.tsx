import PropTypes from 'prop-types'
import {Props} from '../interfaces'

const Form: React.FC<Props> = ({handleChange, values: {name, age, pic, description}, handleSubmit}) => {
  return (
    <form className='AddToList' onSubmit={handleSubmit}>
      <input className='AddToList-input' onChange={handleChange} type="text" name="name" placeholder="Name" value={name} />
      <input className='AddToList-input'  onChange={handleChange} type="text" name="age" placeholder="Age" value={age} />
      <input className='AddToList-input'  onChange={handleChange} type="text" name="pic" placeholder="Image Url" value={pic} />
      <textarea className='AddToList-input'  onChange={handleChange} name="description" placeholder="Description" value={description}></textarea>
      <button className='AddToList-btn'>Add to List</button>
    </form>
  )
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default Form
