import { InjectRepository } from '@nestjs/typeorm';
import { Command, CommandRunner } from 'nest-commander';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import * as books from './books.json';

@Command({
  name: 'reproduce',
  description:
    'performs a save on data to reproduce the issue demonstrated in this repository',
})
export class ReproduceCommand extends CommandRunner {
  /**
   * The class constructor.
   */
  constructor(
    @InjectRepository(Book) private bookRepository: Repository<Book>,
  ) {
    super();
  }

  async run(): Promise<void> {
    await this.bookRepository.save(books as any);
  }
}
