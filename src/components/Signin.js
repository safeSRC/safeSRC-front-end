// import React, { Component } from 'react';
// import { signin } from '../Utils.js';
// import '../style/Sign.css';
// import { Link } from 'react-router-dom';

// export default class Signin extends Component {
//   state = {
//     username: '',
//     email: '',
//     password: '',
//   };

//   handleChange = (e) => {
//     const { username, value } = e.target;
//     this.setState({ [username]: value });
//   };

//   handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = await signin(this.state.email, this.state.password);
//       this.props.signin(token);
//       this.props.history.push('/userpage');
//     } catch (e) {
//       console.log(e.message);
//     }
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Email
//             <input
//               className="input-info"
//               type="email"
//               text="email"
//               onChange={this.handleChange}
//             />
//           </label>
//           <label>
//             Password
//             <input
//               className="input-info"
//               type="password"
//               text="password"
//               onChange={this.handleChange}
//             />
//           </label>
//           <button><Link to="/userpage">Sign In</Link></button>
//         </form>
//       </div>
//     );
//   }
// }
