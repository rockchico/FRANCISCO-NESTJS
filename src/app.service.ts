import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class AppService {
  
  constructor(private configService: ConfigService) {}

  getHello(): string {
    
    const minhaEnvVar = this.configService.get<string>('MINHA_ENV_VAR');
    
    return `Bem-vindo ao teste! minhaEnvVar = ${minhaEnvVar}`;
  }
}
