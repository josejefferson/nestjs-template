import { CrudConfigService } from '@dataui/crud'

CrudConfigService.load({
  params: {
    id: { field: 'id', type: 'uuid', primary: true }
  },
  routes: {
    exclude: ['createManyBase', 'replaceOneBase']
  }
})
