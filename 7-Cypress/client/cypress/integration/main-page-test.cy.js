describe("Main page tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Main page has a root div component", () => {
    cy.get("div").should("have.id", "root").should("be.visible");
  });

  it("Main page has a App div component with a style class", () => {
    cy.get("div")
      .should("have.class", "App")
      .should("have.class", "bg-success")
      .should("be.visible");
  });

  it("Main page has a h1 component with text 'Hello in the shop!'", () => {
    cy.get("div")
      .should("have.class", "bg-info")
      .get("h1")
      .should("have.id", "hello")
      .and("have.text", "Welcome in the shop!")
      .should("be.visible");
  });

  it("Main page has a Navbar component", () => {
    cy.get("nav")
      .should("be.visible")
      .and("have.class", "navbar-dark")
      .and("have.class", "bg-dark")
      .and("have.class", "navbar")
      .and("have.class", "navbar-expand-lg")
      .and("have.class", "navbar-light");

    cy.get("span")
      .should("have.class", "navbar-brand")
      .get("a")
      .should("be.visible")
      .and("have.class", "nav-link")
      .and("have.attr", "href");

    cy.get("div#navbarScroll")
      .should("have.class", "navbar-collapse")
      .and("have.class", "navbar-collapse");
  });

  it("Main page has a button to Products page", () => {
    cy.get("nav")
      .get("div#navbarScroll")
      .get("div")
      .should("have.class", "mr-auto")
      .and("have.class", "my-2")
      .and("have.class", "my-lg-0")
      .and("have.class", "navbar-nav")
      .and("have.class", "navbar-nav-scroll");

    cy.get("nav")
      .get("div#navbarScroll")
      .get("div")
      .get("a#products")
      .should("have.text", "Products");

    cy.get("nav")
      .get("div#navbarScroll")
      .get("div")
      .get("a")
      .should("be.visible");
  });

  it("Main page has a button to Cart page", () => {
    cy.get("nav")
      .should("be.visible")
      .get("div#navbarScroll")
      .get("div")
      .should("have.class", "mr-auto")
      .and("have.class", "my-2")
      .and("have.class", "my-lg-0")
      .and("have.class", "navbar-nav")
      .and("have.class", "navbar-nav-scroll");

    cy.get("nav")
      .get("div#navbarScroll")
      .should("be.visible")
      .get("button#cart")
      .should("have.text", "(0)");

    cy.get("nav")
      .get("div#navbarScroll")
      .get("button#cart")
      .get("a")
      .should("be.visible");
  });

  it("Mains page has a button to Log in page", () => {
    cy.get("nav")
      .should("be.visible")
      .get("div#navbarScroll")
      .get("div")
      .should("have.class", "mr-auto")
      .and("have.class", "my-2")
      .and("have.class", "my-lg-0")
      .and("have.class", "navbar-nav")
      .and("have.class", "navbar-nav-scroll");

    cy.get("nav")
      .get("div#navbarScroll")
      .should("be.visible")
      .get("button#login")
      .should("have.text", "Log in");

    cy.get("nav")
      .get("div#navbarScroll")
      .get("button#login")
      .get("a")
      .should("be.visible");
  });
});
