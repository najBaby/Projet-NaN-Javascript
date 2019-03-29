import { SeLogin } from "./controllers/Client/RL/seLogin"
import { Inscrire } from "./controllers/Client/RL/inscrire"
import { SeLoginResto } from "./controllers/Resto/RL/seLogin"
import { InscrireResto } from "./controllers/Resto/RL/inscrire"
import { rechercherRestos } from './controllers/Client/Chercher/RestoParLieux'

import { index } from "./routes/index"
import { inscrireResto } from "./routes/inscrire_resto"
import { inscrireUser } from "./routes/inscrire_user"
import { rechercherResto } from "./routes/rechercherRestos"
import { restaurateur } from "./routes/restaurateur"


export const routesPost = [
  {
    path: "/seLogin/client",
    action: SeLogin
  },
  {
    path: "/seLogin/restaurateur",
    action: SeLoginResto
  },
  {
    path: "/register/client",
    action: Inscrire
  },
  {
    path: "/register/restaurateur",
    action: InscrireResto
  },
  {
    path: "/rechercherResto",
    action: rechercherRestos
  },
]

export const routesGet = [
  {
    path: "/",
    action: index
  },
  {
    path: "/restaurateur",
    action: restaurateur
  },
  {
    path: "/register/client",
    action: inscrireUser
  },
  {
    path: "/register/restaurateur",
    action: inscrireResto
  },
  {
    path: "/rechercherResto",
    action: rechercherResto
  },
]
