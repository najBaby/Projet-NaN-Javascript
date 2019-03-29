import { Request, Response, NextFunction } from "express"

export function index(req: Request, res: Response, _next: NextFunction) {
  if ((<any>req).decoded) {
    if ((<any>req).decoded.name == "Client")
      res.render("index.twig", { active: true })
    else
      res.render("index.twig", { active: false })
  }
  else
    res.render("index.twig", { active: false })
}
