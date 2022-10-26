import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateBaseInput {
  name: string;
}
