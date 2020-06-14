test("Devo conhecer as principais assertivas do jest", () => {
  let number = null;
  expect(number).toBeNull();
  number = 10;
  expect(number).not.toBeNull();
  expect(number).toBe(10);
  expect(number).toEqual(10);
  expect(number).toBeLessThan(11);
  expect(number).toBeGreaterThan(9);
});

test("Devo saber trabalhar com objetos", () => {
  const obj = { name: "John", email: "john@mail.com" };
  expect(obj).toHaveProperty("name");
  expect(obj).toHaveProperty("name", "John");
  expect(obj.name).toBe("John");
  
  //não tem diferença visual porém tem diferença de igualdade. .toBe
  const obj2 = { name: "John", email: "john@mail.com" };
  // expect(ojb).toBe(obj2)
  
  //.toBe só funciona se comparar o objeto com ele mesmo.
  expect(obj).toBe(obj)
  
  //.toIgual funciona 
  expect(obj).toEqual(obj2)
});
