import { Entity, BaseEntity, Column , PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Person extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    nullable: true
  })
  first_name: string;

  @Column({
    nullable: true
  })
  last_name: string;
  @Column({
    nullable: true
  })
  middle_name: string;

  @Column({
    nullable: true,
    unique : true,
  })
  email: string;

  @Column({
    unique : true,
    length: 10 ,
  })
  card_number : string;

 


}
