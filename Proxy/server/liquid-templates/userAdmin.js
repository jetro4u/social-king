const { header } = require('./components/header');
const { navbar } = require('./components/navbar');
const { newsFeedCSS } = require('./css/newsFeedCSS');
const proxyRoute = process.env.PROXY_ROUTE;
const { ngApp } = require('./angular/app.js');

exports.userAdmin = ({user, tags, shop, blogs, blog}) => {
 
    return `
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.4-build.3588/angular.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/1.0.26/angular-ui-router.min.js"></script>
    
    <script src='https://cdn.jsdelivr.net/npm/@editorjs/editorjs@latest'></script>
    <script src='https://cdn.jsdelivr.net/npm/@editorjs/header@latest'></script>
    <script src='https://cdn.jsdelivr.net/npm/@editorjs/simple-image@latest'></script>
    <script src='https://cdn.jsdelivr.net/npm/@editorjs/image@2.3.0'></script>
    <script src='https://cdn.jsdelivr.net/npm/@editorjs/list@1.4.0'></script>
    <script src='https://cdn.jsdelivr.net/npm/@editorjs/embed@2.2.1'></script>
    <script src='https://cdn.jsdelivr.net/g/filesaver.js'></script>

    <script>${ngApp({shop, user, tags, blogs, blog})}</script>
   <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.3/build/pure-min.css" integrity="sha384-cg6SkqEOCV1NbJoCu11+bm0NvBRc8IYLRGXkmNrqUBfTjmMYwNKPWBTIKyw9mHNJ" crossorigin="anonymous">
    <style type="text/css">
        ${newsFeedCSS({shop})}
    </style>
    ${header({shop})}
    <div class="community-background" ng-app="tribe" ng-controller='settingsController'> 
      <main class="page-width" >
          <div class="pure-g">               
              ${navbar({shop, tags, user, adminArea:true})}
              
              <div class="community-settings-view pure-u-md-2-3 pure-u-sm-1">
                  <ui-view></ui-view>
              </div>
             
          </div>
      </main>
    </div>
    `
};