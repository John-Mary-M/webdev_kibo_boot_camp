

function displayOriginalSize(image) {
        // Hide the h3 headers
        var h3Headers = document.querySelectorAll("h3");
        for (var i = 0; i < h3Headers.length; i++) {
          h3Headers[i].style.display = "none";
        }
      
        image.style.width = "auto";
        image.style.height = "auto";
        image.style.position = "static";
        image.style.zIndex = "auto";
      
        // Add an event listener to the document to detect clicks outside the image
        document.addEventListener("click", function(event) {
          // Check if the click target is not the image or a descendant of the image
          if (!image.contains(event.target)) {
            // Remove the event listener
            document.removeEventListener("click", arguments.callee);
      
            // Reset any changes made to the image styles
            image.style.width = "";
            image.style.height = "";
            image.style.position = "";
            image.style.zIndex = "";
      
            // Show the h3 headers again
            for (var i = 0; i < h3Headers.length; i++) {
              h3Headers[i].style.display = "block";
            }
          }
        });
      }