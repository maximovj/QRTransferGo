function detectarSeleccion() {
    const selection = window.getSelection();
    const selectedText = selection.toString();
  
    // Si no se seleccionó nada, salimos de la función
    if (!selectedText) {
      alert("No has seleccionado nada.");
      return;
    }
  
    // Verificamos si es una imagen
    const selectedImage = document.querySelector('img:hover');
    if (selectedImage) {
      alert("¡Has seleccionado una imagen!");
      return;
    }
  
    // Verificamos si es un número de teléfono
    const phonePattern = /\(?\+?[0-9]*\)?([0-9_\- \(\)]*)\d+/;
    if (phonePattern.test(selectedText)) {
      alert("¡Has seleccionado un número de teléfono!");
      return;
    }
  
    // Verificamos si es un correo electrónico
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailPattern.test(selectedText)) {
      alert("¡Has seleccionado un correo electrónico!");
      return;
    }
  
    // Verificamos si es código HTML (muy básico)
    const htmlPattern = /<\/?[a-z][\s\S]*>/i;
    if (htmlPattern.test(selectedText)) {
      alert("¡Has seleccionado código HTML!");
      return;
    }
  
    // Si es solo texto
    alert("¡Has seleccionado texto!");
  }
  