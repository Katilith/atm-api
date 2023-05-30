import { Test, TestingModule } from '@nestjs/testing';
import { BillStockService } from './bill-stock.service';

describe('BillStockService', () => {
    let service: BillStockService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [BillStockService],
        }).compile();

        service = module.get<BillStockService>(BillStockService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
