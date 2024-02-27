document.addEventListener("DOMContentLoaded", function () {
  const predefinedCheckboxes = document.querySelectorAll(".predefined");
  const headerCheckboxes = document.querySelectorAll(".file_header");
  const selectedList = document.getElementById("selectedList");
  const predefinedFilters = document.getElementById("predefinedFilters");
  const headerFilters = document.getElementById("headerFilters");
  const submitButton = document.getElementById("submitButton");

  // Function to update the selected filters list
  function updateSelectedFilters() {
    // Clear previous selections
    predefinedFilters.innerHTML = "";
    headerFilters.innerHTML = "";

    // Check predefined filters
    let selectedPredefinedFiltersCount = 0;
    predefinedCheckboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        selectedPredefinedFiltersCount++;
        const filterItem = document.createElement("li");
        filterItem.classList.add("list-group-item");
        filterItem.textContent = checkbox.value;
        predefinedFilters.appendChild(filterItem);
      }
    });

    // Check header filters
    let selectedHeaderFiltersCount = 0;
    headerCheckboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        selectedHeaderFiltersCount++;
        const filterItem = document.createElement("li");
        filterItem.classList.add("list-group-item");
        filterItem.textContent = checkbox.value;
        headerFilters.appendChild(filterItem);
      }
    });

    // Show the selected list if at least one checkbox is checked
    if (selectedPredefinedFiltersCount > 0 || selectedHeaderFiltersCount > 0) {
      selectedList.classList.remove("d-none");
    } else {
      selectedList.classList.add("d-none");
    }

    // Enable/disable submit button based on selected filters count
    submitButton.disabled =
      selectedPredefinedFiltersCount === 0 || selectedHeaderFiltersCount === 0;
  }

  // Event listeners for checkbox changes
  predefinedCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", updateSelectedFilters);
  });

  headerCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", updateSelectedFilters);
  });
});


