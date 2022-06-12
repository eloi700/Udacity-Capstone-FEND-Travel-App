const { TestEnvironment } = require("jest-environment-jsdom")

import {cityLocation} from "../src/client/js/validateFormEntry";

describe("check entry location", () =>{
    it("should return true if text is correct", ()=>{
        const result = cityLocation('Berlin');
        expect(result).toBe(true)
    })
    it("should return false if text is incorrect", ()=>{
        const result = cityLocation('465651');
        expect(result).toBe(false)
    })
})