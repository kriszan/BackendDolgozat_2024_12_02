import { Injectable } from '@nestjs/common';
import { CreateJatekDto } from './dto/create-jatek.dto';
import { UpdateJatekDto } from './dto/update-jatek.dto';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();
@Injectable()
export class JatekService {
   
  async create(createJatekDto: CreateJatekDto) {
    return await prisma.jatek.create({
      data: { ...createJatekDto }
    });
  }

  async findAll() {
    return await prisma.jatek.findMany();
  }

  async findOne(id: number) {
    return await prisma.jatek.findUnique({ where: { id } });
  }

  async update(id: number, updateJatekDto: UpdateJatekDto) {
    return await prisma.jatek.update({
      where: { id }, data: {
        ...updateJatekDto
      }
    });
  }

  async remove(id: number) {
    return  await prisma.jatek.delete({ where: { id } });
  }
}
