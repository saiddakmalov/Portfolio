
const product = {
    plainBurger: {
        name: 'Gamburger',
        price: 10000,
        kcall: 400,
        amount: 0,
        get Summ() {
            return this.price * this.amount;
        },
        get Kcall() {
            return this.kcall * this.amount;
        }
    },
    freshBurger: {
        name: 'Gamburger FRESH',
        price: 20500,
        kcall: 500,
        amount: 0,
        get Summ() {
            return this.price * this.amount;
        },
        get Kcall() {
            return this.kcall * this.amount;
        }
    },
    freshCombo: {
        name: 'FRESH COMBO',
        price: 31900,
        kcall: 700,
        amount: 0,
        get Summ() {
            return this.price * this.amount;
        },
        get Kcall() {
            return this.kcall * this.amount;
        }
    }
}

const btnPlusOrMinus = document.querySelectorAll('.main__product-btn'),
    addCart = document.querySelector('.addCart'),
    receipt = document.querySelector('.receipt'),
    receiptOut = receipt.querySelector('.receipt__window-out'),
    receiptWindow = receipt.querySelector('.receipt__window'),
    btnReceipt = receipt.querySelector('.receipt__window-btn');

for (let i = 0; i < btnPlusOrMinus.length; i++) {
    btnPlusOrMinus[i].addEventListener('click', function () {
        plusOrMinus(this);
    })
}

function plusOrMinus(element) {
    const parent = element.closest('.main__product'),
        parentId = parent.getAttribute('id'),
        out = parent.querySelector('.main__product-num'),
        price = parent.querySelector('.main__product-price span'),
        kcall = parent.querySelector('.main__product-kcall span'),
        elemntData = element.getAttribute('data-symbol');

    if (elemntData == '+' && product[parentId].amount < 10) {
        product[parentId].amount++;
    } else if (elemntData == '-' && product[parentId].amount > 0) {
        product[parentId].amount--;
    }

    out.innerHTML = product[parentId].amount;
    price.innerHTML = product[parentId].Summ;
    kcall.innerHTML = product[parentId].Kcall;
}


// *********************************************

let arrayProduct = [],
    totalName = '',
    totalPrice = 0,
    totalKcall = 0;

addCart.addEventListener('click', function () {
    for (const key in product) {
        const po = product[key];
        if (po.amount > 0) {
            arrayProduct.push(po);
        }
        po.price = po.Summ;
        po.kcall = po.Kcall;
    }

    for (let i = 0; i < arrayProduct.length; i++) {
        const el = arrayProduct[i];
        totalPrice += el.price;
        totalKcall += el.kcall; 
        totalName += '\n' + el.name + '\n';
    }
    receiptOut.innerHTML = `Purchased: \n ${totalName} \n Calory ${totalKcall} \n Total price ${totalPrice} sum`;
    receipt.style.display = 'flex';
    setTimeout(function () {
        receipt.style.opacity = '1';
    }, 100);
    setTimeout(function () {
        receiptWindow.style.top = '0';
    }, 200);
    document.body.style.overflow = 'hidden';
    const outNum = document.querySelectorAll('.main__product-num');
    for (let i = 0; i < outNum.length; i++) {
        outNum[i].innerHTML = 0
    }
    const outPrice = document.querySelectorAll('.main__product-price span');
    for (let i = 0; i < outPrice.length; i++) {
        outPrice[i].innerHTML = 0
    }
});

btnReceipt.addEventListener('click', function () {
    location.reload()
})



// ******************************************* 

// Uy ishi 1

const lvl = document.querySelector('.header__timer-extra');
let speed = 20;
function LVL (i = 0) {
    lvl.innerHTML = i
    i++
    
    if(i > 50 && i < 75) {
        speed = 50
    }else if (i > 74 && i < 85) {
        speed = 80
    }else if(i > 84 && i < 95) {
        speed = 120
    }else if(i > 94) {
        speed = 170
    }

    if(i <= 100) {
        setTimeout(() => LVL(i), speed)
    }
}
LVL()


//  Uy ishi 2

const   view = document.querySelector('.view'),
        viewClose = view.querySelector('.view__close'),
        viewImage = view.querySelector('img'),
        productImages = document.querySelectorAll('.main__product-info')

for(let i = 0; i < productImages.length; i++) {
    productImages[i].addEventListener('dblclick', function() {
        img(this)
    })
}

function img(element) {
    view.classList.add('active')
    const img = element.querySelector('img').getAttribute('src')
    viewImage.setAttribute('src', img)
}
viewClose.addEventListener('click', function() {
    this.closest('.view').classList.remove('active')
})

