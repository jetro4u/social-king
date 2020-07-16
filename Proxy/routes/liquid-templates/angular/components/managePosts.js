const proxyRoute = process.env.PROXY_ROUTE;

module.exports.managePosts = ({user, posts}) => {
  console.log('user in managePosts function:', user); 
  console.log('posts in managePosts function:', posts); 
  
  const displayPosts = (data) => posts.map((blog, i) => {
      return `<div key=${i} class='pb-5'>
                  <a href='${proxyRoute}/blog/${blog.slug}'><h3>${blog.title}</h3></a>
                  <p class='mark'>
                      Written by ${blog.postedBy.name} | Published on ${blog.updatedAt}
                  </p>
              </div>
      `;
  }).join(' ')

  return `
      <div id='new-post' ng-controller='managePostsController'>
          <div id='error-message' class='text-center'>
            <h3 >Manage Posts</h3>
          </div>
          ${displayPosts(posts)}
      </div>`
};

module.exports.managePostsJS = (user) => {  
  return `
    tribeApp.controller('managePostsController', function($scope, $http) {
      console.log('managePosts function ran');
      $scope.proxyRoute = '${proxyRoute}';

    });
  `
}
