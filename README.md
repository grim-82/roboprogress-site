# RobotProgress Assistência Técnica Unipessoal, Limitada — website

Static multilingual site in Portuguese (default) and English. Visitors can switch language in the header; their choice is remembered in the browser. No build tools or server are required.

Live site: https://grim-82.github.io/roboprogress-site/

## Before publishing

Contact details (phone, email and address) are in the Contact section of `index.html`; edit them there when they change. Used-equipment listings, their titles and photos are generated from the folders next to this project and committed as static HTML.

## Publish on GitHub Pages

1. Create a public repository in the `grim-82` GitHub account (for example, `roboprogress-site`) or provide the URL of an existing repository to use.
2. Upload the contents of this folder to the repository root, including the `assets` folder.
3. Open **Settings → Pages** in the repository.
4. Under **Build and deployment**, choose **Deploy from a branch**, select branch `main` and folder `/(root)`, then click **Save**.
5. GitHub will show the public site URL in the Pages section when deployment is ready.

The website can be public even if the source repository is private only on plans that support Pages from private repositories. The simplest setup is a public repository. Never send your GitHub password or personal access token in chat. To publish directly, provide the repository URL and use GitHub's normal sign-in/authorization flow when prompted; alternatively, upload the files yourself and share the resulting Pages URL for a final check.
