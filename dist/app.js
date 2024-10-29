"use strict";
// Create an object
const myVehicle = {
    model: "Boring generic vehicle",
    color: "Red",
    year: 1993,
    power: 60
};
// Log the created vehicle
console.log(myVehicle);
// Create instances of each interface
const myCar = {
    model: "Ford focus",
    color: "Green",
    year: 2016,
    power: 150,
    bodyType: "Hatchback",
    wheelCount: 4
};
const myPlane = {
    model: "Boeing 777",
    color: "White",
    year: 2020,
    power: 170000,
    wingSpan: 65
};
const myBoat = {
    model: "Bella",
    color: "Black",
    year: 2022,
    power: 100,
    draft: 0.42
};
// Log the created vehicles
console.log(myCar);
console.log(myPlane);
console.log(myBoat);
// VehicleService generic class
class VehicleService {
    items = [];
    add(item) {
        this.items.push(item);
    }
    list() {
        return this.items;
    }
}
// Create instances for cars and boats
const cars = new VehicleService();
const boats = new VehicleService();
// Add car and boat instances to their lists
cars.add(myCar);
boats.add(myBoat);
// Log the lists
console.log("Cars:", cars.list());
console.log("Boats:", boats.list());
