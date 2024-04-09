// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Fetch JSON data
    fetch("components/mainmenu.json")
        .then(response => response.json())
        .then(data => {
            const menuContainer = document.getElementById("menu-container");

            // Creating the header
            const header = document.createElement("h1");
            header.textContent = "Erick Sanchez's Egotistical Shark ☯ ITIS-3135";
            menuContainer.appendChild(header);

            // Create the nav bar
            const mainNavbar = document.createElement("nav");
            menuContainer.appendChild(mainNavbar);

            // Going through the main nav
            const firstMenu = data.mainMenu;
            firstMenu.forEach((item, index) => {
                // Create a new <a> element for each menu item
                const menuItem = document.createElement("a");

                // Add a class to the menu item for styling
                menuItem.classList.add("menu-item");

                // Set the text content of the menu item to the 'name' property from the JSON data
                menuItem.textContent = item.name;

                // Set the 'href' attribute of the menu item to the 'url' property from the JSON data
                menuItem.href = item.url;

                // Append the newly created menu item to the menu container
                mainNavbar.appendChild(menuItem);

                // Add a separator after each menu item except for the last one
                if (index < firstMenu.length - 1) {
                    const separator = document.createElement("span");
                    separator.textContent = "\u00A0 ☯ \u00A0" // Customize the separator text as needed
                    mainNavbar.appendChild(separator);
                }
            });
            
            // Create the nav bar
            const secondNavbar = document.createElement("nav");
            menuContainer.appendChild(secondNavbar);

            // Going through the second nav
            const secondMenu = data.secondMenu;
            secondMenu.forEach((item, index) => {
                // Create a new <a> element for each menu item
                const menuItem = document.createElement("a");

                // Add a class to the menu item for styling
                menuItem.classList.add("menu-item");

                // Set the text content of the menu item to the 'name' property from the JSON data
                menuItem.textContent = item.name;

                // Set the 'href' attribute of the menu item to the 'url' property from the JSON data
                menuItem.href = item.url;

                // Set the 'target' to "_blank" so it opens on another tab
                menuItem.target = "_blank";

                // Append the newly created menu item to the menu container
                secondNavbar.appendChild(menuItem);

                // Add a separator after each menu item except for the last one
                if (index < secondMenu.length - 1) {
                    const separator = document.createElement("span");
                    separator.textContent = "\u00A0 ☯ \u00A0" // Customize the separator text as needed
                    secondNavbar.appendChild(separator);
                }
            });

            const footerContainer = document.getElementById("footer");

            // Create the nav bar
            const footerNavbar = document.createElement("nav");
            footerContainer.appendChild(footerNavbar);

            // Going through the footer nav
            const footerMenu = data.footerMenu;
            footerMenu.forEach((item, index) => {
                // Create a new <a> element for each menu item
                const menuItem = document.createElement("a");

                // Add a class to the menu item for styling
                menuItem.classList.add("menu-item");

                // Set the text content of the menu item to the 'name' property from the JSON data
                menuItem.textContent = item.name;

                // Set the 'href' attribute of the menu item to the 'url' property from the JSON data
                menuItem.href = item.url;

                // Set the 'target' to "_blank" so it opens on another tab
                menuItem.target = "_blank";

                // Append the newly created menu item to the menu container
                footerNavbar.appendChild(menuItem);

                // Add a separator after each menu item except for the last one
                if (index < footerMenu.length - 1) {
                    const separator = document.createElement("span");
                    separator.textContent = "\u00A0 ☯ \u00A0" // Customize the separator text as needed
                    footerNavbar.appendChild(separator);
                }
            });

            // Create a p element
            const designBar = document.createElement("p");
            footerContainer.appendChild(designBar);

            // Adding content to the p element
            const designInfo = data.design;
            designBar.textContent = "Page built by ";

            // Creating a new <a> element for design page
            const designCompany = document.createElement("a");
            designCompany.textContent = designInfo[0].name;
            designCompany.href = designInfo[0].url;
            designCompany.target = "_blank";
            designBar.appendChild(designCompany);
            designBar.innerHTML += " &copy;2024, ";

            // Creating a new <a> element for RWD certification
            const certifyRWD = document.createElement("a")
            certifyRWD.textContent = designInfo[1].name;
            certifyRWD.href = designInfo[1].url;
            certifyRWD.target = "_blank";
            designBar.appendChild(certifyRWD);
        })
        .catch(error => console.error("Error fetching menu:", error));
});
// Function to validate HTML
function validateHTML() {
    const currentURL = encodeURIComponent(window.location.href);
    window.open(`https://validator.w3.org/nu/?doc=${currentURL}`, "_blank");
}

// Function to validate CSS
function validateCSS() {
    const currentURL = encodeURIComponent(window.location.href);
    window.open(`https://jigsaw.w3.org/css-validator/validator?uri=${currentURL}&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en`, "_blank");
}

// Function to validate AIM (Accessibility, SEO, and Mobile-friendliness)
function validateAIM() {
    // Replace the URL with the tool you prefer for accessibility, SEO, and mobile-friendliness validation
    window.open("https://wave.webaim.org/report#/", "_blank");
}