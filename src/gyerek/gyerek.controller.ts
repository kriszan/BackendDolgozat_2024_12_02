import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { GyerekService } from './gyerek.service';
import { CreateGyerekDto } from './dto/create-gyerek.dto';
import { UpdateGyerekDto } from './dto/update-gyerek.dto';
import { Response } from 'express';

@Controller('children')
export class GyerekController {
  constructor(private readonly gyerekService: GyerekService) {}
  @Post()
  create(@Body() createGyerekDto: CreateGyerekDto, @Res() res : Response) {
    return this.gyerekService.create(createGyerekDto).catch(() => res.status(HttpStatus.BAD_REQUEST).send()).then(()=> res.status(HttpStatus.OK).send("Sikeres felvétel"));
  }

  @Get()
  findAll(@Res() res : Response) {
    return this.gyerekService.findAll().catch(() => res.status(HttpStatus.BAD_REQUEST).send()).then(x=> res.status(HttpStatus.OK).send(x));;
  }

  @Get(':id/toys')
  findOne(@Param('id') id: string,@Res() res : Response) {
    return this.gyerekService.findChildsAllToys(+id).catch(() => res.status(HttpStatus.BAD_REQUEST).send()).then(x=> res.status(HttpStatus.OK).send(x));;
  }

  @Get(':id/toys/:toyid')
  findOne(@Param('id') id: string, @Param('toyid') toyid: string,@Res() res : Response) {
    return this.gyerekService.findChildsOneToys(+id, +toyid).catch(() => res.status(HttpStatus.BAD_REQUEST).send()).then(x=> res.status(HttpStatus.OK).send(x));;
  }

  @Get(':id')
  findOne(@Param('id') id: string,@Res() res : Response) {
    return this.gyerekService.findOne(+id).catch(() => res.status(HttpStatus.BAD_REQUEST).send()).then(x=> res.status(HttpStatus.OK).send(x));;
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGyerekDto: UpdateGyerekDto,@Res() res : Response) {
    return this.gyerekService.update(+id, updateGyerekDto).catch(() => res.status(HttpStatus.BAD_REQUEST).send()).then(()=> res.status(HttpStatus.OK).send("Sikeres adatmódosítás"));;
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Res() res : Response) {
    return this.gyerekService.remove(+id).catch(() => res.status(HttpStatus.BAD_REQUEST).send()).then(()=> res.status(HttpStatus.OK).send("Sikeres törlés"));;
  }
}
