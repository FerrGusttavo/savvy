import * as bcrypt from 'bcrypt'

export class Password {
  private readonly hashed: string

  private constructor(hashed: string) {
    this.hashed = hashed
  }

  static async create(plain: string): Promise<Password> {
    if (!plain || plain.length < 6) {
      throw new Error('Password must be at least 6 characters long')
    }
    const hash = await bcrypt.hash(plain, 10)
    return new Password(hash)
  }

  static fromHash(hash: string): Password {
    if (!hash || hash.trim().length < 60) {
      throw new Error('Invalid password hash')
    }
    return new Password(hash)
  }

  compareWith(plain: string): Promise<boolean> {
    return bcrypt.compare(plain, this.hashed)
  }

  get value(): string {
    return this.hashed
  }
}
