import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { getProducList } from '../../constants';
import { ProductList } from '../product/ProductList';


interface ShowcaeProps {
    category: string;
}

interface MatchParams {
    category: string;
    sub: string;
}

type MatchProps = RouteComponentProps<MatchParams>;

type Props = ShowcaeProps & MatchProps;

interface State {

}

export class Showcase extends Component<Props, State> {


    public constructor(props: Props) {
        super(props);

    }

    public render() {
        const { match } = this.props;
        // const category = this.getCategory(match.params.category);
        const category = match.params.category;
        const sub = match.params.sub;
        return (
            <div className="pg-showcase">
                <div className="pg-showcase__title">
                    <p>====   {category}   ====</p>
                </div>
                <ProductList category={category} items={getProducList(category, sub)} />
            </div>
        );
    }


}

