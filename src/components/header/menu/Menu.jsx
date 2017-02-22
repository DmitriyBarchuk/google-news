import React, { Component } from 'react'
import './TopMenu.css'

class Menu extends Component {
    render() {
        return (
            <div className="Menu">
                <a href="#">
                    <div className="menu-element">
                        ПОСЛЕДНИЕ НОВОСТИ
                    </div>
                </a>
                <a href="#">
                    <div className="menu-element">
                        ИНФО
                    </div>
                </a>
                <a href="#">
                    <div className="menu-element">
                        TOP-10
                    </div>
                </a>
            </div>
        )
    }
}

export default Menu
