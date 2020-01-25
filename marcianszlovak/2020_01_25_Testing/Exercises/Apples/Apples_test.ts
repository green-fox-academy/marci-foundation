import Apples from "./Apples";
import test from "tape";

test((t: any) => {
  let testApple = new Apples();
  t.equals(testApple.getApple(), "apple");
  t.equals(testApple.getApple(), "kacsa");
  t.end();
});
