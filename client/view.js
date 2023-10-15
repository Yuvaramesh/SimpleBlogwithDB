const foot = document.querySelector("#alluser");
window.addEventListener("DOMContentLoaded", async () => {
  const vale = await axios.get("http://127.0.0.1:3010/userdata", {
    withCredentials: true,
  });

  let html = `<tr>
  <th>sno</th>
  <th>name</th>
  <th>room</th>
  <th>squarefeet</th>
  <th>price</th>
  <th>delete</th>
</tr>`;
  foot.innerHTML = "";
  vale.data.forEach((element, id) => {
    html += `
        <tr>
            <td>${id + 1}</td>
            <td>${element.name}</td>
            <td>${element.rooms}</td>
            <td>${element.sqfeet}</td>
            <td>${element.price}</td>
            <td><button id="delbtn" onclick='deleteItem(${
              element.id
            })'>delete</button></td>
          </tr>
    `;
  });
  html += "<a class='submit1' href='./index.html'> go back</a>";

  foot.innerHTML = html;
});

const deleteItem = async (val) => {
  //   console.log(val);
  //   alert(val);
  const vale = await axios.delete(
    `http://127.0.0.1:3010/userdata/${val}`,

    {
      withCredentials: true,
    }
  );
  window.location.reload();
  alert(vale.data);
};
