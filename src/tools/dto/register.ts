import { TrouverUn } from './trouver'

export class Register {
  user!: Object

  constructor(user: Object) {
    this.user = user
  }
  async registre() {
    let nom = (<any>this.user).nom
    let email = (<any>this.user).email

    let newObj = Object.create(this.user)
    Object.assign(newObj, { nom }, { email })

    let login = new TrouverUn(newObj)
    let e = await login.trouve()

    if (e.length > 0) {
      return { message: (<any>e[0].constraints.valueOf()).Read }
    }
    else {
      return (<any>this.user).save().then((_el: any) => {
        return { success: "Votre Inscription a reussi." }
      })
    }
  }
}
