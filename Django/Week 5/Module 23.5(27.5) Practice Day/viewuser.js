const getparams=()=>{
    const param = new URLSearchParams(window.location.search).get("id");
    fetch(`https://fakestoreapi.com/users/${param}`)
    .then(res=>res.json())
    .then(json=>showUser(json))
  }


const showUser = (data) =>{
    const parent = document.getElementById("maincontainner")
    const div = document.createElement('div')
    div.classList.add("row")

    div.innerHTML = `
    <div class="col-lg-4">
    <div class="card mb-4">
      <div class="card-body text-center">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
          class="rounded-circle img-fluid" style="width: 150px;">
        <h5 class="my-3">${data.name.firstname} ${data.name.lastname}</h5>
        <p class="text-muted mb-1">Full Stack Developer</p>
        <p class="text-muted mb-4">${data.address.city} ${data.address.street}</p>
        <div class="d-flex justify-content-center mb-2">
          <button type="button" class="btn btn-primary">Follow</button>
          <button type="button" class="btn btn-outline-primary ms-1">Message</button>
        </div>
      </div>
    </div>
  </div>
  <div class="col-lg-8">
    <div class="card mb-4">
      <div class="card-body">
        <div class="row">
          <div class="col-sm-3">
            <p class="mb-0">Full Name</p>
          </div>
          <div class="col-sm-9">
            <p class="text-muted mb-0">${data.name.firstname} ${data.name.lastname}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-sm-3">
            <p class="mb-0">Email</p>
          </div>
          <div class="col-sm-9">
            <p class="text-muted mb-0">${data.email}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-sm-3">
            <p class="mb-0">Phone</p>
          </div>
          <div class="col-sm-9">
            <p class="text-muted mb-0">${data.phone}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-sm-3">
            <p class="mb-0">Address</p>
          </div>
          <div class="col-sm-9">
            <p class="text-muted mb-0">${data.address.city} ${data.address.street}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-sm-3">
            <p class="mb-0">Number</p>
          </div>
          <div class="col-sm-9">
            <p class="text-muted mb-0">${data.address.number}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-sm-3">
            <p class="mb-0">Zipcode</p>
          </div>
          <div class="col-sm-9">
            <p class="text-muted mb-0">${data.address.zipcode}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-sm-3">
            <p class="mb-0">Geolocation</p>
          </div>
          <div class="col-sm-9">
            <p class="text-muted mb-0">lat: ${data.address.geolocation.lat} <br> long: ${data.address.geolocation.long}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="card mb-4 mb-md-0">
          <div class="card-body">
            <p class="mb-4"><span class="text-primary font-italic me-1">assigment</span> Project Status
            </p>
            <p class="mb-1" style="font-size: .77rem;">Web Design</p>
            <div class="progress rounded" style="height: 5px;">
              <div class="progress-bar" role="progressbar" style="width: 80%" aria-valuenow="80"
                aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p class="mt-4 mb-1" style="font-size: .77rem;">Website Markup</p>
            <div class="progress rounded" style="height: 5px;">
              <div class="progress-bar" role="progressbar" style="width: 72%" aria-valuenow="72"
                aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p class="mt-4 mb-1" style="font-size: .77rem;">One Page</p>
            <div class="progress rounded" style="height: 5px;">
              <div class="progress-bar" role="progressbar" style="width: 89%" aria-valuenow="89"
                aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p class="mt-4 mb-1" style="font-size: .77rem;">Mobile Template</p>
            <div class="progress rounded" style="height: 5px;">
              <div class="progress-bar" role="progressbar" style="width: 55%" aria-valuenow="55"
                aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p class="mt-4 mb-1" style="font-size: .77rem;">Backend API</p>
            <div class="progress rounded mb-2" style="height: 5px;">
              <div class="progress-bar" role="progressbar" style="width: 66%" aria-valuenow="66"
                aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card mb-4 mb-md-0">
          <div class="card-body">
            <p class="mb-4"><span class="text-primary font-italic me-1">assigment</span> Project Status
            </p>
            <p class="mb-1" style="font-size: .77rem;">Web Design</p>
            <div class="progress rounded" style="height: 5px;">
              <div class="progress-bar" role="progressbar" style="width: 80%" aria-valuenow="80"
                aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p class="mt-4 mb-1" style="font-size: .77rem;">Website Markup</p>
            <div class="progress rounded" style="height: 5px;">
              <div class="progress-bar" role="progressbar" style="width: 72%" aria-valuenow="72"
                aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p class="mt-4 mb-1" style="font-size: .77rem;">One Page</p>
            <div class="progress rounded" style="height: 5px;">
              <div class="progress-bar" role="progressbar" style="width: 89%" aria-valuenow="89"
                aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p class="mt-4 mb-1" style="font-size: .77rem;">Mobile Template</p>
            <div class="progress rounded" style="height: 5px;">
              <div class="progress-bar" role="progressbar" style="width: 55%" aria-valuenow="55"
                aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p class="mt-4 mb-1" style="font-size: .77rem;">Backend API</p>
            <div class="progress rounded mb-2" style="height: 5px;">
              <div class="progress-bar" role="progressbar" style="width: 66%" aria-valuenow="66"
                aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
    parent.appendChild(div)
}


getparams()