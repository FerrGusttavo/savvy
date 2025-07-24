import { Injectable } from '@nestjs/common'
import { CustomersRepository } from 'src/modules/customers/application/repositories/customers.repository'
import { Customer } from 'src/modules/customers/domain/entities/customer.entity'
import { PrismaService } from 'src/shared/infra/database/prisma.service'
import { PrismaCustomerMapper } from '../mappers/prisma-customers.mapper'

@Injectable()
export class PrismaCustomersRepository implements CustomersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(customer: Customer): Promise<void> {
    const data = PrismaCustomerMapper.toPrisma(customer)
    await this.prisma.customer.create({
      data,
    })
  }

  async findByEmail(email: string): Promise<Customer | null> {
    const customer = await this.prisma.customer.findUnique({
      where: { email },
    })

    if (!customer) {
      return null
    }

    return PrismaCustomerMapper.toDomain(customer)
  }
}
