import { CustomersRepository } from 'src/modules/customers/application/repositories/customers.repository'
import { Customer } from 'src/modules/customers/domain/entities/customer.entity'

export class InMemoryCustomersRepository implements CustomersRepository {
  public items: Customer[] = []

  async create(customer: Customer): Promise<void> {
    this.items.push(customer)
  }

  async findByEmail(email: string): Promise<Customer | null> {
    const customer = this.items.find((item) => item.email.value === email)
    return customer || null
  }
}
