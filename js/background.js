// Función para mostrar una notificación
function showNotification(message) {
  chrome.notifications.create({
    type: 'basic',
    iconUrl: '../assets/icon.png', // Cambia esto al icono que prefieras
    title: chrome.i18n.getMessage("ext_name"),
    message,
    priority: 1
  });
}

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "github.com.maximovj.QRTransferGo.share_by_qr",
        title: chrome.i18n.getMessage("share_by_qr"),
        contexts: ["selection", "link", "image", "page"]
    });

    showNotification(chrome.i18n.getMessage("notification_1"));
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

  showNotification(chrome.i18n.getMessage("notification_2"));

  chrome.storage.local.set({ qrData }, () => {
    chrome.action.openPopup();
  });
});