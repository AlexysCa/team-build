const Manager = require('../lib/Manager')

describe('Manager', () => {

    it("returns office number", () => {
        expect(new Manager("115").getName()).toBe("115");
    });

    it("returns role", () => {
        expect(new Manager("Employee").getRole()).toBe("Manager");
    });
})