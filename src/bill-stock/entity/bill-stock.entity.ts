import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('bill_stock')
export class BillStockEntity {

    @PrimaryColumn({
        nullable: false,
        unique: true,
    })
    bill: number;

    @Column({
        nullable: false,
        default: 10,
    })
    amount: number;

}