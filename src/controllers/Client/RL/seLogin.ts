import { Client } from '../../../entity/client';
import { Request, Response, NextFunction } from 'express'
import { Trouver } from '../../../tools/dto/trouver'
import crypto from 'crypto'
import { validate } from 'class-validator';
import { createToken } from '../../../tools/token'

export async function SeLogin(req: Request, res: Response, next: NextFunction) {
  let client = new Client
  Object.assign(client, req.body)
  let x = JSON.stringify(client)
  console.log(x)

  validate(client, { groups: ['Login'] }).then(async e => {
    if (e.length > 0) {
      let messages = new Array
      e.forEach(e => {
        messages.push(Object.values(e.constraints.valueOf()))
      })
      res.status(200).send({ message: messages })
    } else {

      client.password = crypto.createHmac("sha256", client.password).digest('hex')
      let login = new Trouver(client)

      await login.trouve().then(async e => {
        if (e.length > 0) {
          console.log((<any>e[0].target).user)
          res.status(200).cookie('Token', await createToken((<any>e[0].target).user)).send({ success: "Connecté" })
        }
        else {
          res.send({ message: "Vous n'avez pas de Compte" })
        }
        next()
      })
    }
  })
}
