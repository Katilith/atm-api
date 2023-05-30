import { IsNumberString } from 'class-validator';

export class FindBillParams {
    @IsNumberString()
    bill: number;
}
