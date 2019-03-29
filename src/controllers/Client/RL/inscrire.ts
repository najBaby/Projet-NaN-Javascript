import { Client } from '../../../entity/client';
import { Request, Response, NextFunction } from 'express'
import { Register } from '../../../tools/dto/register'
import crypto from 'crypto'
import { validate } from 'class-validator';

export async function Inscrire(req: Request, res: Response, _next: NextFunction) {
  let client = new Client
  await Object.assign(client, req.body)
  validate(client, { groups: ['Registration'] }).then(async e => {
    if (e.length > 0) {
      let messages = new Array
      e.forEach(e => {
        messages.push(Object.values(e.constraints.valueOf()))
      })
      res.status(200).send({ message: messages }).end()
    } else {
      client.password = crypto.createHmac("sha256", client.password).digest('hex')
      let register = new Register(client)

      register.registre().then(async e => {
        res.status(200).send(e)
      })
    }
  })
}
