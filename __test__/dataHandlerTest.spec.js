const handlers = require("../src/server/dataHandlers");

describe("getJSONResponse", () => {
  it("should return json", async () => {
    // preparation
    const response = {
      ok: true,
      json: () => {
        return Promise.resolve({
          foo: "bla",
        });
      },
    };
    // call the function
    await handlers.getJSONResponse(response).then((result) => {
      // check the result
      expect(result).toEqual({ foo: "bla" });
    });
  });
});
