export function showError (error:Error){
   const div = document.createElement("div");
   div.classList.add("error");
   div.innerHTML = /*HTML*/ `<p> ${error.message} </p>`;
   (document.querySelector(".container") as HTMLDivElement).append(div);
   setTimeout(() => {
        div.remove();
   }, 5000);
}