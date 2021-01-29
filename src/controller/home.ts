import { Controller, Get, Provide } from '@midwayjs/decorator';
const classSchedule = require('../model/classSchedule.json')
@Provide()
@Controller('/')
export class HomeController {
  @Get('/')
  async home() {
    return classSchedule ;
  }
}
