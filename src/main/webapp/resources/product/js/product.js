let basketProduct = {}

const productAjax = function (action, productQuantity, discountPrice, productQuantityHtml, i) {

    // 총 상품 가격
    let totalPrice = document.querySelector('.css-x4cdgl');

    if (action === 'increase') {
        productList[i].quantity = parseInt(productQuantity) + 1
    } else if (action === 'decrease') {
        productList[i].quantity = parseInt(productQuantity) - 1
    }

    $.ajax({
        type: 'POST',
        url: '/ProductCalculation',
        headers: {
            "content-type": "application/json"
        },
        dataType: 'json',
        data: JSON.stringify(productList),
        success: function (result) {
            basketProduct = result;
            let totalProductPrice = 0;

            for (let j = 0; j < basketProduct.length; j++) {
                totalProductPrice += basketProduct[j].total_price;
            }
            totalPrice.textContent = totalProductPrice;
            let {quantity} = basketProduct[i];
            productQuantityHtml.textContent = quantity;
        },
        error: function () {
            alert("error");
        }
    })
}

$(document).ready(function () {

    // 상품 수량 올리기
    const upButton = document.querySelectorAll('.css-18y6jr4')

    for (let i = 0; i < upButton.length; i++) {
        upButton[i].addEventListener("click", function () {
            let productQuantity = document.querySelectorAll('.count')[i].textContent
            let discountPrice = document.querySelectorAll('.css-gqkxk8')[i].textContent.match(/\d+/)[0];
            let productQuantityHtml = document.querySelectorAll('.count')[i];

            productAjax('increase', productQuantity, discountPrice, productQuantityHtml, i);
        })
    }

    // 상품 수량 내리기
    const downButton = document.querySelectorAll('.css-8azp8')

    for (let i = 0; i < downButton.length; i++) {
        downButton[i].addEventListener("click", function () {

            let productQuantity = document.querySelectorAll('.count')[i].textContent
            let discountPrice = document.querySelectorAll('.css-gqkxk8')[i].textContent.match(/\d+/)[0];
            let productQuantityHtml = document.querySelectorAll('.count')[i];

            if (downButton.length === 1) {
                if (productQuantity === '1') {
                    return;
                }
            } else {
                if (productQuantity === '0') {
                    return;
                }
            }

            productAjax('decrease', productQuantity, discountPrice, productQuantityHtml, i);
        })
    }

    const button_description = document.getElementsByClassName('efe6b6j0')[0];
    const button_detail = document.getElementsByClassName('efe6b6j0')[1];
    const button_review = document.getElementsByClassName('efe6b6j0')[2];
    const button_inquiry = document.getElementsByClassName('efe6b6j0')[3];
    const description = document.getElementById('description');
    const detail = document.getElementById('detail');
    const review = document.getElementById('review');
    const inquiry = document.getElementById('inquiry');

    button_description.addEventListener('click', () => {
        window.scrollBy({top: description.getBoundingClientRect().top, behavior: 'smooth'});

    });
    button_detail.addEventListener('click', () => {
        window.scrollBy({top: detail.getBoundingClientRect().top, behavior: 'smooth'});

    });
    button_review.addEventListener('click', () => {
        window.scrollBy({top: review.getBoundingClientRect().top, behavior: 'smooth'});

    });
    button_inquiry.addEventListener('click', () => {
        window.scrollBy({top: inquiry.getBoundingClientRect().top, behavior: 'smooth'});

    });
});