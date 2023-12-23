let inbut = document.querySelector(".amount")

let select = document.querySelector(".select")

let select2 = document.querySelector(".select2")

let btn = document.querySelector(".buttn")

let show = document.querySelector(".result")

let delet = document.querySelector(".delete")

// let flag = ""

let data = ""

let box2 = ""







fetch("https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_dPcwW3soW4D0sZa4B6m9KyrG5VXU1wEI48Vuk8dx")
  .then((response) => response.json())
  .then((all) => {
    data = all.data
    showw()
    convert()
  })


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function showw() {
  let box = ""
  for (let key in data) { box += `<option>${key}</option>` }

  select.innerHTML = box
  select2.innerHTML = box


}


function convert() {




  btn.addEventListener("click", () => {



    show.innerHTML = `${inbut.value} ${select.value}   =    ${Math.round(inbut.value * data[select2.value])} ${select2.value}   `







  })

}





delet.addEventListener("click", () => { show.innerHTML = ``, inbut.value = `` })








