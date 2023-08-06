import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}


  @Get(':id')
  findOne(@Param('id') id: string) {
    try{
    return this.accountsService.findOne(+id);
  }catch(error){
    throw new NotFoundException;
  }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body('{cart}') updateAccountDto: UpdateAccountDto) {
    try{
    return this.accountsService.update(+id, updateAccountDto);
  }catch(error){
    throw new NotFoundException;
  }
  }
}
