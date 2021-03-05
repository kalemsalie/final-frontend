// Get data from URL
const params = new URLSearchParams(window.location.search);

// Get elements to change
const blogPost = document.getElementById("blog-item");

if (params.has("blogID")) {
  fetch(`http://127.0.0.1:5000/show-blog-item/${params.get("blogID")}`)
    .then((response) => response.json())
    .then((blog) => {
      console.log(blog);
      blogPost.innerHTML = ` 


      
        <div class="blog-img" id="blog-img">
          <img src="${blog.image}" />
        </div>

        <div class="blog-text" id="blog-text">
          <h2 class="blog-title" id="blog-title">${blog.header}</h2>

          <p class="text" id="text">
          ${blog.body}
          </p>
        </div>
      `;
    });
} else {
  window.location.href = "./404.html";
}
