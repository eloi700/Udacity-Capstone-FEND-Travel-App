import {cityLocation} from "../src/client/js/cityLocValidation";

describe("check entry location", () =>{
    it("should return true if text is correct", ()=>{
        const resultlocation = cityLocation('Berlin');
        expect(resultlocation).toBe(true)
    })
    it("should return false if text is incorrect", ()=>{
        const resultlocation = cityLocation('465651');
        expect(resultlocation).toBe(false)
    })
})



