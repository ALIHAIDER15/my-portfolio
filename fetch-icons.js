const fs = require('fs');
const https = require('https');
const path = require('path');

const download = (url, dest) => {
    return new Promise((resolve, reject) => {
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
            // Handle redirects
            if (res.statusCode === 301 || res.statusCode === 302) {
                return download(res.headers.location, dest).then(resolve).catch(reject);
            }
            if (res.statusCode === 200) {
                const file = fs.createWriteStream(dest);
                res.pipe(file);
                file.on('finish', () => {
                    file.close(resolve);
                });
            } else {
                console.log(`Failed to download ${url}: ${res.statusCode}`);
                resolve(); // resolve anyway to not break Promise.all
            }
        }).on('error', reject);
    });
};

const icons = [
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg', name: 'vs.svg' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg', name: 'sqlserver.svg' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg', name: 'azure.svg' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg', name: 'photoshop.svg' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg', name: 'jira.svg' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Anthropic_logo.svg', name: 'claude.svg' }
];

const targetDir = path.join(__dirname, 'assets');

Promise.all(icons.map(i => download(i.url, path.join(targetDir, i.name))))
    .then(() => console.log('All icons downloaded successfully!'))
    .catch(err => console.error(err));
