import {
  BadRequestException,
  Body,
  ConflictException,
  Controller,
  Post,
  UsePipes,
} from '@nestjs/common'
import { ZodValidationPipe } from 'src/shared/infra/https/pipes/zod-validation-pipe'
import z from 'zod'
import { CustomerAlreadyExistsError } from '../../application/use-cases/errors/customer-already-exists-error'
import { RegisterCustomerUseCase } from '../../application/use-cases/register-customer.use-case'

export const registerCustomerSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  password: z.string().min(6),
})

type RegisterCustomerSchema = z.infer<typeof registerCustomerSchema>

@Controller('customers')
export class RegisterCustomerController {
  constructor(
    private readonly registerCustomerService: RegisterCustomerUseCase,
  ) {}

  @Post()
  @UsePipes(new ZodValidationPipe(registerCustomerSchema))
  async handle(@Body() body: RegisterCustomerSchema) {
    const { name, email, password } = body

    const result = await this.registerCustomerService.execute({
      name,
      email,
      password,
    })

    if (result.isLeft()) {
        const error = result.value

        switch (error.constructor) {
            case CustomerAlreadyExistsError:
                throw new ConflictException('Customer already exists.')
            default:
                throw new BadRequestException(error.message)
        }
    }

    return {
        customerId: result.value.customer.id.toString()
    }
  }
}
