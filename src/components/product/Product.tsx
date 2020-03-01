import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../modules/types';

interface Props {
    item: Product;
}
interface State {

}

export default class ProductComponent extends Component<Props, State> {
    public state = {};
    public render() {
        const { item } = this.props;
        return (
            <div key={item.id} className="pg-showcase__body__row__col__item">
                <Link to={`/product/${item.id}`}>
                    <div className="pg-showcase__body__row__col__item__img">img</div>
                    <p>{item.id}</p>
                    <p>{item.name}</p>
                    <p>{item.oriPrice}</p>
                    <p>{item.salePrice}</p>
                    <p>{item.tag}</p>
                </Link>
            </div >
        );
    }
}
