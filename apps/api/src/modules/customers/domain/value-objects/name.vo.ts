export class Name {
  private readonly name: string

  constructor(name: string) {
    if (!name || name.trim().length < 2) throw new Error('Invalid name')
    this.name = name
  }

  get value() {
    return this.name
  }
}
