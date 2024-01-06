import React, { Component } from 'react';
import { Parser } from 'html-to-react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import Input from './Composants/Input';
import Output from './Composants/Output';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    const valeur = e.target.value;
    const parser = new Parser();
    const jsxOutput = parser.parse(valeur);
    this.setState({ text: jsxOutput });
  };

  telechargerPDF = () => {
    const contenuDiv = document.getElementById('monDiv');

    const options = {
      margin: 4,
      filename: 'contenu.pdf',
      image: { type: 'png', quality: 1.0 },
      html2canvas: { scale: 4 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    html2canvas(contenuDiv, options.html2canvas).then((canvas) => {
      const imgData = canvas.toDataURL(
        `image/${options.image.type}`,
        options.image.quality
      );

      const pdf = new jsPDF(options.jsPDF);
      pdf.addImage(imgData, options.image.type, 0, 0);
      pdf.save(options.filename);
    });
  };

  render() {
    return (
      <div className="bg-dark pb-5">
        <div className="row py-5 mx-4">
          <Input handleChange={this.handleChange} />
          <Output contenu={this.state.text} id="monDiv" />
          <div className="d-flex justify-content-center py-4">
            <button className="btn btn-secondary" onClick={this.telechargerPDF}>
              Télécharger le Text
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// import logo from './logo.svg';
// import { useState } from 'react';
// import { Parser } from 'html-to-react';
// // import { saveAs } from 'file-saver';
// // import html2pdf from 'html2pdf.js';
// import { jsPDF } from 'jspdf';
// import html2canvas from 'html2canvas';
// import Input from './Composants/Input';
// import Output from './Composants/Output';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// // import './App.css';

// function App() {
//   let [text, setText] = useState('');
//   function handleChange(e) {
//     e.preventDefault();
//     const valeure = e.target.value;
//     const parser = new Parser();
//     const jsxOutput = parser.parse(valeure);
//     setText(jsxOutput);
//   }
//   function telechargerPDF() {
//     const contenuDiv = document.getElementById('monDiv');

//     const options = {
//       margin: 4,
//       filename: 'contenu.pdf',
//       image: { type: 'png', quality: 1.0 }, // Utiliser une qualité maximale (1.0)
//       html2canvas: { scale: 4 },
//       jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
//     };

//     html2canvas(contenuDiv, options.html2canvas).then((canvas) => {
//       const imgData = canvas.toDataURL(
//         `image/${options.image.type}`,
//         options.image.quality
//       ); // Utiliser la qualité  spécifiée

//       const pdf = new jsPDF(options.jsPDF);
//       pdf.addImage(imgData, options.image.type, 0, 0);
//       pdf.save(options.filename);
//     });
//   }

//   return (
//     <div className="bg-dark pb-5">
//       <div className="row py-5 mx-4">
//         <Input handleChange={handleChange} />
//         <Output contenu={text} id="monDiv" />
//         <div className="d-flex justify-content-center py-4">
//           <button className="btn btn-secondary" onClick={telechargerPDF}>
//             Télécharger le Text
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
