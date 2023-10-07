import { NavLink } from "react-router-dom";
import '../index.css';


function KanbasNavigation() {
    const navItems = [
        { name: 'Account', icon: 'fa-circle-user', link: '/Kanbas/Account', iconStyle: 'fa-regular white' },
        { name: 'Dashboard', icon: 'fa-gauge', link: '/Kanbas/Dashboard', iconStyle: 'fa-solid' },
        { name: 'Courses', icon: 'fa-book', link: '/Kanbas/Courses', iconStyle: 'fa-solid' },
        { name: 'Calendar', icon: 'fa-calendar-days', link: '/Kanbas/Calendar', iconStyle: 'fa-solid' },
        { name: 'Inbox', icon: 'fa-inbox', link: '/Kanbas/Inbox', iconStyle: 'fa-solid' },
        { name: 'History', icon: 'fa-clock', link: '/Kanbas/History', iconStyle: 'fa-regular' },
        { name: 'Studio', icon: 'fa-tv', link: '/Kanbas/Studio', iconStyle: 'fa-solid' },
        { name: 'Commons', icon: 'fa-arrow-right-from-bracket', link: '/Kanbas/Commons', iconStyle: 'fa-solid' },
        { name: 'Help', icon: 'fa-circle-question', link: '/Kanbas/Help', iconStyle: 'fa-regular' },
    ];

    return (
        <div className="wd-main-navbar-content">
            <div className="wd-main-navbar-item-container">
                <NavLink className="wd-main-navbar-link kanbas-app-logo" to="/" />
            </div>
            <ul className="wd-kanbas-navigation">
                {
                    navItems.map(item => (
                        
                        <li key={item.name}>
                            <NavLink 
                                to={item.link}
                                activeClassName="wd-active" 
                                className="nav-link"
                            >
                                <i className={`${item.iconStyle} ${item.icon} wd-nav-item-icon`}></i>
                                <p>{item.name}</p>
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default KanbasNavigation;
