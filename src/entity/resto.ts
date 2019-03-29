import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToMany, JoinTable } from 'typeorm'
import { IsEmail, IsPhoneNumber, IsString, IsNotEmpty, MinLength } from 'class-validator'
import { Repas } from './repas'
// import { Create } from '../tools/CRUD/CreerAvecRelation';

@Entity()
export class Resto extends BaseEntity {
  @PrimaryGeneratedColumn()

  id?: number

  @Column("varchar", {
    length: 25
  })
  @IsString({
    message: "Erreur de Syntaxe",
  })
  @IsNotEmpty({
    message: "Erreur de Syntaxe"
  })
  @IsString({
    message: "Erreur de Syntaxe",
    groups: ['Login']
  })
  @IsNotEmpty({
    message: "Erreur de Syntaxe",
    groups: ['Login']
  })
  nom?: string

  @Column("varchar", {
    length: 100
  })
  @IsNotEmpty({
    message: "Erreur de mot de passe"
  })
  @MinLength(8, {
    message: "Entrez aux moins 8 chiffres ou lettres"
  })
  @IsNotEmpty({
    message: "Erreur de mot de passe",
    groups: ['Login']
  })
  @MinLength(8, {
    message: "Entrez aux moins 8 chiffres ou lettres",
    groups: ['Login']
  })
  password!: string

  @Column({ default: "Ok" })
  position?: string

  @Column()
  @IsString({
    message: "Erreur de Syntaxe",
  })
  @IsNotEmpty({
    message: "Erreur de Syntaxe",
    groups: ['RResto', 'Ville']
  })
  @IsString({
    message: "Erreur de Syntaxe",
    groups: ['RResto', "Ville"]
  })
  ville?: string

  @Column()
  @IsString({
    message: "Erreur de Syntaxe",
  })
  @IsString({
    message: "Erreur de Syntaxe",
    groups: ['RResto']
  })
  commune?: string

  @Column({ default: 0 })
  likes?: number

  @Column({ default: true })
  Actif?: boolean

  @Column("varchar", {
    length: 25
  })
  @IsString({
    message: "Erreur de Syntaxe",
  })
  @IsNotEmpty({
    message: "Erreur de Syntaxe"
  })
  proprietaire?: string

  @Column("varchar", {
    length: 40
  })
  @IsEmail({}, {
    message: "Erreur d'email",
  })
  @IsNotEmpty({
    message: "Erreur d'email"
  })

  email?: string

  @Column()
  @IsPhoneNumber("CI", {
    message: "Erreur du numero",
    groups: ['Registration']
  })
  @IsNotEmpty({
    message: "Erreur de Syntaxe",
    groups: ["Registraion"]
  })
  numero?: string

  // @Create('rel', { groups: ['Ajouterrr'] })
  @ManyToMany(() => Repas, {
    cascade: true
  })
  @JoinTable()
  rel?: Repas[]
}
