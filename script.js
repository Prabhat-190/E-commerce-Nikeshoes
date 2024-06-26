const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "white",
        img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/fd405dd1-9a84-457f-99b6-e9667d93e8e8/custom-nike-air-force-1-low-by-you.png",
      },
      {
        code: "darkblue",
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTSTa1eTb4WJZmfv2ITQLUTyAfo9NkQehViTdt1NyuJB-chfp5N9h9fbbU4YUbL8EDhL9NxfEVZYJFN0KZmRgvqq3chpO77dktCY-wimv-TipO_XjdaeFQJu-M",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/390e464c-bb34-42c5-8464-6890dd5b593e/air-jordan-1-low-shoes-459b4T.png",
      },
      {
        code: "green",
        img: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/175c3f03-496f-45a6-b443-abdaf993b2bc/air-jordan-1-low-pine-green-release-date.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "white",
        img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/dbcbfb0f-0154-4acb-8e9c-fd79c8579f51/blazer-mid-77-shoes-0dJRSm.png",
      },
      {
        code: "green",
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRLeRMq0a8wC3d0YFgWEpI1-wzlznqfOBtE_W7RXmMFNmlZayttNux6RfQoE36WWZGq4d63hnXwmiN8gP2VBS-1oPOgokq1sdcDn2Lddv9Jd52K3JWJbSCh_Q",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/368aaded-657c-4ad4-ab54-a36ef8631c88/brsb-skate-shoes-RJF3Ss.png",
      },
      {
       code: "red",
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a5c39041-c327-4b87-9241-3af13a0e15dc/dunk-low-shoes-g54Fbv.png",
       },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "black",
        img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/62fedfef-6695-488e-8816-56c855cd28d0/jordan-day1-eo-older-shoes-cPx7rj.png",
      },
      {
        code: "white",
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5079b769-67d3-404f-9d00-ecbf7534cdfd/infinityrn-4-road-running-shoes-04G5w4.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");
const addToCart = (product_id) => {
  let positionThisProductInCart = cart.findIndex((value) => value.product_id == product_id);
  
}

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
