import { BillStock } from './bill-stock';
import { IsNotEmpty } from 'class-validator';

export class UpdateBillStockRequest {
    @IsNotEmpty()
    stock: BillStock[];
}
