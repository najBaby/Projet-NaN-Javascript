import { Read } from '../CRUD/Read'
import { validate } from 'class-validator'

export class Trouver {
  @Read()
  user!: Object

  constructor(user: Object) {
    this.user = user
  }

  async trouve() {
    let e = await validate(this)
    return e
  }
}

export class TrouverUn {
  @Read({
    message: "Ce nom existe déja."
  })
  nom!: Object

  @Read({
    message: "Cet email existe déja."
  })
  email!: Object

  constructor(user: Object) {
    let newClient = Object.create(user)
    Object.assign(newClient, { nom: (<any>user).nom })
    let NewClient = Object.create(user)
    Object.assign(NewClient, { email: (<any>user).email })
    this.nom = newClient
    this.email = NewClient

  }
  async trouve() {
    let e = await validate(this)
    return e
  }
}
