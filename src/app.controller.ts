import { Body, Controller, Get, Post } from '@nestjs/common';
import { Ctx, EventPattern, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor() { }

  @EventPattern({cmd:'new Data'})
  async handleCreatedEvent(data: any) {
    console.log(data);
  }

  @EventPattern('message_printed')
  async handleMessagePrinted(data: any) {
    console.log(data.text);
  }
}
