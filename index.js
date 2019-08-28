function produceDrivingRange(rangeNum) {
  return function(startStr, endStr) {
    const startInt = parseInt(startStr.slice(0, -2))
    const endInt = parseInt(endStr.slice(0, -2))
    const diff = endInt - startInt
    return diff < rangeNum
      ? `within range by ${rangeNum - diff}`
      : `${diff - rangeNum} blocks out of range`
  }
}

function produceTipCalculator(float) {
  return num => num * float
}

// class Driver {
//   constructor(driverId) {
//     this.id = driver.id
//   }
// }

function createDriver() {
  let driverId = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }
}