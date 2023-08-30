import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { BookToShelf } from "./book-to-shelf.entity";

@Entity()
export class Book {
  /**
   * The book author.
   */
  @PrimaryColumn()
  public author: string;

  /**
   * The book name.
   */
  @PrimaryColumn()
  public title: string;

  /**
   * The book page count.
   */
  @Column()
  public pages: number;

  /**
   * The shelves this book is on.
   */
  @OneToMany(() => BookToShelf, (relation) => relation.book, { cascade: true })
  shelves: BookToShelf;
}
