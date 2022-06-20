/**
 * @jest-environment jsdom
 */

//simulator of the browser / dom (jsdom)



import { setInfo } from "../src/client/js/setInfo";

describe("check travel details", () => {
  it("should set trip info", () => {
    // preparation
    const dataObject = {
      location: "Hamburg",
      countryName: "Germany",
      startDate: "2022-05-18",
      endDate: "2022-05-25",
      imageUrl: "http://example.com/popularimage.png",
      weatherForecast: {
        temperature: "25",
        description: "Clear",
        icon: "a012d",
      },
    };

    document.body.innerHTML =
    `<img class="loc-img"/>
    <div id="city-place"></div>
    <div id="departure-date"></div>
    <div id="arrival-date"></div>
    <div id="temp"></div>
    <img id="temp-icon"/>
    <div id="temp-desc"></div>`

    // call the function
    setInfo(dataObject);

    // check the result
    expect(document.getElementById("city-place").textContent).toBe("Hamburg, Germany");
    expect(document.getElementById("departure-date").textContent).toBe("2022-05-18");
    expect(document.getElementById("arrival-date").textContent).toBe("2022-05-25");
    expect(document.querySelector(".loc-img").src).toBe("http://example.com/popularimage.png");
    expect(document.getElementById("temp").textContent).toBe("25℃");
    expect(document.getElementById("temp-desc").textContent).toBe("Clear");
    expect(document.getElementById("temp-icon").src).toMatch(/.*\/assets\/icons\/a012d.png$/);
  });
});
