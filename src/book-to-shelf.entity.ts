import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Book } from './book.entity';
import { Shelf } from './shelf.entity';

@Entity()
export class BookToShelf {
  /**
   * The associated shelf letter.
   */
  @PrimaryColumn()
  public shelfLetter: string;

  /**
   * The associated book author.
   */
  @PrimaryColumn()
  public bookAuthor: string;

  /**
   * The associated book title.
   */
  @PrimaryColumn()
  public bookTitle: string;

  /**
   * The index of the book on the shelf.
   */
  @Column()
  public index: string;

  @ManyToOne(() => Shelf, (shelf) => shelf.books, { cascade: true })
  public shelf: Shelf;

  @ManyToOne(() => Book, (book) => book.shelves)
  public book: Book;
}
