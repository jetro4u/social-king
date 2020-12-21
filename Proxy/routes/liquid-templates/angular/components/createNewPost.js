const proxyRoute = process.env.PROXY_ROUTE;
const {formatQuotes} = require('../../../helpers/formatQuotes');

module.exports.createNewPost = ({shop, user, tags}) => {
  
  console.log('shop in createNewPost template', shop)

  const displayTags = (data) => data.map((tag, i) => {
      return `<label class='checkbox px-2 pure-checkbox community-checkbox' >                
                  <input type='checkbox' ng-model='tags.${tag.id}'><span class='px-1'> ${tag.name}</span>
              </label>
      `;
  }).join(' ')

  const displayTitleInput = () =>{
    return `<div class='form-group'>
              <label for='titleip'>Title:</label>
              <input
                ng-model='title'
                type='text'
                class='form-control'
                id='titleip'
                name='titleip'
                placeholder='Enter title here'
                required
              />
            </div>`
  }



  return `
          <div class='community-card'>
                <div id='new-post' class='community-admin-padding' ng-controller='newPostController'>
                    <div id='error-message' class='text-center'>
                      <h3>What's on your mind, ${formatQuotes(user.name) ? formatQuotes(user.name).split(' ')[0] : '' }?</h3>
                    </div>
                    ${shop.shopify_domain.includes('site-that-wants-titles-option') ? 
                        displayTitleInput() : ''}
      
                    <div id='editorjs'></div>
                    
                    <form class='form-inline' id='post-tags'>
                      ${Array.isArray(tags) ? displayTags(tags) : ''}
                    </form>
                      
                    <br/>
                    <div class='pure-u-1'>
                     <div class='community-pad-20 modal-footer'>
                        <button type='submit' class='community-button-secondary pure-button' data-dismiss='modal' aria-hidden='true' 
                          ng-click='submitBlogPost({title: title})'>Save Post</button>
                      </div> 
                    </div>
                    <p id='json'></p>
                </div>
            </div>`
};

module.exports.createNewPostJS = ({shop, tags}) => {
  var tagsModel = {};

  console.log('tags obj: ', tagsModel);
  console.log('tags',tags)

  if(Array.isArray(tags)){
    tags.forEach( function(item){ 
       tagsModel[item.id] = false; 
    });
  }

  return `
    tribeApp.controller('newPostController', function($scope, $http) {
      console.log('newPostController function ran');
      document.getElementById('the-community-options').innerHTML = 'Join the discussion';
       $scope.tags = {};
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

      $scope.submitBlogPost = function(title){
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

              $http.post('${proxyRoute}/user/blog?email={{ customer.email }}&name={{ customer.name }}&hash={{ customer.email | append: 'somecrazyhash' | md5 }}', data)
                     .success(function(data) {
                      document.getElementById('new-post').innerHTML =
                        '<div class="community-admin-padding"><h3>'+data.message+'</h3></div>';
                      delete $scope.title;    
                })
              .error(function(data) {
                console.log('Error: ' + data);
                let errorMessage = data.error && data.error.toLowerCase().includes('slug_1_shop') ? 'Post Title Already Exists' : data.error;
                document.getElementById('error-message').innerHTML =
                 '<h3 style="color:red;">'+errorMessage+'</h3>';
               });
            })
            .catch((err) => {
              console.log(err);
            });
      }
    });
  `
}
