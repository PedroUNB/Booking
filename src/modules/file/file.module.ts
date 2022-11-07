import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQuerySequelizeModule } from '@nestjs-query/query-sequelize';
import { Module } from '@nestjs/common';
import { CreateFileInput } from './dto/create-file.input';
import { UpdateFileInput } from './dto/update-file.input';
import { FileDTO } from './dto/file.dto';
import { FileEntity } from './entities/file.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQuerySequelizeModule.forFeature([FileEntity])],
      resolvers: [
        {
          DTOClass: FileDTO,
          CreateDTOClass: CreateFileInput,
          UpdateDTOClass: UpdateFileInput,
          EntityClass: FileEntity,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [],
})
export class FileModule {}
