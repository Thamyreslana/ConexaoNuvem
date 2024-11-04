/*function initMap() {
    const placeId = 'ChIJCbYvd6lTzpQRLfbgyICTrTk'; // Substitua pelo Place ID correto
    const service = new google.maps.places.PlacesService(document.createElement('div'));

    service.getDetails({ placeId: placeId, fields: ['reviews'] }, (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            const reviewsDiv = document.getElementById('google-reviews');
            place.reviews.forEach((review) => {
                const reviewElement = document.createElement('div');
                reviewElement.innerHTML = `
                    <p><strong>${review.author_name}</strong> - ${review.rating} estrelas</p>
                    <p>${review.text}</p>
                `;
                reviewsDiv.appendChild(reviewElement);
            });
        } else {
            console.error('Erro ao carregar as avaliações:', status);
        }
    });
} */


fetch('/PHP/API-googlePlaces.php')
    .then(Response => Response.json())
    .then(data => {
        const reviews = data.result.reviews;
        reviews.forEach(review => {
            console.log(review.author_name, review.text, review.rating);
        });
})
.catch(error => console.error('Erro ao carregar as avaliações:', error));