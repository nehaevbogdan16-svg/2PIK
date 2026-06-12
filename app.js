const membersData = [

    {role: "Лидер", name: "2PIK丨GRESHNIK", id: "51850708652"},

    {role: "Заместитель", name: "2PIK丨GRESHNCA", id: "51514497454"},

    {role: "Заместитель", name: "2PIK丨Ｌｉｎｋ", id: "5958320567"},

    {role: "Заместитель", name: "2PIK丨SCAM", id: "51655879673"},

    {role: "Элита", name: "2PIK丨RAIL", id: "52291257528"},

    {role: "Элита", name: "2PIK丨SPEED", id: "51900179636"},

    {role: "Элита", name: "2PIK丨RICH", id: "51859443069"},

    {role: "Член", name: "2PIK丨Bogdan", id: "51852595606"},

    {role: "Член", name: "2PIK丨doup", id: "5400577570"},

    {role: "Член", name: "2PIK丨stalik", id: "5717071471"}

];

const container = document.getElementById("members");

membersData.forEach(member => {

    const card = document.createElement("div");

    card.className = "card";

    const savedAvatar = localStorage.getItem(member.id) || "https://via.placeholder.com/100";

    card.innerHTML = `

        <h3>${member.role}</h3>

        <img id="avatar-${member.id}" src="${savedAvatar}">

        <p>${member.name}</p>

        <small>${member.id}</small>

        <input type="file" onchange="uploadAvatar(event, '${member.id}')">

    `;

    container.appendChild(card);

});

function uploadAvatar(event, id) {

    const file = event.target.files[0];

    const reader = new FileReader();

    reader.onload = function() {

        localStorage.setItem(id, reader.result);

        document.getElementById("avatar-" + id).src = reader.result;

    };

    reader.readAsDataURL(file);

}

function uploadClanAvatar(event) {

    const file = event.target.files[0];

    const reader = new FileReader();

    reader.onload = function() {

        localStorage.setItem("clanAvatar", reader.result);

        document.getElementById("clanAvatar").src = reader.result;

    };

    reader.readAsDataURL(file);

}

window.onload = () => {

    const savedClan = localStorage.getItem("clanAvatar");

    if (savedClan) {

        document.getElementById("clanAvatar").src = savedClan;

    }

};
