// Función para mostrar una notificación
function mostrarNotificacion(message) {
  chrome.notifications.create({
    type: 'basic',
    iconUrl: '../assets/icon.png', // Cambia esto al icono que prefieras
    title: 'QRTransferGo',
    message,
    priority: 1
  });
}

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "github.com.maximovj.QRTransferGo.share_by_qr",
        title: "Compartir mediante QR",
        contexts: ["selection", "link", "image", "page"]
    });

    mostrarNotificacion('Genera y comparte multimedia mediante códigos QR, gracias por usar la extensión.');
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  let qrData = "";

  if (info.selectionText) {
    qrData = info.selectionText;
  } else if (info.linkUrl) {
    qrData = info.linkUrl;
  } else if (info.srcUrl) {
    qrData = info.srcUrl;
  } else {
    qrData = tab.url;
  }

  mostrarNotificacion('Generando código QR, gracias por usar la extensión.');

  chrome.storage.local.set({ qrData }, () => {
    chrome.action.openPopup();
  });
});