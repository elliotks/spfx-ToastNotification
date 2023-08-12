## spfx-ToastNotification

Sharepoint Toast Notification (POC) - currently not for production use.

## Used SharePoint Framework Version

![version](https://img.shields.io/badge/version-1.17.4-green.svg)

## Applies to

- [SharePoint Framework](https://aka.ms/spfx)
- [Microsoft 365 tenant](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)

> Get your own free development tenant by subscribing to [Microsoft 365 developer program](http://aka.ms/o365devprogram)

## Requirements

- NVM: https://github.com/coreybutler/nvm-windows/releases (download and install the setup.exe file)
  - NVM is used for Node.js version control, so you can install more than one version of Node.js if needed and use the version required by npm packages.

Optional

- Visual Studio Code: https://code.visualstudio.com/

## Steps

1. Create a folder for the project.

```
md spfx-ToastNotication
cd spfx-ToastNotication
```

2. Install Node.js version 16.20.2

```
nvm install 16.20.2
```

Example output

```
PS D:\Git\spfx-ToastNotification> nvm install 16.20.2
Downloading node.js version 16.20.2 (64-bit)...
Extracting node and npm...
Complete
npm v8.19.4 installed successfully.


Installation complete. If you want to use this version, type

nvm use 16.20.2
```

3. Use Node.js version 16.20.2

```
nvm use 16.20.2
```

4. Install yo which is used for creating a new SharePoint Framework project.

```
npm install yo --global
```

5. Install gulp which is required for building the solution.

```
npm install gulp --global
```

6. create a new SharePoint Framework project using the Yeoman generator

```
yo @microsoft/sharepoint
```

7. Follow the prompts
   What is your solution name?

```
spfx-toast-notification
```

Which type of client-side component to create?

```
WebPart
```

Add new Web part to solution spfx-toast-notification.

What is your Web part name?

```
SpfxToast
```

Which template would you like to use?

```
React
```

Example Output

```
PS D:\Git\spfx-ToastNotification> yo @microsoft/sharepoint

     _-----_     ╭──────────────────────────╮
    |       |    │ Welcome to the Microsoft │
    |--(o)--|    │      365 SPFx Yeoman     │
   `---------´   │     Generator@1.17.4     │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `

See https://aka.ms/spfx-yeoman-info for more information on how to use this generator.
Let's create a new Microsoft 365 solution.
? What is your solution name? spfx-toast-notification
? Which type of client-side component to create? WebPart
Add new Web part to solution spfx-toast-notification.
? What is your Web part name? SpfxToast
? Which template would you like to use? React
Overwriting an existing "package.json"

    force package.json
    force .yo-rc.json
   create config\package-solution.json
   create config\config.json
   create config\serve.json
   create .vscode\settings.json
   create config\deploy-azure-storage.json
   create config\sass.json
   create config\write-manifests.json
   create README.md
   create .gitignore
   create .vscode\launch.json
   create src\index.ts
   create gulpfile.js
   create .npmignore
   create tsconfig.json
   create .eslintrc.js
   create src\webparts\spfxToast\components\ISpfxToastProps.ts
   create src\webparts\spfxToast\components\SpfxToast.module.scss
   create src\webparts\spfxToast\components\SpfxToast.tsx
   create src\webparts\spfxToast\SpfxToastWebPart.ts
   create src\webparts\spfxToast\loc\en-us.js
   create src\webparts\spfxToast\loc\mystrings.d.ts
   create src\webparts\spfxToast\assets\welcome-dark.png
   create src\webparts\spfxToast\assets\welcome-light.png
   create src\webparts\spfxToast\SpfxToastWebPart.manifest.json
   create teams\0e4cedd4-c25d-4819-bd99-517a0f2f3941_outline.png
   create teams\0e4cedd4-c25d-4819-bd99-517a0f2f3941_color.png

Changes to package.json were detected.
```

⚠Followed by npm WARN deprecated messages, you can ignore them as this is a common occurrence with npm packages.

ℹ You can use `npm shrinkwrap` to lock down the versions of your project's dependencies, including transitive dependencies, to ensure that everyone working on the project is using the same versions. This can help prevent issues that can arise from using different versions of the same dependency, such as compatibility issues or bugs. The `npm shrinkwrap` command generates a `npm-shrinkwrap.json` file that lists the exact versions of all dependencies and their transitive dependencies, which can be committed to your version control system to ensure consistency across all environments.

7.  Lock down the versions of your project's dependencies

```
npm shrinkwrap
```

8. Install [react-toast-notification](https://www.npmjs.com/package/react-toast-notifications) NPM.

```
npm install react-toast-notifications
```

ℹ To create or edit a SharePoint web part, you need to work with several files. Here are some of the key files you may need to create or edit:

- `SpfxToastWebPart.ts`: This is the main TypeScript file for your web part. It contains the code that defines the web part's behavior and appearance.

- `SpfxToastWebPart.manifest.json`: This file contains metadata about your web part, such as its ID, version, and supported hosts.

- `SpfxToastWebPart.module.scss`: This file contains the CSS styles for your web part.

- `SpfxToastWebPart.webpart`: This file is used to package your web part for deployment. It contains references to the other files in your project, as well as configuration settings for the web part.

You may also need to create or edit other files depending on the specific requirements of your web part.

9.  Replace contents of SpfxToast.tsx located in - .\spfx-ToastNotification\src\webparts\spfxToast\components\SpfxToast.tsx

```ts
import * as React from "react";
import { ISpfxToastProps } from "./ISpfxToastProps";
import { MyReactToast } from "./Reacttoast";
export default class SpfxToast extends React.Component<ISpfxToastProps, {}> {
  public render(): React.ReactElement<ISpfxToastProps> {
    return (
      <div>
        <MyReactToast mycontent={"Hello... is it me you're looking for?"} />
      </div>
    );
  }
}
```

10. Add file Reacttoast.tsx located at - .\spfx-ToastNotification\src\webparts\spfxToast\components\Reacttoast.tsx

```ts
import * as React from "react";
import { ToastProvider, useToasts } from "react-toast-notifications";
interface ToastDemoProps {
  mycontent: string;
}
const ToastDemo: React.FC<ToastDemoProps> = ({ mycontent }) => {
  const { addToast } = useToasts();
  return (
    <>
      <button
        onClick={() =>
          addToast(mycontent, {
            appearance: "success",
            autoDismiss: false,
            PlacementType: "bottom-left",
          })
        }
      >
        success Toast
      </button>
      <button
        onClick={() =>
          addToast(mycontent, {
            appearance: "error",
            autoDismiss: false,
          })
        }
      >
        error Toast
      </button>
      <button
        onClick={() =>
          addToast(mycontent, {
            appearance: "warning",
            autoDismiss: false,
          })
        }
      >
        warning Toast
      </button>
      <button
        onClick={() =>
          addToast(mycontent, {
            appearance: "info",
            autoDismiss: false,
          })
        }
      >
        Info Toast
      </button>
    </>
  );
};
interface MyReactToastProps {
  mycontent: string;
}
export const MyReactToast: React.FC<MyReactToastProps> = ({ mycontent }) => (
  <ToastProvider>
    <ToastDemo mycontent={mycontent} />
  </ToastProvider>
);
```

11. build your solution using gulp

```
gulp bundle --ship ; gulp package-solution --ship
```

Example Output

```powershell
PS D:\Git\spfx-ToastNotification> gulp bundle --ship ; gulp package-solution --ship
Build target: SHIP
[20:52:23] Using gulpfile D:\Git\spfx-ToastNotification\gulpfile.js
[20:52:23] Starting 'bundle'...
[20:52:23] Starting gulp
[20:52:23] Starting subtask 'pre-copy'...
[20:52:23] Finished subtask 'pre-copy' after 52 ms
[20:52:23] Starting subtask 'copy-static-assets'...
[20:52:23] Starting subtask 'sass'...
[20:52:24] Finished subtask 'sass' after 663 ms
[20:52:24] Starting subtask 'lint'...
[20:52:24] [lint] eslint version: 8.7.0
[20:52:24] Starting subtask 'tsc'...
[20:52:24] [tsc] typescript version: 4.5.5
[20:52:24] Finished subtask 'copy-static-assets' after 752 ms
[20:52:28] Finished subtask 'tsc' after 3.64 s
[20:52:29] Finished subtask 'lint' after 5.43 s
[20:52:29] Starting subtask 'post-copy'...
[20:52:29] Finished subtask 'post-copy' after 228 μs
[20:52:29] Starting subtask 'configure-webpack'...
[20:52:30] Finished subtask 'configure-webpack' after 863 ms
[20:52:30] Starting subtask 'webpack'...
[20:52:32] Finished subtask 'webpack' after 2.05 s
[20:52:32] Finished 'bundle' after 9.07 s
[20:52:33] ==================[ Finished ]==================
[20:52:33] Project spfx-toast-notification version:0.0.1
[20:52:33] Build tools version:3.17.20
[20:52:33] Node version:v16.20.2
[20:52:33] Total duration:13 s
Build target: SHIP
[20:52:37] Using gulpfile D:\Git\spfx-ToastNotification\gulpfile.js
[20:52:37] Starting 'package-solution'...
[20:52:37] Starting gulp
[20:52:37] Starting subtask 'package-solution'...
[20:52:37] [package-solution] Found manifest: 0e4cedd4-c25d-4819-bd99-517a0f2f3941.manifest.json
[20:52:37] [package-solution] Found client-side build resource: spfx-toast-web-part_a6a5b72ba0bf4fda5739.js
[20:52:37] [package-solution] Found client-side build resource: SpfxToastWebPartStrings_en-us_e84a0fe2b865fd9c425e31df5e2d7961.js
[20:52:37] [package-solution] Found teams icons: 0e4cedd4-c25d-4819-bd99-517a0f2f3941_color.png
[20:52:37] [package-solution] Found teams icons: 0e4cedd4-c25d-4819-bd99-517a0f2f3941_outline.png
[20:52:37] [package-solution] Verifying configuration...
[20:52:37] [package-solution] Done!
[20:52:37] [package-solution]
[20:52:37] [package-solution] Normalizing solution information...
[20:52:37] [package-solution] Attempting creating component definitions for {1} manifests
[20:52:37] [package-solution] Created component definitions for {1} manifests
[20:52:37] [package-solution] feature.componentIds not set! Adding 1 components to feature { spfx-toast-notification Feature }.
[20:52:37] [package-solution] Done!
[20:52:37] [package-solution]
[20:52:37] [package-solution] Reading custom Feature XML...
[20:52:37] [package-solution] Done!
[20:52:37] [package-solution]
[20:52:37] [package-solution] Validating App Package...
[20:52:37] [package-solution] Done!
[20:52:37] [package-solution]
[20:52:37] [package-solution] Reading resources...
[20:52:37] [package-solution] Done!
[20:52:37] [package-solution]
[20:52:37] [package-solution] Reading Sharepoint Assets & Creating XML...
[20:52:37] [package-solution] Done!
[20:52:37] [package-solution]
[20:52:37] [package-solution] Writing solution XML to D:\Git\spfx-ToastNotification/sharepoint/solution/debug...
[20:52:37] [package-solution] Cleaned D:\Git\spfx-ToastNotification/sharepoint/solution/debug
[20:52:37] [package-solution] Created file: D:\Git\spfx-ToastNotification\sharepoint\solution\debug\AppManifest.xml
[20:52:37] [package-solution] Created file: D:\Git\spfx-ToastNotification\sharepoint\solution\debug\_rels\AppManifest.xml.rels
[20:52:37] [package-solution] Created file: D:\Git\spfx-ToastNotification\sharepoint\solution\debug\_rels\.rels
[20:52:37] [package-solution] Created file: D:\Git\spfx-ToastNotification\sharepoint\solution\debug\[Content_Types].xml
[20:52:37] [package-solution] Created file: D:\Git\spfx-ToastNotification\sharepoint\solution\debug\feature_63520ad0-3630-4f3e-b5ae-9bfb966b3fc4.xml
[20:52:37] [package-solution] Created file: D:\Git\spfx-ToastNotification\sharepoint\solution\debug\_rels\feature_63520ad0-3630-4f3e-b5ae-9bfb966b3fc4.xml.rels
[20:52:37] [package-solution] Created file: D:\Git\spfx-ToastNotification\sharepoint\solution\debug\feature_63520ad0-3630-4f3e-b5ae-9bfb966b3fc4.xml.config.xml
[20:52:37] [package-solution] Created file: D:\Git\spfx-ToastNotification\sharepoint\solution\debug\63520ad0-3630-4f3e-b5ae-9bfb966b3fc4\WebPart_0e4cedd4-c25d-4819-bd99-517a0f2f3941.xml
[20:52:37] [package-solution] Created file: D:\Git\spfx-ToastNotification\sharepoint\solution\debug\ClientSideAssets.xml
[20:52:37] [package-solution] Created file: D:\Git\spfx-ToastNotification\sharepoint\solution\debug\_rels\ClientSideAssets.xml.rels
[20:52:37] [package-solution] Created file: D:\Git\spfx-ToastNotification\sharepoint\solution\debug\ClientSideAssets.xml.config.xml
[20:52:37] [package-solution] Created file: D:\Git\spfx-ToastNotification\sharepoint\solution\debug\ClientSideAssets\spfx-toast-web-part_a6a5b72ba0bf4fda5739.js
[20:52:37] [package-solution] Created file: D:\Git\spfx-ToastNotification\sharepoint\solution\debug\ClientSideAssets\SpfxToastWebPartStrings_en-us_e84a0fe2b865fd9c425e31df5e2d7961.js
[20:52:37] [package-solution] Created file: D:\Git\spfx-ToastNotification\sharepoint\solution\debug\ClientSideAssets\0e4cedd4-c25d-4819-bd99-517a0f2f3941_color.png
[20:52:37] [package-solution] Created file: D:\Git\spfx-ToastNotification\sharepoint\solution\debug\ClientSideAssets\0e4cedd4-c25d-4819-bd99-517a0f2f3941_outline.png
[20:52:37] [package-solution] Created file: D:\Git\spfx-ToastNotification/sharepoint/solution/spfx-toast-notification.sppkg
[20:52:37] [package-solution] Done!
[20:52:37] [package-solution]
[20:52:37] [package-solution] ALL DONE!
[20:52:37] [package-solution]
[20:52:37] Finished subtask 'package-solution' after 189 ms
[20:52:37] Finished 'package-solution' after 194 ms
[20:52:38] ==================[ Finished ]==================
[20:52:38] Project spfx-toast-notification version:0.0.1
[20:52:38] Build tools version:3.17.20
[20:52:38] Node version:v16.20.2
[20:52:38] Total duration:3.92 s
```

When you package your SharePoint Framework solution, it creates a `.sppkg` file that contains all the necessary files and assets for your solution. You can then upload this package file to the App Catalog site of your SharePoint tenant and deploy it to your production SharePoint site.

After a successful build the package location will be here:
.\spfx-ToastNotification\sharepoint\solution\spfx-toast-notification.sppkg

For more detailed instructions on deploying SharePoint Framework solutions, you can refer to the official Microsoft documentation: [Package and deploy the solution](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/get-started/serve-your-web-part-in-a-sharepoint-page#package-and-deploy-the-solution)

## References

- [Getting started with SharePoint Framework](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)
- [Building for Microsoft teams](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/build-for-teams-overview)
- [Use Microsoft Graph in your solution](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/get-started/using-microsoft-graph-apis)
- [Publish SharePoint Framework applications to the Marketplace](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/publish-to-marketplace-overview)
- [Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp) - Guidance, tooling, samples and open-source controls for your Microsoft 365 development
