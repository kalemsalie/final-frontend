function getPosts() {
  // Get element to change
  let list = document.getElementById("blog-items");

  // Fetch the data
  fetch("http://127.0.0.1:5000/show-data/")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      json.forEach((blog) => createBlogItem(blog));
    });
}

function createBlogItem(blog) {
  const item = `
    <!-- item -->
        <div class="blog-item">
          <div class="blog-img">
            <img src="${blog.image}" alt="" />
          </div>
          <div class="blog-text">
            <span>${Date.now()}</span>
            <h2>${blog.header}</h2>
            <p>
              ${blog.description}
            </p>
            <a href="./blog.html?blogID=${blog.id}">Read More</a>
          </div>
        </div>
        <!-- end of item -->
    `;
  let list = document.getElementById("blog-content");
  console.log("Hello");
  list.innerHTML += item;
}

getPosts();
