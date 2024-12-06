import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { UserService } from './users.service';
import { User } from './users.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // เพิ่มผู้ใช้
  @Post()
  create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

  // ค้นหาผู้ใช้ทั้งหมด
  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  // ค้นหาผู้ใช้ตาม id
  @Get(':id')
  findOne(@Param('id') id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  // อัพเดตผู้ใช้
  @Put(':id')
  update(@Param('id') id: number, @Body() user: User): Promise<User> {
    return this.userService.update(id, user);
  }

  // ลบผู้ใช้
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.userService.remove(id);
  }

   // ดึงข้อมูลผู้ใช้ที่มี role เป็น 'user'
   @Get('role/:role')
   findByRole(@Param('role') role: string): Promise<User[]> {
     return this.userService.findByRole(role); // ดึงข้อมูลตาม role
   }
 
   @Get('search')
   findByName(@Query('firstname') firstname?: string): Promise<User[]> {
     return this.userService.findByName(firstname);
   }
}
