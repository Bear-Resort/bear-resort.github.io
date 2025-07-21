---
title: "Real Estate Map"
---

<style>
    body {
        display: flex;
        justify-content: center; /* Center horizontally */
        align-items: center; /* Center vertically */
    }

    .grid {
        position: relative;
        width: 600px;
        height: 500px;
        display: grid;
        grid-template-columns: repeat(12, 1fr); /* Define grid columns */
        grid-template-rows: repeat(10, 1fr); /* Define grid rows */
    }

    .image {
        position: absolute; /* Absolute positioning within the grid */
        display: block; /* Remove bottom spacing */
    }
</style>
<div class="grid" id="grid"></div>

<script>
    // Function to place an image
    function placeImage(src, a, b, c, d, e) {
    const imgElement = document.createElement('img');
    imgElement.src = src;
    imgElement.alt = "Image";
    imgElement.classList.add("image");

    // Calculate position and size
    const left = a * 50; // Position in pixels
    const top = b * 50; // Position in pixels
    const width = c * 50; // Width in pixels
    const height = d * 50; // Height in pixels

    // Set position and size before rotation
    imgElement.style.left = `${left}px`;
    imgElement.style.top = `${top}px`;
    imgElement.style.width = `${width}px`;
    imgElement.style.height = `${height}px`;

    // Determine the rotation angle in degrees
    let rotate = e * 90; // e can be 1, 2, or 3 for 90, 180, or 270 degrees

    // Set rotation and adjust position based on the angle
    imgElement.style.transform = `rotate(${rotate}deg)`; // Apply rotation
    imgElement.style.transformOrigin = "0 0"; // Fix the top-left corner as the origin for rotation

    // Adjust offsets based on the rotation
    if (rotate === 90) {
        imgElement.style.left = `${left + height}px`;
    } else if (rotate === 180) {
        imgElement.style.left = `${left + width}px`;
        imgElement.style.top = `${top + height}px`;
    } else if (rotate === 270) {
        imgElement.style.top = `${top + width}px`;
    }

    // Append the image to the grid
    document.getElementById('grid').appendChild(imgElement);
}

    for (let i = 0; i <= 12; i++) {
        for (let j = 0; j <= 10; j++) {
            placeImage('fig/empty.png',i,j,1,1,0);
        }
    }

    for (let i = 3; i <= 9; i++) {
        placeImage('fig/road.png',i,1,1,1,0);
    }

    for (let i = 3; i <= 9; i++) {
        placeImage('fig/road.png',i,9,1,1,0);
    }

    for (let i = 2; i <= 8; i++) {
        placeImage('fig/road.png',2,i,1,1,1);
    }

    for (let i = 2; i <= 10; i++) {
        placeImage('fig/road.png',10,i,1,1,1);
    }

    for (let i = 0; i <= 12; i++) {
        placeImage('fig/road.png',i,5,1,1,0);
    }

    placeImage('fig/xing.png',2,5,1,1,0);
    placeImage('fig/xing.png',10,5,1,1,0);

    placeImage('fig/turn.png',2,1,1,1,3);
    placeImage('fig/turn.png',10,1,1,1,0);

    placeImage('fig/tway.png',2,9,1,1,2);

    placeImage('fig/hospital.png',0,8,3,2,3);

    placeImage('fig/xing.png',10,9,1,1,0);

    placeImage('fig/xing.png',11,9,1,1,2);

    placeImage('fig/restaurant.png',11,8,2,1,0);

    placeImage('fig/gym.png',11,10,1,1,2);

    placeImage('fig/fountain.png',12,9,1,1,1);

    // Place images using the new function
    // placeImage('fig/restaurant.png', 1, 0, 2, 1,0); // Position (1,0), Span (2,1)
    placeImage('fig/plaza.png', 3, 6, 2, 2,3);      // Position (1,1), Span (2,2)
    placeImage('fig/fountain.png', 5, 6, 1, 1,0);      // Position (1,1), Span (2,2)
    placeImage('fig/tway.png', 10, 2, 1, 1, 3);
    placeImage('fig/school.png', 11, 1, 3, 2,1);     // Position (1,3), Span (3,2)

    placeImage('fig/xing.png',6,5,1,1,0);
    placeImage('fig/road.png',6,4,1,1,1);
    placeImage('fig/road.png',6,6,1,1,1);
    placeImage('fig/turn.png',6,7,1,1,1);
    placeImage('fig/xing.png',5,7,1,1,1);
    placeImage('fig/restaurant.png',4,8,2,1,2);

    placeImage('fig/school.png', 7, 6, 3, 2,3);     // Position (1,3), Span (3,2)

    placeImage('fig/tway.png', 10, 7, 1, 1,1);

    placeImage('fig/tway.png', 9, 7, 1, 1,2);

    placeImage('fig/gym.png', 9, 6, 1, 1,0);

    placeImage('fig/plaza.png',6,2,2,2,0);


    for (let i = 0; i <= 1; i++) {
        for (let j = 0; j <= 4; j++) {
            placeImage('fig/sale.png',i,j,1,1,0);
        }
    }

    for (let i = 3; i <= 5; i++) {
        for (let j = 2; j <= 4; j++) {
            placeImage('fig/sale.png',i,j,1,1,0);
        }
    }
</script>