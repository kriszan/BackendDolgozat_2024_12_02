import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Res, NotFoundException } from '@nestjs/common';
import { JatekService } from './jatek.service';
import { CreateJatekDto } from './dto/create-jatek.dto';
import { Response } from 'express';
import { UpdateJatekDto } from './dto/update-jatek.dto';

@Controller('toys')
export class JatekController {
  constructor(private readonly jatekService: JatekService) { }
  @Post()
  create(@Body() createJatekDto: CreateJatekDto, @Res() res: Response) {
    return this.jatekService.create(createJatekDto).then(() => res.status(HttpStatus.OK).send("Sikeres felvétel")).catch(() => res.status(HttpStatus.BAD_REQUEST).send());
  }

  @Get()
  findAll(@Res() res: Response) {
    return this.jatekService.findAll().then(x => res.status(HttpStatus.OK).send(x)).catch(() => res.status(HttpStatus.BAD_REQUEST).send());
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Res() res: Response) {
    return this.jatekService.findOne(+id).then(x => { if (x.id == 1) { throw new NotFoundException("") } else res.status(HttpStatus.OK).send(x); }).catch(() => res.status(HttpStatus.BAD_REQUEST).send());
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJatekDto: UpdateJatekDto, @Res() res: Response) {
    return this.jatekService.update(+id, updateJatekDto).then(() => res.status(HttpStatus.OK).send("Sikeres adatmódosítás")).catch(() => { res.status(HttpStatus.BAD_REQUEST).send(); return; });
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Res() res: Response) {
    return this.jatekService.remove(+id).then(() => res.status(HttpStatus.OK).send("Sikeres törlés")).catch(() => res.status(HttpStatus.BAD_REQUEST).send());
  }
}


