import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return <>
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="javascript(void)">
        <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
        </a>

        <hr className="sidebar-divider my-0" />

        <Link to='/dashboard'>
            <li className="nav-item active">
                <div className="nav-link">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </div>
            </li>
        </Link>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">
            Interface
        </div>
        <Link to='/nested-example'>
            <li className="nav-item">
                <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Nested Section</span>
                </div>
            </li>
        </Link>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">
            CRUD
        </div>

        <Link to='/all-users'>
            <li className="nav-item">
                <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-user"></i>
                    <span>All Users</span>
                </div>
            </li>
        </Link>

        <Link to='/add-users'>
            <li className="nav-item">
                <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Add Users</span>
                </div>
            </li>
        </Link>
        
    </ul>
  </>
}

export default Sidebar
