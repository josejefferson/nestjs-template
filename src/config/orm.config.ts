import { DataSource, DataSourceOptions } from 'typeorm'

export const ormConfig: DataSourceOptions = {
  // synchronize: true,
  // logging: true,
  type: 'postgres',
  url: process.env.DATABASE_URL,
  ssl: true,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../migrations/*{.ts,.js}'],
  migrationsRun: true
}

const dataSource = new DataSource(ormConfig)
export default dataSource
