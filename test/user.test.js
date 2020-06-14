const request = require("supertest");

const app = require("../src/app");

test("Deve listar todos os usuários", async () => {
  const resp = await request(app).get("/users");
  return expect(resp.status).toBe(200);
});
