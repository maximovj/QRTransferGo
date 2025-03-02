document.addEventListener("DOMContentLoaded", () => {
  loadHistory();
  
  chrome.storage.local.get("qrData", function (data) {
    if (data.qrData) {
      document.getElementById("qr-input").value = data.qrData;
      generateQRCode(data.qrData);
      chrome.storage.local.remove("qrData");
    }
  });

  const appName = chrome.i18n.getMessage("ext_name"); // Obtiene "QRTransferGo"
  const description = chrome.i18n.getMessage("p_description", appName); // Reemplaza {app_name} con el nombre real

  document.getElementById("p-description").innerHTML = description.replace(
    '{app_name}',
    `<span style="color: #555;">${appName}</span>`
  );
  
  document.getElementById("ext-version").innerHTML = chrome.i18n.getMessage("ext_version");

  document.getElementById("qr-input").setAttribute('placeholder', chrome.i18n.getMessage("qr_input"));

  document.getElementById("generate-qr").innerHTML = chrome.i18n.getMessage("generate_qr");

  document.getElementById("download-qr").innerHTML = chrome.i18n.getMessage("download_qr");
 
  document.getElementById("clear-history").innerHTML = chrome.i18n.getMessage("clear_history");
  
  document.getElementById("title-history").innerHTML = chrome.i18n.getMessage("title_history");
  
  document.getElementById("created_by").innerHTML = chrome.i18n.getMessage("created_by");
  
  document.getElementById("qr-input").addEventListener("input", () => { countCharacters(); });
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