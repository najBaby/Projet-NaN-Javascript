import { miseAjour } from './../../tools/dto/miseAjour';
import crypto from 'crypto'
import { Client } from './../../entity/client';
import { Request, Response, NextFunction } from 'express';

export async function configClient(req: Request, res: Response, next: NextFunction) {

    if ((<any>req).decoded) {
        let { id } = (<any>req).decoded
        let client = new Client
        Object.assign(client, req.body, { id })
        let { password } = req.body

        if (password) {
            client.password = crypto.createHmac("sha256", client.password).digest('hex')
            let mise = new miseAjour(client)
            res.status(200).send(await mise.execute())
            next()
        } else {
            let mise = new miseAjour(client)
            res.status(200).send(await mise.execute())
            next()
        }
    } else {
        res.status(400).send("Vous ne pouvez pas vous connecter").end()
        next()
    }

}

