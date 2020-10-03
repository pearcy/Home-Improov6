import React from 'react';
import { Link } from 'gatsby';
import { FaPizzaSlice } from 'react-icons/fa';
import headerStyles from '../styles/header.module.scss';


const Header = () => {
    return (
        <header className={headerStyles.header} data-testid="header">
            <nav>
                <div className="logo">
                    <Link to="/"><img src='/images/home.improov-logo-200.png' alt='home improov'/></Link>
                </div>
                    <ul className={headerStyles.navList}>
                        <li><Link className={headerStyles.navLink} activeClassName={headerStyles.activeNavLink} to="/">Home</Link></li>
                        <li><Link className={headerStyles.navLink} activeClassName={headerStyles.activeNavLink} to="/blog">Blog</Link></li>
                        <li><Link className={headerStyles.navLink} activeClassName={headerStyles.activeNavLink} to="/about">About</Link></li>
                        <li><Link className={headerStyles.navLink} activeClassName={headerStyles.activeNavLink} to="/contact">Contact Us</Link></li>
                        <li><Link className={headerStyles.navLink} activeClassName={headerStyles.activeNavLink} to="/app">App</Link></li>
                        <li><Link className={headerStyles.navLink} activeClassName={headerStyles.activeNavLink} >+</Link></li>
                        <li><Link className={headerStyles.navLink} activeClassName={headerStyles.activeNavLink} ><FaPizzaSlice/></Link></li>
                    </ul>
                    {/* <div className="settings">
                        <ul>
                            <li>+</li>
                            <li><FaPizzaSlice/></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div> */}

            </nav>
        </header>
    );
}

export default Header;


// /Users/ppearce05/epicode2/capstone/Home-Improov3/public/images/logo.png
