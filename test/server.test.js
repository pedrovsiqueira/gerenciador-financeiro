const supertest = require("supertest");

//como não temos a rota ainda, utilizamos qualquer link para fazer o teste
const request = supertest("http://localhost:3001");

test("Deve responder na porta 3001", async () => {
  //acessar a url http://localhost:3001
  //verificar que a resposta foi 200
  const resp = await request.get("/");
  return expect(resp.status).toBe(200);
});
