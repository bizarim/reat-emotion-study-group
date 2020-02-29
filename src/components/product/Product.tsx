import React, { Component } from 'react';

export interface IProduct {
    id: number;
    category: string;
    sub: string;
    name: string;
    oriPrice: number;
    salePrice: number;
    tag: string;
}

interface Props {
    item: IProduct;
}
interface State {

}

export default class Product extends Component<Props, State> {
    public state = {};
    public render() {
        const { item } = this.props;
        return (
            <div key={item.id} className="pg-showcase__body__row__col__item">
                <div className="pg-showcase__body__row__col__item__img">img</div>
                <p>{item.id}</p>
                <p>{item.name}</p>
                <p>{item.oriPrice}</p>
                <p>{item.salePrice}</p>
                <p>{item.tag}</p>
            </div>
        );
    }
}
