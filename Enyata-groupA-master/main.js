function addCommentBox(productId) {

    let product = document.getElementById(productId);

    let form = document.createElement('form');
    form.name = 'commentForm';
    form.id = 'form';

    let commentBox = document.createElement("textarea");
    let commentName = document.createElement("input");
    let submit = document.createElement("button");

    commentBox.setAttribute('class', 'commentBox');
    commentBox.setAttribute('name', 'comment');
    commentBox.setAttribute('id', 'comment');

    commentName.setAttribute('class', 'commentName');
    commentName.setAttribute('type', 'text');
    commentName.setAttribute('name', 'commentby');
    commentName.setAttribute('id', 'commentby');

    submit.innerHTML = 'submit';
    submit.setAttribute('id', 'submitReview');
    submit.setAttribute('onclick', 'submitComment(event)');

    form.appendChild(commentName);
    form.appendChild(commentBox);
    form.appendChild(submit);

    productReview = product.appendChild(form);

}

function submitComment(event) {
    document.getElementById("form").style.display = 'none';
    event.preventDefault();
    console.log('okay');
    commentee = document.getElementById("commentby").value;
    comment = document.getElementById("comment").value;

    document.getElementById("commentlog").innerHTML = comment;
    document.getElementById("commenteelog").innerHTML = commentee;
    console.log(comment);
}
let initCartValue = 0;
let cartTotal = [];

trackCart = (e) => {
    // let ids = e.target.getAttribute('id');
    let allCounters = document.getElementsByClassName("counters");
    counted = 0;

    for (let index = 0; index < allCounters.length; index++) {
        counted += Number(document.getElementById("product" + index).value);

    }

    document.querySelector('#cartitems').innerHTML = Number(counted);
};
//cartTotal.push(counter);
console.log(cartTotal);

function defaultMode() {
    document.querySelector('#cartitems').innerHTML = initCartValue;
    let counters = document.getElementsByClassName('counters');

    for (let index = 0; index < counters.length; index++) {
        counters[index].value = 0;
        console.log(counters[index].value);
    }

    console.log('here');
}

// let orderBtns = document.getElementsByClassName('order');
// for (let index = 0; index < orderBtns.length; index++) {
//     orderBtns[index].addEventListener('click', 'order');
//     console.log('added event');
// }

function addOrderClick() {
    let bns = document.getElementsByClassName("order");
    for (i = 0; i < bns.length; i++) {
        bns[i].addEventListener("click", () => {
            console.log("you clicked order");
        });


    }
}

function addId() {
    let bns = document.getElementsByClassName("counters");
    for (i = 0; i < bns.length; i++) {
        bns[i].setAttribute('id', 'product' + i);
        console.log(bns[i]);
    }

    // bns[i].setAttribute('id', 'product' + i);
    // console.log(bns[i]);
}

function addReviewClick() {
    let bns = document.getElementsByClassName("review");
    for (i = 0; i < bns.length; i++) {
        bns[i].addEventListener("click", function() {
            console.log("you clicked review");
        });
        //addCommentBox(bns[i].getAttribute('id'));

    }
}

function addOrders() {
    let counters = document.getElementsByClassName("counters");
    let total = 0;

    for (i = 0; i < counters.length; i++) {
        total = counters[i].value + total;
        console.log("you clicked review");
        console.log(counters[i].value);
    }
}

window.addEventListener("load", function() {
    addOrderClick();
    addReviewClick();
    addOrders();
    defaultMode();
    addId();
});
//orderBtns.addEventListener('click', 'order');