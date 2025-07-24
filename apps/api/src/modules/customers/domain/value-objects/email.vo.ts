export class Email {
  private readonly email: string

  constructor(email: string) {
    if (!this.validate(email)) throw new Error('Invalid email')
    this.email = email
  }

  private validate(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  get value() {
    return this.email
  }
}
