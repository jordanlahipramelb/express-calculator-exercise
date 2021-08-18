// Our ExpressError class will extend from/inherit methods from the default Error class

// class ChildClass extends ParentClass {}

class ExpressError extends Error {
  constructor(msg, status) {
    super(); //this allows us to call the parent's constructor method and gets access to the parent's properties and methods
    this.msg = msg;
    this.status = status;
    console.error(this.stack); //stack trace of error
  }
}

module.exports = ExpressError;
