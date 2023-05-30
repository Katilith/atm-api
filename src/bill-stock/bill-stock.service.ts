import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BillStockEntity } from './entity/bill-stock.entity';
import { billTypes } from './model/bill-types';
import { UpdateBillStockRequest } from './dto/update-bill-stock-request';

@Injectable()
export class BillStockService {

    constructor(@InjectRepository(BillStockEntity) private billStockRepo: Repository<BillStockEntity>) {
    }

    async updateBillStocks(updateBillStockRequest: UpdateBillStockRequest): Promise<BillStockEntity[]> {
        if (!updateBillStockRequest?.stock?.length) {
            return [];
        }

        const entities: BillStockEntity[] = await this.getAllBillStocks();
        const entitiesToUpdate: BillStockEntity[] = [];

        for (const billStock of updateBillStockRequest.stock) {
            let entity = entities.find(b => b.bill === billStock.bill);
            if (!entity) {
                entity = new BillStockEntity();
                entity.bill = billStock.bill;
            }

            entity.amount = billStock.amount;
            entitiesToUpdate.push(entity);
        }

        return this.billStockRepo.save(entitiesToUpdate);
    }

    async getBillStock(bill: number): Promise<BillStockEntity | null> {
        return (await this.billStockRepo.findOne({
            where: {
                bill,
            }
        })) || null;
    }

    async getAllBillStocks(): Promise<BillStockEntity[]> {
        return (await this.billStockRepo.find())?.sort((a, b) => b.bill - a.bill);
    }

    async prefill(): Promise<void> {
        const entities: BillStockEntity[] = [];

        for (const bill of billTypes) {
            const entity = new BillStockEntity();
            entity.bill = bill;
            entity.amount = 10;
            entities.push(entity);
        }

        await this.billStockRepo.save(entities);
    }

}
