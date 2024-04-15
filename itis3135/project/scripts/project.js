fetch('components/images.json')
            .then(response => response.json())
            .then(data => {
                // Display additional products using the fetched JSON data
                const produce = document.getElementById('products');
                data.produceImages.forEach(image => {
                    const productDiv = document.createElement('div');
                    productDiv.classList.add('product-images');
                    productDiv.innerHTML = `
                        <img src="${image.src}" alt="${image.alt}">
                        <p>${image.alt}</p>
                    `;
                    produce.appendChild(productDiv);
                });
            })

            .catch(error => console.error('Error fetching JSON:', error));