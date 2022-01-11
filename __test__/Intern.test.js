const Intern = require('../lib/Intern');

describe('Intern', () => {

    it("returns school", () => {
        expect(new Intern("CPCC").getName()).toBe("CPCC");
    });

    it("returns role", () => {
        expect(new Intern("Employee").getRole()).toBe("Intern");
    });
    
})