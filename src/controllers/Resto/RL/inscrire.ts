import { Resto } from '../../../entity/resto';
import { Request, Response, NextFunction } from 'express'
import { Register } from '../../../tools/dto/register'
import crypto from 'crypto'
import { validate } from 'class-validator';

export async function InscrireResto(req: Request, res: Response, _next: NextFunction) {
  let resto = new Resto
  await Object.assign(resto, req.body)
  validate(resto).then(async e => {
    if (e.length > 0) {
      let messages = new Array
      e.forEach(e => {
        messages.push(Object.values(e.constraints.valueOf()))
      })
      console.log("constraints " + messages)
      res.status(200).send({ message: messages })
    } else {
      resto.password = crypto.createHmac("sha256", resto.password).digest('hex')
      let register = new Register(resto)
      register.registre().then((e) => {
        console.log(e)
        res.status(200).send(e)
      })
    }
  })
}
