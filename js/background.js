chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "github.com.maximovj.QRTransferGo.share_by_qr",
        title: "Compartir mediante QR",
        contexts: ["selection", "link", "image", "page"]
    });
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

  chrome.storage.local.set({ qrData }, () => {
    chrome.action.openPopup();
  });
});