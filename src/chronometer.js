class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(()=>{this.currentTime++; if (printTimeCallback){
      printTimeCallback();}},1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    return value < 10 ? '0' + value : String(value);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}
