import { Entity } from './entity'
import { UniqueEntityID } from './unique-entity-id'

interface Timestamps {
  createdAt: Date
  updatedAt: Date
}

export abstract class TimestampedEntity<
  Props extends Timestamps,
> extends Entity<Props> {
  get createdAt() {
    return this.props.createdAt
  }
  get updatedAt() {
    return this.props.updatedAt
  }

  protected constructor(
    props: Omit<Props, 'createdAt' | 'updatedAt'> & Partial<Timestamps>,
    id?: UniqueEntityID,
  ) {
    const now = new Date()
    super(
      {
        ...props,
        createdAt: props.createdAt ?? now,
        updatedAt: props.updatedAt ?? now,
      } as Props,
      id,
    )
  }

  protected touch() {
    this.props.updatedAt = new Date()
  }
}
