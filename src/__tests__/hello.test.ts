import { hello } from "../hello";

describe("hello()", () => {
  it("returns a friendly greeting", () => {
    expect(hello("World")).toBe("Hello World");
    expect(hello("Mom")).toBe("Hello Mom");
  });
});
