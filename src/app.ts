const buttonElement = document.querySelector("button");

const calculatePrice = (originalPrice: number, hasDiscrount: boolean) => {
    return hasDiscrount ? originalPrice * 0.8: originalPrice;
}

buttonElement.addEventListener("click", () => {
    const originalPrice: number = 50;
    
    const hasDiscrount: boolean = new URLSearchParams(window.location.search).get("discount") === "true";
    console.log(hasDiscrount);
    console.log(calculatePrice(originalPrice, hasDiscrount));
})