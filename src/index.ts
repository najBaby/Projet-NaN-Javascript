import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import { createConnection } from 'typeorm'
import { parseCookie } from './tools/token'
import { deleteToken } from './tools/token'
import cookieParser from 'cookie-parser'
import { routesGet } from "./routes"
import { routesPost } from "./routes"



createConnection().then(async () => {
  let app = express()

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(cookieParser())

  app.use(await parseCookie)
  app.get("/logout", deleteToken)
  app.use(express.static(path.join(__dirname, '../views')))


  routesGet.forEach((route: any) => {
    app["get"](route.path, (request, response, next) => {
      route.action(request, response, next)
    });
  });

  routesPost.forEach((route: any) => {
    app["post"](route.path, (request, response, next) => {
      route.action(request, response, next)
    });
  });

  app.listen(3000, () => {

    console.log("listening on  port:3000")
  })
}).catch(err => console.log('voici l\'erreur %s', err))

// import { regis terOrAuth }  from ' ./controllers/RegisterOrLoginController'
// import  {   parseCookie  } from './entity/jwt';

// class App {
//     public app: express.Application
//     constructor(controller: Controller[]) {
//         this.app = express()
//     }

//     private initializeMiddlewares() {
//         this.app.use(bodyParser.json())
//         this.app.use(bodyParser.urlencoded())
//         this.app.use(cookieParser())
//     }

//     private initializeErrorHandling() {
//         this.app.use(errorMiddleware);
//     }

//     private initializeControllers(controllers: Controller[]) {
//         controllers.forEach((controller) => {
//             this.app.use('/', controller.router);
//         });
//     }

//     private connectToTheDatabase() {
//         createConnection().catch(e => console.log(e))
//     }
// }
//
//
// app.get("/", (req, res, _next) => {
//   if ((<any>req).decoded) {
//     console.log((<any>req).decoded.id)
//     res.render("index.twig", { active: true })
//   }
//   else
//     res.render("index.twig", { active: false })
// })
//
// app.get("/restaurateur", (_req, res, _next) => {
//   console.log("Ok")
//   res.render("resto.twig")
// })
//
// app.get("/register/client", (_req, res, _next) => {
//   res.render("inscrire_user.twig")
// })
// app.get("/register/restaurateur", (_req, res, _next) => {
//   res.render("inscrire_resto.twig")
// })
//
// app.post("/register/client", Inscrire)
// app.post("/seLogin/client", SeLogin)
// app.post("/register/restaurateur", InscrireResto)
// app.post("/seLogin/restaurateur", SeLoginResto)

// app.get("/rechercherResto", (_req, res, _next) => {
//   res.render("rechercherRestos.twig")
// })


// app.get("/client/me", (_req, res, _next) => {
//   res.render("compte_user.twig")
// })
//
// app.get("/resto/presentation", (_req, res, _next) => {
//   res.render("presentation_resto.twig")
// })
//
// app.get("/rechercherResto", (_req, res, _next) => {
//   res.render("rechercherRestos.twig")
// })
//
// app.post('/rechercherResto', rechercherRestos)
