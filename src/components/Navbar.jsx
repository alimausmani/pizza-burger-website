// import React, { useState } from "react";
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import { useDataContext } from "../context/Context";


// const Navbar = () => {
//     const {setSearchQuery} =useDataContext();
//     const [search,setSearch] =useState();

//     const handleSearch = () => {
//         console.log(search);
        
//         setSearchQuery(search);
        
//     };

//     const handleSearchInput = (event) => {
//         setSearch(event.target.value);
//     };

//     return (
//         <nav className="navbar">
//             <div className="logo">
//                 <h2>MY APP</h2>
//             </div>
//             <div className="search-bar">
//                 <input type="text" placeholder="Search..."  value={search} onChange={handleSearchInput}/>
//                 <button type="submit" onClick={handleSearch}>Search</button>
//             </div>
//             <div className="auth-buttons">
//                 <Link to="/login">
//                     <button className="login-btn">Login</button>
//                 </Link>
//                 <Link to="/signup">
//                     <button className="signup-btn">Sign Up</button>
//                 </Link>
//             </div>
//         </nav>
//     )
// }

// export default Navbar;


import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useDataContext } from "../context/Context";

const Navbar = () => {
    const { setSearchQuery } = useDataContext();
    const [search, setSearch] = useState('');

    const handleSearch = () => {
        console.log(search);
        setSearchQuery(search);
    };

    const handleSearchInput = (event) => {
        setSearch(event.target.value);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <h2>MY APP</h2>
            </div>
            <div className="search-bar">
                <input 
                    type="text" 
                    placeholder="Search..."  
                    value={search} 
                    onChange={handleSearchInput}
                />
                <button type="submit" onClick={handleSearch}>Search</button>
            </div>
            <div className="auth-buttons">
                <Link to="/login">
                    <button className="login-btn">Login</button>
                </Link>
                <Link to="/signup">
                    <button className="signup-btn">Sign Up</button>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
