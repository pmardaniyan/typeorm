import { Entity, BaseEntity, Column , PrimaryGeneratedColumn } from "typeorm";

@Entity("client")
export class Client extends BaseEntity {
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
    nullable: true,
    unique : true,
  })
  email: string;
}
