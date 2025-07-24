import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from 'generated/prisma'

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      log: ['warn', 'error'],
    })
  }
  onModuleInit() {
    this.$connect().catch((error) => {
      console.error('Failed to connect to the database:', error)
      process.exit(1)
    })
  }
  onModuleDestroy() {
    this.$disconnect().catch((error) => {
      console.error('Failed to disconnect from the database:', error)
    })
  }
}
