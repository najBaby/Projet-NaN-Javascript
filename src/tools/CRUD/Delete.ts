import { getRepository } from 'typeorm';
import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator'

export function Delete(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: "Delelte",
            target!: object.constructor,
            propertyName!: propertyName,
            constraints!: [],
            options: validationOptions,
            validator: {
                async validate(value: any, _args: ValidationArguments) {
                    let find = { where: { [propertyName]: value } }
                    return getRepository(object.constructor.name).remove(find).then(el => {
                        if (el)
                            return false
                        else
                            return true
                    })
                }
            }
        })
    }
}