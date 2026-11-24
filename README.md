# Miros Dock Web (v1.0.0)

Official landing page for **Miros Dock V1.0.0** — high-speed local file sharing and portable Web Dock server for Android and Windows.

## 🚀 About Miros Dock

Miros Dock is a dual-capability application built with Flutter:

1. **Miros Send (High-Speed Local P2P Transfer)**:
   - Direct device-to-device file transfers over local Wi-Fi or hotspot.
   - Zero internet data usage and no cloud dependency.
   - Automatic local discovery (mDNS) and instant QR code pairing.
   - Resumable chunked file transfers and end-to-end security.

2. **Portable Web Dock (Browser Access Server)**:
   - Built-in local HTTP server (Shelf + Isar DB) directly on your device.
   - Browse, stream videos/music, and download files from any web browser on the network without installing the app.
   - Two-way upload from external devices back to your dock.
   - PIN / password security protection.

## 📥 Downloads (v1.0.0)

- **Android (APK)**:
  - [GitHub Release](https://github.com/miros-scarface-lab/Miros-_Dock/releases/download/v1.0.0/Miros-Dock-v1.0.0.apk)
  - [Google Drive Mirror](https://drive.google.com/file/d/1Ld5LL1jOHxNs8ojtEB3NvZDuCi2AIDfi/view?usp=sharing)
- **Windows (Setup .exe)**:
  - [GitHub Release](https://github.com/miros-scarface-lab/Miros-_Dock/releases/download/v1.0.0/MirosDock-Setup-1.0.0.exe)
  - [Google Drive Mirror](https://drive.google.com/file/d/1ZEFivkR8yK9TjkmPOZ3ynKNBd4DfCW0N/view?usp=sharing)

## 🌐 Web Project Overview

This repository hosts the static landing page for Miros Dock, built with clean semantic HTML5, modern CSS, and lightweight JavaScript.

### Project Structure

```text
.
├── README.md
├── index.html       # Landing page structure & metadata
├── styles.css       # Responsive styling & themes
├── script.js        # Dynamic download modal & platform routing
└── favicon.svg      # Site icon
```

### Local Development

1. Open the project folder:
   ```bash
   cd Miros-Dock-Web
   ```
2. Start a local server:
   ```bash
   python -m http.server 8000
   ```
3. Open `http://localhost:8000` in your browser.

## 📄 License

Created by Mir A K Sajid. All rights reserved.
