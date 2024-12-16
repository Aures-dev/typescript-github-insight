import "./css/app.css"
import { showError } from "./errors/errors";
import { getUser, GithubUser } from "./request/request";
import { showUser } from "./ui/ui";
import { reset } from "./utils/utils";

const form = document.querySelector("form");

form?.addEventListener("submit", async (e) => {
    e.preventDefault(); //on empêche le rafraîchissement de la page
     reset()
    
    //faire la requête pour récupérer l'utilisateur
    const username = (document.querySelector("input[name='username']")as HTMLInputElement).value;
    console.log(username);
    if (!username) {
        showError(new Error("Le nom d'utilisateur est requis"))
        return
    }

   const user = await getUser(username);
   console.log({user});

   if (user) {
    showUser(user)
   } else {
    showError(new Error("Utilisateur non trouvé"))
   }
})