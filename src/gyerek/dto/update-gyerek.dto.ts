import { PartialType } from '@nestjs/mapped-types';
import { CreateGyerekDto } from './create-gyerek.dto';
import { IsPositive } from 'class-validator';

export class UpdateGyerekDto extends PartialType(CreateGyerekDto) {
  @IsPositive()
  id : number
}
