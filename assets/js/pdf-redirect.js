document.addEventListener("DOMContentLoaded", function () {
  const pdfLinks = document.querySelectorAll('a[href$=".pdf"]');  // Select all PDF links

  // Attach click event listener to each PDF link
  pdfLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default link behavior
      const pdfUrl = link.getAttribute('href'); // Get the href of the PDF link

      // Open the PDF renderer in a new tab with the PDF URL as a query parameter
      window.open('/pdf-renderer.html?pdf=' + encodeURIComponent(pdfUrl), '_blank');
    });
  });
});