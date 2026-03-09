const debounce = (func, wait) => {
  let timeoutId = null; // This variable is enclosed in the function's scope
  return (...args) => {
    // Clear the previous timer if the function is called again
    window.clearTimeout(timeoutId);
    // Set a new timer to execute the function after the 'wait' delay
    timeoutId = window.setTimeout(() => {
      func(...args);
    }, wait);
  };
};


const handleSearchInput = debounce((query) => {
  console.log("Making API call with query:", query);
  // Perform your API call or expensive operation here
}, 300); // 300ms delay

document.getElementById("searchInput").addEventListener("input", (event) => {
  handleSearchInput(event.target.value);
});


function throttle(sendscrolldata , delay) {
  let timeoutId = null; // This variable is enclosed in the function's scope
  return (...args) => {
    // Clear the previous timer if the function is called again
    window.clearTimeout(timeoutId);
    // Set a new timer to execute the function after the 'wait' delay
    timeoutId = window.setTimeout(() => {
      sendscrolldata(...args);
    }, delay);
  };
}

const handleScroll = throttle((args)=>{ console.log("sending scroll for " + args) } , 300);
window.addEventListener("scroll" , ()=>{
  handleScroll(window.scrollY);
});