// i cant understand (Error and Inheritance) look back again and again 😑😔😌😪

class ArgumentError extends Error {}

class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

///---///

function checkHumidityLevel(humidityPercentage) {
  if (humidityPercentage > 70) {
    throw new Error("Implement the checkHumidity function");
  }
}

// console.log(checkHumidityLevel(60));
// console.log(checkHumidityLevel(100));

///---///

function reportOverheating(temperature) {
  if (temperature === null) {
    throw new ArgumentError();
  }
  if (temperature > 500) {
    throw new OverheatingError(temperature);
  }
}

// console.log(reportOverheating(null));
// console.log(reportOverheating(800));
