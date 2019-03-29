// import { Response, Request } from 'express'
// import { Resto } from '../../entity/resto'
// import { Repas } from '../../entity/repas'
// import { validate } from 'class-validator'
// 
//
// export async function Ajouter(_req: Request, res: Response) {
//     let repas = new Repas
//     repas.nom = "okll"
//     repas.prix = 1000
//
//
//     let repas2 = new Repas
//     repas2.nom = "Ajame"
//     repas2.prix = 1000
//
//     let resto = new Resto;
//     resto.id = 4
//     resto.rel = [repas, repas2]
//
//     res.send(await validate(resto, { groups: ['Ajouter'] }))
//
// }
