console.log("Hello World!"); 

// Define a vehicle type
type TVehicle = {
  model: string;
  color: string;
  year: number;
  power: number;
};

// Create a vehicle object
const myVehicle: TVehicle = {
  model: "Boring generic vehicle",
  color: "Red",
  year: 1993,
  power: 60
};

// Log the created vehicle
console.log(myVehicle);

// Define a vehicle interface 
interface IVehicle {
  model: string;
  color: string;
  year: number;
  power: number;
}

// Extend the vehicle interface
interface ICar extends IVehicle {
  bodyType: string;
  wheelCount: number;
}
interface IBoat extends IVehicle {
  draft: number;
}
interface IPlane extends IVehicle {
  wingspan: number;
}

// Create instances of each extended interface
const myCar: ICar = {
  model: "Ford focus", 
  color: "Green", 
  year: 2016, 
  power: 150, 
  bodyType: "Hatchback", 
  wheelCount: 4 
};
const myPlane: IPlane = {
  model: "Boeing 777", 
  color: "White", 
  year: 2020, 
  power: 170000, 
  wingspan: 65 
};
const myBoat: IBoat = {
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

// Create generic vehicle service class
class VehicleService<T> {
  private items: T[] = [];
  
  add(item: T): void {
    this.items.push(item);
  }
  
  list(): T[] {
    return this.items;
  }
}

// Create instances of vehicle service for cars and boats
const cars = new VehicleService<ICar>();
const boats = new VehicleService<IBoat>();

// Add car and boat instances to their lists
cars.add(myCar);
boats.add(myBoat);

// Log the lists
console.log(cars.list());
console.log(boats.list());