import React from 'react'

const SideBar = () => {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3 sidebar-sticky">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                            <span data-feather="home" className="align-text-bottom"></span>
                            Dashboard
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="file" className="align-text-bottom"></span>
                            Master
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="shopping-cart" className="align-text-bottom"></span>
                            Entry
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="users" className="align-text-bottom"></span>
                            Customers
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="bar-chart-2" className="align-text-bottom"></span>
                            Reports
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="layers" className="align-text-bottom"></span>
                            Analytical Reports
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default SideBar