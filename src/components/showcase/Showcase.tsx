import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ProductList } from '../product/ProductList';
import { Product } from '../../modules/types';
import { RootState } from '../../modules/rootReducer';
import { selectProductList, productGetListReq } from '../../modules/product';
import { MapDispatchToPropsFunction, connect } from 'react-redux';

interface ReduxProps {
    list: Product[];
}

interface ShowcaeProps {
    category: string;
}

interface MatchParams {
    category: string;
    sub: string;
}

type MatchProps = RouteComponentProps<MatchParams>;

interface DispatchProps {
    productGetListReq: typeof productGetListReq;
}

type Props = ReduxProps & ShowcaeProps & MatchProps & DispatchProps;

interface State {
    category: string;
    sub: string;
}

class ShowcaseComponent extends Component<Props, State> {

    public componentDidMount() {
        this.props.productGetListReq({
            category: this.props.match.params.category,
            sub: this.props.match.params.sub,
            offset: 10,
            page: 1,
        });
    }

    public render() {
        const { match, list } = this.props;
        // const category = this.getCategory(match.params.category);
        const category = match.params.category;
        // const sub = match.params.sub;

        return (
            <div className="pg-showcase">
                <div className="pg-showcase__title">
                    <p>====   {category}   ====</p>
                </div>
                <ProductList category={category} items={list} />
            </div>
        );
    }


}

const mapStateProps = (state: RootState): ReduxProps => ({
    list: selectProductList(state),
});

const mapDispatchProps: MapDispatchToPropsFunction<DispatchProps, {}> =
    dispatch => ({
        productGetListReq: payload => dispatch(productGetListReq(payload)),
    });


export const Showcase = withRouter(connect(mapStateProps, mapDispatchProps)(ShowcaseComponent));

