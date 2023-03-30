let headerT = `
<div class="container-header"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem veritatis voluptates iure dolor, quas modi placeat dolorum libero dolores provident nihil esse alias at, magni doloremque, velit accusamus facilis perferendis sit magnam aut nemo sapiente, ab amet? Vel, quod totam modi exercitationem unde mollitia temporibus maxime reiciendis rem culpa labore a atque, blanditiis explicabo voluptatem numquam esse optio harum, commodi quae. Perspiciatis illum quam, pariatur eum nulla, adipisci porro perferendis, cupiditate id voluptate delectus accusantium quod blanditiis.</p></div>

`;

function setHeader() {
  let header =  document.createElement("div");
  header.innerHTML = headerT;
  document.body.insertAdjacentElement('afterbegin', header );
  document.body.insertAdjacentElement('beforeend', footer );
}

setHeader();
