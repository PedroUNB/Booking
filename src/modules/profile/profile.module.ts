import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQuerySequelizeModule } from '@nestjs-query/query-sequelize';
import { Module } from '@nestjs/common';
import { CreateProfileInput } from './dto/create-profile.input';
import { UpdateProfileInput } from './dto/update-profile.input';
import { ProfileDTO } from './dto/profile.dto';
import { ProfileEntity } from './entities/profile.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQuerySequelizeModule.forFeature([ProfileEntity])],
      resolvers: [
        {
          DTOClass: ProfileDTO,
          CreateDTOClass: CreateProfileInput,
          UpdateDTOClass: UpdateProfileInput,
          EntityClass: ProfileEntity,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [],
})
export class ProfileModule {}
