// Create the observer like the examples above
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('card-scroll-animation');
        return;
      }
  
      // entry.target.classList.remove('card-scroll-animation');
    });
  });
  
  // Get multiple elements instead of a single one using "querySelectorAll"
  const fade_in = document.querySelectorAll('.card-scroll');
  
  // Loop over the elements and add each one to the observer
  fade_in.forEach((element) => observer.observe(element));