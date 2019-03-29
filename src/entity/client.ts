import { PrimaryGeneratedColumn, Entity, Column, BaseEntity } from 'typeorm'
import { IsEmail, IsPhoneNumber, IsAlpha, IsNotEmpty, MinLength } from 'class-validator'

@Entity()
export class Client extends BaseEntity {

  // L'identifiant
  @PrimaryGeneratedColumn()
  id?: number

  // Le nom de l'utilisateur
  @Column("varchar", {
    length: 25
  })
  @IsAlpha({
    message: "Pseudo: Erreur de Pseudo",
  })
  @IsNotEmpty({
    message: "Pseudo: Erreur de Pseudo"
  })
  @IsAlpha({
    message: "Pseudo: Erreur de Pseudo",
    groups: ['Registration', 'Login']
  })
  @IsNotEmpty({
    message: "Pseudo: Erreur de Pseudo",
    groups: ['Registration', 'Login']
  })
  nom!: string


  // Le mot de passe
  @Column("varchar", {
    length: 100
  })
  @MinLength(8, {
    message: "Mot de passe: Entrez au moins 8 chiffres ou lettres"
  })
  @IsNotEmpty({
    message: "Mot de passe: Erreur de mot de passe"
  })
  @MinLength(8, {
    message: "Mot de passe: Entrez au moins 8 chiffres ou lettres",
    groups: ['Registration', 'Login']
  })
  @IsNotEmpty({
    message: "Mot de passe: Erreur de mot de passe",
    groups: ['Registration', 'Login']
  })
  password!: string


  // L'email
  @Column("varchar", {
    length: 40
  })
  @IsEmail({}, {
    message: "Erreur d'email",
  })
  @IsNotEmpty({
    message: "Erreur d'email"
  })
  @IsEmail({}, {
    message: "Erreur d'email",
    groups: ['Registration']
  })
  @IsNotEmpty({
    message: "Erreur d'email",
    groups: ['Registration']
  })
  email!: string



  // Le numero de telephone
  @Column("varchar", {
    length: 12
  })
  @IsPhoneNumber("CI", {
    message: "Erreur du numero"
  })
  @IsNotEmpty({
    message: "Erreur du numero"
  })
  @IsPhoneNumber("CI", {
    message: "Erreur du numero",
    groups: ['Registration']
  })
  @IsNotEmpty({
    message: "Erreur de numero",
    groups: ['Registration']
  })
  numero?: string

  // La ville
  @Column("varchar", {
    length: 25
  })
  @IsAlpha({
    message: "Ville: Erreur de Syntaxe",
  })
  @IsNotEmpty({
    message: "Ville: Erreur de Syntaxe"
  })
  @IsAlpha({
    message: "Ville: Erreur de Syntaxe",
    groups: ['Registraion']
  })
  @IsNotEmpty({
    message: "Ville: Erreur de Syntaxe",
    groups: ['Registraion']
  })
  ville!: string

  // La commune
  @Column("varchar", {
    length: 25
  })
  @IsAlpha({
    message: "Commne: Erreur de Syntaxe",
  })
  @IsNotEmpty({
    message: "Commune: Erreur de Syntaxe"
  })
  @IsAlpha({
    message: "Commune: Erreur de Syntaxe",
    groups: ['Registration']
  })
  @IsNotEmpty({
    message: "Commune: Erreur de Syntaxe",
    groups: ['Registration']
  })
  commune!: string


  @Column({ default: false })
  isEntreprise?: boolean


  @Column({ default: 'maposition' })
  position?: string
}
