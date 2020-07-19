const proxyRoute = process.env.PROXY_ROUTE;
const {formatQuotes} = require('../../../helpers/formatQuotes');

module.exports.addComment = ({shop, blog}) => {
  console.log('blog in addComment view', blog);

  const showBlogContent = (blog) => {
        return `
            <div>${blog[0].body[0].blocks ? 
               blog[0].body[0].blocks.map((block, i) => {
                    switch(block.type) {
                        case 'paragraph':
                            return `<br/><p>${block.data.text}</p>`
                            break;
                        case 'image':
                            return `<br/><img src='${block.data.file.url}'/>
                                    <h6>${block.data.caption}</h6>`
                            break;
                        case 'header':
                            return `<br/><br/><h2>${block.data.text}</h2>`
                            break;
                        case 'list':
                            return `<br/><ul class='list-group'>
                                        ${block.data.items.map((item, i) => {
                                            return '<li class="list-group-item">'+item+'</li>'
                                        }).join('')}
                                    </ul>`
                            break;
                        case 'raw':
                            return `${block.data.html}`;
                            break;
                        case 'code':
                            return `<textarea disabled>${block.data.code}</textarea>
                               \n`;
                            break;
                        case 'warning':
                            return `
                                <table class="pure-table">
                                    <thead>
                                        <tr>
                                            <th>${block.data.title}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>${block.data.message}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            `
                            break;
                        case 'quote':
                            return `
                                <table class="pure-table">
                                    <thead>
                                        <tr>
                                            <th>${block.data.text}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>${block.data.caption}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            `
                            break;
                        case 'checklist':
                                return `<form class="pure-form">
                                     ${block.data.items.map((item, i) => {
                                            return '<label for="checkbox-radio-option-one" class="pure-checkbox"><input type="checkbox" id="checkbox-radio-option-one" '+ (item.checked ? 'checked' : '') +' />'+item.text+'</label>'  
                                     }).join('')}
                                </form>`
                            break;
                        case 'table':
                            return `<table style="width:100%">
                                     ${block.data.content.map((row, i) => {
                                           return "<tr>"+
                                             row.map((column, i) => {
                                                return '<th>'+ column + '</th>'
                                             }).join('')
                                              + "</tr>"
                                        }).join('')}
                                        </table>\n`;
                            break;
                        case 'delimiter':
                            return `\n<p>**************** This is a delimiter to separate between sections*************</p>\n`;
                            break;
                        case 'embed':
                            return `<iframe
                                        width='100%' 
                                        modestbranding=1
                                        height='540' 
                                        src='${block.data.embed}?modestbranding=1&showinfo=0&rel=0start=1' 
                                        frameborder="0" 
                                        controls="0"
                                        allow="accelerometer; 
                                        autoplay; 
                                        encrypted-media; 
                                        gyroscope; 
                                        picture-in-picture" 
                                        allowfullscreen
                                        >
                                    </iframe>
                                    <h6>${block.data.caption}</h6>`
                        default:
                            return `<p>${block}</p>`
                        }
               }).join('') 
             : ''}
            </div>
        `
    }

  return `
      <div id='new-post' ng-controller='addCommentController'>
          <div id='error-message' class='text-center'>
            <h3>Add Comment</h3>
          </div>
          
          ${formatQuotes(showBlogContent(blog))}
          
          <small>Write your awesome comment below: (to embed videos, simply copy-paste any YouTube URL)</small>
          <div id='editorjs'></div>
            
          <small>When you're all done, press 'Save'. Doesn't have to be perfect 😉</small>

           <div class='modal-footer'>
              <button type='submit' class='btn btn-primary btn-lg' data-dismiss='modal' aria-hidden='true' 
                ng-click='submitComment()'>Post Comment</button>
            </div> 
          <p id='json'></p>
      </div>
      `
};

module.exports.addCommentJS = (tags) => {
  var tagsModel = {};
  tags.forEach( function(item){ 
     tagsModel[item.id] = false; 
  });
  console.log('tags obj: ', tagsModel);

  return `
    tribeApp.controller('addCommentController', function($scope, $http) {
      console.log('addCommentController function ran');
      
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

              $http.post('${proxyRoute}/user/blog?email={{ customer.email }}&name={{ customer.name }}&hash={{ customer.email | append: 'somecrazyhash' | md5 }}', data)
                     .success(function(data) {
                      document.getElementById('new-post').innerHTML =
                        '<h3>'+data.message+'</h3>';
                      delete $scope.title;    
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