export class InventoryRequisition {
    id!:number;
    requisitionerdepartment!:string;
    uniqueItemCode!:string;
    quantity!:number;
    purposeofrequistions!:string;
    materialrequireddate!:Date;
    dateofrequistions!:Date;
    itemdescription!:string;
    unitsofmeasure!:string;
    deliverydepartment!:string;
    notesandcomments!:string;
    status!: 'Pending' | 'Approved' | 'Rejected'; // Status for approvals
}
