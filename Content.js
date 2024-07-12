//let bobRossImages = [
//  "https://pbs.twimg.com/media/Ewhn4wgU8AwH3Nd.jpg"
//];
let rickandroll =[
  "https://i.imgflip.com/56bhvt.gif"
  ];

// Function to check if an element is in the viewport
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to lazy load images
function lazyLoadImages() {
  const imgs = document.getElementsByTagName("img");

  for (image of imgs) {
      if (isElementInViewport(image)) {
          const index = Math.floor(Math.random() * rickandroll.length);
          image.src = rickandroll[index];
      }
  }
}

// Add event listener for scroll to lazy load images
window.addEventListener("scroll", lazyLoadImages);

// Lazy load images on initial page load
lazyLoadImages();
