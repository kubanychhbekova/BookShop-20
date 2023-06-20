import React from 'react';
import {BiSearch} from "react-icons/bi";
import {HiOutlineShoppingBag} from "react-icons/hi";

const Header = () => {
    return (
        <div>
            <div id="header ">
                <nav className="navbar  navbar-expand-lg navbar-light ">
                    <div className="container">
                        <div className="collapse d-flex justify-content-between  navbar-collapse"
                             id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active ">
                                    <a className="nav-link" href="#">Bookshop</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Categories</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="#">Recent</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="#">Books</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="#">About Us</a>
                                </li>
                            </ul>
                            <div className=" my-2 my-lg-0">
                                <BiSearch className="navbar-search"/>
                                <HiOutlineShoppingBag className="navbar-basket"/>
                            </div>
                        </div>
                    </div>


                </nav>
            </div>
        </div>
    );
};

export default Header;