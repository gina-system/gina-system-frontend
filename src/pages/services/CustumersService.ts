import apiConfig from "@/pages/services/apiConfig";
import {DataResponseWrapper} from "@/pages/services/types/DataResponseWrapper.ts";
import {CustomerType, CustomerWithNotificationWrapper, CustomerWrapper, SearchCustomerQueryParamsType, SearchCustomerResponseType} from "@/pages/services/types/CustomerType.ts";

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


export async function createCustomer(customerData: CustomerType): Promise<CustomerWrapper> {
    const response = await apiConfig
        .post<DataResponseWrapper<CustomerWrapper>>('/v1/customers',{customer: customerData});

    return response.data.data;
}


export async function updateCustomer(customerId: string, customerData:CustomerType): Promise<CustomerWrapper> {
    const response = await apiConfig
        .put<DataResponseWrapper<CustomerWrapper>>(`/v1/customers/${customerId}`, {customer:customerData});

    return response.data.data;
}


export async function deleteCustomer(customerId: string): Promise<void> {
    await apiConfig
        .delete(`/v1/customers/${customerId}`);
}


export async function findCustomersAndNotifications(customerId: string): Promise<CustomerWithNotificationWrapper> {
    const response = await apiConfig
        .get<DataResponseWrapper<CustomerWithNotificationWrapper>>(`/v1/customers/${customerId}/notifications`);
    
    return response.data.data;
}