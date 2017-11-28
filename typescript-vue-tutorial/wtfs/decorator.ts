// https://cabbageapps.com/fell-love-js-decorators/


// Method decorator
function leDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor): any {
  const oldValue = descriptor.value

  descriptor.value = function() {
    console.log(`Calling "${propertyKey}" with`, arguments, target)
    let value = oldValue.apply(null, [arguments[1], arguments[0]])

    return value + "; This is awesome"
  }

  return descriptor
}


// Property decorator
function realName(target: any, key: string): any {

  let _val: any = target[key]

  const getter = function(): string {
    return 'iidear(' + _val + ')'
  }

  const setter = function(newVal: any) {
    _val = newVal
  }

  Object.defineProperty(target, key, {
    get: getter,
    set: setter
  })
}


// Class decorator
function AwesomeMeetup<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor implements extra {
    speaker: string = 'xxdear'
    extra = 'xx!'
  }
}


// Parameter decorator
function logParameter(target: any, key: string, index: number): any {
  let metadataKey = `myMetaData`
  if (Array.isArray(target[metadataKey])) {
    target[metadataKey].push(index)
  } else {
    target[metadataKey] = [index]
  }
}

function logMethod(target: any, key: string, descriptor: any): any {
  let originalMethod = descriptor.value
  descriptor.value = function(...args: any[]) {
    let metadataKey = `myMetaData`
    let indices = target[metadataKey]
    console.log('indices', indices)
    for (let i = 0; i < args.length; i++) {
      if (indices.indexOf(i) !== -1) {
        console.log('Found a marked parameter at index' + i)
        args[i] = 'abcdefg'
      }
    }

    let result = originalMethod.apply(target, args)
    return result
  }

  return descriptor
}

@AwesomeMeetup
class JSMeetup {

  public speaker = 'speaker'
  @realName
  public myName = 'xx'

  constructor() {

  }
  greet(): string {
    return 'Hi, I\'m ' + this.myName
  }

  greetFromSpeaker(): string {
    return 'Hi, I\'m speaker ' + this.speaker
  }

  @leDecorator
  welcome(arg1: string, arg2: string) {
    console.log(`Arguments Received are ${arg1} ${arg2}`)
    return `${arg1} ${arg2}`
  }

  @logMethod
  public saySomething(something: string, @logParameter somethingElse: string): string {
    return something + ' : ' + somethingElse
  }
}

interface extra {
  extra: string
}

const meetup = new JSMeetup()

// console.log(meetup.welcome('World', 'hello'))
// console.log(meetup.greet())
// meetup.myName = 'yy'
// console.log(meetup.greet())
// console.log(meetup.greetFromSpeaker())
// console.log(meetup.extra)
console.log(meetup.saySomething("something", "Something Else"))

