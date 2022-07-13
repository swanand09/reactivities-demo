export interface IDuck{
    name: string
    numLegs: number
    makeSound:(sound:any)=>void
}

const duck1:IDuck={
    name:'huey',
    numLegs:2,
    makeSound:(sound:any)=>console.log(sound)
}

const duck2:IDuck={
    name:'dewey',
    numLegs:2,
    makeSound:(sound:any)=>console.log(sound)
}

duck1.makeSound('quack')

export const ducks=[duck1, duck2]