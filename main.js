var itemList = Array.from(document.querySelectorAll(".img"));
var display_item = document.querySelector(".display-item");
var display_image = document.querySelector(".display-image");
var next = document.querySelector("#next");
var prev = document.querySelector("#prev");
var close = document.querySelector("#close");

var currentIndex = 0;

for (var i = 0; i < itemList.length; i++) {
    itemList[i].addEventListener("click", function(e) {
        display_item.classList.remove("d-none");
        display_image.style.cssText = `background-image: url(${e.target.getAttribute("src")});`;
        currentIndex = itemList.indexOf(e.target);
    });
}

next.addEventListener("click", function() {
    if (currentIndex === itemList.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    display_image.style.cssText = `background-image: url(${itemList[currentIndex].getAttribute("src")});`;
});

prev.addEventListener("click", function() {
    if (currentIndex === 0) {
        currentIndex = itemList.length - 1;
    } else {
        currentIndex--;
    }
    display_image.style.cssText = `background-image: url(${itemList[currentIndex].getAttribute("src")});`;
});
console.log(itemList[currentIndex])


close.addEventListener("click",function () {
    display_item.classList.add("d-none");

})