import { getRepository } from 'typeorm';
import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator'

export function Read(validationOptions?: ValidationOptions) {
  return function(object: Object, propertyName: string) {
    registerDecorator({
      name: "Read",
      target!: object.constructor,
      propertyName!: propertyName,
      constraints!: [],
      options: validationOptions,
      validator: {
        async validate(value: Object, _args: ValidationArguments) {
          console.log(value)
          console.log(value.constructor.name)
          return getRepository(value.constructor.name).findOne(value).then(user => {
            if (user) {
              Object.assign(_args.object, { user })
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
