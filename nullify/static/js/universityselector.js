   if (window.location.pathname == "/register") {
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
         name: "affiliation",
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

      document.querySelector("form").children[3].insertAdjacentElement("afterEnd", div);
   }