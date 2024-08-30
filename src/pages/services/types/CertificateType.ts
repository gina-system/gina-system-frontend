import {AuditType} from "@/pages/services/types/AuditType.ts";

export interface CertificateType {
    id: string;
    model: string;
    expirationDate: Date;
    issueDate: Date;
    audit: AuditType;
}