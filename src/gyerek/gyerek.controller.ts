import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, NotFoundException } from '@nestjs/common';
import { GyerekService } from './gyerek.service';
import { CreateGyerekDto } from './dto/create-gyerek.dto';
import { UpdateGyerekDto } from './dto/update-gyerek.dto';
import { Response } from 'express';

@Controller('children')
export class GyerekController {
  constructor(private readonly gyerekService: GyerekService) {}
  @Post()
  create(@Body() createGyerekDto: CreateGyerekDto, @Res() res : Response) {
    return this.gyerekService.create(createGyerekDto).then(()=> res.status(HttpStatus.OK).send("Sikeres felvétel")).catch(() => res.status(HttpStatus.BAD_REQUEST).send());
  }

  @Get()
  findAll(@Res() res : Response) {
    return this.gyerekService.findAll().then(x=> res.status(HttpStatus.OK).send(x)).catch(() => res.status(HttpStatus.BAD_REQUEST).send());
  }

  @Get(':id/toys')
  findChildsAllToys(@Param('id') id: string,@Res() res : Response) {
    return this.gyerekService.findChildsAllToys(+id).then(x=> res.status(HttpStatus.OK).send(x)).catch(() => res.status(HttpStatus.BAD_REQUEST).send());
  }

  @Get(':id/toys/:toyid')
  findChildsOneToys(@Param('id') id: string, @Param('toyid') toyid: string,@Res() res : Response) {
    return this.gyerekService.findChildsOneToys(+id, +toyid).then(x=> res.status(HttpStatus.OK).send(x)).catch(() => res.status(HttpStatus.BAD_REQUEST).send());
  }

  @Get(':id')
  findOne(@Param('id') id: string,@Res() res : Response) {
    return this.gyerekService.findOne(+id).then(x=> { if( x.id == undefined) {throw new NotFoundException("")} else res.status(HttpStatus.OK).send(x);}).catch(() => res.status(HttpStatus.BAD_REQUEST).send());
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGyerekDto: UpdateGyerekDto,@Res() res : Response) {
    return this.gyerekService.update(+id, updateGyerekDto).then(()=> res.status(HttpStatus.OK).send("Sikeres adatmódosítás")).catch(() => res.status(HttpStatus.BAD_REQUEST).send());
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Res() res : Response) {
    return this.gyerekService.remove(+id).then(()=> res.status(HttpStatus.OK).send("Sikeres törlés")).catch(() => res.status(HttpStatus.BAD_REQUEST).send());
  }
}
