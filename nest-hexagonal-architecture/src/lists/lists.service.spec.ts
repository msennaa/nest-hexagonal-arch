import { of } from 'rxjs';
import { List } from './entities/list.entity';
import { ListGatewayInMemory } from './gateways/list-gateway-in-memory';
import { ListsService } from './lists.service';
import { ListCreatedEvent } from './events/list-created.event';

const mockHttpService = {
  post: jest.fn().mockReturnValue(of(null)),
};

describe('ListsService', () => {
  let service: ListsService;
  let listPersistenceGateway: ListGatewayInMemory;
  const eventEmitterMock = {
    emit: jest.fn(),
  };

  beforeEach(() => {
    listPersistenceGateway = new ListGatewayInMemory();
    service = new ListsService(listPersistenceGateway, eventEmitterMock as any);
  });

  it('Deve criar uma list', async () => {
    const list = await service.create({ name: 'my list' });
    expect(listPersistenceGateway.items).toEqual([list]);
    expect(eventEmitterMock.emit).toHaveBeenCalledWith(
      'list.created',
      new ListCreatedEvent(list),
    );
  });
});
