const actionButton = document.querySelector("#action-button");
const message = document.querySelector("#message");

actionButton.addEventListener("click", () => {
  message.textContent = "Codex работает!";
  message.classList.add("is-visible");
});
