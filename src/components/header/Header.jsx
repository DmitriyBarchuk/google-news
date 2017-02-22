import React, { Component } from 'react'
import './Header.css'
import logo from './logo.png'
import Menu from './menu/Menu'
import Search from './search/Search'


class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="top-menu-side">
                    <div className="logo-side">
                        <img src={logo} className="logo-img" alt="" />
                    </div>
                    <div className="menu-side">
                        <Search />
                        <Menu />
                    </div>
                </div>
            </div>
        )
    }
}

export default Header