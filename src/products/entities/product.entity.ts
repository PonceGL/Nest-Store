import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    unique: true,
  })
  title: string;

  @Column('float', {
    default: 0,
  })
  price: number;

  @Column({
    type: 'text',
    nullable: true,
  })
  description: string;

  @Column('text', {
    unique: true,
  })
  slug: string;

  @Column('int', {
    default: 0,
  })
  stock: number;

  @Column('text', {
    array: true,
  })
  sizes: string[];

  @Column('text')
  gender: string;

  // taxt

  // images

  @BeforeInsert()
  formatSlug() {
    const formatSlug = (slug: string) =>
      slug
        .toLowerCase()
        .trim()
        .replace(/\//g, '')
        .replace(/'/g, '')
        .replace(/ /g, '-');

    this.slug = formatSlug(this.slug ?? this.title);
  }
}
