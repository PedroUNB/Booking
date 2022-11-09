import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './modules/user/user.module';
import { UserEntity } from './modules/user/entities/user.entity';
import { ProfileEntity } from './modules/profile/entities/profile.entity';
import { ProfileModule } from './modules/profile/profile.module';
import { FileEntity } from './modules/file/entities/file.entity';
import { FileModule } from './modules/file/file.module';
import { ExerciseModule } from './modules/exercise/exercise.module';
import { ExerciseEntity } from './modules/exercise/entities/exercise.entity';
import { MuscleGroupModule } from './modules/muscle-group/muscle-group.module';
import { MuscleGroupEntity } from './modules/muscle-group/entities/muscle-group.entity';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'booking',
      autoLoadModels: true,
      synchronize: true,
      models: [
        UserEntity,
        ProfileEntity,
        FileEntity,
        ExerciseEntity,
        MuscleGroupEntity,
      ],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    UserModule,
    ProfileModule,
    FileModule,
    ExerciseModule,
    MuscleGroupModule,
  ],
  providers: [],
})
export class AppModule {}
