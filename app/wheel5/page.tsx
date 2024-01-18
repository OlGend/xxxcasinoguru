// fortunewheel/page.tsx
"use client"
// fortunewheel/page.tsx
import React, { useEffect } from 'react';
// import js from "../../public/offlineclient"

const GamePage = () => {
  useEffect(() => {
    // JavaScript из вашего HTML-файла
    if (location.protocol.substr(0, 4) === 'file') {
      alert("Веб-экспорт не будет работать, пока вы его не загрузите. (При выполнении в протоколе file: браузеры блокируют многие функции из соображений безопасности.)");
    }

    // Дополнительные скрипты из вашего HTML-файла
    const supportCheckScript = document.createElement('script');
    supportCheckScript.src = 'scripts/supportcheck.js';
    document.body.appendChild(supportCheckScript);

    const offlineClientScript = document.createElement('script');
    offlineClientScript.src = '../../public/offlineclient.js';
    offlineClientScript.type = 'module';
    document.body.appendChild(offlineClientScript);

    const mainScript = document.createElement('script');
    mainScript.src = 'scripts/main.js';
    mainScript.type = 'module';
    document.body.appendChild(mainScript);

    const registerSwScript = document.createElement('script');
    registerSwScript.src = 'scripts/register-sw.js';
    registerSwScript.type = 'module';
    document.body.appendChild(registerSwScript);

    // При необходимости, вы можете очистить созданные скрипты при размонтировании компонента
    return () => {
      document.body.removeChild(supportCheckScript);
      document.body.removeChild(offlineClientScript);
      document.body.removeChild(mainScript);
      document.body.removeChild(registerSwScript);
    };
  }, []);

  return (
    <div>
        <h2>dsdsdsds</h2>
        <iframe
          id="myIframe"
          src="/index.html"
          width="1200"
          height="675"
        ></iframe>
      {/* Контент для вашей страницы */}
      <noscript>
        <div id="notSupportedWrap">
          <h2 id="notSupportedTitle">Для просмотра контента требуется JavaScript</h2>
          <p className="notSupportedMessage">Похоже, JavaScript отключен. Пожалуйста, включите его для просмотра этого контента.</p>
        </div>
      </noscript>
      {/* Добавьте любой дополнительный контент или компоненты здесь */}
    </div>
  );
};

export default GamePage;
