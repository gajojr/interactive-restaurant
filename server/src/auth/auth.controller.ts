import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dtos/auth-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  logIn(@Body() authCredentialsDto: AuthCredentialsDto): Promise<string> {
    return this.authService.logIn(authCredentialsDto);
  }
}
