const MY_TYPE_ERROR_MESSAGE = "this is my type error";

try {
  console.log("szia");
  throw Error("this is my type error"); // amit szeretnék, hogy lefusson
} catch (error) { // (error) --- ide bármit írhatok, ez kapja el az errort a throw-ból
  if (error.message === MY_TYPE_ERROR_MESSAGE) {
    console.log("TypeError volt");
  } else if (error instanceof EvalError) {
    console.log("This is an eval error");
  } else {
    console.log(error.message);
  }
} finally {
    console.log("bármi");
}

