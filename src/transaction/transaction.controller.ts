import { Body, Controller, Get, InternalServerErrorException, Post, UseGuards } from '@nestjs/common';

import { TransactionService } from './transaction.service';
import { TransactionEntity } from './entity/transaction.entity';
import { AddTransactionRequest } from './dto/add-transaction-request';
import { Role } from '../auth/role.decorator';
import { RoleGuard } from '../auth/role.guard';

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

    @UseGuards(RoleGuard)
    @Role('atm-admin')
    @Get()
    async getAllTransactions(): Promise<TransactionEntity[]> {
        return this.transactionService.getAllTransactions();
    }

}
