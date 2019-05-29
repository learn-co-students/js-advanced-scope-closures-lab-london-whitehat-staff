function produceDrivingRange(blockRange) {
  return function x(a, b) {
    let aUpdated = parseInt(a, 10);
    let bUpdated = parseInt(b, 10);
    let range = bUpdated - aUpdated;
    let returnedRange = Math.abs(blockRange - range)

    if(range > blockRange) {
      return `${returnedRange} blocks out of range`
    }else{
      if(range < blockRange) {
        return `within range by ${returnedRange}`
      }
    }
  }
}

function produceTipCalculator(tip) {
  return function x(fare) {
    return tip * fare
  }
}

let driverId = 0;

function createDriver() {
  return class Driver {
    constructor(name) {
      this.name = name;
      this.id = driverId++;

    }
  }
}