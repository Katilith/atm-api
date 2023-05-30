import { BadRequestException, Body, Controller, Get, NotFoundException, Param, Patch } from '@nestjs/common';
import { BillStockEntity } from './entity/bill-stock.entity';
import { BillStockService } from './bill-stock.service';
import { FindBillParams } from './dto/find-bill.params';
import { UpdateBillStockRequest } from './dto/update-bill-stock-request';

@Controller('bill-stocks')
export class BillStockController {

    constructor(private billStockService: BillStockService) {
    }

    @Patch()
    async updateBillStocks(@Body() updateBillStockRequest: Up<dateBillStockRequest): Promise<BillStockEntity[]> {
        if (!updateBillStockRequest?.stock?.length) {
            throw new BadRequestException(`No bills provided to update!`);
        }

        return this.billStockService.updateBillStocks(updateBillStockRequest);
    }

    @Get(':bill')
    async getBillStock(@Param() findBillParams: FindBillParams): Promise<BillStockEntity> {
        if (!findBillParams) {
            throw new BadRequestException(`Invalid bill supplied!`);
        }

        const billStockEntity = await this.billStockService.getBillStock(findBillParams.bill);

        if (!billStockEntity) {
            throw new NotFoundException(`Bill ${findBillParams.bill} was not found!`);
        }

        return billStockEntity;
    }

    @Get()
    async getAllBillStocks(): Promise<BillStockEntity[]> {
        return this.billStockService.getAllBillStocks();
    }

}
