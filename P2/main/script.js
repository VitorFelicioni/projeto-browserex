const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const form = document.getElementById('bd')
    if(mode.classList.contains('fa-sun')) {
        mode.classList.remove('fa-sun');
        mode.classList.add('fa-moon');

        form.classList.add('light')
        return;
    }

    mode.classList.add('fa-sun');
    mode.classList.remove('fa-moon');
    form.classList.remove('light');
});


document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnAll").addEventListener("click", mostrarTodos);
  document.getElementById("btnActive").addEventListener("click", mostrarAtivos);
  document.getElementById("btnInactive").addEventListener("click", mostrarInativos);
  const caixas = document.querySelectorAll(".box");

  function mudarForma() {
    caixas.forEach(box => {
      const checkbox = box.querySelector('input[type="checkbox"]');
      const status = checkbox.checked ? "ativo" : "inativo";
      box.setAttribute("data-status", status);
    });
  }

  function mostrarTodos() {
    caixas.forEach(box => box.classList.remove("hidden"));
  }

  function mostrarAtivos() {
    mudarForma();
    caixas.forEach(box => {
      const status = box.getAttribute("data-status");
      box.classList.toggle("hidden", status !== "ativo");
    });
  }

  function mostrarInativos() {
    mudarForma();
    caixas.forEach(box => {
      const status = box.getAttribute("data-status");
      box.classList.toggle("hidden", status !== "inativo");
    });
  }

  document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
  cb.addEventListener("change", mudarForma);
  });

  mudarForma();
});