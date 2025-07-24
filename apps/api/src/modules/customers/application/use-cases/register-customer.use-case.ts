import { Injectable } from '@nestjs/common'
import { Either, left, right } from 'src/shared/domain/either'
import { Customer } from '../../domain/entities/customer.entity'
import { Email } from '../../domain/value-objects/email.vo'
import { Name } from '../../domain/value-objects/name.vo'
import { Password } from '../../domain/value-objects/password.vo'
import { CustomersRepository } from '../repositories/customers.repository'
import { CustomerAlreadyExistsError } from './errors/customer-already-exists-error'

interface RegisterCustomerUseCaseRequest {
  name: string
  email: string
  password: string
}

type RegisterCustomerUseCaseResponse = Either<
  CustomerAlreadyExistsError,
  {
    customer: Customer
  }
>

@Injectable()
export class RegisterCustomerUseCase {
  constructor(private readonly customersRepository: CustomersRepository) {}

  async execute({
    name,
    email,
    password,
  }: RegisterCustomerUseCaseRequest): Promise<RegisterCustomerUseCaseResponse> {
    const customerWithSameEmail =
      await this.customersRepository.findByEmail(email)

    if (customerWithSameEmail) {
      return left(new CustomerAlreadyExistsError(email))
    }

    const customer = Customer.create({
      name: new Name(name),
      email: new Email(email),
      password: await Password.create(password),
    })

    await this.customersRepository.create(customer)

    return right({
      customer,
    })
  }
}
