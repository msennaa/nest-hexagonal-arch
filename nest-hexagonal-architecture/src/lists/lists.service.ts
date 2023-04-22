import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { ListGatewayInterface } from './gateways/list-gateway-interface';
import { List } from './entities/list.entity';
import EventEmitter from 'events';
import { ListCreatedEvent } from './events/list-created.event';

@Injectable()
export class ListsService {
  constructor(
    @Inject('ListPersistenceGateway')
    private ListPersistenceGateway: ListGatewayInterface,
    @Inject('EventEmitter')
    private eventEmitter: EventEmitter,
  ) {}

  async create(createListDto: CreateListDto) {
    const list = new List(createListDto.name);
    await this.ListPersistenceGateway.create(list);
    this.eventEmitter.emit('list.created', new ListCreatedEvent(list));
    return list;
  }

  async findAll() {
    return this.ListPersistenceGateway.findAll();
  }

  async findOne(id: number) {
    const list = await this.ListPersistenceGateway.findById(id);
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
