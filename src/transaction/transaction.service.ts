import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TransactionEntity } from './entity/transaction.entity';
import { BillStockEntity } from '../bill-stock/entity/bill-stock.entity';
import { AddTransactionRequest } from './dto/add-transaction-request';

@Injectable()
export class TransactionService {

    constructor(@InjectRepository(TransactionEntity) private transactionRepo: Repository<TransactionEntity>) {
    }

    async addTransaction(addTransactionRequest: AddTransactionRequest): Promise<TransactionEntity | null> {
        if (!addTransactionRequest) {
            return null;
        }

        const entity = new TransactionEntity();
        entity.bills = addTransactionRequest.bills;
        entity.successful = addTransactionRequest.successful;

        return (await this.transactionRepo.save(entity)) || null;
    }

    async getAllTransactions(): Promise<TransactionEntity[]> {
        return (await this.transactionRepo.find())?.sort((a, b) => b.id - a.id);
    }

}
