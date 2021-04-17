const proxyRoute = process.env.PROXY_ROUTE;
const {formatQuotes} = require('../../../helpers/formatQuotes');
const {translations} = require('../../../helpers/translations')

module.exports.settings = ({user, shop}) => {
  return `
        <div class='community-card community-admin-padding'>
          <div id='error-message' class='text-center'>
            <h3>Settings</h3>
          </div>
          <div id='message'></div>
            <div class='form-group'>
                <form action='/upload' method='POST' enctype='multipart/form-data'>
                  <label class='pure-button'>
                      ${translations['UpdatePhoto'][shop ? shop.language : 'English']}
                      <input type='file' name='image' accept='image/*' hidden onchange='angular.element(this).scope().uploadFile(this.files)'/>
                  </label>
                </form>
            </div>

            <div class='form-group'>
              <div id='profile-photo'>${user.cover_photo && user.cover_photo!='undefined' ? "<img id='the-profile-img' src='"+user.cover_photo+"' ng-model='formData.cover_photo'/>" : 'https://socialking.app/proxy/images/uploads/social-king-app.myshopify.com-1603702989629.jpeg'}</div>
            </div>

            <div class='form-group'>
                <label class='text-muted'>${translations['Name'][shop ? shop.language : 'English']}</label>
                <input type='text' value='${formatQuotes(user.name)}' class='form-control' ng-model='formData.name'/>
            </div>
            <br>
            <div class='form-group'>
                <label class='text-muted'>${translations['About'][shop ? shop.language : 'English']}</label>
                <br>
                <textarea type='text' value='${formatQuotes(user.about)}' class='form-control' ng-model='formData.about'/></textarea>
            </div>
            <div>
            <br>
            <div class='form-group'>
                <label class='text-muted'>${translations['FavoriteThings'][shop ? shop.language : 'English']} {{shop.name}}</label>
                <br>
                <textarea type='text' value='${formatQuotes(user.storeFavorites)}' class='form-control' ng-model='formData.storeFavorites'/></textarea>
            </div>
              <button ng-click='updateProfileDetails(formData)' class='community-button-secondary pure-button'>
                  ${translations['Update'][shop ? shop.language : 'English']}
              </button>
            </div>
          </div>`
};

module.exports.settingsJS = ({user, shop}) => {
  function formatQuotes(str){
   var reg = /"/g;
   var newstr = `\\"`;
   str = str.replace(reg,newstr);

   var reg2 = /'/g;
   newstr = "\\'"
   var latest = str.replace(reg2,newstr);
   
   return latest.replace(/\n/g, ' ')
   
  }

  return `
    tribeApp.controller('settingsController', function($scope, $http, $window) {
        console.log('settingsController function ran');
        
        $scope.getProfileURL = function(){        
          $http.get('${proxyRoute}/get-profile-photo?email={{ customer.email }}&name={{ customer.name }}&hash={{ customer.email | append: 'somecrazyhash' | md5 }}')
          .success(function(data) {
                   let currentImg = document.getElementById('the-profile-img').src;
                  if(currentImg!=data.src){
                      document.getElementById('profile-photo').innerHTML =
                      '<img src='+data.src+'/>';
                    }
                  })
                .error(function(data) {
                  console.log('Error: ' + data);
                    document.getElementById('error-message').innerHTML =
                   '<h3 style="color:red;">'+data.error+'</h3>';  
                 })
        }

       $scope.clickedSettingsTab = function(){
         console.log('clickedSettingsTab');
         $scope.getProfileURL();
       }

       $scope.clickedNewPostTab = function(){
       }

       $scope.clickedManagePostsTab = function(){
       }

        $scope.formData = {
          cover_photo: '${user.cover_photo}',
          name: '${formatQuotes(user.name)}',
          storeFavorites: '${formatQuotes(user.storeFavorites)}',
          about: '${formatQuotes(user.about)}'
        }
        $scope.uploadFile = function(files) {
            console.log('ran upload file function with files:',files)
            var fd = new FormData();
            //Take the first selected file
            fd.append('file', files[0]);

            $http.post('${proxyRoute}/upload-profile-photo?email={{ customer.email }}&name={{ customer.name }}&hash={{ customer.email | append: 'somecrazyhash' | md5 }}', fd, {
                headers: {'Content-Type': undefined },
                transformRequest: angular.identity
            }).success(function(data) {
                       $scope.formData.cover_photo = data.file.url;
                      document.getElementById('profile-photo').innerHTML =
                        '<img src='+data.file.url+'/>';   
                })
              .error(function(data) {
                console.log('Error: ' + data);
               });
        };

        $scope.updateProfileDetails = function(formData){
          console.log('formData: ', formData);

          $http.put(
            '${proxyRoute}/user/update?email={{ customer.email }}&name={{ customer.name }}&hash={{ customer.email | append: 'somecrazyhash' | md5 }}', 
            formData).success(function(data) {
                document.getElementById('message').innerHTML =
                  '<p>Profile Updated Successfully</p>'   
          })
            .error(function(data) {
              console.log('Error: ' + data);
              document.getElementById('error-message').innerHTML =
               '<h3 style="color:red;">'+data.error+'</h3>';
             });
        }
      
      });
  `
}
