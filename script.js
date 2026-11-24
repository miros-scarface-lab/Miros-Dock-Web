const downloadLinks = {
  Android: {
    github: "https://github.com/miros-scarface-lab/Miros-_Dock/releases/download/v1.0.0/Miros-Dock-v1.0.0.apk",
    web: "https://drive.google.com/file/d/1Ld5LL1jOHxNs8ojtEB3NvZDuCi2AIDfi/view?usp=sharing",
    webLabel: "Download APK (.apk)",
  },
  Windows: {
    github: "https://github.com/miros-scarface-lab/Miros-_Dock/releases/download/v1.0.0/MirosDock-Setup-1.0.0.exe",
    web: "https://drive.google.com/file/d/1ZEFivkR8yK9TjkmPOZ3ynKNBd4DfCW0N/view?usp=sharing",
    webLabel: "Download Windows (.exe)",
  },
};

const downloadDialog = document.querySelector(".download-dialog");
const dialogPlatform = document.querySelector("#dialog-platform");
const githubLink = document.querySelector("#github-link");
const webLink = document.querySelector("#web-link");

document.querySelectorAll("[data-platform]").forEach((button) => {
  button.addEventListener("click", () => {
    const platform = button.dataset.platform;
    const links = downloadLinks[platform];

    if (!links) {
      return;
    }

    dialogPlatform.textContent = platform;
    githubLink.href = links.github;
    webLink.href = links.web;
    if (links.webLabel) {
      webLink.innerHTML = `${links.webLabel} <span aria-hidden="true">↗</span>`;
    }
    downloadDialog.showModal();
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
