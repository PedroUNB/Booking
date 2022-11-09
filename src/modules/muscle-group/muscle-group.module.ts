import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQuerySequelizeModule } from '@nestjs-query/query-sequelize';
import { Module } from '@nestjs/common';
import { CreateMuscleGroupInput } from './dto/create-muscle-group.input';
import { UpdateMuscleGroupInput } from './dto/update-muscle-group.input';
import { MuscleGroupDTO } from './dto/muscle-group.dto';
import { MuscleGroupEntity } from './entities/muscle-group.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQuerySequelizeModule.forFeature([MuscleGroupEntity])],
      resolvers: [
        {
          DTOClass: MuscleGroupDTO,
          CreateDTOClass: CreateMuscleGroupInput,
          UpdateDTOClass: UpdateMuscleGroupInput,
          EntityClass: MuscleGroupEntity,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [],
})
export class MuscleGroupModule {}
