import { IsArray, IsBoolean, IsNotEmpty } from 'class-validator';

import { BillStock } from '../../bill-stock/dto/bill-stock';

export class AddTransactionRequest {
    @IsNotEmpty()
    @IsArray()
    bills: BillStock[];

    @IsBoolean()
    successful: boolean;
}
