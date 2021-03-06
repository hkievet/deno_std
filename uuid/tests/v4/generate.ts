// Copyright 2018-2019 the Deno authors. All rights reserved. MIT license.
import { assert, assertEquals } from "../../../testing/asserts.ts";
import { test } from "../../../testing/mod.ts";
import generate, { validate } from "../../v4.ts";

test({
  name: "[UUID] test_uuid_v4",
  fn(): void {
    const u = generate();
    assertEquals(typeof u, "string", "returns a string");
    assert(u !== "", "return string is not empty");
  }
});

test({
  name: "[UUID] test_uuid_v4_format",
  fn(): void {
    for (let i = 0; i < 10000; i++) {
      const u = generate() as string;
      assert(validate(u), `${u} is not a valid uuid v4`);
    }
  }
});
