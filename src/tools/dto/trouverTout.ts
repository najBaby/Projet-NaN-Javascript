import { ReadAll } from '../CRUD/ReadAll'
import { validate } from 'class-validator'
export class TrouverTout {
    @ReadAll()
    user!: Object

    constructor(user: Object) {
        this.user = user
    }

    async trouveTout() {
        let e = await validate(this)
        return e
    }
}