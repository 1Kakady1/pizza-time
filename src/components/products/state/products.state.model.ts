export interface IProductsExcept {
    title: string;
    preview: string;
    id: string;
    price: {
        [key:string]: number
    } | number;
    cat: string[];
    isTop: boolean;
    filters: {
        size: string[]
    };
}
export interface IProducts extends IProductsExcept {
    status: string;
    desc: string;
    name: string;
    code: number;
    [key: string]: unknown
}
export interface IProductsData{
    products: IProducts[];
    isLoad: boolean;
    isRefresh: boolean;
    error: string;
    currentPost?: IProducts;
    filters: IProductsFilters;
}

interface IProductsFilters{
    limit: number;
    offset: number;
}

