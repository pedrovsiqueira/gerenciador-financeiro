const request = require("supertest");

const app = require("../src/app");

test("Deve listar todos os usuários", async () => {
  const resp = await request(app).get("/users");
  expect(resp.status).toBe(200);
  expect(resp.body).toHaveLength(1);
  expect(resp.body[0]).toHaveProperty("name", "John Doe");
});

test("Deve inserir usuário com sucesso", async () => {
  const resp = await request(app)
    .post("/users")
    .send({ name: "Pedro Siqueira", email: "pedrosiqueira@gmail.com" });
  expect(resp.status).toBe(201);
  expect(resp.body.name).toBe("Pedro Siqueira");
});
