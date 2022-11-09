import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMuscleGroupInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
