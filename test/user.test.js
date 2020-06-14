const request = require("supertest");

const app = require("../src/app");

test("Deve listar todos os usuários", async () => {
  const resp = await request(app).get("/users");
  expect(resp.status).toBe(200);
  expect(resp.body).toHaveLength(1);
  expect(resp.body[0]).toHaveProperty("name", "John Doe");
});
