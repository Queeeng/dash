window.addEventListener("storage", function (e) {
  document.querySelector(".sign-u").textContent = e.bank;
  document.querySelector("#my-old").textContent = e.oldValue;
  document.querySelector("#my-new").textContent = e.newValue;
  document.querySelector("#my-url").textContent = e.url;
  document.querySelector("#my-storage").textContent = JSON.stringify(
    e.storageArea
  );
});
