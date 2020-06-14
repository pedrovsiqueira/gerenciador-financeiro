const request = require("supertest");

const app = require("../app");

test("Deve responder na raiz", async () => {
  const resp = await request(app).get("/");
  return expect(resp.status).toBe(200);
});
