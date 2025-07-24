import { TimestampedEntity } from 'src/shared/domain/entities/timestamped-entity'
import { UniqueEntityID } from 'src/shared/domain/entities/unique-entity-id'
import { Email } from '../value-objects/email.vo'
import { Name } from '../value-objects/name.vo'
import { Password } from '../value-objects/password.vo'

interface CustomerProps {
  name: Name
  email: Email
  password: Password
}

export class Customer extends TimestampedEntity<CustomerProps> {
  get name() {
    return this.props.name
  }

  get email() {
    return this.props.email
  }

  get password() {
    return this.props.password
  }

  static create(props: CustomerProps, id?: UniqueEntityID) {
    const customer = new Customer(props, id)

    return customer
  }
}
