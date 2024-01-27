import React, { useState } from 'react';
import {
    FaCommentAlt,
    FaRegCalendarAlt,
    FaShoppingBag,
    FaThList,
    FaUser,
    FaTh,
    FaBars,
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function Sidebar({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isProductSubMenuOpen, setIsProductSubMenuOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const toggleProductSubMenu = () => setIsProductSubMenuOpen(!isProductSubMenuOpen);

    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <FaTh />
        },
        {
            path: "/about",
            name: "About",
            icon: <FaUser />
        },
        {
            path: "/analytics",
            name: "Analytics",
            icon: <FaCommentAlt />
        },
        {
            path: "/comment",
            name: "Comment",
            icon: <FaRegCalendarAlt />
        },
        {
        
            name: "Product",
            icon: <FaShoppingBag />,
            submenu: [
                {
                    path: "/product",
                    name: "Product",
                    icon: <FaShoppingBag />
                },
                {
                    path: "/productList",
                    name: "Product List",
                    icon: <FaThList />
                },
            ]
        },
    ];

    return (
        <div className='container'>
            <div style={{ width: isOpen ? "300px" : "50px" }} className='sidebar'>
                <div className='top_section'>
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="log">Logo</h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className='bars'>
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {menuItem.map((item, index) => (
                    <div key={index}>
                        {item.submenu ? (
                            <div>
                                <div onClick={toggleProductSubMenu} className="link">
                                    <div className="icon">{item.icon}</div>
                                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                                    <div className="arrow-icon">{isProductSubMenuOpen ? '▲' : '▼'}</div>
                                </div>
                                {isProductSubMenuOpen && (
                                    <div className="submenu">
                                        {item.submenu.map((subItem, subIndex) => (
                                            <NavLink key={subIndex} to={subItem.path} className="link" activeClassName="active">
                                                <div className="icon">{subItem.icon}</div>
                                                <div className="link_text">{subItem.name}</div>
                                            </NavLink>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <NavLink to={item.path} className="link" activeClassName="active">
                                <div className="icon">{item.icon}</div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                            </NavLink>
                        )}
                    </div>
                ))}
            </div>
            <main>{children}</main>
        </div>
    );
}

export default Sidebar;