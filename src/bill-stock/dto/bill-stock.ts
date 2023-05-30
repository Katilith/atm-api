import { IsIn, IsInt, IsNegative, IsNumber, IsNumberString, MaxLength, Min } from 'class-validator';
import { billTypes } from '../model/bill-types';

export class BillStock {
    @IsNumber()
    @IsIn(billTypes)
    bill: number;

    @IsInt()
    @Min(0)
    amount: number;
}
