import {PageRequestType, PageResponseType} from "@/pages/services/types/PageType.ts";
import {CertificateType} from "@/pages/services/types/CertificateType.ts";
import {AuditType} from "@/pages/services/types/AuditType.ts";

export interface CustomerType {
    id: string;
    name: string;
    cpf: string;
    brithDate: string;
    phoneNumber: string;
    email: string;
    referenceNumber: string;
    certificates: CertificateType[]
    audit: AuditType
}

export type NewCustomerRequestType = Omit<CustomerType, 'id'>

export interface SearchCustomerQueryParamsType extends PageRequestType {
    id?: string;
    name?: string;
    cpf?: string;
    brithDate?: string;
    phoneNumber?: string;
    email?: string;
    referenceNumber?: string;
    certificateId?: string;
    certificateModel?: string;
    certificateExpirationDate?: string;
    certificateIssueDate?: string;
}

export type CustomerWrapper = { customer: CustomerType };

export type SearchCustomerResponseType = PageResponseType<CustomerWrapper>;
