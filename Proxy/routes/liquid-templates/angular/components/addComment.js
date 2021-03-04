const proxyRoute = process.env.PROXY_ROUTE;
const {formatQuotes} = require('../../../helpers/formatQuotes');
const {renderBlocks} = require('../../components/blog/renderBlocks');
const {translations} = require('../../../helpers/translations')

module.exports.addComment = ({shop, blog}) => {
  console.log('blog in addComment view', blog);

  return `
      <div ng-controller='addCommentController'>
          <div class='community-card community-admin-padding'>
            <h2>${blog[0] ? blog[0].title : ''}</h2>

            ${blog[0] ? formatQuotes(renderBlocks(blog[0])) : ''}
            <br/>
            <div id='new-comment'>
              <h3>${translations['AddComment'][shop ? shop.language : 'English']}</h3>
              <div id='error-message' class='text-center'></div>
              <div id='editorjs'></div>  
               <div class='modal-footer'>
                  <button type='submit' class='community-button-secondary pure-button' data-dismiss='modal' aria-hidden='true' 
                    ng-click='submitComment()'>${translations['Update'][shop ? shop.language : 'English']}</button>
                </div> 
                <p id='json'></p>
              </div>
          </div>
      </div>
      `
};

module.exports.addCommentJS = ({tags, blog}) => {
  var tagsModel = {};
  tags.forEach( function(item){ 
     tagsModel[item.id] = false; 
  });
  console.log('tags obj: ', tagsModel);

  return `
    tribeApp.controller('addCommentController', function($scope, $http, $window) {
      console.log('addCommentController function ran');

      $window.scrollTo(document.querySelector('#new-comment').getBoundingClientRect().left, document.querySelector('#new-comment').getBoundingClientRect().top);   
      
      // Checkbox logic 
       $scope.tags = {};

      //Loading Editor.js with all its configuration
      const editor = new EditorJS({
        autofocus: true,
        tools: {
          header: Header,
          image: {
              class: ImageTool,
              config: {
                endpoints: {
                  byFile: '${proxyRoute}/upload?email={{ customer.email }}&name={{ customer.name }}&hash={{ customer.email | append: 'somecrazyhash' | md5 }}', // Your backend file uploader endpoint
                  byUrl: '${proxyRoute}/upload-image-url', // Your endpoint that provides uploading by Url
                }
              }
            },
          embed: Embed,
          list: {
            class: List,
            inlineToolbar: true,
          },
        },
      });

      $scope.submitComment = function(title){
        editor
            .save()
            .then((body) => {
              
              console.log('save button clicked');
              console.log('Tags data:', $scope.tags);
              let tagIDs = [];
              for (var prop in $scope.tags) {
                  if (Object.prototype.hasOwnProperty.call($scope.tags, prop)) {
                      tagIDs.push(prop)
                  }
              }
              
              const data = { title, body, tags: tagIDs };

              $http.post('${proxyRoute}/user/blog/comment?slug=${blog[0] ? blog[0].slug : ''}&email={{ customer.email }}&name={{ customer.name }}&hash={{ customer.email | append: 'somecrazyhash' | md5 }}', data)
                     .success(function(data) {
                      document.getElementById('new-comment').innerHTML =
                        '<h3>'+data.message+'</h3>';
                })
              .error(function(data) {
                console.log('Error: ' + data);
                document.getElementById('error-message').innerHTML =
                 '<h3 style="color:red;">'+data.error+'</h3>';
               });
            })
            .catch((err) => {
              console.log(err);
            });
      }
    });
  `
}