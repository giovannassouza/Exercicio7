import { App } from "./app";
import { Bike } from "./bike";
import { Rent } from "./rent";
import { User } from "./user";
import sinon from 'sinon'

const app = new App()

const user = new User('Jose', 'jose@mail.com', '1234')
const bike = new Bike('caloi mountain', 'mountain bike', 100, 200, 150.5, 
    'My bike', 5, [])


const bikeId = app.registerBike(bike) //registrar bike
console.log(app.bikes)
app.registerUser(user) //registrar usuario

const yesterday = new Date()
yesterday.setDate(yesterday.getDate() - 1)
const today = new Date()
const tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)
const dayAfterTomorrow = new Date()
dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2)
const twoDaysFromToday = new Date()
twoDaysFromToday.setDate(twoDaysFromToday.getDate() + 3)

app.rentBike(bikeId, 'jose@mail.com', yesterday, today) //alugar bike

console.log('Antes do retorno', app.rents)

app.returnBike(bikeId, 'jose@mail.com') // devolver bike

console.log('Depois do retorno', app.rents) 

app.removeUser('jose@mail.com') //remover usuario








