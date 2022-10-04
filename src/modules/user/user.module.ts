import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQuerySequelizeModule } from '@nestjs-query/query-sequelize';
import { Module } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { UserEntity } from './entities/user.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQuerySequelizeModule.forFeature([UserEntity])],
      resolvers: [{ DTOClass: UserDTO, EntityClass: UserEntity }],
    }),
  ],
  providers: [],
})
export class UserModule {}
