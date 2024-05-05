document.addEventListener("DOMContentLoaded", function() {
    fetch('components/project.json')
        .then(response => response.json())
        .then(data => {
            const headerContainer = document.getElementById('header-container');
            const header = document.createElement("h1");
            header.textContent = "Alphasago Distributors INC";
            headerContainer.appendChild(header);

            const navbar = document.createElement("nav");
            headerContainer.appendChild(navbar);

            const headermenu = data.header;
            headermenu.forEach((item) => {
                const menuItem = document.createElement("a");

                menuItem.textContent = item.name;

                menuItem.href = item.url;

                navbar.appendChild(menuItem);
            });

            const footerContainer = document.getElementById("footer-container");

            const designBar = document.createElement("p");
            footerContainer.appendChild(designBar);

            const designInfo = data.footer;
            designBar.textContent = "Page built by ";

            const designCompany = document.createElement("a");
            designCompany.textContent = designInfo[0].name;
            designCompany.href = designInfo[0].url;
            designCompany.target = "_blank";
            designBar.appendChild(designCompany);
            designBar.innerHTML += " &copy;2024, ";

            const certifyRWD = document.createElement("a");
            certifyRWD.textContent = designInfo[1].name;
            certifyRWD.href = designInfo[1].url;
            certifyRWD.target = "_blank";
            designBar.appendChild(certifyRWD);

            designBar.innerHTML += ", ";

            const certifyJS = document.createElement("a");
            certifyJS.textContent = designInfo[2].name;
            certifyJS.href = designInfo[2].url;
            certifyJS.target = "_blank";
            designBar.appendChild(certifyJS);

            const validation = document.getElementById("validation-buttons")

            validation.innerHTML += `
            <a onclick="validateHTML()" style="text-decoration: none;">
                <img style="border:0;width:88px;height:31px" src="https://mytienhoang.github.io/itis3135/z_archives/html_validation.png" alt="Valid HTML!">
            </a>
            <a onclick="validateCSS()" style="text-decoration: none;">
                <img style="border:0;width:88px;height:31px" src="https://jigsaw.w3.org/css-validator/images/vcss" alt="Valid CSS!">
            </a>
            <a onclick="validateAIM()">
                <img style="border:0;width:88px;height:31px" src="../images/button_validation_wcag.png" alt="logo">
            </a>
            `;
        })
        .catch(error => console.error('Error fetching JSON:', error));
});

function validateHTML() {
    const currentURL = encodeURIComponent(window.location.href);
    window.open(`https://validator.w3.org/nu/?doc=${currentURL}`, "_blank");
}

function validateCSS() {
    const currentURL = encodeURIComponent(window.location.href);
    window.open(`https://jigsaw.w3.org/css-validator/validator?uri=${currentURL}&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en`, "_blank");
}

function validateAIM() {
    const currentURL = encodeURIComponent(window.location.href);
    window.open(`https://wave.webaim.org/report#/${currentURL}`, "_blank");
}