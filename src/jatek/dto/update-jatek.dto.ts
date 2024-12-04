import { PartialType } from '@nestjs/mapped-types';
import { CreateJatekDto } from './create-jatek.dto';


export class UpdateJatekDto extends PartialType(CreateJatekDto) {
  anyag?: string;
  megnevezes?: string;
  suly?: number;
}
