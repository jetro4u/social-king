exports.localize = (txt, language) => {
  let lclzdText;
  switch(language){
    case "English" :
      if(txt == "CreatePost")
        lclzdText = "Create Post";
      if(txt == "AddComment")
        lclzdText = "Add Comment";
      if(txt == "PostedBy")
        lclzdText = "Posted By";
      if(txt == "About")
        lclzdText = "About";
      if(txt == "ChooseAChannel")
        lclzdText = "Choose a Channel";
      if(txt == "ContributedBy")
        lclzdText = "Contributed By";

      if(txt == "RelatedTags")
        lclzdText = "Related Tags";
      if(txt == "RelatedProducts")
        lclzdText = "Related Products";
      if(txt == "GeneralBio")
        lclzdText = "General Bio";
      if(txt == "StoreFavorites")
        lclzdText = "Store Favorites";
      if(txt == "CreateNewPost")
        lclzdText = "Create New Post";
      if(txt == "Title")
        lclzdText = "Title";

      if(txt == "SavePost")
        lclzdText = "Save Post";
      if(txt == "ManagePosts")
        lclzdText = "Manage Posts";
      if(txt == "Writtenby")
        lclzdText = "Written by";
      if(txt == "PublishedOn")
        lclzdText = "Published on";
      if(txt == "Delete")
        lclzdText = "Delete";
      if(txt == "Settings")
        lclzdText = "Settings";

      if(txt == "UpdatePhoto")
        lclzdText = "Update Photo";
      if(txt == "Name")
        lclzdText = "Name";
      if(txt == "Favorite Things About")
        lclzdText = "Favorite Things About";
      if(txt == "Update")
        lclzdText = "Update";
      if(txt == "PostPendingReview")
        lclzdText = "Thank you for submitting your post. A moderator will review your content, and publish it if approved.";
      if(txt == "PostLive")
        lclzdText = "Your post is now live and available here.";

      if(txt == "CommentPendingReview")
        lclzdText = "Thank you for submitting your comment. A moderator will review your content, and publish it if approved.";
     
      break;
    case "Spanish" :
      if(txt == "CreatePost")
        lclzdText = "Create Post";
      if(txt == "AddComment")
        lclzdText = "Add Comment";
      if(txt == "PostedBy")
        lclzdText = "Posted By";
      if(txt == "About")
        lclzdText = "Sobre";
      if(txt == "ChooseAChannel")
        lclzdText = "Choose a Channel";
      if(txt == "ContributedBy")
        lclzdText = "Contributed By";

      if(txt == "RelatedTags")
        lclzdText = "Related Tags";
      if(txt == "RelatedProducts")
        lclzdText = "Related Products";
      if(txt == "GeneralBio")
        lclzdText = "General Bio";
      if(txt == "StoreFavorites")
        lclzdText = "Store Favorites";
      if(txt == "CreateNewPost")
        lclzdText = "Create New Post";
      if(txt == "Title")
        lclzdText = "Title";

      if(txt == "SavePost")
        lclzdText = "Save Post";
      if(txt == "ManagePosts")
        lclzdText = "Manage Posts";
      if(txt == "Writtenby")
        lclzdText = "Written by";
      if(txt == "PublishedOn")
        lclzdText = "Published on";
      if(txt == "Delete")
        lclzdText = "Delete";
      if(txt == "Settings")
        lclzdText = "Settings";

      if(txt == "UpdatePhoto")
        lclzdText = "Update Photo";
      if(txt == "Name")
        lclzdText = "Name";
      if(txt == "Favorite Things About")
        lclzdText = "Favorite Things About";
      if(txt == "Update")
        lclzdText = "Update";
      if(txt == "PostPendingReview")
        lclzdText = "Thank you for submitting your post. A moderator will review your content, and publish it if approved.";
      if(txt == "PostLive")
        lclzdText = "Your post is now live and available here.";

      if(txt == "CommentPendingReview")
        lclzdText = "Thank you for submitting your comment. A moderator will review your content, and publish it if approved.";

      break;
    case "French" :
      if(txt == "CreatePost")
        lclzdText = "Create Post";
      if(txt == "AddComment")
        lclzdText = "Add Comment";
      if(txt == "PostedBy")
        lclzdText = "Posted By";
      if(txt == "About")
        lclzdText = "About";
      if(txt == "ChooseAChannel")
        lclzdText = "Choose a Channel";
      if(txt == "ContributedBy")
        lclzdText = "Contributed By";

      if(txt == "RelatedTags")
        lclzdText = "Related Tags";
      if(txt == "RelatedProducts")
        lclzdText = "Related Products";
      if(txt == "GeneralBio")
        lclzdText = "General Bio";
      if(txt == "StoreFavorites")
        lclzdText = "Store Favorites";
      if(txt == "CreateNewPost")
        lclzdText = "Create New Post";
      if(txt == "Title")
        lclzdText = "Title";

      if(txt == "SavePost")
        lclzdText = "Save Post";
      if(txt == "ManagePosts")
        lclzdText = "Manage Posts";
      if(txt == "Writtenby")
        lclzdText = "Written by";
      if(txt == "PublishedOn")
        lclzdText = "Published on";
      if(txt == "Delete")
        lclzdText = "Delete";
      if(txt == "Settings")
        lclzdText = "Settings";

      if(txt == "UpdatePhoto")
        lclzdText = "Update Photo";
      if(txt == "Name")
        lclzdText = "Name";
      if(txt == "Favorite Things About")
        lclzdText = "Favorite Things About";
      if(txt == "Update")
        lclzdText = "Update";
      if(txt == "PostPendingReview")
        lclzdText = "Thank you for submitting your post. A moderator will review your content, and publish it if approved.";
      if(txt == "PostLive")
        lclzdText = "Your post is now live and available here.";

      if(txt == "CommentPendingReview")
        lclzdText = "Thank you for submitting your comment. A moderator will review your content, and publish it if approved.";

      break;
  }
  return lclzdText;
}