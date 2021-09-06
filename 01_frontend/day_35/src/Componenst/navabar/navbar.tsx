import { useState } from 'react';
import './navbar.scss'

const NavBar = () => {
    const [search, setSearch] = useState(false);

    return(
        <>
        <div className="main-nav">
        <div className="nav">
            <div className="logo-container">
            <img className="logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" />
            </div>
            <div>
                {
                    search 
                    ?  <input onBlur={() => {setSearch(false)}} placeholder="Search" type="text" autoFocus={true}/> 
                    :   <div className="search-div" onClick={() => setSearch(true)}> 
                        <span className="search-span"><i className="far fa-search"></i> Search</span>
                        </div>
                }
            </div>
            <div className="right-menu">
            <i className="fas fa-home"></i>
            <i className="fab fa-facebook-messenger"></i>
            <i className="far fa-compass"></i>
            <i className="far fa-heart"></i>
            <i className="fas fa-user"></i>
            </div>
        </div>
        </div>
        </>
    )
}

export default NavBar;