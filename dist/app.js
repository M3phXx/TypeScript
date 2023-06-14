const buttonElement = document.querySelector("button");
const calculatePrice = (originalPrice, hasDiscrount) => {
    return hasDiscrount ? originalPrice * 0.8 : originalPrice;
};
buttonElement.addEventListener("click", () => {
    const originalPrice = 50;
    const hasDiscrount = new URLSearchParams(window.location.search).get("discount") === "true";
    console.log(hasDiscrount);
    console.log(calculatePrice(originalPrice, hasDiscrount));
});
