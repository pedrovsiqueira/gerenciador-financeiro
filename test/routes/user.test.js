const request = require("supertest");

const app = require("../../src/app");
const email = `${Date.now()}@mail.com`;

test("Deve listar todos os usuários", async () => {
  const resp = await request(app).get("/users");
  expect(resp.status).toBe(200);
  expect(resp.body.length).toBeGreaterThan(0);
});

test("Deve inserir usuário com sucesso", async () => {
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

test("Não deve inserir usuário sem email", async () => {
  const result = await request(app).post("/users").send({
    name: "Pedro Siqueira",
    password: "123456",
  });
  expect(result.status).toBe(400);
  expect(result.body.error).toBe("Email é um atributo obrigatório");
});

test("Não deve inserir usuário sem senha", async (done) => {
  request(app)
    .post("/users")
    .send({
      name: "Pedro Siqueira",
      email: "pedro@gmail.com",
    })
    .then((resp) => {
      expect(resp.status).toBe(400);
      expect(resp.body.error).toBe("Senha é um atributo obrigatório");
      done();
    });
});

test("Não deve inserir usuário com email existente", async () => {
    const resp = await request(app).post("/users").send({
    name: "Pedro Siqueira",
    email,
    password: "123456",
  });
  expect(resp.status).toBe(400);
  expect(resp.body.error).toBe("Já existe um usuário com esse email");
});
