import { Prisma, Customer as PrismaCustomer } from 'generated/prisma'
import { Customer } from 'src/modules/customers/domain/entities/customer.entity'
import { Email } from 'src/modules/customers/domain/value-objects/email.vo'
import { Name } from 'src/modules/customers/domain/value-objects/name.vo'
import { Password } from 'src/modules/customers/domain/value-objects/password.vo'
import { UniqueEntityID } from 'src/shared/domain/entities/unique-entity-id'

export class PrismaCustomerMapper {
  static async toDomain(raw: PrismaCustomer): Promise<Customer> {
    return Customer.create(
      {
        name: new Name(raw.name),
        email: new Email(raw.email),
        password: Password.fromHash(raw.password),
      },
      new UniqueEntityID(raw.id),
    )
  }

  static toPrisma(customer: Customer): Prisma.CustomerCreateInput {
    return {
      id: customer.id.toString(),
      name: customer.name.value,
      email: customer.email.value,
      password: customer.password.value,
    }
  }
}
