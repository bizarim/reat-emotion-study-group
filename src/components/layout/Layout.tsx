import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Showcase } from '../showcase/Showcase';
import Login from '../login/Login';
import NoMatch from '../error/NoMatch';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ProductDetailComponent } from '../product/ProductDetail';


const PublicRoute: React.FC<any> = ({ component: CustomComponent, loading, isLogged, ...res }) => {
    if (loading) {
        return (<div>loading</div>);
    }
    if (isLogged) {
        return (<div>isLogged</div>);
    }
    const renderCustomComponet = (props: any) => <CustomComponent {...props} />;
    return (<Route {...res} render={renderCustomComponet} />);
};

const PrivateRoute: React.FC<any> = ({ component: CustomComponent, loading, isLogged, ...res }) => {
    if (loading) {
        return (<div>loading</div>);
    }
    if (isLogged) {
        return (<div>isLogged</div>);
    }
    const renderCustomComponet = (props: any) => <CustomComponent {...props} />;
    return (<Route {...res} render={renderCustomComponet} />);
};

class LayoutComponent extends React.Component {
    public state = {};
    public render() {
        return (
            <div>
                <Switch>
                    <PublicRoute path="/test" component={Showcase} />
                    <PrivateRoute path="/login" component={Login} />
                    <Route exact={true} path="/" component={Showcase} />
                    <Route exact={true} path="/product/:id" component={ProductDetailComponent} />
                    <Route exact={true} path="/:category?/:sub?" component={Showcase} />
                    <Route component={NoMatch} />
                </Switch>
                {/* <Footer /> */}
            </div>
        );
    }
}

const mapStateProps = (state: any) => ({

});

const mapDispatchProps = (dispatch: Dispatch<any>) => ({

});

export const Layout = withRouter(connect(mapStateProps, mapDispatchProps)(LayoutComponent));
