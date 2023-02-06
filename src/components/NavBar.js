import React from "react";
import { Link } from "react-router-dom";
import "../css/Nav.css"
const NavBar = () => {
    const logout = () => {
        localStorage.removeItem("user");
        window.location.reload();
    };
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home"></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-md-auto gap-2">
                            <li className="nav-item rounded">
                                <Link className="nav-link active" aria-current="page" to="/home"><i className="bi bi-house-fill me-2"></i>Home</Link>
                            </li>
                            <li className="nav-item rounded">
                                <Link className="nav-link active" to="#"><i className="bi bi-people-fill me-2"></i>About</Link>
                            </li>
                            <li className="nav-item rounded">
                                <Link className="nav-link active" to="#"><i className="bi bi-telephone-fill me-2"></i>Contact</Link>
                            </li>
                            <li className="nav-item dropdown rounded">
                                <Link className="nav-link active dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-person-fill me-2"></i>Profile</Link>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="#"><i className="bi bi-person-lines-fill me-2"></i> Account</Link></li>
                                    {/* <li><Link className="dropdown-item" to="#">Another action</Link></li> */}
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><button className="dropdown-item" onClick={logout}><i className="bi bi-box-arrow-right me-2"></i> Logout</button></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}
export default NavBar;