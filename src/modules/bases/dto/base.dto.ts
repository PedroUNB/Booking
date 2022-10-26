import { FilterableField, IDField } from '@nestjs-query/query-graphql';
import { ObjectType, GraphQLISODateTime, ID } from '@nestjs/graphql';

@ObjectType('Base')
export class BaseDTO {
  @IDField(() => ID)
  id!: String;

  @FilterableField(() => GraphQLISODateTime)
  createdAt!: Date;

  @FilterableField(() => GraphQLISODateTime)
  updatedAt!: Date;

  @FilterableField(() => GraphQLISODateTime)
  removedAt: Date;
}
