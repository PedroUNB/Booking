import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateFileInput {
  @Field(() => Int)
  id: number;
}
