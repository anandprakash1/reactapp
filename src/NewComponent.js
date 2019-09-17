// import React from 'react';
// import logo from './logo.svg';
// import './App.css';


// class NewCoponent extends React.Component{
//   constructor(props){
//     super(props);
//     title: "Student Name",
//     nameValue:
//   }
// }
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Anand
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React from 'react';
import logo from './logo.svg';
import './App.css';
import './NewComponent'

class NewComponent extends React.Component{

constructor(props){
super(props);
this.state={
title: "Student Name",
nameValue: "Anand Prakash"
}
}

_updateInput=(event)=>{
this.setState({nameValue: event.target.value})
}

render(){
return (
<div className="App">
<p>{this.props.data.studentName}</p>
</div>
);
} 
}
export default NewComponent;
