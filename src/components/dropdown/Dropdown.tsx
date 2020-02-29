import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IRoute } from '../../constants';

interface Props {
    route: IRoute;
}
interface State {

}

export class Dropdwon extends Component<Props, State> {
    public state = {};

    public render() {
        const { route } = this.props;
        return (
            <div className="dropdown">
                <Link className="dropdown-button" to={route.main.to} >{route.main.name}</Link>
                <div className="dropdown-content">
                    {route.subs.map((item, index) => <Link key={index} to={item.to} >{item.name}</Link>)}
                </div>
            </div>
        );
    }
}
