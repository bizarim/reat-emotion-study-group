
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
