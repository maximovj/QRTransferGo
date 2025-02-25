# Justification for contextMenus

QRTransferGo requires the contextMenus permission to add custom options to the browser's context menu, allowing users to generate QR codes directly from any link or selected text on the webpage. This functionality enhances the user experience by making it easier to create QR codes without directly interacting with the extension's interface, making the process faster and more efficient.

The contextMenus permission is used securely and does not collect or store any personal information, ensuring that user privacy is not compromised. This feature is designed to provide a more intuitive and accessible way to generate QR codes.

---

QRTransferGo requiere el permiso de contextMenus para agregar opciones personalizadas al menú contextual del navegador, permitiendo a los usuarios generar códigos QR directamente desde cualquier enlace o texto seleccionado en la página web. Esta funcionalidad mejora la experiencia al facilitar la creación de códigos QR sin tener que interactuar directamente con la interfaz de la extensión, haciendo el proceso más rápido y eficiente. 

El permiso de contextMenus se usa de manera segura y no recopila ni almacena información personal, garantizando que la privacidad del usuario no se vea comprometida. Esta característica está diseñada para ofrecer una forma más intuitiva y accesible de generar códigos QR.

# Justification for storage

QRTransferGo requires the storage permission to securely store generated QR codes locally, allowing users to access their history and reuse links without having to generate them again. This permission also enables customization of the user experience, such as setting preferences or adjusting QR code format settings.

All information is stored locally in the browser and is not transmitted to external servers, ensuring user data privacy and security. The storage permission is used exclusively to enhance the extension's functionality and provide a more personalized and efficient experience.

---

QRTransferGo requiere el permiso de storage para guardar de manera local y segura los códigos QR generados, lo que permite a los usuarios acceder a su historial y reutilizar enlaces sin tener que generarlos nuevamente. Este permiso también facilita la personalización de la experiencia del usuario, como la configuración de preferencias o ajustes relacionados con el formato del código QR. 

Toda la información se guarda localmente en el navegador, sin ser transmitida a servidores externos, garantizando la privacidad y seguridad de los datos del usuario. El permiso de storage se utiliza exclusivamente para mejorar la funcionalidad de la extensión y ofrecer una experiencia más personalizada y eficiente.

# Justification for tabs

QRTransferGo requires the tabs permission to enhance the user experience by managing multiple tabs and enabling smoother interaction with the extension. This permission allows features such as retrieving the history of generated QR codes, updating content in the active tab, and optimizing the generation process without interrupting the user's navigation.

The extension does not collect or store personal information, as access to tabs is used only while the extension is in use. This ensures a secure, efficient experience without compromising user privacy.

---

QRTransferGo requiere el permiso de tabs para mejorar la experiencia del usuario al gestionar múltiples pestañas y permitir una interacción más fluida con la extensión. Este permiso posibilita funciones como recuperar el historial de códigos QR generados, actualizar contenido en la pestaña activa y optimizar el proceso de generación sin interrumpir la navegación del usuario. 

La extensión no recopila ni almacena información personal, ya que el acceso a las pestañas se utiliza únicamente mientras la extensión está en uso. Esto garantiza una experiencia segura, eficiente y sin afectar la privacidad del usuario.

# Justification for activeTab

QRTransferGo requires the activeTab permission to interact with the active tab when the user opens the extension. This permission temporarily grants access to the URL of the current webpage, making it easier to generate a QR code quickly without manually copying and pasting the link.

No information is stored or transmitted to external servers, as all processing occurs locally within the extension. The use of activeTab is limited to user interaction, ensuring a seamless, secure, and efficient experience without compromising privacy.

---

QRTransferGo requiere el permiso de activeTab para interactuar con la pestaña activa cuando el usuario abre la extensión. Este permiso permite acceder temporalmente a la URL de la página en la que el usuario se encuentra, facilitando la generación rápida de un código QR sin necesidad de copiar y pegar manualmente el enlace. 

No se almacena ni transmite ninguna información a servidores externos, ya que el procesamiento ocurre localmente en la extensión. El uso de activeTab es limitado a la interacción del usuario y garantiza una experiencia fluida, segura y eficiente sin afectar la privacidad. 

# Justification for scripting

QRTransferGo requires the scripting permission to interact with the active webpage and enhance the extension's usability. This permission allows controlled code injection to capture links or multimedia content directly from the user's page, making it easier to convert them into QR codes without manually copying and pasting.

Additionally, the use of scripting is entirely local, and no information is stored or transmitted to external servers, ensuring user privacy and security. This permission is used exclusively to optimize the extension's functionality and provide a smoother and more efficient experience.

---

QRTransferGo requiere el permiso de scripting para interactuar con la página web activa y mejorar la usabilidad de la extensión. Este permiso permite inyectar código de manera controlada para capturar enlaces o contenido multimedia directamente desde la página del usuario y facilitar su conversión en códigos QR sin necesidad de copiar y pegar manualmente. 

Además, el uso de scripting es completamente local y no se almacena ni transmite ninguna información a servidores externos, garantizando la privacidad y seguridad del usuario. Este permiso se utiliza exclusivamente para optimizar la funcionalidad de la extensión y ofrecer una experiencia más fluida y eficiente. 

# Justification for notifications

QRTransferGo uses the notifications permission to enhance the user experience by providing real-time alerts about the status of QR code generation. These notifications inform the user when a QR code has been successfully created, if an error occurs during the process, or simply to thank them for using the extension.

This permission is essential for delivering a more intuitive and seamless experience, allowing users to receive confirmations without constantly interacting with the extension's interface. Additionally, QRTransferGo does not use intrusive notifications or collect personal information, ensuring a safe and distraction-free experience.

---

QRTransferGo utiliza el permiso de notifications para mejorar la experiencia del usuario al proporcionar avisos en tiempo real sobre el estado de la generación de códigos QR. Estas notificaciones informan al usuario cuando un código QR ha sido creado con éxito, si ha ocurrido un error durante el proceso o simplemente para agradecerle por usar la extensión. 

Este permiso es esencial para brindar una experiencia más intuitiva y fluida, permitiendo que los usuarios reciban confirmaciones sin necesidad de interactuar constantemente con la interfaz de la extensión. Además, QRTransferGo no utiliza notificaciones intrusivas ni recopila información personal, garantizando una experiencia segura y sin distracciones.

# Justification for host permission

QRTransferGo requires host permissions to allow users to generate QR codes from external links, such as social media, videos, music, images, and files. This permission ensures that the extension can process and verify the entered links without compromising user privacy, as no data is stored or sent to external servers.

Additionally, all processing occurs locally, ensuring a smooth and secure experience. This permission is used exclusively to convert content into QR codes efficiently and without interruptions.

---

QRTransferGo requiere permisos de host para permitir a los usuarios generar códigos QR a partir de enlaces externos, como redes sociales, videos, música, imágenes y archivos. Este permiso garantiza que la extensión pueda procesar y verificar los enlaces ingresados sin afectar la privacidad del usuario, ya que no se almacenan datos ni se envían a servidores externos. 

Además, el procesamiento ocurre localmente, asegurando que la experiencia sea fluida y segura. El permiso se usa exclusivamente para convertir contenido en códigos QR de manera eficiente y sin interrupciones. 

# Do you use remote code?

I am using remote code stored on platforms like GitHub to manage the extension's source code and ensure it is always updated and optimized. This approach enables more efficient development, allowing for collaborative work and centralized updates without requiring manual changes to each extension installation.

Additionally, the use of remote code for generating QR codes refers to the integration of external libraries and services that process the links or text provided by the user, ensuring a fast and efficient process. However, all QR code processing is performed locally in the user's browser, guaranteeing that no sensitive data is shared or user privacy is compromised.

This way, remote code enhances functionality without invading user privacy or storing personal information on external servers.

---

Estoy utilizando un código remoto almacenado en plataformas como GitHub para gestionar el código fuente de la extensión y asegurar que siempre esté actualizado y optimizado. Este enfoque permite un desarrollo más eficiente, ya que puedo trabajar de manera colaborativa y realizar actualizaciones de forma centralizada sin tener que realizar cambios manuales en cada instalación de la extensión. 

Además, el uso de código remoto para generar los códigos QR se refiere a la integración de bibliotecas y servicios externos que procesan los enlaces o textos proporcionados por el usuario, garantizando que el proceso sea rápido y eficiente. Sin embargo, todo el procesamiento de los códigos QR se realiza localmente en el navegador del usuario, asegurando que no se compartan datos sensibles ni se comprometa la privacidad. 

De este modo, el código remoto facilita la funcionalidad sin invadir la privacidad del usuario ni almacenar información personal en servidores externos.

# Política de Privacidad

https://github.com/maximovj/QRTransferGo/blob/master/privacy-policy.md