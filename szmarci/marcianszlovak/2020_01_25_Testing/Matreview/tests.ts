import cats from "./index";
import * as test from "tape";

test("cica", (t: any) => {
  t.equal(cats(4), "MeowMeowMeowMeow");
  t.end();
});
