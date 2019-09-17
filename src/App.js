// import React from 'react';
// import logo from './logo.svg';
// import './App.css';


// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state= {    
//     title: "Student Name",
//     nameValue:"Anand"
//   }
// }

// _updateInput = (event) => {
//   this.setState({nameValue:event.target.nameValue})
// }

// }
// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Anand
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }
// render () {
//   const myData = {
//     studentName: this.state.nameValue,
//     title:this.state.title
//   }
// }

// return (
//   <div className="App">
//     <table>
//       <tbody>
//         <tr>
//           <td>{this.state.title}</td>
//           <td><input></input></td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
// )

// export default App;


import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NewComponent from './NewComponent';

class App extends React.Component {

constructor(props) {
super(props);
this.state = {
title: "Student Name",
nameValue: "Anand Prakash"
}
}

_updateInput = (event) => {
this.setState({ nameValue: event.target.value })
}

render() {
// const name="Student Name",;
// const nameValue="SP Jadon";
const myData = {
studentName: this.state.nameValue,
}

return (
<div className="App">
<table align='center'>
<tbody>
<tr>
<td>{this.state.title}</td>
<td><input value={this.state.nameValue} onChange={(e) => { this._updateInput(e) }} type='text' /></td>
</tr>
</tbody>
</table>

<NewComponent data={myData} />
</div>
);
}
}
export default App;



