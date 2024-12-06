import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UserService {
  [x: string]: any;
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  // เพิ่มผู้ใช้ใหม่
  create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  // ค้นหาผู้ใช้ทั้งหมด
  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  // ค้นหาผู้ใช้โดย id
  findOne(id: number): Promise<User> {
    return this.userRepository.findOneBy({ iduser: id });
  }

  // อัพเดตผู้ใช้
  async update(id: number, user: Partial<User>): Promise<User> {
    await this.userRepository.update(id, user);
    return this.findOne(id);
  }

  // ลบผู้ใช้
  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

    // ฟังก์ชันค้นหาผู้ใช้ที่มี role เป็น 'user'
    findByRole(role: string): Promise<User[]> {
        return this.userRepository.find({ where: { role } }); // กรองข้อมูลตาม role
    }

    // ค้นหาผู้ใช้ตาม firstname
  async findByName(firstname?: string): Promise<User[]> {
    const queryBuilder = this.userRepository.createQueryBuilder('user');

    // ถ้ามี firstname ใน query string ให้ค้นหาผู้ใช้ที่ firstname ตรงกับคำที่ให้มา
    if (firstname) {
      queryBuilder.andWhere('user.firstname LIKE :firstname', { firstname: `%${firstname}%` });
    }

    // ดึงข้อมูลทั้งหมดที่ตรงกับคำค้นหา
    return queryBuilder.getMany();
  }
}
