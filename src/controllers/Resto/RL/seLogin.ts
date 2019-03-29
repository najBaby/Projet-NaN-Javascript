import { Resto } from '../../../entity/resto';
import { Request, Response, NextFunction } from 'express'
import { Trouver } from '../../../tools/dto/trouver'
import crypto from 'crypto'
import { validate } from 'class-validator'
import { createToken } from '../../../tools/token'

export async function SeLoginResto(req: Request, res: Response, next: NextFunction) {
  let resto = new Resto
  Object.assign(resto, req.body)
  validate(resto, { groups: ['Login'] }).then(async e => {
    if (e.length > 0) {
      let messages = new Array
      e.forEach(e => {
        messages.push(Object.values(e.constraints.valueOf()))
      })
      res.status(200).send({ message: messages })
    } else {

      resto.password = crypto.createHmac("sha256", resto.password).digest('hex')
      let login = new Trouver(resto)

      await login.trouve().then(async e => {
        if (e.length > 0)
          res.status(200).cookie('Token', await createToken((<any>e[0].target).user)).send({ success: "Connecté" })
        else
          res.status(200).send({ message: "Vous n'avez pas de Compte" })
        next()
      })

    }
  })
}
