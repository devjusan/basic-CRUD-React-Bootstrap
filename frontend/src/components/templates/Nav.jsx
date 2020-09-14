import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

export default props =>
    <React.Fragment>

        <aside className="menu-area">

            <nav className="menu">  
                <Link to="/">
                    <i className={`mr-2 fa fa-home`}></i> Início
                </Link>

                <Link to="/users">
                    <i className={`mr-2 fa fa-users`}></i> Usuários
                </Link>

            </nav>
        </aside>
    </React.Fragment>

