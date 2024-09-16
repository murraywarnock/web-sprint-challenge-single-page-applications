describe("Lambda Eats", () => {
    beforeEach(() => {
      // arbitrary code we want running before our tests run
      cy.visit("http://localhost:3000/pizza");
    });
  
    const nameInput = () => cy.get('input[name="name"]');
    const sizeSelect = () => cy.get('select[name="size"]');
    const orderBtn = () =>cy.get('button[id="order-button"]');
 
    // here go our tests
    it("sanity test to make sure tests work", () => {
      // 'expect' is an assertions
      // there can be many assertions per test
      // though inside the 'it' statement (the test),
      // usually those assertions are logically grouped together
      expect(1 + 2).to.equal(3);
      expect(2 + 2).not.to.equal(5);
      expect({}).not.to.equal({}); // not strict (==)
      expect({}).to.eql({}); // strict (===)
    });
    it("the proper elements are showing on the screen", () => {
      cy.get('input[name="foobar"]').should("not.exist");
      nameInput().should("exist");
      sizeSelect().should("exist");
      orderBtn().should("exist");
    });
    it("can type in the required inputs", () => {
      // grab the inputs
      // assert that they are empty
      // type in them
      // assert that the thing we typed is there
        nameInput()
        .should("have.value", "")
        .type("have fun learning React")
        .should("have.value", "have fun learning React"); 

      sizeSelect()
        .should("have.value", "")
        .select("Medium")
        .should("have.value", "medium");
    });
    it("order button disabled without required inputs", () => {
      // grab the inputs
      // assert that the canel button is disabled
      // assert that they are empty
      // type and select valid datain them
      // assert that the canel button is disabled
      orderBtn()
      .should("not.be.enabled")

      nameInput()
      .should("have.value", "")
      .type("Name")
  
      sizeSelect()
      .should("have.value", "")
      .select("Medium")

      orderBtn()
      .should("be.enabled")

      });
      

});