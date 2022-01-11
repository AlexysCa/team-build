const Engineer = require('../lib/Engineer');

describe('Engineer', () => {

    it("returns github", () => {
        expect(new Engineer("alexysca").getName()).toBe("alexysca");
    });

    it("returns role", () => {
        expect(new Engineer("Employee").getRole()).toBe("Engineer");
    });
    
})