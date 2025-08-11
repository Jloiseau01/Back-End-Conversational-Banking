import { Injectable, HttpException } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AccountsService {
  private token: string | null = null;

  private async getToken() {
    if (this.token) return this.token;
    const url = `${process.env.FINXACT_API_URL}/oauth2/token`;
    try {
      const res = await axios.post(url, 'grant_type=client_credentials', {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        auth: {
          username: process.env.FINXACT_CLIENT_ID || '',
          password: process.env.FINXACT_CLIENT_SECRET || ''
        }
      });
      this.token = res.data.access_token;
      return this.token;
    } catch (e: any) {
      throw new HttpException(e.response?.data || 'Finxact auth error', e.response?.status || 500);
    }
  }

  async listAccounts(customerId: string) {
    const token = await this.getToken();
    const url = `${process.env.FINXACT_API_URL}/accounts?customerId=${customerId}`;
    const res = await axios.get(url, { headers: { Authorization: `Bearer ${token}` } });
    return res.data?.accounts || [];
  }

  async listTransactions(accountId: string) {
    const token = await this.getToken();
    const url = `${process.env.FINXACT_API_URL}/accounts/${accountId}/transactions`;
    const res = await axios.get(url, { headers: { Authorization: `Bearer ${token}` } });
    return res.data?.transactions || [];
  }
}
