const request = require("supertest");

const app = require("../../src/app");

test("Deve listar todos os usuários", async () => {
  const resp = await request(app).get("/users");
  expect(resp.status).toBe(200);
  expect(resp.body.length).toBeGreaterThan(0);
});

test("Deve inserir usuário com sucesso", async () => {
  const email = `${Date.now()}@mail.com`;
  const resp = await request(app).post("/users").send({
    name: "Pedro Siqueira",
    email,
    password: "123456",
  });
  expect(resp.status).toBe(201);
  expect(resp.body.name).toBe("Pedro Siqueira");
});

test("Não deve inserir usuário sem nome", () => {
  return request(app)
    .post("/users")
    .send({ email: "pedro@gmail.com", password: "123456" })
    .then((resp) => {
      expect(resp.status).toBe(400);
      expect(resp.body.error).toBe("Nome é um atributo obrigatório");
    });
});
