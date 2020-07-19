module.exports.ngApp = ({user, tags, blogs, blog}) => {
  const trimHTML = (str)=>{return str.replace(/(\r\n|\n|\r|\t)/gm,"").trim()}
  const proxyRoute = process.env.PROXY_ROUTE;
  const { createNewPost, createNewPostJS } = require('./components/createNewPost.js');
  const { managePosts, managePostsJS } = require('./components/managePosts.js');
  const { addComment, addCommentJS } = require('./components/addComment.js');
  const { settings, settingsJS } = require('./components/settings.js');
  
  return ` 
    var tribeApp = angular.module('tribe', ['ui.router']);

    ${createNewPostJS(tags)}
    ${settingsJS(user)}
    ${managePostsJS(user)}

    tribeApp.config(function($stateProvider, $urlRouterProvider) {
      
      let createNewPostState = {
        name: 'create-new-post',
        url: '/create-new-post',
        template: "${trimHTML(createNewPost(tags))}"
      }

      let managePostsState = {
        name: 'manage-posts',
        url: '/manage-posts',
        template: "${trimHTML(managePosts({user, blogs}))}"
      }

      let settingsState = {
        name: 'settings',
        url: '/settings',
        template: "${trimHTML(settings(user))}"
      }

      let addCommentState = {
        name: 'add-comment',
        url: '/add-comment',
        template: "${trimHTML(addComment({user, blog}))}"
      }

      $stateProvider.state(createNewPostState);
      $stateProvider.state(managePostsState);
      $stateProvider.state(addCommentState);
      $stateProvider.state(settingsState);

      $urlRouterProvider.otherwise('create-new-post')
    });`
}
