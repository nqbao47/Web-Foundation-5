describe("Content Component", () => {
  beforeEach(() => {
        
        if (Cypress.mocha.getRunner().suite.ctx.currentTest.title !== "should delete a task") {
          cy.clearLocalStorage();
        }
  });

  it("should render tasks correctly", () => {
    // Kiểm tra hiển thị
    cy.visit("http://localhost:3000/");

    // Tạo các task mẫu
    const tasks = [
      { id: 1, content: "Task 1", status: "Completed" },
      { id: 2, content: "Task 2", status: "Urgent" },
      { id: 3, content: "Task 3", status: "Later" },
    ];

    // Lưu tasks vào Local Storage
    cy.window().then((win) => {
      win.localStorage.setItem("tasks", JSON.stringify(tasks));
    });

    // Kiểm tra xem trạng thái của task có id là 1 đã hiển thị đúng hay không
    cy.get(".task-item")
      .eq(0)
      .within(() => {
        cy.get(".task-item__status").should("contain", "Completed");
      });
  });

  it("should edit a task", () => {
    // Lưu task mẫu vào Local Storage
    const tasks = [
      { id: 1, content: "Task 1", status: "Completed" },
      { id: 2, content: "Task 2", status: "Urgent" },
      { id: 3, content: "Task 3", status: "Later" },
    ];
    cy.window().then((win) => {
      win.localStorage.setItem("tasks", JSON.stringify(tasks));
    });

    // Kiểm tra hiển thị
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
    // Kiểm tra hiển thị
    cy.visit("http://localhost:3000/", {
      onBeforeLoad: (win) => {
        // Lưu trữ laih
        win.localStorage.setItem("tasks", JSON.stringify([
          { id: 1, content: "Task 1", status: "Completed" },
          { id: 2, content: "Task 2", status: "Urgent" },
          { id: 3, content: "Task 3", status: "Later" },
        ]));
      },
    });

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
