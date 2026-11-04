# Ad-Free Android TV Streaming Setup Guide

This comprehensive document outlines the necessary configurations to achieve an ad-free experience on your Android TV or Google TV box, covering both system-level ad-blocking for live sports and optimal setups for Stremio.

---

## 🛠️ Guide 1: Ad-Free Live Sports via FMHY over WiFi

Live sports sites indexed on FMHY (like StreamEast, DaddyLive, or SportsBite) rely heavily on script overlays and malicious background ad redirects. Because you are streaming over WiFi, these background ads steal critical wireless bandwidth, causing video playback to lag, buffer, or completely freeze. 

This configuration drops those ad networks at the system level so your wireless connection stays dedicated entirely to the live match stream.

### Step 1: Lock Down System-Level Privacy (Private DNS)
This step forces the Android TV / Google TV operating system to reject requests from known advertising servers before a browser even attempts to load them.

1. Turn on your streaming device, navigate to the top right corner, and click the **Settings Gear (⚙️)**.
2. Select **Network & Internet** $\rightarrow$ scroll down and click **Private DNS**.
3. Change the setting to **Private DNS provider hostname**.
4. Type in this exact address: 
   ```text
   dns.adguard-dns.com
   ```
   *(Note: Do not include protocols like `https://` or `://` in this field, or saving will fail.)*
5. Select **Save**.

### Step 2: Install a Shielded TV Browser
Standard TV browsers lack extension support and allow malicious redirect loops to crash the app. You must use a browser with a built-in ad-shield framework.

1. Open the official **Google Play Store** application directly on your TV.
2. Search for and download **AdGuard Browser** or **JioPages**.
3. Launch the browser, open its internal settings, and confirm that **Aggressive Ad-Blocking** and **Block Pop-ups/Redirects** are toggled **ON**.

### Step 3: Access and Play the Live Stream
1. Open your newly installed ad-blocking browser.
2. Navigate directly to your preferred streaming directory from the FMHY guide (such as `daddylive.mp` or `streameast.to`).
3. Find your sport, click on your match link, and press play using your remote control wheel.
4. Thanks to the network block in Step 1 and the browser shield in Step 2, intrusive pop-ups will fail to execute, leaving you with a clean, unthrottled live video broadcast running over your WiFi network.

---

## 🎬 Guide 2: Stremio + Torrentio + Real-Debrid Integration

Setting up Stremio combined with Torrentio and a premium Real-Debrid service creates a buffer-free alternative to traditional streaming services for static content (Movies and TV Shows).

### ⚠️ Important Operational Rules
* **No Live Sports support:** Real-Debrid only caches static, pre-existing torrent archives. Because live sports are real-time, instantaneous broadcast streams, they do not exist as torrent hashes. Use **Guide 1** for live sports matches.
* **Coexistence:** This configuration will **not** be broken or slowed down by the Private DNS setup in Guide 1. AdGuard DNS ignores Real-Debrid high-speed download streams because Real-Debrid is a clean hosting utility, not an ad domain.

### Deployment Workflow
```
[Stremio App] ➔ [Torrentio Add-on Scrapes Web] ➔ [Real-Debrid Premium High-Speed Servers] ➔ [Instant 4K Playback]
```

1. **Account Generation:** Create a premium account on Real-Debrid and locate your API Token / Private Key under your account settings panel.
2. **Add-on Configuration:** 
   * On your phone or computer browser, visit the Torrentio configuration page.
   * Paste your Real-Debrid API token into the provider section.
   * Select your preferred video resolutions (e.g., 4K, 1080p) and click **Install**.
3. **Synchronization:** Open the native **Stremio** app on your Bol TV box and sign in. Your entire cloud configuration, interface layout, and links will instantly synchronize onto the television layout.
4. **Playback:** Select any movie or series. Choose a link appended with `[RD]` to pull the file straight from Real-Debrid's server infrastructure at full bandwidth, completely bypassing public peer-to-peer torrent swarms (eliminating the need for a dedicated VPN).

---

_This guide is for informational purposes only. For medical advice or diagnosis, consult a professional. AI responses may include mistakes._