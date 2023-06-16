describe("Content Component", () => {
  beforeEach(() => {
      cy.clearLocalStorage();
      const tasks = [
        { id: 1, content: "Task 1", status: "Completed" },
        { id: 2, content: "Task 2", status: "Urgent" },
        { id: 3, content: "Task 3", status: "Later" },
      ];

      // Storage tasks to LS
      cy.window().then((win) => {
        win.localStorage.setItem("tasks", JSON.stringify(tasks));
      });
    
  });

  it("should render tasks correctly", () => {
    cy.visit("http://localhost:3000/");

    // Kiểm tra xem trạng thái của task có id là 1 đã hiển thị đúng hay không
    cy.get(".task-item")
      .eq(0)
      .within(() => {
        cy.get(".task-item__status").should("contain", "Completed");
      });
  });

  it("should edit a task", () => {
    cy.visit("http://localhost:3000/");

    // Chỉnh sửa trạng thái của task có id là 1 thành "Later"
    cy.get(".task-item")
      .eq(0)
      .within(() => {
        cy.get(".btn-edit").click();
        cy.get(".box-optional").select("Later");
        cy.get(".btn-save").click();
      });

    // Kiểm tra xem trạng thái đã được cập nhật thành công hay không
    cy.get(".task-item")
      .eq(0)
      .within(() => {
        cy.get(".task-item__status").should("contain", "Later");
      });
  });

  it("should delete a task", () => {
    cy.visit("http://localhost:3000/");
    // Kiểm tra xem có 3 task-item được hiển thị ban đầu hay không
    cy.get(".task-item").should("have.length", 3);

    // Xóa task có id là 2
    cy.get(".task-item")
      .eq(1)
      .within(() => {
        cy.get(".btn-delete").click();
      });

    // Kiểm tra xem task có id là 2 đã bị xóa thành công hay không
    cy.get(".task-item").should("have.length", 2);
  });
});
