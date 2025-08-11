import { Controller, Get, Query } from '@nestjs/common';
import { AccountsService } from './accounts.service';

@Controller('accounts')
export class AccountsController {
  constructor(private accounts: AccountsService) {}

  @Get()
  async getAccounts(@Query('customerId') customerId: string) {
    return await this.accounts.listAccounts(customerId);
  }

  @Get('transactions')
  async getTransactions(@Query('accountId') accountId: string) {
    return await this.accounts.listTransactions(accountId);
  }
}
