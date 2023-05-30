import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { BillStock } from '../../bill-stock/dto/bill-stock';

@Entity('transaction')
export class TransactionEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'jsonb', nullable: false })
    bills: BillStock[];

    @Column({ nullable: false })
    successful: boolean;

}