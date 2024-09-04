import apiConfig from "@/pages/services/api.ts";
import {DataResponseWrapper} from "@/pages/services/types/DataResponseWrapper.ts";
import {CustomerWrapper, SearchCustomerQueryParamsType, SearchCustomerResponseType} from "@/pages/services/types/CustomerType.ts";

export async function searchCustomer(searchQuery: SearchCustomerQueryParamsType): Promise<SearchCustomerResponseType> {
    const response = await apiConfig
        .get<DataResponseWrapper<SearchCustomerResponseType>>('/v1/customers', {
            params: searchQuery
        });

    return response.data.data;
}

export async function findCustomer(customerId: string): Promise<CustomerWrapper> {
    const response = await apiConfig
        .get<DataResponseWrapper<CustomerWrapper>>(`/v1/customers/${customerId}`);

    return response.data.data;
}


export async function createCustomer(customerData: Partial<CustomerWrapper>): Promise<CustomerWrapper> {
    const response = await apiConfig
        .post<DataResponseWrapper<CustomerWrapper>>('/v1/customers', customerData);

    return response.data.data;
}


export async function updateCustomer(customerId: string, customerData: Partial<CustomerWrapper>): Promise<CustomerWrapper> {
    const response = await apiConfig
        .put<DataResponseWrapper<CustomerWrapper>>(`/v1/customers/${customerId}`, customerData);

    return response.data.data;
}


export async function deleteCustomer(customerId: string): Promise<void> {
    await apiConfig
        .delete(`/v1/customers/${customerId}`);
}


export async function findCustomersAndNotifications(searchQuery: SearchCustomerQueryParamsType): Promise<SearchCustomerResponseType> {
    const response = await apiConfig
        .get<DataResponseWrapper<SearchCustomerResponseType>>('/v1/customers/notifications', {
            params: searchQuery
        });

    return response.data.data;
}