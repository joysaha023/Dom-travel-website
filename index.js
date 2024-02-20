const cartNum = document.getElementById('cart-count');
const addBtn = document.getElementsByClassName('add-btn');


let count = 0;
for(const btn of addBtn){
    btn.addEventListener('click', function(event){
        count += 1;
        setInnerText('cart-count', count)
        btn.setAttribute('disabled', '')

        const placeName = event.target.parentNode.childNodes[1].innerText;
        const priceText = event.target.parentNode.childNodes[3].childNodes[1].innerText;
        const price = parseInt(priceText)
        const budgetsText = document.getElementById('budget').innerText;
        const budgets = parseInt(budgetsText)
        
        if(budgets - price <0 ){
            alert("Low Budgets Earn Money");
            return;
        }

        setInnerText('budget', budgets - price)

        const selectPlaceContainer = document.getElementById('selected-place-container');
        const li = document.createElement('li');

        const p0 = document.createElement('p');
        p0.innerText = count;

        const p1 = document.createElement('p');
        p1.innerText = placeName;

        const p3 = document.createElement('p');
        p3.innerText = price;
        
        li.appendChild(p0);
        li.appendChild(p1);
        li.appendChild(p3);
        selectPlaceContainer.appendChild(li);


        const totalPrice = document.getElementById('total-cost').innerText;
        const total = parseInt(totalPrice) + price;
        document.getElementById('total-cost').innerText = total;
        

    })
}

function grandTotal(c){
    const convertTotal = getValue('total-cost');
    
    if(c == 'bus'){
        setInnerText('grand-total', convertTotal + 100);
    }
    else if(c == 'train'){
        setInnerText('grand-total', convertTotal - 200);
    }
    else if(c == 'flight'){
        setInnerText('grand-total', convertTotal + 500);
    }
    else{
        setInnerText('grand-total', convertTotal);
    }
}


function getValue(id){
    const getInnerText = document.getElementById(id).innerText;
    const getText = parseInt(getInnerText);
    return getText;
}

function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}