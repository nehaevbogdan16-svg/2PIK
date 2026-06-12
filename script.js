const members = [

{role:"leader", name:"2PIK丨GRESHNIK", id:"51850708652"},

{role:"deputy", name:"2PIK丨GRESHNCA", id:"51514497454"},

{role:"deputy", name:"2PIK丨Ｌｉｎｋ", id:"5958320567"},

{role:"deputy", name:"2PIK丨SCAM", id:"51655879673"},

{role:"elite", name:"2PIK丨RAIL", id:"52291257528"},

{role:"elite", name:"2PIK丨SPEED", id:"51900179636"},

{role:"elite", name:"2PIK丨RICH", id:"51859443069"},

{role:"member", name:"2PIK丨Bogdan", id:"51852595606"},

{role:"member", name:"2PIK丨doup", id:"5400577570"},

{role:"member", name:"2PIK丨stalik", id:"5717071471"}

];

const container = document.getElementById("members");

members.forEach(m => {

    const avatar = localStorage.getItem(m.id) || "https://i.imgur.com/2yaf2wb.png";

    const div = document.createElement("div");

    div.className = "card " + m.role;

    div.innerHTML = `

        <img id="av-${m.id}" src="${avatar}">

        <h3>${m.name}</h3>

        <p>${m.role.toUpperCase()}</p>

        <input type="file" onchange="setAvatar(event,'${m.id}')">

    `;

    container.appendChild(div);

});

function setAvatar(e, id){

    const reader = new FileReader();

    reader.onload = () => {

        localStorage.setItem(id, reader.result);

        document.getElementById("av-"+id).src = reader.result;

    };

    reader.readAsDataURL(e.target.files[0]);

}

function uploadClanAvatar(e){

    const reader = new FileReader();

    reader.onload = () => {

        localStorage.setItem("clan", reader.result);

        document.getElementById("clanAvatar").src = reader.result;

    };

    reader.readAsDataURL(e.target.files[0]);

}

window.onload = () => {

    const clan = localStorage.getItem("clan");

    if(clan) document.getElementById("clanAvatar").src = clan;

};
