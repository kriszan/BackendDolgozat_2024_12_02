import { IsBoolean, IsNotEmpty, IsString } from "class-validator";
import { Jatek } from "src/jatek/entities/jatek.entity";

export class CreateGyerekDto {
  @IsString()
  @IsNotEmpty()
  nev: string

  @IsString()
  @IsNotEmpty()
  cim: string

  @IsBoolean()
  jovolte: boolean

  ajandekok: Jatek
}
