document.getElementById("search-box").onclick("click", function( event ) {
    // mostra o contador de cliques dentro da div clicada
    event.target.innerHTML = "Total de cliques: " + event.detail;
  }, false);