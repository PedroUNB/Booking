import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from '../../bases/dto/base.dto';

@ObjectType('File')
export class FileDTO extends BaseDTO {
  @FilterableField()
  name!: string;
}
