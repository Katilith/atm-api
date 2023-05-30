import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { BillStockService } from './bill-stock.service';
import { BillStockController } from './bill-stock.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BillStockEntity } from './entity/bill-stock.entity';

@Module({
    imports: [TypeOrmModule.forFeature([BillStockEntity])],
    providers: [BillStockService],
    controllers: [BillStockController]
})
export class BillStockModule implements OnApplicationBootstrap {

    constructor(private billStockService: BillStockService) {
    }

    async onApplicationBootstrap(): Promise<void> {
        const bills = await this.billStockService.getAllBillStocks();

        if (!bills?.length) {
            // Prepopulate the DB with the default values if no bill stocks are present
            await this.billStockService.prefill();
        }
    }

}
