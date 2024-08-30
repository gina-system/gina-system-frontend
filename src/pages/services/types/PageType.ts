export const FIRST_PAGE_NUMBER = 1;

export interface PageRequestType {
    pageNumber: number;
    pageSize?: number;
    sortDirection?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface PageInfoResponseType {
    number: number;
    size: number;
    sortDirection: string,
    createdAt: Date;
    updatedAt: Date;
}

export interface PageResponseType<T> {
    page: PageInfoResponseType;
    result: T[];
}