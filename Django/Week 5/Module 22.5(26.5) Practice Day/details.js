const getparams=()=>{
  const param = new URLSearchParams(window.location.search).get("id");
  fetch(`https://fakestoreapi.com/products/${param}`)
            .then(res=>res.json())
            .then(json=>showProduct(json))
}


const showProduct=(data)=>{
    const parent = document.getElementById("productGallery")
    const div = document.createElement('div')

    div.innerHTML=`
    <div class="container">
    <div class="row gx-5">
      <aside class="col-lg-6">
        <div class="border rounded-4 mb-3 d-flex justify-content-center">
          <a data-fslightbox="mygalley" class="rounded-4" target="_blank" data-type="image" href="${data.image}">
            <img style="max-width: 100%; max-height: 100vh; margin: auto;" class="rounded-4 fit" src="${data.image}" />
          </a>
        </div>
        <div class="d-flex justify-content-center mb-3">
          <a data-fslightbox="mygalley" class="border mx-1 rounded-2" target="_blank" data-type="image" href="${data.image}" class="item-thumb">
            <img width="60" height="60" class="rounded-2" src="${data.image}" />
          </a>
          <a data-fslightbox="mygalley" class="border mx-1 rounded-2" target="_blank" data-type="image" href="${data.image}" class="item-thumb">
            <img width="60" height="60" class="rounded-2" src="${data.image}" />
          </a>
          <a data-fslightbox="mygalley" class="border mx-1 rounded-2" target="_blank" data-type="image" href="${data.image}" class="item-thumb">
            <img width="60" height="60" class="rounded-2" src="${data.image}" />
          </a>
          <a data-fslightbox="mygalley" class="border mx-1 rounded-2" target="_blank" data-type="image" href="${data.image}" class="item-thumb">
            <img width="60" height="60" class="rounded-2" src="${data.image}" />
          </a>
          <a data-fslightbox="mygalley" class="border mx-1 rounded-2" target="_blank" data-type="image" href="${data.image}" class="item-thumb">
            <img width="60" height="60" class="rounded-2" src="${data.image}" />
          </a>
        </div>
        <!-- thumbs-wrap.// -->
        <!-- gallery-wrap .end// -->
      </aside>
      <div class="col-lg-6">
        <div class="ps-lg-3">
          <h4 class="title text-dark">
            ${data.title} <br />
          </h4>
          <div class="d-flex flex-row my-3">
            <div class="text-warning mb-1 me-2">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
              <span class="ms-1">
                4.5
              </span>
            </div>
            <span class="text-muted"><i class="fas fa-shopping-basket fa-sm mx-1"></i>154 orders</span>
            <span class="text-success ms-2">In stock</span>
          </div>

          <div class="mb-3">
            <span class="h5">$${data.price}</span>
            <span class="text-muted">/per box</span>
          </div>

          <p>
            ${data.description}
          </p>

          <div class="row">
            <dt class="col-3">Type:</dt>
            <dd class="col-9">Regular</dd>

            <dt class="col-3">Color</dt>
            <dd class="col-9">Brown</dd>

            <dt class="col-3">Material</dt>
            <dd class="col-9">Cotton, Jeans</dd>

            <dt class="col-3">Brand</dt>
            <dd class="col-9">Reebook</dd>
          </div>

          <hr />

          <div class="row mb-4">
            <div class="col-md-4 col-6">
              <label class="mb-2">Size</label>
              <select class="form-select border border-secondary" style="height: 35px;">
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </div>
            <!-- col.// -->
            <div class="col-md-4 col-6 mb-3">
              <label class="mb-2 d-block">Quantity</label>
              <div class="input-group mb-3" style="width: 170px;">
                <button class="btn btn-white border border-secondary px-3" type="button" id="button-addon1" data-mdb-ripple-color="dark">
                  <i class="fas fa-minus"></i>
                </button>
                <input type="text" class="form-control text-center border border-secondary" placeholder="14" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                <button class="btn btn-white border border-secondary px-3" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
          <a href="#" class="btn btn-warning shadow-0"> Buy now </a>
          <a href="#" class="btn btn-primary shadow-0"> <i class="me-1 fa fa-shopping-basket"></i> Add to cart </a>
    `;
    parent.appendChild(div)
}


getparams()