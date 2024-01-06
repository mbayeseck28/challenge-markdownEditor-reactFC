import React from 'react'
import './styles.css';

const Output = ({contenu, id}) => {
  return (
    <div class="col-sm-4" >
    <div class="card">
      <div class="card-body text">
        <div id={id}>
          {contenu}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Output
