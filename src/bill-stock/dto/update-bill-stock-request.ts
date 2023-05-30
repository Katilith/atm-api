import { IsArray, IsNotEmpty } from 'class-validator';

import { BillStock } from './bill-stock';

export class UpdateBillStockRequest {
    @IsNotEmpty()
    @IsArray()
    stock: BillStock[];
}
