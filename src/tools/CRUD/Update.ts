import { getRepository } from 'typeorm';
import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator'

export function Update(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: "Read",
            target!: object.constructor,
            propertyName!: propertyName,
            constraints!: [],
            options: validationOptions,
            validator: {
                async validate(value: Object, _args: ValidationArguments) {
                    console.log()
                    return getRepository(value.constructor.name).update((<any>value).id, value).then(user => {
                        if (user) {
                            return false
                        }
                        else
                            return true
                    })
                }
            },
        })
    }
}