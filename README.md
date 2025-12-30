# Anti Ads Global – Extensão Chrome

Extensão de navegador criada para **reduzir anúncios em qualquer site**, com foco em **YouTube** e **Spotify Web**, sem quebrar o carregamento de páginas, vídeos ou players.

Essa extensão atua apenas no **lado do navegador (DOM)**. Ela **não bloqueia anúncios em nível de rede**.

---

## O que essa extensão faz

### Em qualquer site
- Remove banners publicitários comuns
- Remove iframes de anúncios conhecidos (Google Ads, DoubleClick, AdService)
- Remove promoções injetadas dinamicamente
- Funciona em sites tradicionais e SPAs

### No YouTube
- Remove anúncios visuais (banners, cards e overlays)
- Clica automaticamente no botão “Pular anúncio”, quando disponível
- Quando não é possível pular:
  - Silencia o anúncio
  - Acelera a reprodução
- Não interfere no carregamento do vídeo principal
- Não remove recomendações nem feed

### No Spotify Web
- Remove banners visuais
- Detecta anúncios de áudio e silencia automaticamente
- O áudio normal volta assim que a música retorna

---

## O que essa extensão NÃO faz

- Não bloqueia anúncios em nível de rede
- Não remove anúncios do aplicativo do Spotify (desktop ou mobile)
- Não impede o rastreamento do lado do servidor
- Não substitui o uBlock Origin

---

## Estrutura do projeto

anti-ads-global/
│
├── manifest.json
├── content.js
├── styles.css
└── README.md

---

## Instalação passo a passo (Chrome)

1. Clone o repositório ou crie a pasta manualmente
2. Abra o Chrome e vá para:

chrome://extensions

3. Ative o **Modo do desenvolvedor** (canto superior direito)
4. Clique em **Carregar sem compactação**
5. Selecione a pasta `anti-ads-global`
6. Abra uma nova aba e acesse qualquer site

Se algo não carregar corretamente, remova a extensão, feche o Chrome e adicione novamente.

---

## Como a extensão funciona

### CSS (`styles.css`)
- Oculta elementos de anúncio conhecidos
- Remove overlays e banners visuais
- Não usa seletores genéricos perigosos como `class*="ad"`

### JavaScript (`content.js`)
- Observa mudanças no DOM (MutationObserver)
- Remove anúncios inseridos dinamicamente
- No YouTube:
- Clica no botão de pular anúncio
- Silencia e acelera anúncios não puláveis
- No Spotify Web:
- Detecta quando o áudio é anúncio
- Silencia automaticamente

Não há manipulação de tempo (`currentTime`) do vídeo para evitar quebra do player.

---

## Limitações técnicas

Anúncios servidos diretamente pelo backend (como áudio do Spotify e alguns vídeos do YouTube) **não podem ser removidos completamente** usando apenas JavaScript e CSS.

Esse é um limite técnico do navegador, não da implementação.

---

## Uso recomendado

Para melhores resultados, utilize junto com:
- uBlock Origin (bloqueio de rede)
- SponsorBlock (YouTube)

Essa extensão atua como **camada adicional de controle visual e comportamento**.

---

## Aviso legal

Este projeto é apenas para fins educacionais e de estudo sobre DOM, SPAs e extensões de navegador.  
O uso é de responsabilidade do usuário.

---

## Licença

MIT
