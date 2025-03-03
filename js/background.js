// Función para mostrar una notificación
function showNotification(message) {
  chrome.notifications.create({
    type: "basic",
    iconUrl: "../assets/icon.png", // Cambia esto al icono que prefieras
    title: chrome.i18n.getMessage("ext_name"),
    message,
    priority: 1,
  });
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "github.com.maximovj.QRTransferGo.share_by_qr",
    title: chrome.i18n.getMessage("share_by_qr"),
    contexts: ["selection", "link", "image", "page"],
  });

  showNotification(chrome.i18n.getMessage("notification_1"));
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  let qrData = "";

  if (info.selectionText) {
    const text = info.selectionText.trim();

    // Separar el texto en palabras
    const words = text.split(/\s+/);

    // Verificar si hay al menos 3 palabras al principio y 3 al final
    if (words.length > 24) {
      // Obtener las primeras 3 palabras y las últimas 3 palabras
      const firstWords = encodeURIComponent(words.slice(0, 3).join(" "));
      const lastWords = encodeURIComponent(words.slice(-3).join(" "));

      // Codificar para URL
      const encodedText = `${firstWords},${lastWords}`;

      // Eliminar cualquier `#:~:text=` existente en la URL
      qrData = tab.url.split("#:~:text=")[0];

      // Agregar el fragmento correctamente
      qrData += `#:~:text=${encodedText}`;
    } else {
      // Si no hay suficientes palabras, usa el texto como qrData
      qrData = info.selectionText;
    }
  } else if (info.linkUrl) {
    qrData = info.linkUrl;
  } else if (info.srcUrl) {
    qrData = info.srcUrl;
  } else {
    qrData = tab.url;
  }

  showNotification(chrome.i18n.getMessage("notification_2"));

  chrome.storage.local.set({ qrData }, () => {
    chrome.action.openPopup();
  });
});
