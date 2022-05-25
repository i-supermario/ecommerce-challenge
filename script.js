var addBtn = document.querySelector('.plus');
var subBtn = document.querySelector('.minus');
var countTxt = document.querySelector('.count');
var cartBtn = document.querySelector('#cartBtn');
var cartDisplay = document.getElementById('cart');
var addToCartBtn = document.querySelector('.addBtn');
var itemCount = document.querySelector('.item-count');
var totalAmnt = document.querySelector('.total');
var emptyText = document.getElementById('empty');
var cartContainer = document.getElementById('cart-container');
var deleteBtn = document.querySelector('.delete');
var checkoutTab = document.getElementById('checkout');
var Images = document.querySelectorAll('.images .list img');
var bigImg = document.querySelector('.big-image');
Images.forEach(img => {img.addEventListener('click',(evt)=>changeImg(evt))});


function changeCount(evt,type){
    var count = parseInt(countTxt.textContent);
    if(type=='plus')
        count++;
    else if(type=='minus')
        count--;
    if(count<0)
        count = 0;
    countTxt.textContent = count;

}
function addToCart(evt){

    var count = parseInt(countTxt.textContent);
    if(count>0){
        emptyText.style.display = 'none';
        cartContainer.style.display = 'flex';
        checkoutTab.style.display = 'flex';
        var totalCount = parseInt(itemCount.textContent) + count;
        itemCount.textContent = (totalCount).toString();
        totalAmnt.textContent = '$'+(totalCount*125).toString()
    }
    else{
        emptyText.style.display = 'block';
        cartContainer.style.display = 'none';
        checkoutTab.style.display = 'none';
    }
}

function changeImg(evt){
    var img = evt.target;
    var url = img.src;
    bigImg.src = url.split('-thumbnail')[0]+'.jpg';
}

function deleteItem(evt){
    itemCount.textContent = '0';
    totalAmnt.textContent = '0';
    cartContainer.style.display = 'none';
    checkoutTab.style.display = 'none';
    emptyText.style.display = 'block';
}

addBtn.addEventListener('click',(evt)=>changeCount(evt,'plus'));
subBtn.addEventListener('click',(evt)=>changeCount(evt,'minus'));

cartBtn.addEventListener('click',(evt)=>{
    if(cartDisplay.style.display=='flex')
        cartDisplay.style.display = 'none';
    else
        cartDisplay.style.display = 'flex';
});
addToCartBtn.addEventListener('click',(evt)=>addToCart(evt));
deleteBtn.addEventListener('click',(evt)=>deleteItem(evt));