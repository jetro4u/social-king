const proxyRoute = process.env.PROXY_ROUTE;
const moment = require('moment');

function formatQuotes(str){
   var reg = /"/g;
   var newstr = `\\"`;
   str = str.replace(reg,newstr);

   var reg2 = /'/g;
   newstr = "\\'"
   return  str.replace(reg2,newstr);
}

module.exports.managePosts = ({user, posts}) => {
  console.log('user in managePosts function:', user); 
  console.log('posts in managePosts function:', posts); 
  
  const displayPosts = (data) => posts.map((blog, i) => {
      return `<div key=${i} class='pb-5'>
                  <a href='${proxyRoute}/blog/${blog.slug}'><h3>${blog.title}</h3></a>
                  <p class='mark'>
                      Written by ${blog.postedBy.name} | Published on ${moment(blog.updatedAt).format('YYYY-MM-DD')}
                  </p>
                  <button ng-click='deletePost(${formatQuotes(JSON.stringify(blog._id))})' class='btn btn-sm btn-danger'>
                      Delete
                  </button>
              </div>
      `;
  }).join(' ')

  return `
      <div id='new-post' ng-controller='managePostsController'>
          <div id='error-message' class='text-center'>
            <h3 >Manage Posts</h3><span ng-click='reloadPage()' class='reload'>&#x21bb;</span>
          </div>
          ${displayPosts(posts)}
      </div>`
};

module.exports.managePostsJS = (user) => {  
  return `
    tribeApp.controller('managePostsController', function($scope, $http) {
      console.log('managePosts function ran');
      $scope.proxyRoute = '${proxyRoute}';
      $scope.deletePost = function(post){
        console.log('post to delete:',post);
      }
      $scope.reloadPage = function(post){
        console.log('ran reloadPage func')
        location.reload();
      }
    });
  `
}
