describe("Sidebar", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    const tasks = [
      { id: 1, content: "Task 1", status: "Completed" },
      { id: 2, content: "Task 2", status: "Urgent" },
      { id: 3, content: "Task 3", status: "Later" },
      { id: 4, content: "Task 4", status: "Urgent" },
      { id: 5, content: "Task 5", status: "Later" },
      { id: 6, content: "Task 6", status: "Completed" },
      { id: 7, content: "Task 7", status: "Later" },
      { id: 8, content: "Task 8", status: "Processing" },
      { id: 9, content: "Task 9", status: "Processing" },
    ];

    // Storage Tasks to LS
    cy.window().then((win) => {
      win.localStorage.setItem("tasks", JSON.stringify(tasks));
    });
  });

  //Completed check Onclick
  it("should filter by Completed when clicked", () => {
    cy.get(".sidebar__completed-style").click();
  });

  //Urgent check Onclick
  it("should filter by Urgent when clicked", () => {
    cy.get(".sidebar__urgent-style").click();
  });

  //Later check Onclick
  it("should filter by Later when clicked", () => {
    cy.get(".sidebar__later-style").click();
  });

  //Processing check Onclick
  it("should filter by Processing when clicked", () => {
    cy.get(".sidebar__processing-style").click();
  });

  //All check Onclick
  it("should filter by All when clicked", () => {
    cy.get(".sidebar__all-style").click();
  });
});
