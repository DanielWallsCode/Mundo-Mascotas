let fect = document.querySelector('.fecha');
let fecha = new Date()


fect.innerText = `${fecha.getFullYear()}/${fecha.getMonth() + 1}/${fecha.getDate()}`