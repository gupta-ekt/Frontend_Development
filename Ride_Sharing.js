class User {
  constructor(name, rating) {
    this.name = name
    this.rating = rating
  }
}

class Driver extends User {
  constructor(name, rating, vehicle) {
    super(name, rating)
    this.vehicle = vehicle
  }
}

class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.fromLocation = fromLocation
    this.toLocation = toLocation
    this.distance = distance
  }

  calculateFare() {
    if (this.distance <= 0 || isNaN(this.distance)) {
      throw "Invalid distance"
    }
    return this.distance * 12
  }
}

let user = new User("Riya", 4.7)
let driver = new Driver("Aman", 4.9, "Honda City")
let trip = new Trip("Delhi", "Noida", 15)

try {
  let fare = trip.calculateFare()
  console.log("Fare:", fare)
} catch (err) {
  console.log("Error:", err)
}
