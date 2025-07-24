import { Module } from '@nestjs/common'
import { DatabaseModule } from 'src/shared/infra/database/database.module'
import { RegisterCustomerUseCase } from './application/use-cases/register-customer.use-case'
import { RegisterCustomerController } from './infrastructure/controllers/register-customer.controller'

@Module({
  imports: [DatabaseModule],
  controllers: [RegisterCustomerController],
  providers: [RegisterCustomerUseCase],
})
export class CustomerModule {}
