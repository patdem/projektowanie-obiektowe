describe("Products page test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/product/list");
  });

  it("Products page has a root div component", () => {
    cy.get("div").should("have.id", "root").should("be.visible");
  });

  it("Products page has a App div component with a style class", () => {
    cy.get("div")
      .should("have.class", "App")
      .should("have.class", "bg-success")
      .should("be.visible");
  });

  it("Products page has a h1 component with text 'Products'", () => {
    cy.get("div")
      .should("have.class", "bg-info")
      .get("h1")
      .should("have.text", "Products")
      .and("be.visible");
  });

  it("Products page has a Milk cart component", () => {
    cy.get("div.card#Milk")
      .and("be.visible")
      .get("div.card-body")
      .get("div.card-title#Milk")
      .should("have.text", "Milk")
      .and("be.visible");

    cy.get("div.card#Milk")
      .and("be.visible")
      .get("div.card-body")
      .get("button#Milk")
      .should("have.text", "Add to cart")
      .and("be.visible");
  });

  it("Products page has an Apple cart component", () => {
    cy.get("div.card#Apple")
      .and("be.visible")
      .get("div.card-body")
      .get("div.card-title#Apple")
      .should("have.text", "Apple")
      .and("be.visible");

    cy.get("div.card#Apple")
      .and("be.visible")
      .get("div.card-body")
      .get("button#Apple")
      .should("have.text", "Add to cart")
      .and("be.visible");
  });

  it("Products page has Socks cart component", () => {
    cy.get("div.card#Socks")
      .and("be.visible")
      .get("div.card-body")
      .get("div.card-title#Socks")
      .should("have.text", "Socks")
      .and("be.visible");

    cy.get("div.card#Socks")
      .and("be.visible")
      .get("div.card-body")
      .get("button#Socks")
      .should("have.text", "Add to cart")
      .and("be.visible");
  });

  it("Add Socks product to cart", () => {
    cy.get("button#Socks").click();

    cy.get("nav")
      .get("div#navbarScroll")
      .should("be.visible")
      .get("button#cart")
      .should("have.text", "(0)");
  });

  it("Products page has a Navbar component", () => {
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

  it("Products page has a button to Products page", () => {
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

  it("Products page has a button to Cart page", () => {
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

  it("Products page has a button to Log in page", () => {
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
