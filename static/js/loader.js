      document.addEventListener("DOMContentLoaded", function () {
        var loader = document.getElementById("loader");
        const filterForm = document.getElementById("filterForm");

        var isLoaderVisible = false;

        // Show the loader
        function showLoader() {
          loader.style.display = "flex";
          isLoaderVisible = true;
        }

        // Hide the loader
        function hideLoader() {
          loader.style.display = "none";
          isLoaderVisible = false;
        }

        // Attach event listeners to all links
        var links = document.querySelectorAll("a");
        links.forEach(function (link) {
          link.addEventListener("click", function () {
            showLoader();
            setTimeout(function () {
              hideLoader();
            }, 100); // Adjust the timeout value as needed
          });
        });

        // Attach event listener to window load
        window.addEventListener("load", function () {
          hideLoader();
        });

        // Attach event listener to hash change
        window.addEventListener("hashchange", function () {
          if (!isLoaderVisible) {
            hideLoader();
          }
        });

        // Attach event listener to form submission
        var forms = document.querySelectorAll("form");
        forms.forEach(function (form) {
          form.addEventListener("submit", function () {
            showLoader();
            setTimeout(function () {
              hideLoader();
            }, 5000);
          });
        });
      });
