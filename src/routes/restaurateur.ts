import { Request, Response, NextFunction } from "express"

export function restaurateur(req: Request, res: Response, _next: NextFunction) {
  if ((<any>req).decoded) {
    if ((<any>req).decoded.name == "Resto")
      res.render("resto.twig", { active: true })
    else
      res.render("resto.twig", { active: false })
  }
  else
    res.render("resto.twig", { active: false })
}
