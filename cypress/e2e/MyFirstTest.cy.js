describe("Header", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should open the modal on Add Task button click", () => {
    cy.get(".header__add-task-button").click();
    cy.get(".modal").should("be.visible");
  });

  it("should add a task on Submit Task button click", () => {
    cy.get(".header__add-task-button").click();

    cy.get('input[type="text"]').type("New Task");
    cy.get("select").select("Urgent");

    cy.get(".modal__btn-submitTask").click();

    cy.get(".header__task-count").should("contain", "Tasks: 1");
  });

  it("should show a warning alert when submitting an empty task", () => {
    cy.get(".header__add-task-button").click();

    cy.get(".modal__btn-submitTask").click();

    cy.on("window:alert", (alertText) => {
      expect(alertText.trim()).to.equal(
        "Warning !! Task Name can not be empty"
      );
    });
  });
});
