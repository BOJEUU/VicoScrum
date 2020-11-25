let parentRow = document.getElementById("parentRow");

let carousel = document.getElementById("carouselID");

let isnavHomeVisible = false;
let isnavMarvVisible = false;
let isnavHarryVisible = false;
let isnavStarVisible = false;

let lastClickId = navBtn[0].id;

let cartArray = [];

let totalQuantity = 0;
let shippingRate;

let priceOnly = document.getElementById("priceOnly");
let priceShipping = document.getElementById("priceShipping");
let priceWithShip = document.getElementById("priceWithShip");
let priceTaxes = document.getElementById("priceTaxes");
let priceTaxesBis = document.getElementById("priceTaxesBis");
let priceTotal = document.getElementById("priceTotal");
let quantTop = document.getElementById("quantTop");
let shopCart = document.getElementById("shopCart");
let cartRow = document.getElementById("cartRow");
let cartDelivery = document.getElementById("cartDelivery");

// Items Modal
let mod = document.getElementById("exampleModalCenter");
let modTitle = document.getElementById("modTitle");
let modImg = document.getElementById("modImg");
let modTxtExt = document.getElementById("modTxtExt");
let modPrice = document.getElementById("modPrice");
// Alert modal
let modCart = document.getElementById("modCart");
let modCartText = document.getElementById("modCartText");
let modCartCancel = document.getElementById("modCartCancel");
let modCartDelete = document.getElementById("modCartDelete");

let isGenArray = [];
isGenArray["isnavHomeAlreadyGen"] = false;
isGenArray["isnavMarvAlreadyGen"] = false;
isGenArray["isnavHarryAlreadyGen"] = false;
isGenArray["isnavStarAlreadyGen"] = false;

// create element in the cart
let cartItemsParent = document.getElementById("cartItemsParent");

// Generating Home array
if (!checkGen(navBtn[0].id)) {
    let numberCardToShowAtStart = 50;

    while (allArray[navBtn[0].id].length != numberCardToShowAtStart) {
        let randNav = Math.floor(Math.random() * (navBtn.length - 1)) + 1;
        let randIndex = Math.floor(Math.random() * (allArray[navBtn[randNav].id].length - 1)) + 1;

        if (typeof allArray[navBtn[randNav].id][randIndex] !== "undefined") {
            if (allArray[navBtn[0].id].length == 0) {
                allArray[navBtn[0].id].push(allArray[navBtn[randNav].id][randIndex]);
            } else {
                let sameCount = 0;

                for (let i = 0; i < allArray[navBtn[0].id].length; i++) {
                    let tempFirst = allArray[navBtn[0].id][i]["cardTitle"];
                    tempFirst = tempFirst.split(" ").join("");

                    let tempSecond = allArray[navBtn[randNav].id][randIndex]["cardTitle"];
                    tempSecond = tempSecond.split(" ").join("");

                    if (tempFirst === tempSecond) {
                        sameCount++;
                    }
                }

                if (sameCount == 0) {
                    allArray[navBtn[0].id].push(allArray[navBtn[randNav].id][randIndex]);
                } else {
                    sameCount = 0;
                }
            }
        }
    }

    if (allArray[navBtn[0].id].length == numberCardToShowAtStart) {
        cardGenerator(allArray[navBtn[0].id], navBtn[0]);

        lastClickId = navBtn[0].id.toString();

        addEventOnVisible(navBtn[0]);
    }

}

navBtn.forEach(e => {
    e.addEventListener("click", () => {
        console.log("J'ai click sur " + e.id + ", et le checkgen = " + checkGen(e.id) + ", j'etais sur " + lastClickId);

        if (!checkGen(e.id)) {

            if (lastClickId != null) {
                hideAndShow(allArray[lastClickId], allArray[e.id], e);
            }

            cardGenerator(allArray[e.id], e);

            lastClickId = e.id.toString();

            addEventOnVisible(e);
        } else {
            if (lastClickId != null) {
                hideAndShow(allArray[lastClickId], allArray[e.id], e);
            }
            lastClickId = e.id.toString();
        }
    })
})

// Card generator
function cardGenerator(array, e) {
    for (let i = 0; i < array.length; i++) {
        // Creating the main div "column"
        let mainCol = document.createElement("div");
        mainCol.className = "col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 pt-4 pb-4";
        mainCol.id = `col-${e.id}-${i}`;
        parentRow.appendChild(mainCol);
        // Creating the main card structure
        let cardDiv = document.createElement("div");
        cardDiv.className = "card c-card text-center";
        mainCol.appendChild(cardDiv);
        // Creating the image in the card structure
        let cardImg = document.createElement("img");
        cardImg.className = "card-img-top c-card-img";
        cardImg.src = array[i].cardImgSrc;
        cardImg.alt = array[i].cardImgAlt;
        cardDiv.appendChild(cardImg);
        // Creating the card body
        let cardBody = document.createElement("div");
        cardBody.className = "card-body d-flex flex-column align-items-center";
        cardDiv.appendChild(cardBody);
        // Creating the title card
        let cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.textContent = array[i].cardTitle;
        cardBody.appendChild(cardTitle);
        // Creating the text card
        let cardText = document.createElement("p");
        cardText.className = "card-text flex-grow-1";
        cardText.textContent = array[i].cardText;
        cardBody.appendChild(cardText);
        let cardPrice = document.createElement("p");
        cardPrice.className = "card-text m-0";
        let cP = parseFloat(array[i].cardPrice);
        let noPromo = cP + ((20 * cP) / 100);
        cardPrice.innerHTML = `Prix : <span class="c-card-price">${cP.toFixed(2)}€ </span><span class="c-del">${noPromo.toFixed(2)}€</span> (TTC)`;
        cardBody.appendChild(cardPrice);
        let cardBtn = document.createElement("a");
        cardBtn.className = "btn c-red-color text-white w-100 c-card-btn";
        cardBtn.textContent = "Ajouter au panier";
        cardBody.appendChild(cardBtn);

        array[i]["id"] = mainCol.id;
    }
    switchBoolGen(e);
}

// Check if the cards are already generated and return true or false
function checkGen(id) {
    if (isGenArray[`is${id}AlreadyGen`] == false) {
        return false;
    } else {
        return true;
    }
}

// Switch the bool value to true if the card are already generated
function switchBoolGen(e) {
    if (isGenArray[`is${e.id}AlreadyGen`] == false) {
        isGenArray[`is${e.id}AlreadyGen`] = true;
    } else {
        isGenArray[`is${e.id}AlreadyGen`] = false;
    }
}

// Hide the last clicked Div ID and show the actual one
function hideAndShow(last, actual, e) {

    hideLastClicked();

    if (checkGen(e.id)) {
        for (let a = 0; a < actual.length; a++) {
            let divToShow = document.getElementById(actual[a].id);

            if (window.getComputedStyle(divToShow, null).display == "none") {
                divToShow.style.display = "block";
            }
        }
    }
}

function hideLastClicked() {
    if (lastClickId == "shopCart") {
        parentRow.style.display = "flex";
        carousel.style.display = "block";
        cartRow.style.display = "none";
    } else {
        for (let i = 0; i < allArray[lastClickId].length; i++) {
            let divToHide = document.getElementById(allArray[lastClickId][i].id);
            console.log(`trying to hide ${divToHide.style.display}`)
            divToHide.style.display = "none";
        }
    }
}

// adding event when items are visible
function addEventOnVisible(e) {
    for (let a = 0; a < allArray[e.id].length; a++) {
        // add event on image click show the modal
        let temp = document.querySelector("#" + allArray[e.id][a].id + " .c-card-img");
        temp.addEventListener("click", () => {
            showModal(e.id, a);
        })

        // add event on button "add to cart"
        let cartBtn = document.querySelector("#" + allArray[e.id][a].id + " .c-card-btn");
        cartBtn.addEventListener("click", () => {
            cartUpdate(allArray[e.id][a]);
            let toastAdd = document.getElementById("toast1")
            $(toastAdd).toast('show');
            $(toastAdd).toast({
                delay: 1500
            })
        })
    }
}

// Show modal
function showModal(id, index) {
    parentRow.appendChild(mod);
    window.$(mod).modal('show');
    modTitle.innerHTML = allArray[id][index].cardTitle;
    modImg.src = allArray[id][index].cardImgSrc;
    modTxtExt.innerHTML = allArray[id][index].cardTextExt;
    modPrice.innerHTML = allArray[id][index].cardPrice + "€";
}

// Adding event on cart button
shopCart.addEventListener("click", () => {
    parentRow.style.display = "none";
    carousel.style.display = "none";

    if (lastClickId != "shopCart") {
        hideLastClicked();
    }

    cartRow.style.display = "flex";
    lastClickId = shopCart.id;
});

function cartUpdate(e) {
    if (e.id in cartArray == false) {
        cartArray.push(e.id);
        cartArray[e.id] = [];
        cartArray[e.id].push("quantity");
        cartArray[e.id]["quantity"] = 1;
        totalQuantity++;
        cartItemsGenerator(e);

        if (priceOnly.innerHTML.charAt(priceOnly.innerHTML.length - 1) == "€") {
            let aa = parseFloat(e.cardPrice).toFixed(2);
            let fa = aa * 27 / 100;
            let a = aa - fa ;
            let b = parseFloat(priceOnly.innerHTML.slice(0, -1));
            let c = b + a;
            priceOnly.innerHTML = `${c.toFixed(2)}€`;
            console.log("price Updated " + priceOnly.innerHTML);
        }
    } else {
        cartArray[e.id]["quantity"] += 1;
        totalQuantity++;

        let quant;

        if (document.getElementById(`cartQuantity-${e.id}`) != null) {
            let cartSeparatorToRemove = document.getElementById(`cartSeparator-${e.id}`);
            let cartRowToRemove = document.getElementById(`cartRow-${e.id}`);
            cartSeparatorToRemove.style.display = "block";
            cartRowToRemove.style.display = "flex";
        }

        quant = document.getElementById(`cartQuantity-${e.id}`);
        quant.value = cartArray[e.id].quantity;

        if (priceOnly.innerHTML.charAt(priceOnly.innerHTML.length - 1) == "€") {
            let a = parseFloat(e.cardPrice);
            let b = parseFloat(priceOnly.innerHTML.slice(0, -1));
            let c = b + a;
            priceOnly.innerHTML = `${c.toFixed(2)}€`;

            let priceTotalByItems = document.getElementById(`price-${e.id}`);
            let d = a * quant.value;
            priceTotalByItems.innerHTML = `${d.toFixed(2)}€`;
        }
    }

    shippingCost();

    priceTaxesCalcul(e);

    priceWithShipCalcul();

    quantityUpdate();
}

function cartItemsGenerator(e) {
    let cartItemsSeparator = document.createElement("hr");
    cartItemsSeparator.className = "mb-4";
    cartItemsSeparator.id = `cartSeparator-${e.id}`;
    cartItemsParent.appendChild(cartItemsSeparator);

    let cartItemsRow = document.createElement("div");
    cartItemsRow.className = "row mb-4";
    cartItemsRow.id = `cartRow-${e.id}`;
    cartItemsParent.appendChild(cartItemsRow);

    //  First col
    let cartItemsCol = document.createElement("div");
    cartItemsCol.className = "col-md-5 col-lg-3 col-xl-3";
    cartItemsRow.appendChild(cartItemsCol);

    let cartItemsImgZoomDiv = document.createElement("div");
    cartItemsImgZoomDiv.className = "view zoom overlay z-depth-1 rounded mb-3 mb-md-0";
    cartItemsCol.appendChild(cartItemsImgZoomDiv);

    let cartItemsImgZoom = document.createElement("img");
    cartItemsImgZoom.className = "img-fluid w-100";
    cartItemsImgZoom.src = e.cardImgSrc;
    cartItemsImgZoom.alt = "Sample";
    cartItemsImgZoomDiv.appendChild(cartItemsImgZoom);

    let cartItemsImgA = document.createElement("a");
    cartItemsImgA.href = "#!";
    cartItemsImgZoomDiv.appendChild(cartItemsImgA);

    let cartItemsImgDiv = document.createElement("div");
    cartItemsImgDiv.className = "mask waves-effect waves-light";
    cartItemsImgA.appendChild(cartItemsImgDiv);

    let cartItemsImg = document.createElement("img");
    cartItemsImg.className = "img-fluid w-100";
    cartItemsImg.src = e.cardImgSrc;
    cartItemsImg.alt = "Sample";
    cartItemsImgDiv.appendChild(cartItemsImg);

    let cartItemsImgDivB = document.createElement("div");
    cartItemsImgDivB.className = "mask rgba-black-slight waves-effect waves-light";
    cartItemsImgDiv.appendChild(cartItemsImgDivB);
    
    //  Second col
    let cartScdItemsCol = document.createElement("div");
    cartScdItemsCol.className = "col-md-7 col-lg-9 col-xl-9";
    cartItemsRow.appendChild(cartScdItemsCol);

    let cartScdItemsColF = document.createElement("div");
    cartScdItemsCol.appendChild(cartScdItemsColF);

    let cartScdItemsColG = document.createElement("div");
    cartScdItemsColG.className = "d-flex justify-content-between";
    cartScdItemsColF.appendChild(cartScdItemsColG);

    let cartScdItemsColFG = document.createElement("div");
    cartScdItemsColFG.className = "row w-100";
    cartScdItemsColG.appendChild(cartScdItemsColFG);

    let cartScdItemsColFGCol = document.createElement("div");
    cartScdItemsColFGCol.className = "col-12 col-sm-8 col-md-9 p-0";
    cartScdItemsColFG.appendChild(cartScdItemsColFGCol);

    let cartScdItemsColFGTitle = document.createElement("h5");
    cartScdItemsColFGTitle.innerHTML = e.cardTitle;
    cartScdItemsColFGCol.appendChild(cartScdItemsColFGTitle);

    let cartScdItemsColFGSP = document.createElement("p");
    cartScdItemsColFGSP.className = "mb-2 text-muted text-uppercase small";
    cartScdItemsColFGSP.innerHTML = e.cardTextExt;
    cartScdItemsColFGCol.appendChild(cartScdItemsColFGSP);

    let cartScdItemsColH = document.createElement("div");
    cartScdItemsColH.className = "col-12 col-sm-4 col-md-3 d-flex flex-column p-0 align-items-end";
    cartScdItemsColFG.appendChild(cartScdItemsColH);

    let cartScdItemsColHA = document.createElement("div");
    cartScdItemsColHA.className = "def-number-input number-input safari_only mb-0";
    cartScdItemsColH.appendChild(cartScdItemsColHA);

    let cartScdItemsColHABtn = document.createElement("button");
    cartScdItemsColHABtn.className = "minus";
    cartScdItemsColHABtn.id = `cartMinus-${e.id}`;
    cartScdItemsColHABtn.innerHTML = "<i class='fas fa-minus'></i>";
    cartScdItemsColHA.appendChild(cartScdItemsColHABtn);

    let cartScdItemsColHAInput = document.createElement("input");
    cartScdItemsColHAInput.className = "quantity c-input";
    cartScdItemsColHAInput.id = `cartQuantity-${e.id}`;
    cartScdItemsColHAInput.min = "0";
    cartScdItemsColHAInput.name = "quantity";
    cartScdItemsColHAInput.type = "number";
    cartScdItemsColHAInput.value = cartArray[e.id].quantity;
    cartScdItemsColHA.appendChild(cartScdItemsColHAInput);

    let cartScdItemsColHABtnB = document.createElement("button");
    cartScdItemsColHABtnB.className = "plus";
    cartScdItemsColHABtnB.id = `cartPlus-${e.id}`;
    cartScdItemsColHABtnB.innerHTML = "<i class='fas fa-plus'></i>";
    cartScdItemsColHA.appendChild(cartScdItemsColHABtnB);

    let cartScdItemsColI = document.createElement("small");
    cartScdItemsColI.id = "passwordHelpBlock";
    cartScdItemsColI.className = "form-text text-muted text-center";
    cartScdItemsColI.innerHTML = `Prix unitaire: ${e.cardPrice}€`;
    cartScdItemsColH.appendChild(cartScdItemsColI);

    let cartScdItemsColJ = document.createElement("div");
    cartScdItemsColJ.className = "d-flex justify-content-between align-items-center";
    cartScdItemsColF.appendChild(cartScdItemsColJ);

    let cartScdItemsColK = document.createElement("div");
    cartScdItemsColJ.appendChild(cartScdItemsColK);

    let cartScdItemsColL = document.createElement("a");
    cartScdItemsColL.href = "#!";
    cartScdItemsColL.type = "button";
    cartScdItemsColL.id = `cartDel-${e.id}`;
    cartScdItemsColL.className = "card-link-secondary small text-uppercase mr-3 c-red-text-color";
    cartScdItemsColL.innerHTML = `<i class="fas fa-trash-alt mr-1"></i> Retirer l'objet du panier`;
    cartScdItemsColK.appendChild(cartScdItemsColL);

    let cartScdItemsColN = document.createElement("p");
    cartScdItemsColN.className = "mb-0";
    cartScdItemsColN.innerHTML = `<span id="price-${e.id}">${e.cardPrice}€</span>`;
    cartScdItemsColJ.appendChild(cartScdItemsColN);

    addEventOnCart(e);
}

function addEventOnCart(e) {
    let cartMinusBtn = document.querySelector(`#cartMinus-${e.id}`);
    let cartPlusBtn = document.querySelector(`#cartPlus-${e.id}`);
    let cartDelBtn = document.querySelector(`#cartDel-${e.id}`);

    if (cartMinusBtn != null) {
        cartMinusBtn.removeEventListener("click", () => {
            minusFuntion(e);
        });

        cartMinusBtn.addEventListener("click", () => {
            minusFuntion(e);
        });
    }
    if (cartPlusBtn != null) {
        cartPlusBtn.removeEventListener("click", () => {
            plusFunction(e);
        });

        cartPlusBtn.addEventListener("click", () => {
            plusFunction(e);
        });
    }
    if (cartDelBtn != null) {
        cartDelBtn.removeEventListener("click", () => {
            showAlertModal(e)
        });

        cartDelBtn.addEventListener("click", () => {
            showAlertModal(e)
        });
    }
}

function minusFuntion(e) {
    let quant = document.getElementById(`cartQuantity-${e.id}`);

    if (cartArray[e.id]["quantity"] != 0) {
        cartArray[e.id]["quantity"] -= 1;
        totalQuantity--;  
        quant.value = cartArray[e.id].quantity;

        if (priceOnly.innerHTML.charAt(priceOnly.innerHTML.length - 1) == "€") {
            let aa = parseFloat(e.cardPrice).toFixed(2);
            let fa = aa * 27 / 100;
            let a = aa - fa ;
            let b = parseFloat(priceOnly.innerHTML.slice(0, -1));
            let c = b - a;
            priceOnly.innerHTML = `${c.toFixed(2)}€`;

            let priceTotalByItems = document.getElementById(`price-${e.id}`);
            let d = aa * quant.value;
            priceTotalByItems.innerHTML = `${d.toFixed(2)}€`;
        }

        shippingCost();

        priceTaxesCalcul(e);

        
        if (priceWithShip.innerHTML.charAt(priceWithShip.innerHTML.length - 1) == "€") {
            let f = parseFloat(priceWithShip.innerHTML.slice(0, -1)) - parseFloat(e.cardPrice).toFixed(2);
            priceWithShip.innerHTML = `${f.toFixed(2)}€`;
        }

        priceTotalCalcul();

        quantityUpdate();
    }

    if (cartArray[e.id]["quantity"] == 0) {
        showAlertModal(e);
    }
}

function plusFunction(e) {
    let quant = document.getElementById(`cartQuantity-${e.id}`);
    cartArray[e.id]["quantity"] += 1;
    totalQuantity++;
    quant.value = cartArray[e.id].quantity;

    if (priceOnly.innerHTML.charAt(priceOnly.innerHTML.length - 1) == "€") {
        let aa = parseFloat(e.cardPrice).toFixed(2);
        let fa = aa * 27 / 100;
        let a = aa - fa ;
        let b = parseFloat(priceOnly.innerHTML.slice(0, -1));
        let c = b + a;
        priceOnly.innerHTML = `${c.toFixed(2)}€`;
        let priceTotalByItems = document.getElementById(`price-${e.id}`);
        let d = aa * quant.value;
        priceTotalByItems.innerHTML = `${d.toFixed(2)}€`;
    }

    shippingCost();

    priceTaxesCalcul(e);

    priceWithShipCalcul();

    quantityUpdate();
}

function shippingCost() {
    if (totalQuantity == 0) {
        priceShipping.innerHTML = `0€`;
    } else if (totalQuantity >= 1 && totalQuantity < 3) {
        shippingRate = 2.11;
        let tempShip = shippingRate * 3;
        priceShipping.innerHTML = `${tempShip.toFixed(2)}€`;
    } else if (totalQuantity >= 3 && totalQuantity < 6) {
        shippingRate = 1.98;
        let tempShip = shippingRate * 6;
        priceShipping.innerHTML = `${tempShip.toFixed(2)}€`;
    } else if (totalQuantity >= 6 && totalQuantity < 15) {
        shippingRate = 1.86;
        let tempShip = shippingRate * 15;
        priceShipping.innerHTML = `${tempShip.toFixed(2)}€`;
    } else {
        shippingRate = 1.78;
        let tempShip = shippingRate * totalQuantity;
        priceShipping.innerHTML = `${tempShip.toFixed(2)}€`;
    }
}

function priceTaxesCalcul(e) { 
    if (priceTaxes.innerHTML.charAt(priceTaxes.innerHTML.length - 1) == "€") {
        let aa = parseFloat(e.cardPrice).toFixed(2);
        let fa = (aa * 20 / 100) * cartArray[e.id]["quantity"];

        priceTaxes.innerHTML = `${fa.toFixed(2)}€`;
    }

    if (priceTaxesBis.innerHTML.charAt(priceTaxesBis.innerHTML.length - 1) == "€") {
        let aa = parseFloat(e.cardPrice).toFixed(2);
        let fa = (aa * 7 / 100) * cartArray[e.id]["quantity"];

        priceTaxesBis.innerHTML = `${fa.toFixed(2)}€`;
    }
}

function priceWithShipCalcul() {
    if (priceWithShip.innerHTML.charAt(priceWithShip.innerHTML.length - 1) == "€") {
        let p1 = parseFloat(priceTaxes.innerHTML.slice(0, -1));
        let p2 = parseFloat(priceTaxesBis.innerHTML.slice(0, -1));
        let f = parseFloat(priceOnly.innerHTML.slice(0, -1)) + (p1 + p2);;
        priceWithShip.innerHTML = `${f.toFixed(2)}€`;
    }

    priceTotalCalcul();
}

function priceTotalCalcul() {
    if (priceTotal.innerHTML.charAt(priceTotal.innerHTML.length - 1) == "€") {
        let f = parseFloat(priceWithShip.innerHTML.slice(0, -1)) + parseFloat(priceShipping.innerHTML.slice(0, -1));
        priceTotal.innerHTML = `${f.toFixed(2)}€`;
    }
}

function quantityUpdate() {
    if (totalQuantity == 0) {
        quantTop.innerHTML = `vide`;
        cartDelivery.style.display = "none";
    } else if (totalQuantity == 1) {
        quantTop.innerHTML = `${totalQuantity} objet`;
        cartDelivery.style.display = "block";
    } else {
        quantTop.innerHTML = `${totalQuantity} objets`;
        cartDelivery.style.display = "block";
    }
}

function showAlertModal(e) {
    window.$(modCart).modal('show');
    modCartText.innerHTML = "Êtes-vous sûr de vouloir supprimer cet article de votre panier ?";

    modCartCancel.onclick = () => {
        if (cartArray[e.id]["quantity"] == 0) {
            plusFunction(e);
        }
    }

    modCartDelete.onclick = () => {
        deleteCartElement(e);
    }
}

function deleteCartElement(e) {
    let cartSeparatorToRemove = document.getElementById(`cartSeparator-${e.id}`);
    let cartRowToRemove = document.getElementById(`cartRow-${e.id}`);

    resetPriceQuantity(e);

    cartSeparatorToRemove.style.display = "none";
    cartRowToRemove.style.display = "none";
}

function resetPriceQuantity(e) {
    quant = document.getElementById(`cartQuantity-${e.id}`);

    if (priceOnly.innerHTML.charAt(priceOnly.innerHTML.length - 1) == "€") {
        let aa = parseFloat(e.cardPrice).toFixed(2);
        let fa = aa * 27 / 100;
        let a = aa - fa ;
        let b = parseFloat(priceOnly.innerHTML.slice(0, -1));
        let c = a * cartArray[e.id]["quantity"];
        let cc = b - c;
        priceOnly.innerHTML = `${cc.toFixed(2)}€`;

        let priceTotalByItems = document.getElementById(`price-${e.id}`);
        let d = aa * quant.value;
        priceTotalByItems.innerHTML = `${d.toFixed(2)}€`;
    }

    totalQuantity -= cartArray[e.id]["quantity"];

    cartArray[e.id]["quantity"] = 0;

    shippingCost();

    priceTaxesCalcul(e);

    priceWithShipCalcul();

    quantityUpdate();
}