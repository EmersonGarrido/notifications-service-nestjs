import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['delicate-raccoon-9205-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'ZGVsaWNhdGUtcmFjY29vbi05MjA1JCVKacmWTTMF4lTYgxEJnW96-RObRAGmvSw',
          password:
            'XZsEZmnhtzXNGzdJax_4bDaDmliv9jxh-6nCtBFxeADxcOgxHKFklbk52SqUGs3cB39JGw==',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
