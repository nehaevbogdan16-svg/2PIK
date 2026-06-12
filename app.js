const members = [

  {role:"Лидер", nickname:"2PIK丨GRESHNIK", id:"51850708652"},

  {role:"Заместитель", nickname:"2PIK丨GRESHNCA", id:"51514497454"},

  {role:"Заместитель", nickname:"2PIK丨Ｌｉｎｋ", id:"5958320567"},

  {role:"Заместитель", nickname:"2PIK丨SCAM", id:"51655879673"},

  {role:"Элита", nickname:"2PIK丨RAIL", id:"52291257528"},

  {role:"Элита", nickname:"2PIK丨SPEED", id:"51900179636"},

  {role:"Элита", nickname:"2PIK丨RICH", id:"51859443069"},

  {role:"Член", nickname:"2PIK丨Bogdan", id:"51852595606"},

  {role:"Член", nickname:"2PIK丨doup", id:"5400577570"},

  {role:"Член", nickname:"2PIK丨stalik", id:"5717071471"}

];

function load() {

    const container = document.getElementById("members");

    container.innerHTML = "";

    members.forEach((m, i) => {

        const avatar = localStorage.getItem("avatar_" + m.id);

        container.innerHTML += `

        <div class="member">

            <img src="${avatar || 'https://via.placeholder.com/90'}">

            <h3>${m.nickname}</h3>

            <p>${m.role}</p>

            <small>${m.id}</small>

            <input type="text" placeholder="Ссылка на аватар" onchange="setAvatar(${i}, this.value)">

        </div>

        `;

    });

    const clanAvatar = localStorage.getItem("clanAvatar");

    if (clanAvatar) {

        document.getElementById("clanAvatar").src = clanAvatar;

    }

}

function setAvatar(index, url) {

    const id = members[index].id;

    localStorage.setItem("avatar_" + id, url);

    load();

}

function setClanAvatar() {

    const url = document.getElementById("clanAvatarInput").value;

    localStorage.setItem("clanAvatar", url);

    load();

}

load();
