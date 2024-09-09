import {AuditType} from "@/pages/services/types/AuditType.ts";

export interface NotificationType {
    id: string;
    type: string;
    triggerDate: Date;
    triggeredDate?: Date
    isManualTrigger?: Date
    audit: AuditType
}