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
    alert("Por favor, ingresa un texto o enlace");
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
  document.getElementById("qr-code").innerHTML = "";
  document.getElementById("qr-code").classList.add("d-inline-block");
  new QRCode(document.getElementById("qr-code"), {
    text: text,
    width: 180,
    height: 180,
    correctLevel : QRCode.CorrectLevel.L,
  });

  setTimeout(() => {
    document.getElementById("download-qr").disabled = false;
  }, 500);
}

// Función para descargar QR como imagen
function downloadQRCode() {
  const qrCanvas = document.querySelector("#qr-code canvas");
  if (!qrCanvas) return alert("Genera un código QR primero.");
  
  const qrImage = qrCanvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = qrImage;
  link.download = "QR_Code.png";
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
      li.title = 'Generar QR';
      li.addEventListener("click", () => {
        document.getElementById("qr-input").value = item;
        generateQRCode(item);
      });
      historyContainer.appendChild(li);
    });
  });
}
