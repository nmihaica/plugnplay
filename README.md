:video_game:

### Plug n' play

```npm install && npm run dev ``` 

#### Info

2017 Webpack + BrowserSync project template
Webpack starter for developers trying to develop websites or apps with the modern tooling.
* [x] [Sass]
* [x] [HMR]
* [x] [BrowserSync]
* [x] [BrowserSync UI]

[App](http://localhost:8000) (Proxied from ```webpack-dev-server```)  
[Browsersync UI](http://localhost:7000)

#### npm scripts

```dev``` start development environment  
```build``` build for production  
```remove``` uninstall packages  

[issue](https://github.com/Va1/browser-sync-webpack-plugin/issues/29)  
In **BrowserSyncPlugin** options toggle ```reload: true```, if you want BrowserSync synced between devices. Otherwise you'll be using **HMR** from Webpack.

```index.html``` is not reloaded if hash of bundle stays the same.