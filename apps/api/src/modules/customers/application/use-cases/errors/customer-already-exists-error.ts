import { UseCaseError } from 'src/shared/domain/errors/use-case-error'

export class CustomerAlreadyExistsError extends Error implements UseCaseError {
  constructor(identifier: string) {
    super(`Customer with identifier ${identifier} already exists.`)
    this.name = 'CustomerAlreadyExistsError'
  }
}
