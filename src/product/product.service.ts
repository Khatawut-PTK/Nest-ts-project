import { Injectable } from '@nestjs/common';
import { ProductDTO } from 'src/dto/product.dto';

@Injectable()
export class ProductService {
    private product: ProductDTO[] =  [
        { name: 'Mango' , id:1 ,price:250},
        { name: 'Apple' , id:2 ,price:150},
        { name: 'PineApple' ,id:3 ,price:50},
        { name: 'Avocado' , id:4 ,price:25},
        { name: 'Banana' , id:5 ,price:20},
        { name: 'Coconut' , id:6 ,price:50},
    ];

    findAll(): ProductDTO[]{
        return this.product;
    }

    findById(id: number){
        return this.product.find((p) => p.id === id);
    }

    findByCondition(predicate: (product: ProductDTO) => boolean){
        return this.product.filter((p)=> predicate(p));
    }
}
