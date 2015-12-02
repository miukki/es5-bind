function PropertyError(property) {
  Error.call(this, property) ;
  this.name = this.constructor.name; //"PropertyError"; not campatiblae for IE11

  this.property = property;
  this.message = "Error in property: " + property;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);//this.constructor == PropertyError
  } else {
    this.stack = (new Error()).stack;
  }
}
PropertyError.prototype = Object.create(Error.prototype);//this.constructor function PropertyError(property)
PropertyError.prototype.constructor = PropertyError;

//create naslednik
function PropertyRequiredError(property) {
  PropertyError.apply(this, arguments);
  this.name = 'PropertyRequiredError';
  this.message = 'Missed property: ' + property;
}

PropertyRequiredError.prototype = Object.create(PropertyError.prototype);
PropertyRequiredError.prototype.constructor = PropertyRequiredError;// restore constructor

var err = new PropertyRequiredError('age');
console.log( 'err instanceof PropertyError', err instanceof PropertyError ); // true


function readUser(data) {

  var user = JSON.parse(data);

  if (!user.age) {
    throw new PropertyRequiredError('age');
  }

  if (!user.name) {
    throw new PropertyRequiredError('name'); //PropertyError('name')
  }

  return user;
}

try {
  var user = readUser('{ "age": 25 }');
} catch (err) {
  if (err instanceof PropertyError) {
      console.log(err.property, err.message);
  } else if (err instanceof SyntaxError) {
    console.log('SyntaxError');
  } else {
    throw err; //noname error
  }
}


/*
var err = new PropertyRequiredError('age');
console.log( err instanceof PropertyRequiredError ); // true
console.log( err instanceof PropertyError ); // true
console.log( err isntanceof CustomError ); // true
console.log( err isntanceof Error ); // true
*/
//
/*
function f() {
  console.log( new Error().stack );
}
*/
//console.log(f());