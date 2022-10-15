import React from 'react';



const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">User Registration</a>
                            <a className="nav-link" href="#">Home</a>
                            <a className="nav-link" href="#">Features</a>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header