import React from 'react';
import Product, { IProduct } from './Product';

const MAXROW = 4;
const MAXCOL = 2;

interface Props {
    category: string;
    items: IProduct[];
}

export class ProductList extends React.Component<Props> {

    public render() {
        const { items } = this.props;
        const list = this.getProductList(items);

        return (
            <div className="pg-showcase__body">
                {list.map((item, index) => this.renderRow(item, index))}
            </div>
        );
    }

    private renderRow = (items: IProduct[], idx: number) => {
        const list = this.getCol(items);
        return (
            <div key={idx} className="pg-showcase__body__row">
                {list.map((item, index) => this.renderCol(item, index))}
            </div>
        );
    }

    private renderCol = (items: IProduct[], idx: number) => {
        return (
            <div key={idx} className="pg-showcase__body__row__col">
                {items.map((item, index) => <Product key={index} item={item} />)}
            </div>
        );
    }

    private getCol = (items: IProduct[]): IProduct[][] => {
        if (items) {
            const newList: IProduct[][] = [];
            const col = Math.floor(items.length / MAXCOL) + (items.length % MAXCOL !== 0 ? 1 : 0);
            for (let i = 0; i < col; ++i) {
                const clone = (JSON.parse(JSON.stringify(items)));
                const start = i * MAXCOL;
                const end = clone.length < (i + 1) * MAXCOL ? clone.length : (i + 1) * MAXCOL;
                const list = clone.splice(start, end);
                newList.push(list);
            }
            return newList;
        }

        return [];
    }

    private getProductList = (items: IProduct[]): IProduct[][] => {
        if (items) {
            const newList: IProduct[][] = [];
            const row = Math.floor(items.length / MAXROW) + (items.length % MAXROW !== 0 ? 1 : 0);
            for (let i = 0; i < row; ++i) {
                const clone = (JSON.parse(JSON.stringify(items)));
                const start = i * MAXROW;
                const end = clone.length < (i + 1) * MAXROW ? clone.length : (i + 1) * MAXROW;
                const list = clone.splice(start, end);
                newList.push(list);
            }
            return newList;
        }

        return [];
    }
}
