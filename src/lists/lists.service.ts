import { HttpService } from '@nestjs/axios';
import { Injectable, NotFoundException } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { ListGatewayInterface } from './gateways/list-gateway-interface';
import { List } from './entities/list.entity';

@Injectable()
export class ListsService {
  constructor(
    private listGateway: ListGatewayInterface,
    private httpService: HttpService,
  ) {}

  async create(createListDto: CreateListDto) {
    const list = new List(createListDto.name);
    await this.listGateway.create(list);
    await lastValueFrom(this.httpService.post('lists', { name: list.name }));
    return list;
  }

  async findAll() {
    return this.listGateway.findAll();
  }

  async findOne(id: number) {
    const list = await this.listGateway.findById(id);
    if (!list) {
      throw new NotFoundException(`List with id: ${id} not found`);
    }
    return list;
  }

  async update(id: number, updateListDto: UpdateListDto) {
    return `This action updates a #${id} list`;
  }

  async remove(id: number) {
    return `This action removes a #${id} list`;
  }
}
