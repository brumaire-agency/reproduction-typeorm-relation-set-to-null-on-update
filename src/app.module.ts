import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReproduceCommand } from './reproduce.command';
import { Book } from './book.entity';
import { BookToShelf } from './book-to-shelf.entity';
import { Shelf } from './shelf.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT) || 5432,
      username: process.env.DATABASE_USERNAME || 'postgres',
      password: process.env.DATABASE_PASSWORD || 'password',
      database: process.env.DATABASE_NAME || 'test',
      entities: [Book, BookToShelf, Shelf],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Book]),
  ],
  providers: [ReproduceCommand],
})
export class AppModule {}
