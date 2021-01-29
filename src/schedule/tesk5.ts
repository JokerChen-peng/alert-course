import { CommonSchedule,Inject,Schedule, Provide,Config } from '@midwayjs/decorator';
import { Context } from 'egg';


@Provide()
@Schedule({
  // 通过 schedule 属性来设置定时任务的执行间隔等配置
  cron: '0 42 11 * * 3',
  type:'worker'
})

export class Task4 implements CommonSchedule {
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
            text: '#### 上课了！ \n> 已经11:42了，11:42就要上课了，在103教室上设计模式课，老师是教师\n> ![week](https://images.gitee.com/uploads/images/2021/0127/093436_eb31b049_2056918.png)\n',
          },
      },
  });
  }
}


