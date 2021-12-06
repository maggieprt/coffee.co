function changeFilter(event) {
    var filterValue = event.srcElement.value;
  
    var products = document.getElementsByClassName("product");
  
    if (filterValue == "All") {
      for (let index = 0; index < products.length; index++) {
        var element = products[index];
        element.classList.remove("d-none");
      }
    } else {
      for (let index = 0; index < products.length; index++) {
        var element = products[index];
        element.classList.add("d-none");
      }
  
      if (filterValue == "light-roast") {
        var lightRoast = document.getElementsByClassName("light-roast");
        for (let index = 0; index < lightRoast.length; index++) {
          var element = lightRoast[index];
          element.classList.remove("d-none");
        }
      } else if (filterValue == "medium-roast") {
        var mediumRoast = document.getElementsByClassName("medium-roast");
        for (let index = 0; index < mediumRoast.length; index++) {
          var element = mediumRoast[index];
          element.classList.remove("d-none");
        }
      } else if (filterValue == "dark-roast") {
        var darkRoast = document.getElementsByClassName("dark-roast");
        for (let index = 0; index < darkRoast.length; index++) {
          var element = darkRoast[index];
          element.classList.remove("d-none");
        }
      } else if (filterValue == "decaf") {
        var decaf = document.getElementsByClassName("decaf");
        for (let index = 0; index < decaf.length; index++) {
          var element = decaf[index];
          element.classList.remove("d-none");
        }
      }
    }
  }
  