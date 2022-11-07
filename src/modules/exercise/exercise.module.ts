import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQuerySequelizeModule } from '@nestjs-query/query-sequelize';
import { Module } from '@nestjs/common';
import { CreateExerciseInput } from './dto/create-exercise.input';
import { UpdateExerciseInput } from './dto/update-exercise.input';
import { ExerciseDTO } from './dto/exercise.dto';
import { ExerciseEntity } from './entities/exercise.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQuerySequelizeModule.forFeature([ExerciseEntity])],
      resolvers: [
        {
          DTOClass: ExerciseDTO,
          CreateDTOClass: CreateExerciseInput,
          UpdateDTOClass: UpdateExerciseInput,
          EntityClass: ExerciseEntity,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [],
})
export class ExerciseModule {}
