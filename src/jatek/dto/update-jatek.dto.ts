import { PartialType } from '@nestjs/mapped-types';
import { CreateJatekDto } from './create-jatek.dto';
import {  IsPositive } from 'class-validator';

export class UpdateJatekDto extends PartialType(CreateJatekDto) {
  @IsPositive()
  id : number
}
