chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "github.com.maximovj.QRTransferGo.share_by_qr",
        title: "Compartir mediante QR",
        contexts: ["selection", "link", "image", "page"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    chrome.action.openPopup();
});
