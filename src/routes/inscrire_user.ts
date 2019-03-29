import { Request, Response, NextFunction } from "express"

export function inscrireUser(req: Request, res: Response, _next: NextFunction) {
  if ((<any>req).decoded) {
    if ((<any>req).decoded.name == "Client")
      res.render("inscrire_user.twig", { active: true })
    else
      res.render("inscrire_user.twig", { active: false })
  }
  else
    res.render("inscrire_user.twig", { active: false })
}
