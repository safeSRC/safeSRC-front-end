// import React, { Component } from 'react';
// import { signup } from '../Utils.js';
// import '../style/Sign.css';
// import { Link } from 'react-router-dom';

// export default class Signup extends Component {
//   state = {
//     name: '',
//     email: '',
//     password: '',
//   };

//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//     this.props.setUserName(this.state.name);
//   };

//   handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = await signup(
//         this.state.name,
//         this.state.email,
//         this.state.password
//       );
//       this.props.signin(token);
//       this.props.history.push('/userpage');
//     } catch (e) {
//       console.log(e.message);
//     }
//   };

//   render() {
//     return (
//       <div>
//         <div className="Nav">
//           <form onSubmit={this.handleSubmit}>
//             <label>
//               Username
//               <input
//                 name="name"
//                 className="input-info"
//                 type="name"
//                 value={this.state.name}
//                 onChange={this.handleChange}
//               />
//             </label>
//             <label>
//               Email
//               <input
//                 className="input-info"
//                 type="email"
//                 text="email"
//                 onChange={this.handleChange}
//               />
//             </label>
//             <label>
//               Password
//               <input
//                 className="input-info"
//                 type="password"
//                 text="password"
//                 onChange={this.handleChange}
//               />
//             </label>
//             <button><Link to="/userpage">Sign Up</Link></button>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }
