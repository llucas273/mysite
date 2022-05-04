const formm = document.querySelector("#form");
formm.addEventListener('submit', handleSubmit);
async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this);
    const response = await fetch(this.action,{
            method: this.method,
            body:form,
            headers:{'Accept':'aplication/json'}
    });
    if(response.ok){
        this.reset();
        alert('Correo enviado con exito[OK]');
    }
}

