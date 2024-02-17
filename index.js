
let count = 0;

const allbtn = document.getElementsByClassName('add-btn');
for(const btn of allbtn){
    btn.addEventListener('click', function() {
        count += 1;
        const cartNum = document.getElementById('cart-count');
        cartNum.innerText = count;

        const placeName = event.target.parentNode.childNodes[1].innerText;
        const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
        

        const showElement = document.getElementById('selected-place-container');
        const li = document.createElement("li")
        const p = document.createElement("p")
        p.innerText = placeName;

        const p2 = document.createElement("p")
        p2.innerText = price;

        li.appendChild(p)
        li.appendChild(p2)
        showElement.appendChild(li)
    })
}

