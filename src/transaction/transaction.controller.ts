import { Body, Controller, Get, InternalServerErrorException, Post } from '@nestjs/common';

import { TransactionService } from './transaction.service';
import { TransactionEntity } from './entity/transaction.entity';
import { AddTransactionRequest } from './dto/add-transaction-request';

@Controller('transactions')
export class TransactionController {

    constructor(private transactionService: TransactionService) {
    }

    @Post()
    async addTransaction(@Body() addTransactionRequest: AddTransactionRequest): Promise<TransactionEntity> {
        const entity = this.transactionService.addTransaction(addTransactionRequest);

        if (!entity) {
            throw new InternalServerErrorException(`Error adding transaction!`);
        }

        return entity;
    }

    @Get()
    async getAllTransactions(): Promise<TransactionEntity[]> {
        return this.transactionService.getAllTransactions();
    }

}
