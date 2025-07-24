import { Module } from '@nestjs/common'
import { CustomersRepository } from 'src/modules/customers/application/repositories/customers.repository'
import { PrismaCustomersRepository } from 'src/modules/customers/infrastructure/database/repositories/prisma-customers.repository'
import { PrismaService } from './prisma.service'

@Module({
  providers: [
    PrismaService,
    {
      provide: CustomersRepository,
      useClass: PrismaCustomersRepository,
    },
  ],
  exports: [PrismaService, CustomersRepository],
})
export class DatabaseModule {}
