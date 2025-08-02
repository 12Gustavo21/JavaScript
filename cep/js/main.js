const cep = document.querySelector("#cep");
const street = document.querySelector("#street");
const neighborhood = document.querySelector("#neighborhood");
const state = document.querySelector("#state");
const city = document.querySelector("#city");
const cepError = document.querySelector("#cepError");

cep.addEventListener("focusout", async () => {
  try {
    const onlyNumbers = /^[0-9]+$/;
    const cepValidate = /^[0-9]{8}$/;

    if (!onlyNumbers.test(cep.value) || !cepValidate.test(cep.value)) {
      throw { cep_error: "CEP INVALIDO" };
    }

    const response = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);

    if (!response.ok) {
      throw await response.json();
    }

    const responseCep = await response.json();

    street.value = responseCep.logradouro;
    neighborhood.value = responseCep.bairro;
    state.value = responseCep.uf;
    city.value = responseCep.localidade;


  } catch (error) {
    if (!cep.value == "") {
      if (error?.cep_error) {
        cepError.classList.remove("hidden");
        setTimeout(() => {
          cepError.classList.add("hidden");
        }, 5000);
      }
    }
  }
});
