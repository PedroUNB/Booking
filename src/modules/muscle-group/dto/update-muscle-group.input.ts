import { CreateMuscleGroupInput } from './create-muscle-group.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMuscleGroupInput extends PartialType(CreateMuscleGroupInput) {
  @Field(() => Int)
  id: number;
}
