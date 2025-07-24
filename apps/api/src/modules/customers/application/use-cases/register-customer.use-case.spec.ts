import { InMemoryCustomersRepository } from 'test/repositories/in-memory-customers.repository'
import { RegisterCustomerUseCase } from './register-customer.use-case'

describe('Register Customer', () => {
  let inMemoryCustomersRepository: InMemoryCustomersRepository
  let sut: RegisterCustomerUseCase

  beforeEach(() => {
    inMemoryCustomersRepository = new InMemoryCustomersRepository()
    sut = new RegisterCustomerUseCase(inMemoryCustomersRepository)
  })

  it('should be able to register a customer', async () => {
    const result = await sut.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    })

    expect(result.isRight()).toBe(true)
    expect(inMemoryCustomersRepository.items).toHaveLength(1)
    expect(inMemoryCustomersRepository.items[0].name.value).toBe('John Doe')
    expect(inMemoryCustomersRepository.items[0].email.value).toBe(
      'johndoe@example.com',
    )
    expect(inMemoryCustomersRepository.items[0].password.value).not.toBe(
      '123456',
    )
  })
})
