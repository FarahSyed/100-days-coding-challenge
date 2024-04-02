// An Enum for Vehicles
var Vehicles;
(function (Vehicles) {
    Vehicles[Vehicles["Motorcycles"] = 0] = "Motorcycles";
    Vehicles[Vehicles["Cars"] = 1] = "Cars";
    Vehicles[Vehicles["Trucks"] = 2] = "Trucks";
})(Vehicles || (Vehicles = {}));
console.log(Vehicles);
console.log(Vehicles.Cars); // OR Vehicles['Cars']
console.log(Vehicles[1]);
