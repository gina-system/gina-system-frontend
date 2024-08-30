import apiConfig from "@/pages/services/api.tsx";
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

// ToDO Criar os resto dos request