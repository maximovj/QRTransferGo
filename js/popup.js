document.addEventListener("DOMContentLoaded", () => {
  loadHistory();
  
  chrome.storage.local.get("qrData", function (data) {
    if (data.qrData) {
      document.getElementById("qr-input").value = data.qrData;
      generateQRCode(data.qrData);
      chrome.storage.local.remove("qrData");
    }
  });
});

document.getElementById("generate-qr").addEventListener("click", () => {
  const inputText = document.getElementById("qr-input").value;
  if (inputText) {
    generateQRCode(inputText);
  } else {
    alert(chrome.i18n.getMessage("error_1"));
  }
});

document.getElementById("clear-history").addEventListener("click", () => {
  chrome.storage.local.remove("history", () => loadHistory());
});

document.getElementById("download-qr").addEventListener("click", () => {
  downloadQRCode();
});

// Función comprobar si es un enlace válida
function isLink(texto) {
  try {
    new URL(texto);
    return true;
  } catch (_) {
    // Si `new URL()` falla, usa una regex como alternativa
    return /^(www\.)?[\w-]+\.[a-z]{2,}(\S*)?$/i.test(texto);
  }
}

// Función para generar código QR
function generateQRCode(text) {
  
  try {
    countCharacters();
    document.getElementById("qr-code").classList.remove("d-none");
    document.getElementById("qr-code").classList.add("d-flex");
    const qr = new QRious({
      element: document.getElementById("qr-canvas"),
      size: 1024,
      value: text,
    });
    document.getElementById("qr-img").src = qr.toDataURL();
    saveToHistory(text);
  } catch (error) {
    document.getElementById("qr-code").innerHTML = chrome.i18n.getMessage("error_2");
    document.getElementById("qr-code").classList.add("d-flex");
    document.getElementById("qr-code").classList.add("msg-error");
  }

  setTimeout(() => {
    document.getElementById("download-qr").disabled = false;
  }, 500);
}

// Función para descargar QR como imagen
function downloadQRCode() {
  const qrCanvas = document.querySelector("#qr-code canvas");
  if (!qrCanvas) return alert(chrome.i18n.getMessage("error_3"));
  
  const qrImage = qrCanvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = qrImage;
  link.download = "QRTransferGo_QR-Code.png";
  link.click();
}

// Función para guardar en historial
function saveToHistory(text) {
  chrome.storage.local.get({ history: [] }, function (data) {
    let history = data.history;
    if (!history.includes(text)) {
      history.unshift(text);
      if (history.length > 10) history.pop();
      chrome.storage.local.set({ history: history }, loadHistory);
    }
  });
}

// Función para cargar historial
function loadHistory() {
  chrome.storage.local.get({ history: [] }, function (data) {
    const historyContainer = document.getElementById("history");
    historyContainer.innerHTML = "";

    data.history.forEach((item, index) => {
      const li = document.createElement("li");
      li.classList.add("history-item");

      // Contenido del historial
      const textSpan = document.createElement("span");
      textSpan.textContent = item;
      textSpan.title = chrome.i18n.getMessage("li_title");

      // Contenedor para organizar los elementos en columna
      const actions = document.createElement("div");
      actions.classList.add("btn-actions");

      // Botón de abrir debajo
      const openBtn = document.createElement("button");
      openBtn.textContent = 'Abrir';
      openBtn.classList.add("open-btn");
      openBtn.addEventListener("click", (event) => {
        console.log('abriendo...');
        event.stopPropagation(); // Evita que el click seleccione el ítem
        if(isLink(item)) {
          openInNewTabHistoryItem(item);
        } else {
          document.getElementById("qr-input").value = item;
          countCharacters();
        }
      });
      actions.appendChild(openBtn);

      // Botón de copiar debajo
      const copyBtn = document.createElement("button");
      copyBtn.textContent = 'Copiar';
      copyBtn.classList.add("copy-btn");
      copyBtn.addEventListener("click", (event) => {
        console.log('copiar...');
        event.stopPropagation(); // Evita que el click seleccione el ítem
        copyHistoryItem(item);
      });
      actions.appendChild(copyBtn);

      // Botón de generar QR debajo
      const regenerateBtn = document.createElement("button");
      regenerateBtn.textContent = chrome.i18n.getMessage("generate_qr");
      regenerateBtn.classList.add("regenerate-btn");
      regenerateBtn.addEventListener("click", (event) => {
        event.stopPropagation(); // Evita que el click seleccione el ítem
        document.getElementById("qr-input").value = item;
        generateQRCode(item);
      });
      actions.appendChild(regenerateBtn);
      
      // Botón de eliminación debajo
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = chrome.i18n.getMessage("delete_qr");
      deleteBtn.classList.add("delete-btn");
      deleteBtn.addEventListener("click", (event) => {
        event.stopPropagation(); // Evita que el click seleccione el ítem
        removeHistoryItem(index);
      });
      actions.appendChild(deleteBtn);

      // Contenedor para organizar los elementos en columna
      const wrapper = document.createElement("div");
      wrapper.classList.add("history-wrapper");
      wrapper.appendChild(textSpan);
      wrapper.appendChild(actions);

      // Agregar elementos al li
      li.appendChild(wrapper);
      historyContainer.appendChild(li);
    });
  });
}

// Función para eliminar un item del historial
function removeHistoryItem(index) {
  chrome.storage.local.get({ history: [] }, function (data) {
    const updatedHistory = data.history.filter((_, i) => i !== index);
    chrome.storage.local.set({ history: updatedHistory }, loadHistory);
  });
}

// Función para copiar un item del historial
function copyHistoryItem(item) {
  if (!item) return;
  navigator.clipboard.writeText(item);
}

// Función para abrir / navegar a un item del historial
function openInNewTabHistoryItem(item) {
  if (!item) return;
  chrome.tabs.create({ url: item });
}

// Función para contador de caracteres
function countCharacters() {
  const charCount = document.getElementById("char-count");
  charCount.textContent = `${document.getElementById("qr-input").value.length} / 1600`;
}

document.addEventListener("DOMContentLoaded", () => {
  const appName = chrome.i18n.getMessage("ext_name"); // Obtiene "QRTransferGo"
  const description = chrome.i18n.getMessage("p_description", appName); // Reemplaza {app_name} con el nombre real

  document.getElementById("p-description").innerHTML = description.replace(
    '{app_name}',
    `<span style="color: #555;">${appName}</span>`
  );
  
  document.getElementById("qr-input").setAttribute('placeholder', chrome.i18n.getMessage("qr_input"));

  document.getElementById("generate-qr").innerHTML = chrome.i18n.getMessage("generate_qr");

  document.getElementById("download-qr").innerHTML = chrome.i18n.getMessage("download_qr");
 
  document.getElementById("clear-history").innerHTML = chrome.i18n.getMessage("clear_history");
  
  document.getElementById("title-history").innerHTML = chrome.i18n.getMessage("title_history");

  
  document.getElementById("qr-input").addEventListener("input", () => {
    countCharacters();
  });
});
