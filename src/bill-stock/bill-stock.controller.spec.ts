import { Test, TestingModule } from '@nestjs/testing';
import { BillStockController } from './bill-stock.controller';

describe('BillStockController', () => {
    let controller: BillStockController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [BillStockController],
        }).compile();

        controller = module.get<BillStockController>(BillStockController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
