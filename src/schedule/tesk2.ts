import { CommonSchedule,Inject,Schedule, Provide,Config } from '@midwayjs/decorator';
import { Context } from 'egg';


@Provide()
@Schedule({
  // 通过 schedule 属性来设置定时任务的执行间隔等配置
  cron: '0 0 9 * * 1',
  type:'worker'
})

export class Task1 implements CommonSchedule {
   @Inject()
   ctx: Context;
   @Config('url')
   url: any
  

    //exec 是真正定时任务执行时被运行的函数
   async exec (){
    console.log('开始执行定时任务')

     await this.ctx.curl(this.url, {
      method: 'POST',
      headers: {
          'content-type': 'application/json',
      },
      data: {
          msgtype: 'markdown',
          markdown: {
            title: '还有0分钟，就上课了！',
            text: '#### 上课了！ \n> 已经09:00了，9:00就要上课了，在102教室上设计模式课，老师是教师\n> ![week](https://images.gitee.com/uploads/images/2021/0127/093358_42aa78e9_2056918.png)\n',
          },
      },
  });
  }
}


