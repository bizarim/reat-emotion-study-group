import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { IRoute } from '../../constants';
import { productGetListReq, selectProductList } from '../../modules/product';
import { RootState } from '../../modules/rootReducer';
import { MapDispatchToPropsFunction, connect } from 'react-redux';

interface ReduxProps {

}

interface OwnProps {
    route: IRoute;
}

interface DispatchProps {
    productGetListReq: typeof productGetListReq;
}

type Props = ReduxProps & OwnProps & DispatchProps;


class DropdownComponent extends Component<Props> {

    public render() {
        const { route } = this.props;
        return (
            <div className="dropdown">
                <Link className="dropdown-button" onClick={this.handleOnClick} id={route.main.to} to={route.main.to} >{route.main.name}</Link>
                <div className="dropdown-content">
                    {route.subs.map((item, index) => <Link onClick={this.handleOnClick} id={item.to} key={index} to={item.to} >{item.name}</Link>)}
                </div>
            </div>
        );
    }

    private handleOnClick = (event: any) => {
        const str: string = event.target.id;
        const temp = str.split('/').filter(o => o !== '');
        this.props.productGetListReq({
            category: temp[0],
            sub: temp[1],
            offset: 10,
            page: 1,
        });
    }
}


const mapStateProps = (state: RootState): ReduxProps => ({
    list: selectProductList(state),
});

const mapDispatchProps: MapDispatchToPropsFunction<DispatchProps, {}> =
    dispatch => ({
        productGetListReq: payload => dispatch(productGetListReq(payload)),
    });

export const Dropdown = withRouter(connect(mapStateProps, mapDispatchProps)(DropdownComponent) as any) as any;
