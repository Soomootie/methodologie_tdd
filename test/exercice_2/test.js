const {
  isLeapYearV1,
  isLeapYearV2,
  isLeapYearV3,
  isLeapYearV4
} = require("../../src/exercice_2/index");

const assert = require("assert");
const chai = require("chai");

describe("Leap test v1", () => {
  describe("Toutes les années divisible par 400 sont bissextiles", () => {

    it("Doit retourner que l'année est bissextile", () => {
      const year = 1600;
      const expectedIsLeapTrue = true;
      assert.equal(isLeapYearV1(year), expectedIsLeapTrue);
    });

    it("Ne doit retourner que l'année est bissextile", () => {
      const year = 1601;
      const expectedIsLeapFalse = false;
      assert.equal(isLeapYearV1(year), expectedIsLeapFalse);
    });

  });
});

describe("Leap test v2", () => {
  describe("Toutes les années divisible par 400 sont bissextiles", () => {

    it("Doit retourner que l'année est bissextile", () => {
      const year = 1600;
      const expectedIsLeapTrue = true;
      assert.equal(isLeapYearV2(year), expectedIsLeapTrue);
    });

    it("Ne doit retourner que l'année est bissextile", () => {
      const year = 1601;
      const expectedIsLeapFalse = false;
      assert.equal(isLeapYearV2(year), expectedIsLeapFalse);
    });
  });


  describe("Toutes les années divisible par 100 mais pas par 400 ne sont pas bissextiles", () => {

    it("Doit retourner que l'année n'est pas bissextile", () => {
      const year = 1700;
      const expectedIsLeapFalse = false;
      assert.equal(isLeapYearV2(year), expectedIsLeapFalse);
    });

    it("Doit retourner que l'année est bissextile", () => {
      const year = 2000;
      const expectedIsLeapTrue = true;
      assert.equal(isLeapYearV2(year), expectedIsLeapTrue);
    });

  });
});

describe("Leap test v3", () => {
  describe("Toutes les années divisible par 400 sont bissextiles", () => {

    it("Doit retourner que l'année est bissextile", () => {
      const year = 1600;
      const expectedIsLeapTrue = true;
      assert.equal(isLeapYearV3(year), expectedIsLeapTrue);
    });

    it("Ne doit retourner que l'année est bissextile", () => {
      const year = 1601;
      const expectedIsLeapFalse = false;
      assert.equal(isLeapYearV3(year), expectedIsLeapFalse);
    });
  });

  describe("Toutes les années divisible par 100 mais pas par 400 ne sont pas bissextiles", () => {

    it("Doit retourner que l'année n'est pas bissextile", () => {
      const year = 1700;
      const expectedIsLeapFalse = false;
      assert.equal(isLeapYearV3(year), expectedIsLeapFalse);
    });

    it("Doit retourner que l'année est bissextile", () => {
      const year = 2000;
      const expectedIsLeapTrue = true;
      assert.equal(isLeapYearV3(year), expectedIsLeapTrue);
    });

  });

  describe("Toutes les années divisible par 4 mais pas par 100 sont bissextiles", () => {

    it("Doit retourner que l'année est bissextile", () => {
      const year = 2004;
      const expectedIsLeapTrue = true;
      assert.equal(isLeapYearV3(year), expectedIsLeapTrue);
    });

    it("Doit retourner que l'année n'est pas bissextile", () => {
      const year = 2005;
      const expectedIsLeapFalse = false;
      assert.equal(isLeapYearV3(year), expectedIsLeapFalse);
    });

  });
});

describe("Leap test v4", () => {
  describe("Toutes les années divisible par 400 sont bissextiles", () => {

    it("Doit retourner que l'année est bissextile", () => {
      const year = 1600;
      const expectedIsLeapTrue = true;
      assert.equal(isLeapYearV4(year), expectedIsLeapTrue);
    });

    it("Ne doit retourner que l'année est bissextile", () => {
      const year = 1601;
      const expectedIsLeapFalse = false;
      assert.equal(isLeapYearV4(year), expectedIsLeapFalse);
    });
  });

  describe("Toutes les années divisible par 100 mais pas par 400 ne sont pas bissextiles", () => {

    it("Doit retourner que l'année n'est pas bissextile", () => {
      const year = 1700;
      const expectedIsLeapFalse = false;
      assert.equal(isLeapYearV4(year), expectedIsLeapFalse);
    });

    it("Doit retourner que l'année est bissextile", () => {
      const year = 2000;
      const expectedIsLeapTrue = true;
      assert.equal(isLeapYearV4(year), expectedIsLeapTrue);
    });

  });

  describe("Toutes les années divisible par 4 mais pas par 100 sont bissextiles", () => {

    it("Doit retourner que l'année est bissextile", () => {
      const year = 2004;
      const expectedIsLeapTrue = true;
      assert.equal(isLeapYearV4(year), expectedIsLeapTrue);
    });

    it("Doit retourner que l'année n'est pas bissextile", () => {
      const year = 2005;
      const expectedIsLeapFalse = false;
      assert.equal(isLeapYearV4(year), expectedIsLeapFalse);
    });

  });

  describe("Toutes les années non divisible par 4 ne sont pas bissextiles", () => {

    it("Doit retourner que l'année est bissextile", () => {
      const year = 2004;
      const expectedIsLeapTrue = true;
      assert.equal(isLeapYearV4(year), expectedIsLeapTrue);
    });

    it("Doit retourner que l'année n'est pas bissextile", () => {
      const year = 2001;
      const expectedIsLeapFalse = false;
      assert.equal(isLeapYearV4(year), expectedIsLeapFalse);
    });

  });
});
