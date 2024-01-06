import React, { Component } from 'react';

class Output extends Component {
  render() {
    const { contenu, id } = this.props;

    return (
      <div className="col-sm-4">
        <div className="card">
          <div className="card-body text">
            <div id={id}>
              {contenu}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Output;










// import React from 'react'
// import './styles.css';

// const Output = ({contenu, id}) => {
//   return (
//     <div class="col-sm-4" >
//     <div class="card">
//       <div class="card-body text">
//         <div id={id}>
//           {contenu}
//         </div>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default Output
