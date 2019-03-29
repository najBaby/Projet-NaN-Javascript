import { TrouverTout } from '../../../tools/dto/trouverTout';
import { Resto } from '../../../entity/resto';
import { Request, Response, NextFunction } from 'express'
import { validate } from 'class-validator'

export async function rechercherRestos(req: Request, res: Response, _next: NextFunction) {
  let resto = new Resto
  Object.assign(resto, req.body)
  let { commune } = req.body

  if (commune) {
    validate(resto, { groups: ['RResto'] }).then(async err => {
      if (err.length > 0) {
        let messages = new Array
        err.forEach(e => {
          messages.push(Object.values(e.constraints.valueOf()))
        })
        res.status(200).send({ message: messages })
      } else {
        let trouver = new TrouverTout(resto)
        trouver.trouveTout().then(async e => {
          if (e.length > 0) {
            let data = (<any>e[0].target).user
            console.log(data)
            res.status(200).send({ success: data })
          }
          else
            res.status(200).send({ message: "Pas de restaurant dans cet emplacement" })
        })
      }
    })
  } else {
    validate(resto, { groups: ['Ville'] }).then(async err => {
      if (err.length > 0) {
        let messages = new Array
        err.forEach(e => {
          messages.push(Object.values(e.constraints.valueOf()))
        })
        res.status(200).send({ message: messages })
      } else {
        let trouver = new TrouverTout(resto)
        trouver.trouveTout().then(async e => {
          if (e.length > 0) {
            let data = (<any>e[0].target).user
            console.log(data)
            res.status(200).send({ success: data })
          }
          else
            res.status(200).send({ message: "Pas de restaurant dans cet emplacement" })
        })
      }
    })
  }
}
