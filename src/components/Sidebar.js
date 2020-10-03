import React from 'react';
import { FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div className="sidebar" data-testid="sidebar">
            <ul className="sidebar__generic">
                <li><span><FaInbox /></span><span>Inbox</span></li>
                <li><span><FaRegCalendar /></span><span>Today</span></li>
                <li><span><FaRegCalendarAlt /></span><span>Next 7 Days</span></li>
            </ul>

            <div className="sidebar__middle">
                <span><FaChevronDown /></span><h2>Projects</h2>
            </div>

            <div>
                <ul className="sidebar__projets">Projects List</ul>
                Add Project Component Here
            </div>

        </div>
    );
}

export default Sidebar;

// for sass?
// using bem
// b = block (Sidebar)
// e = element (sidebar__generic tasks)
// m = modifier (   )



