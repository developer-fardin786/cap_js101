let product_div = document.querySelector(".product");
let all_product = null;
let get_data = async () => {
  try {
    let res = await fetch(`https://fakestoreapi.com/products`);
    all_product = await res.json();

    print_product(all_product);
  } catch (error) {
    console.log(error);
  }
};

function print_product(array) {
  let sort=array.sort((a,b)=>a.price-b.price)
  array=sort
    
    if(array.length==0){
        product_div.innerHTML=null
        let notfound=document.createElement("h2")
         notfound.className="resultnotfound"
        notfound.textContent='Result not found'
        product_div.append(notfound)
    }else{
        product_div.innerHTML = null;
        for (let i = 0; i < array.length; i++) {
          let product_card = document.createElement("div");
          product_card.className = "product_card";
      
          let img_element = document.createElement("img");
          img_element.src = array[i].image;
      
          let price_element = document.createElement("h4");
          price_element.textContent = `₹ ${array[i].price}`;
      
          let title_element = document.createElement("h5");
          title_element.textContent = array[i].title;
      
          let rating_element = document.createElement("h5");
          rating_element.textContent = `Rating  ${array[i].rating.rate}`;
          product_card.append(
            img_element,
            price_element,
            title_element,
            rating_element
          );
          product_div.append(product_card);
        }
    }

}

function filter_data() {
  let input = document.getElementById("search_data").value;
  let filterdata = all_product.filter(
    (product) =>
      product?.category.toLowerCase().includes(input.toLowerCase()) ||
      product.price >= input ||
      product?.title.toLowerCase().includes(input.toLowerCase())
  );
  print_product(  filterdata);

  console.log(  'filterdata--->', filter_data.length);
}

get_data();
