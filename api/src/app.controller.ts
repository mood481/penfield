import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
    +'</br>'+this.appService.setUser()
    +'</br>'+this.appService.viewUser();
  }

  setUser():string{
    return this.appService.setUser();
  }
  async viewUser():Promise<String>{
    return await this.appService.viewUser();
  }
}
