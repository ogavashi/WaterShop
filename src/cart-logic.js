const cartModule = (() => {
  let cart = [];
  const getitem = (index) => cart[index];
  const setItem = (bottle) => {
    cart.push(bottle);
    saveLocal();
    document.querySelector(".cart-conter").innerText = cartModule.getLength();
    window.getComputedStyle(document.querySelector(".cart-conter")).opacity;
    document.querySelector(".cart-conter").style.opacity = 1;
  };
  const getLength = () => cart.length;
  const removeElement = (index) => {
    cart.splice(index, 1);
    saveLocal();
    if (getLength() == 0) document.querySelector(".cart-conter").innerText = "";
    else document.querySelector(".cart-conter").innerText = cartModule.getLength();
    window.getComputedStyle(document.querySelector(".cart-conter")).opacity;
    document.querySelector(".cart-conter").style.opacity = 1;
  };
  const totalSum = () => {
    let sum = 0;
    for (let i = 0; i < getLength(); i++) {
      sum += getitem(i).price;
    }
    return sum;
  };
  const saveLocal = () => {
    localStorage.setItem("bottle", JSON.stringify(cart));
  };
  const getLocal = () => {
    cart = JSON.parse(localStorage.getItem("bottle") || "[]");
    console.log(cart);
    if (getLength() == 0) document.querySelector(".cart-conter").innerText = "";
    else document.querySelector(".cart-conter").innerText = cartModule.getLength();
    window.getComputedStyle(document.querySelector(".cart-conter")).opacity;
    document.querySelector(".cart-conter").style.opacity = 1;
  };
  const emptyCart = () => {
    cart = [];
    saveLocal();
    getLocal();
  };
  return {
    getitem,
    setItem,
    getLength,
    removeElement,
    totalSum,
    saveLocal,
    getLocal,
    emptyCart,
  };
})();

export default cartModule;
