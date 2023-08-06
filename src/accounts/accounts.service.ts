import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { async } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account) private accountsRepository : Repository<Account>,
    
  ){}
  create(createAccountDto: CreateAccountDto) {
    const newAccount = this.accountsRepository.create(createAccountDto);
    return this.accountsRepository.save(newAccount);
  }

  findAll() {
    return this.accountsRepository.find;
  }

  findOne(id: number) {
    return this.accountsRepository.findOneBy({id});
  }

  async update(id: number, updateAccountDto: UpdateAccountDto) {
      const account = await this.findOne(id);
    return this.accountsRepository.save({...account,...updateAccountDto});
  }

  async remove(id: number) {
    const account = await this.findOne(id);
    return this.accountsRepository.remove(account);
  }
}
