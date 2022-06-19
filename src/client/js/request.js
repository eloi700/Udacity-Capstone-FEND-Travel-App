function makeRequest(formData, saveFunction) {
  fetch("/all", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      location: formData.get("toLocation"),
      startDate: formData.get("start-date"),
      endDate: formData.get("end-date"),
    }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return response.text().then((text) => {
          throw new Error(text);
        });
      }
    })
    .then((data) => {
      const tripInfo = document.querySelector(".travel-info");
      const searchForm = document.getElementById("search-form");
      saveFunction(data)
      Client.setInfo(data);
      tripInfo.classList.add("show");
      searchForm.classList.add("hide");
    })
    .catch((error) => {
      alert(error.message);
    });
}

export { makeRequest };
