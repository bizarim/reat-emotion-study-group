import { Product } from '../modules/types';


export const PRODUCT: number = 10;

export interface IRouteNode {
    name: string;
    to: string;
}

export interface IRoute {
    main: IRouteNode;
    subs: IRouteNode[];
}

export const getCategoryRoutes = (): IRoute[] => {
    return [
        {
            main: { name: 'OUTER', to: '/outer' },
            subs: [
                { name: '코트', to: '/outer/cot' },
                { name: '패딩', to: '/outer/pad' },
                { name: '후드', to: '/outer/hood' },
                { name: '가디건', to: '/outer/gudi' },
                { name: 'MA - 1', to: '/outer/ma' },
            ],
        },
        {
            main: { name: 'TOP', to: '/top' },
            subs: [
                { name: '맨투맨', to: '/outer' },
                { name: '반팔티', to: '/outer' },
                { name: '긴팔티', to: '/outer' },
                { name: '니트', to: '/outer' },
            ],
        },
        {
            main: { name: 'PANTS', to: '/pants' },
            subs: [
                { name: '슬랙스', to: '/outer' },
                { name: '면바지', to: '/outer' },
                { name: '청바지', to: '/outer' },
                { name: '반바지', to: '/outer' },
            ],
        },
        {
            main: { name: 'SHIRTS', to: '/shirts' },
            subs: [
                { name: '체크', to: '/outer' },
                { name: '스트라이프', to: '/outer' },
                { name: '차이나', to: '/outer' },
                { name: '청남방', to: '/outer' },
            ],
        },
        {
            main: { name: 'SHOES', to: '/shoes' },
            subs: [
                { name: '스니커즈', to: '/outer' },
                { name: '구두', to: '/outer' },
                { name: '슬리퍼', to: '/outer' },
                { name: '키높이 신발', to: '/outer' },
            ],
        },
    ];
};

export const getProducList = (key: string, sub: string): Product[] => {
    console.log(sub);
    const list = [
        {
            key: 'outer', items: [
                { id: 21, category: 'outer', subCategory: 'cot', oriPrice: 1000, salePrice: 500, name: 'outer1', tag: 'hot' } as Product,
                { id: 22, category: 'outer', subCategory: 'cot', oriPrice: 2000, salePrice: 0, name: 'outer2', tag: 'hot' } as Product,
                { id: 23, category: 'outer', subCategory: 'cot', oriPrice: 3000, salePrice: 0, name: 'outer3', tag: 'best' } as Product,
                { id: 24, category: 'outer', subCategory: 'pad', oriPrice: 4000, salePrice: 0, name: 'outer4', tag: 'best' } as Product,
                { id: 25, category: 'outer', subCategory: 'hood', oriPrice: 5000, salePrice: 0, name: 'outer5', tag: 'none' } as Product,
                { id: 26, category: 'outer', subCategory: 'hood', oriPrice: 6000, salePrice: 0, name: 'outer6', tag: 'none' } as Product,
                { id: 27, category: 'outer', subCategory: 'hood', oriPrice: 7000, salePrice: 0, name: 'outer7', tag: 'none' } as Product,
            ],
        },
        {
            key: 'top', items: [
                { id: 11, category: 'top', subCategory: 'cot', oriPrice: 1000, salePrice: 500, name: 'top1', tag: 'hot' } as Product,
                { id: 12, category: 'top', subCategory: 'cot', oriPrice: 2000, salePrice: 0, name: 'top2', tag: 'hot' } as Product,
                { id: 13, category: 'top', subCategory: 'cot', oriPrice: 3000, salePrice: 0, name: 'top3', tag: 'best' } as Product,
                { id: 14, category: 'top', subCategory: 'cot', oriPrice: 4000, salePrice: 0, name: 'top4', tag: 'best' } as Product,
                { id: 15, category: 'top', subCategory: 'cot', oriPrice: 5000, salePrice: 0, name: 'top5', tag: 'none' } as Product,
                { id: 16, category: 'top', subCategory: 'cot', oriPrice: 6000, salePrice: 0, name: 'top6', tag: 'none' } as Product,
                { id: 17, category: 'top', subCategory: 'cot', oriPrice: 7000, salePrice: 0, name: 'top7', tag: 'none' } as Product,
            ],
        },
    ];

    return list
        .filter(item => item.key === key)
        .map(item => sub ? item.items.filter(o => o.subCategory === sub) : item.items)[0];
};
