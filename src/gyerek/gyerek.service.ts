import { Injectable } from '@nestjs/common';
import { CreateGyerekDto } from './dto/create-gyerek.dto';
import { UpdateGyerekDto } from './dto/update-gyerek.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
@Injectable()
export class GyerekService {
  async findChildsOneToys(id: number, toyid: number) {
    //return await prisma.gyerek.findUnique({ where: { id } });
  }
  async findChildsAllToys(id: number) {
    return await prisma.gyerek.findUnique({ where: { id }, include:{ajandekok: {}} });
  }
  async create(createGyerekDto: CreateGyerekDto) {
    return await prisma.gyerek.create({
      data: { ...createGyerekDto }
    });
  }

  async findAll() {
    return await prisma.gyerek.findMany();
  }

  async findOne(id: number) {
    return await prisma.gyerek.findUnique({ where: { id } });
  }

  async update(id: number, updateGyerekDto: UpdateGyerekDto) {
    return await prisma.gyerek.update({
      where: { id }, data: {
        ...updateGyerekDto
      }
    });
  }

  async remove(id: number) {
    return  await prisma.gyerek.delete({ where: { id } });
  }
}
