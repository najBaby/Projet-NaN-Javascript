import { getRepository } from 'typeorm';
import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator'

export function ReadAll(validationOptions?: ValidationOptions) {
  return function(object: Object, propertyName: string) {
    registerDecorator({
      name: "ReadAll",
      target!: object.constructor,
      propertyName!: propertyName,
      constraints!: [],
      options: validationOptions,
      validator: {
        async validate(value: Object, args: ValidationArguments) {
          return getRepository(value.constructor.name).find(value).then(user => {
            if (user.length > 0) {
              Object.assign(args.object, { user: user })
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
