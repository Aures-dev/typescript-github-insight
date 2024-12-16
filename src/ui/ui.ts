import { GithubUser } from "../request/request";
import { dateDiffInDays, deleteCartIf } from "../utils/utils";

export function showUser(user:GithubUser): void {
    //supprimer le user précédent s'il y en a
    deleteCartIf( document.querySelector(".card"));


    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = /*html*/ 
    `
    <img src="${user.avatar_url}" alt= "Photo de profile ${user.login}" />
    <h2>${user.login}</h2>
    <h3>${user.name}</h3>
    <p>Utilisateur créé le : ${new Date(user.created_at).toLocaleDateString()} il  y a ${dateDiffInDays(user.created_at)} jours. </p>
    <p>Nombre de repos publiques : ${user.public_repos}</p>
    <a class="voir" href="${user.html_url}" target="_blank">Voir</a>
    `;
   ( document.querySelector(".result") as HTMLDivElement).append(card);
}