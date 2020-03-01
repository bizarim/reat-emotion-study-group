
export interface CommonError {
    code: number;
    message: string[];
}

export interface Product {
    id: number;
    category: string;
    subCategory: string;
    name: string;
    oriPrice: number;
    salePrice: number;
    tag: string;
}

export interface ProductDetail {

}
