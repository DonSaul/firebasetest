const db = firebase.firestore();

const enviar = document.getElementById("main");

const getexam = () => db.collection("examenes").get();


enviar.addEventListener("submit", e =>{
    e.preventDefault();
    const pregunta = enviar["Pregunta"].value;
    const recurso = enviar["ReC"].value;
    const respc = enviar["ResC"].value;
    const resin1 = enviar["ResINC1"].value;
    const resin2 = enviar["ResINC2"].value;
    const resin3 = enviar["ResINC3"].value;

    const response =  db.collection("examenes").doc().set({
      pregunta,recurso,respc,resin1,resin2,resin3
    })


    console.log(response)
    console.log(pregunta,recurso,respc,resin1,resin2,resin3)
})

  window.addEventListener("DOMContentloaded", async (e)=>{

         const exam = await  getexam();
          console.log(exam)


  })
