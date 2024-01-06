import React from 'react'
import './styles.css';

const Input = ({handleChange}) => {
  return (
    <div className="col-sm-8 mb-3 mb-sm-0 styl">
    <div className="card styl bg-secondary">
        <div className="form-floating styl">
            <textarea className="form-control bg-secondary" name='monTexte' required cols="40" placeholder="Type Markdown..." rows="10" onChange={handleChange}></textarea>
        </div>
    </div>
  </div>
  )
}

export default Input
