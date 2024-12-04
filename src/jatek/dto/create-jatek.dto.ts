import { IsDecimal, IsIn, IsNotEmpty, IsString } from "class-validator";

const materials = ["wood", "metal", "plastic", "other"]
export class CreateJatekDto {
  @IsString()
  @IsNotEmpty()
  megnevezes: string
  
  @IsString()
  //@IsNotEmpty()
  @IsIn(materials)
  anyag: string

  //@IsDecimal()
  suly: number
}
