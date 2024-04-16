   if (window.location.pathname == "/teams/join") {
	   
	   // Find the label element with the "for" attribute set to "name"
let labelToRemove = document.querySelector('label[for="name"]');

// Check if the label exists before attempting to remove it
if (labelToRemove) {
    // Remove the label element
    labelToRemove.remove();
}
	   
    // Find the form element
	let form = document.querySelector("form");

	// Find the existing field to replace (e.g., input field with name "name")
	let existingField = form.querySelector('[name="name"]');

	// Remove the existing field from the form
	if (existingField) {
		existingField.parentNode.removeChild(existingField);
	}

	   
      let universities = [
         ["CWI", "College of Western Idaho"],
         ["BSU", "Boise State University"],
		 ["ISU", "Idaho State University"]
      ];

      let div = document.createElement("div");
      div.setAttribute("class", "mb-3");

      let b = document.createElement("b");

      let label = document.createElement("label");
      label.setAttribute("for", "affiliation");
      label.textContent = "University";

      let select = document.createElement("select");
      const select_Attr = {
         class: "form-control custom-select",
         id: "affiliation",
         name: "name",
         required: "",
         type: "text",
         value: "",
      };

      (function () {
         Object.keys(select_Attr).forEach((attr) => {
            select.setAttribute(attr, select_Attr[attr]);
         });
      })();

     (function () {
         universities.forEach(affiliation => {
            let option = document.createElement("option");
            option.setAttribute("value", affiliation[0]);
            option.textContent = affiliation[1];
            select.appendChild(option);
         });
      })();

      let small = document.createElement("small");
      small.setAttribute("class", "form-text text-muted");
      small.textContent = "What university are you with?";

      b.appendChild(label);
      div.appendChild(b);
      div.appendChild(select);
      div.appendChild(small);

      //document.querySelector("form").children[3].insertAdjacentElement("afterEnd", div);
	  
	// Insert the newly created dropdown menu in place of the removed field
	form.insertBefore(div, form.firstElementChild);
   }
