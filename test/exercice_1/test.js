const { join, mean } = require("../../src/exercice_1/index");

const assert = require("assert");
const chai = require("chai");

describe("Tests sur la jointure d'une liste de strings", () => {

  describe("L'objet 'list' doit être une liste de string", () => {

    it("Ne doit pas lever d'erreur quand l'objet 'list' est de type Array", () => {
      const list = [];
      chai.expect(() => join(list, ' ')).not.to.throw(Error);
    });

    it("Doit lever une erreur quand l'objet 'list' n'est pas de type Array", () => {
      const nullConstant = null;
      chai.expect(() => join(nullConstant, ' ')).to.throw(Error);
    });

    it("Doit lever une erreur quand la liste ne contient pas que des strings", () => {
      const listWithOtherwiseThanStrings = ["Hello", 34];
      chai.expect(() => join(listWithOtherwiseThanStrings, ' ')).to.throw(Error);
    });

    it("Ne doit pas lever d'erreur quand la liste contient que des strings", () => {
      const listWithOnlyStrings = ["Hello", "world"];
      chai.expect(()=> join(listWithOnlyStrings, ' ')).not.to.throw(Error);
    });

  });

  describe("Le séparateur doit être un string",() => {
    it("Ne doit pas lever d'erreur si le séparateur est un string", () => {
      const separator = ' ';
      const list = ["Hello", "world"];

      chai.expect(() => join(list, separator)).not.to.throw(Error);
    });

    it("Doit lever d'erreur si le séparateur n'est pas un string", () => {
      const separator = null;
      const list = ["Hello", "world"];

      chai.expect(() => join(list, separator)).to.throw(Error);
    });
  });

  it("Doit correctement concatener les strings du tableau", () => {
    const separator = " ";
    const list = ["Hello", "world"];
    const expectedResult = "Hello world";

    assert.equal(join(list, separator), expectedResult)
  });

  it("Doit ne pas être égal à une valeur fausse", () => {
    const separator = ", ";
    const list = ["Nina", "Richie"];
    const notExpectedResult = "Nina Richie";

    assert.notEqual(join(list, separator), notExpectedResult);
  });
});

describe("Tests sur la moyenne d'une liste d'entiers'", () => {

  describe("L'objet 'list' doit être une liste d'entier", () => {

    it("Ne doit pas lever d'erreur quand l'objet 'list' est de type Array", () => {
      const list = [];
      chai.expect(() => mean(list)).not.to.throw(Error);
    });

    it("Doit lever une erreur quand l'objet 'list' n'est pas de type Array", () => {
      const nullConstant = null;
      chai.expect(() => mean(nullConstant)).to.throw(Error);
    });

    it("Doit lever une erreur quand la liste ne contient pas que des entiers", () => {
      const listWithOtherwiseThanInteger = ["Hello", 34];
      chai.expect(() => mean(listWithOtherwiseThanInteger)).to.throw(Error);
    });

    it("Ne doit pas lever d'erreur quand la liste contient que des strings", () => {
      const listWithOnlyStrings = [12, 6];
      chai.expect(()=> mean(listWithOnlyStrings)).not.to.throw(Error);
    });

  });

  it("Doit correctement calculer la moyenne des entiers du tableau", () => {
    const list = [12, 6];
    const expectedResult = 9;

    assert.equal(mean(list), expectedResult)
  });

  it("Doit ne pas être égal à une valeur fausse", () => {
    const list = [16, 20];
    const notExpectedResult = 10;

    assert.notEqual(mean(list), notExpectedResult);
  });
});
