let btnShowForm = document.querySelector(".btn-showForm");
let formMobile = document.querySelector("#form-mobile");
let btnCloseForm = document.querySelector(".btn-formMobile");

btnShowForm.onclick = function () {
  formMobile.style.display = 'block';
};

btnCloseForm.onclick = function () {
  formMobile.style.display = 'none';
};