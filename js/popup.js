document.addEventListener("DOMContentLoaded", () => {
  loadHistory();
  
  chrome.storage.local.get("qrData", function (data) {
    if (data.qrData) {
      document.getElementById("qr-input").value = data.qrData;
      generateQRCode(data.qrData);
      saveToHistory(data.qrData);
      chrome.storage.local.remove("qrData");
    }
  });
});

document.getElementById("generate-qr").addEventListener("click", () => {
  const inputText = document.getElementById("qr-input").value;
  if (inputText) {
    generateQRCode(inputText);
    saveToHistory(inputText);
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

// Función para generar código QR
function generateQRCode(text) {
  try {
    document.getElementById("qr-code").innerHTML = "";
    document.getElementById("qr-code").classList.add("d-inline-block");
    new QRCode(document.getElementById("qr-code"), {
      text: text,
      width: 90,
      height: 90,
      correctLevel : QRCode.CorrectLevel.L,
    });
  } catch (error) {
    document.getElementById("qr-code").innerHTML = chrome.i18n.getMessage("error_2");
    document.getElementById("qr-code").classList.add("d-inline-block");
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
    data.history.forEach(item => {
      const li = document.createElement("li");
      li.classList.add("history-item");
      li.textContent = item;
      li.title = chrome.i18n.getMessage("li_title");
      li.addEventListener("click", () => {
        document.getElementById("qr-input").value = item;
        generateQRCode(item);
      });
      historyContainer.appendChild(li);
    });
  });
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
});
