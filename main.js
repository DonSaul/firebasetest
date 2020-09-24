const db = firebase.firestore();

const enviar = document.getElementById("main");





enviar.addEventListener("submit", async(e) =>{
    e.preventDefault();
    const pregunta = enviar["Pregunta"].value;
    const recurso = enviar["ReC"].value;
    const respc = enviar["ResC"].value;
    const resin1 = enviar["ResINC1"].value;
    const resin2 = enviar["ResINC2"].value;
    const resin3 = enviar["ResINC3"].value;

    const response =  await db.collection("examenes").doc().set({
      pregunta,recurso,respc,resin1,resin2,resin3
    })


    console.log(response)
    console.log(pregunta,recurso,respc,resin1,resin2,resin3)
    alert("Pregunta Enviada")
})


const getexam = () => db.collection("examenes").get();
const quizcontainer = document.getElementById("preguntased");

window.addEventListener("DOMContentLoaded", async(e) => {
  
          const querySnapshot = await getexam();
      
          querySnapshot.forEach(doc => {
         
            console.log(doc.data())
            const datapregunta = doc.data();
            quizcontainer.innerHTML += `<div>
            
            ${datapregunta.pregunta}<br>
           
            <div>
            <button class="btn btn-primary">Editar</button>
            <button class="btn btn-secondary">Borrar</button></div>
            </div>`
          });
    });


console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);