const loadUsers = async () => {
  const url = `https://randomuser.me/api/?results=9`;
  const res = await fetch(url);
  const data = await res.json();
  displayUsers(data);
};

loadUsers();

const displayUsers = (users) => {
  //   console.log(users);
  //destructuring objects
  const { results } = users;
  //   console.log(results[0].email);
  const userConainer = document.getElementById("users");
  results.forEach((data) => {
    console.log(data);
    const div = document.createElement("div");
    div.style.cssText = `
    margin: 2rem;
    border: 1px solid #C8D9E3;
    border-radius:10px;
    padding: 1rem;
    background-color:#C8D9E3; 
    color: #0F1214;
    
`;
    div.innerHTML = `
        <img src="${data.picture.thumbnail}" style="border-radius:50%" >
        <p> <strong> Name:</strong> ${data.name.first} ${data.name.last}</p>
        <p> <strong> Country:</strong> ${data.location.country}</p>
        <p> <strong> City:</strong> ${data.location.city}</p>
        <p> <strong> State:</strong> ${data.location.state}</p>
        <p> <strong> Post Code:</strong> ${data.location.postcode}</p>
        <p> <strong> Street:</strong> ${data.location.street.number}, ${data.location.street.name}</p>
        <p> <strong> TimeZone:</strong> ${data.location.timezone.description}  <strong> Offset:${data.location.timezone.offset}</strong> </p>
        <p> <strong> Lat:</strong> ${data.location.coordinates.latitude} , <strong> Lon:</strong> ${data.location.coordinates.longitude} </p>
    `;

    userConainer.appendChild(div);
  });
};
