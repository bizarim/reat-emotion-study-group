
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../logo/Logo';
import { Dropdown } from '../../dropdown';
import { getCategoryRoutes } from '../../../constants';

const routes = getCategoryRoutes();

export class Header extends React.Component {
    public state = {};

    public render() {
        return (
            <div className="pg-header">
                <div className="pg-header__top__wrap">
                    <div className="pg-header__top__wrap__left">
                        {/* +BOOKMARKCS CENTER EVENT REVIEW MEMBERSHIP LOGIN JOIN MY PAGEORDER */}
                        <Link to="/" className="pg-header__top__wrap__left__title">+BOOKMARKC</Link>
                    </div>
                    <div className="pg-header__top__wrap__right">
                        <Link to="/Login" className="pg-header__top__wrap__right__title">Login</Link>

                    </div>
                </div>
                <div className="pg-header__mide__wrap__logo">
                    <Logo />
                </div>
                <div className="pg-header__bot__wrap">
                    {routes.map((item, index) => <Dropdown key={index} route={item} />)}
                </div>
            </div>
        );
    }
}
