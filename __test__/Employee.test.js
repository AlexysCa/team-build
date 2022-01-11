const Employee = require('../lib/Employee')

describe('Employee', () => {
    
    it("returns name", () => {
        expect(new Employee("Alexys").getName()).toBe("Alexys");
    });

    it("returns ID", () => {
        expect(new Employee("Alexys", "115").getId()).toBe("115");
    });

    it("returns email address", () => {
        expect(new Employee("Alexys", "115", "alexys@gmail.com").getEmail()).toBe("alexys@gmail.com");
    });

    it("returns employee role", () => {
        expect(new Employee("Employee").getRole()).toBe("Employee");
    });
})