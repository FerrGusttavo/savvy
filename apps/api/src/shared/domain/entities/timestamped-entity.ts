import { Entity } from './entity'
import { UniqueEntityID } from './unique-entity-id'

interface Timestamps {
  createdAt: Date
  updatedAt: Date
}

export abstract class TimestampedEntity<Props> extends Entity<
  Props & Timestamps
> {
  get createdAt() {
    return this.props.createdAt
  }
  get updatedAt() {
    return this.props.updatedAt
  }

  protected constructor(props: Props, id?: UniqueEntityID) {
    const now = new Date()
    super(
      {
        ...props,
        createdAt: now,
        updatedAt: now,
      } as Props & Timestamps,
      id,
    )
  }

  protected touch() {
    this.props.updatedAt = new Date()
  }
}
