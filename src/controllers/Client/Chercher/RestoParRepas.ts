import { TrouverTout } from '../../../tools/dto/trouverTout';
import { Repas } from '../../../entity/repas';
import { Request, Response, NextFunction } from 'express'
import { validate } from 'class-validator'

export async function chercherRestos(req: Request, res: Response, next: NextFunction) {
  let repas = new Repas
  Object.assign(repas, req.body, { relations: ['rel'] })

  validate(repas).then(async err => {
    if (err.length > 0) {
      let messages = new Array
      err.forEach(e => {
        messages.push(Object.values(e.constraints))
      })
      res.status(400).send(messages)
      next()
    } else {
      let rechercher = new TrouverTout(repas)
      rechercher.trouveTout().then(e => {
        if (e.length > 0)
          res.status(200).send(e)
        else
          res.send("Pas de Restaurants")
        next()
      })
    }
  })
}
