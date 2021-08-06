class LoggerListener {
  constructor(eventEmitter, events){
    this.eventEmitter = eventEmitter;
    this.events = events;
  }
  
  listen() {
    this.events.forEach(event => this.eventEmitter.on(event, this._log))
  }

  _log(msg, args) {
    console.log(msg);
      if(args) {
        console.log(`\n${args}`);
      }
  }
}

module.exports = {
  LoggerListener
};