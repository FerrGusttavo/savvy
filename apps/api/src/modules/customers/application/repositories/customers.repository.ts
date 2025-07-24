import { Customer } from '../../domain/entities/customer.entity'

export abstract class CustomersRepository {
  abstract create(customer: Customer): Promise<void>
  abstract findByEmail(email: string): Promise<Customer | null>
}
