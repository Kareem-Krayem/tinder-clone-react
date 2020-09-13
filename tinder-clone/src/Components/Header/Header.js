import React from 'react';
import './Header.css';
import {
    Person,
    Forum,
    ArrowBackIos
} from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

function Header({ backButton }) {
    const history = useHistory();
    return (
        <div className="header">
            {
                backButton ? (
                    <IconButton onClick={() => history.replace(backButton)}>
                        <ArrowBackIos className="header__icon" fontSize='large' />
                    </IconButton>
                ) : (
                        <IconButton>
                            <Person className="header__icon" fontSize='large' />
                        </IconButton>

                    )
            }

            <Link to='/'>
                <img
                    className="header__logo"
                    src="https://seeklogo.com/images/T/tinder-logo-FAAE852EC0-seeklogo.com.png"
                    alt="Tinder Logo"
                />
            </Link>
            <Link to='/chat'>
                <IconButton>
                    <Forum className="header__icon" fontSize='large' />
                </IconButton>
            </Link>
        </div>
    )
}

export default Header;
