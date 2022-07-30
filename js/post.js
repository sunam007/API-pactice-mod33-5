// api used from jsonplaceholder
const loadPosts = async () => {
  const url = `https://jsonplaceholder.typicode.com/posts`;
  const res = await fetch(url);
  const data = await res.json();
  //   console.log(data);
  const postContainer = document.getElementById("user-comment");
  data.forEach((post) => {
    // console.log(post);
    const div = document.createElement("div");
    div.innerHTML = `
        <h4>${post.title}</h4>
        <p>${post.body}</p>
        <button onclick="loadPostDetails('${post.id}')">Details</button>
    `;
    postContainer.appendChild(div);
  });
};
// must call function;
loadPosts();

const loadPostDetails = async (postID) => {
  const url = `https://jsonplaceholder.typicode.com/posts/${postID}`;
  //   console.log(url);
  const res = await fetch(url);
  const data = await res.json();
  const postDetail = document.getElementById("post-detail");
  //multiline CSS Styling like innerHTML , write exact css code not the camelcase;
  postDetail.style.cssText = `   
        margin: 1.5rem;
        padding: 20px;
        border: 2px solid slategray; 
        border-radius: 20px;
        background-color: slategray;
    `;
  postDetail.innerHTML = `
        <h5>${data.title}</h5>
        <h6>${data.body}</h6>
  `;
};
