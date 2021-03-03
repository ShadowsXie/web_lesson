function a(s) {
  if(s) {
    console.log(true);
  } else {
    console.log(false);
  }
} 

a(0)   // false
a(false)  // false
a(undefined)  // false
a(NaN)  // false
a("") // false
a(null) // false
a("undefiend")  // true
a("false")  // true