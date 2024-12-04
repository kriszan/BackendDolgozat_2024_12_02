import { PartialType } from '@nestjs/mapped-types';
import { CreateGyerekDto } from './create-gyerek.dto';
import { Jatek } from 'src/jatek/entities/jatek.entity';


export class UpdateGyerekDto extends PartialType(CreateGyerekDto) {
  nev?: string;
  cim?: string;
  jovolte?: boolean;
  ajandekok?: Jatek;
}
