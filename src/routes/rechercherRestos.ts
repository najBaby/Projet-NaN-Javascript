import { Request, Response, NextFunction } from "express"

export function rechercherResto(req: Request, res: Response, _next: NextFunction) {
  if ((<any>req).decoded) {
    if ((<any>req).decoded.name == "Client")
      res.render("rechercherRestos.twig", { active: true })
    else
      res.render("rechercherRestos.twig", { active: false })
  }
  else
    res.render("rechercherRestos.twig", { active: false })
}
