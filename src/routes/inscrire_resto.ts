import { Request, Response, NextFunction } from "express"

export function inscrireResto(req: Request, res: Response, _next: NextFunction) {
  if ((<any>req).decoded) {
    if ((<any>req).decoded.name == "Resto")
      res.render("inscrire_resto.twig", { active: true })
    else
      res.render("inscrire_resto.twig", { active: false })
  }
  else
    res.render("inscrire_resto.twig", { active: false })
}
