const {jumpLinesAuto} = require("../../src/exercice_3/index");

const assert = require("assert");
const chai = require("chai");

describe("Tests sur le retour automatique", () => {

  it("Test avec une seule ligne", () => {
    const chain = "blob";
    const length = 4;
    assert.equal(jumpLinesAuto(chain, length), chain);
  });

  it("Test sur deux lignes", () => {
    const chain = "blob bolb blob bolb";
    const expectedChain = "blob bolb blob\nbolb";
    const length = 14;
    assert.equal(jumpLinesAuto(chain, length), expectedChain);
  });

  it("Test sur plusieurs lignes", () => {
    const chain = "blob bolb blob blob bolb blob blob";
    const expectedChain = "blob bolb blob\nblob bolb blob\nblob";
    const length = 14;
    assert.equal(jumpLinesAuto(chain, length), expectedChain);
  });

  it("Test sur un mot qui ne doit pas être coupé", () => {
    const chain = "blob bolb";
    const expectedChain = "blob\nbolb";
    const length = 7;
    assert.equal(jumpLinesAuto(chain, length), expectedChain);
  });

  it("Test sur un mot qui ne peut pas être découpé", () => {
    const chain = "blobblob";
    const length = 7;
    chai.expect(() => jumpLinesAuto(chain, length)).to.throw(Error);
  })
});
