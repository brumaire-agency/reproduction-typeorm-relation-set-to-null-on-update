import { Entity, OneToMany, PrimaryColumn } from "typeorm";
import { BookToShelf } from "./book-to-shelf.entity";

@Entity()
export class Shelf {
  /**
   * The author letter denominating the shelf.
   */
  @PrimaryColumn()
  letter: string;

  @OneToMany(() => BookToShelf, (relation) => relation.shelf)
  books: BookToShelf;
}
