import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm'
import { IsString, IsNotEmpty, IsNumberString } from 'class-validator'
import { Resto } from './resto';


@Entity()
export class Repas {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ default: null })
  attachement?: string

  @Column()
  @IsString({
    message: "Erreur de Syntaxe"
  })
  @IsNotEmpty({
    message: "Erreur de Syntaxe"
  })
  nom!: string

  @Column()
  @IsNumberString({
    message: "Erreur du prix"
  })
  @IsNotEmpty({
    message: "Erreur du prix"
  })
  prix!: number

  @Column({ default: 0 })
  likes?: number

  @ManyToMany(() => Resto, resto => resto.rel)
  rel!: Resto[]

}
