import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')  // ชื่อของตารางในฐานข้อมูล
export class User {
  @PrimaryGeneratedColumn()
  iduser: number;  // Primary key

  @Column({ unique: true })
  username: string;  // ชื่อผู้ใช้งาน

  @Column()
  password: string;  // รหัสผ่าน

  @Column()
  firstname: string;  // ชื่อจริง

  @Column()
  lastname: string;  // นามสกุล

  @Column()
  title: string;  // คำนำหน้า

  @Column()
  position: string;  // ตำแหน่ง

  @Column()
  role: string;  // บทบาท (เช่น admin, user)
}
