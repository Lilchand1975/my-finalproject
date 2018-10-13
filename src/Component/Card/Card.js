import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Card.css";

const Card = () => (
    <li className="nav-item dropdown">
        <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
        >
            About
        </a>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a className="dropdown-item" href="#">Bylaws</a>
            <a className="dropdown-item" href="#">BoardMembers</a>
            <a className="dropdown-item" href="#">Finance</a>
        </div>
    </li>
);


// class Card extends Component {
//   constructor() {
//     super();

//     this.state = {
//       showAbout: false,
//     };

//     this.showAbout = this.showAbout.bind(this);
//     this.closeAbout = this.closeAbout.bind(this);
//   }

//   showAbout(event) {
//     event.preventDefault();

//     this.setState({ showAbout: true }, () => {
//       document.addEventListener('click', this.closeAbout);
//     });
//   }

//   closeAbout() {
//     this.setState({ showAbout: false }, () => {
//       document.removeEventListener('click', this.closeAbout);
//     });
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.showAbout}>
//           About
//         </button>

//         {
//           this.state.showAbout
//             ? (
//               <div className="menu">
//                 <button> Bylaws </button>
//                 <button> BoardMembers </button>
//                 <button>Finance</button>
//               </div>
//             )
//             : (
//               null
//             )
//         }
//       </div>
//     );
//   }
// }

export default Card;

