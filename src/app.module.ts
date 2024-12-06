//import { ProductModule } from './product/product.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/users.module';  // เราจะสร้างโมดูลสำหรับ user

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',  // หรือ 'mysql' ถ้าใช้ MySQL
      host: 'localhost',
      port: 3306,  // หรือ 3306 ถ้าใช้ MySQL
      username: 'root',
      password: '',
      database: 'big_c',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,  // ใช้สำหรับการ sync schema ทุกครั้งที่เริ่มแอป (ไม่แนะนำใน production)
    }),
    UserModule,
  ],
})
export class AppModule {}
