import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'
import { secret } from './config'

export async function createToken(object: Object) {
  return jwt.sign({
    id: (<any>object).id,
    name: object.constructor.name
  }, secret, {
      expiresIn: '1h'
    })
}

export async function deleteToken(_req: Request, res: Response, _next: NextFunction) {
  res.clearCookie("Token").redirect("/")
}

export async function parseCookie(req: Request, res: Response, next: NextFunction) {
  const { Token } = req.cookies
  async function clearCookie() {
    res.clearCookie("Token")
  }

  if (Token == undefined) {
    clearCookie()
    next()
  } else {
    try {
      var jwtToken = jwt.verify(Token, secret);
      console.log(jwtToken);
      (<any>req).decoded = jwtToken
      console.log()
      next()
    } catch (error) {
      clearCookie()
      console.log(error);
      (<any>req).decoded = { id: -1 }
      next()
    }
  }
}
