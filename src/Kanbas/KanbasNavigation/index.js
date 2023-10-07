import { NavLink } from "react-router-dom";
import '../index.css';


function KanbasNavigation() {
    const navItems = [
        { name: 'Account', icon: 'fa-circle-user', link: '/account', iconStyle: 'fa-regular white' },
        { name: 'Dashboard', icon: 'fa-gauge', link: '/dashboard', iconStyle: 'fa-solid' },
        { name: 'Courses', icon: 'fa-book', link: '/courses', iconStyle: 'fa-solid' },
        { name: 'Calendar', icon: 'fa-calendar-days', link: '/calendar', iconStyle: 'fa-solid' },
        { name: 'Inbox', icon: 'fa-inbox', link: '/inbox', iconStyle: 'fa-solid' },
        { name: 'History', icon: 'fa-clock', link: '/history', iconStyle: 'fa-regular' },
        { name: 'Studio', icon: 'fa-tv', link: '/studio', iconStyle: 'fa-solid' },
        { name: 'Commons', icon: 'fa-arrow-right-from-bracket', link: '/commons', iconStyle: 'fa-solid' },
        { name: 'Help', icon: 'fa-circle-question', link: '/help', iconStyle: 'fa-regular' },
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
