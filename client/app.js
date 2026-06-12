const API = "http://localhost:3000/members";

async function loadMembers() {

    const res = await fetch(API);

    const data = await res.json();

    const container = document.getElementById('members');

    container.innerHTML = '';

    data.forEach(m => {

        container.innerHTML += `

        <div class="member">

            <img src="${m.avatar || 'https://via.placeholder.com/80'}">

            <h3>${m.nickname}</h3>

            <p>${m.role}</p>

            <small>${m.id}</small>

        </div>`;

    });

}

loadMembers();
