import { validate } from 'class-validator';
import { Update } from '../CRUD/Update'
export class miseAjour {
    @Update()
    user!: Object

    constructor(user: Object) {
        this.user = user
    }

    async execute() {
        let e = await validate(this)
        return e
    }
}