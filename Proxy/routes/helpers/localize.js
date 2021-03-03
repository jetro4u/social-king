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
        lclzdText = "Your post has been recieved and is pending review.";
      if(txt == "PostLive")
        lclzdText = "Your post is now live and available here.";

      if(txt == "CommentPendingReview")
        lclzdText = "Your comment has been recieved and is pending review.";
     
      break;
    case "id" :
      if(txt == "title")
        lclzdText = "Localization sederhana dengan JavaScript";
      if(txt == "alertBtn")
        lclzdText = "Tampilkan Pesan";
      if(txt == "alertMsg")
        lclzdText = "Ini adalah pesan saya.";
      break;
    case "jv" :
      if(txt == "title")
        lclzdText = "Nggawe Localization seng gampang";
      if(txt == "alertBtn")
        lclzdText = "Ketokno Tulisan";
      if(txt == "alertMsg")
        lclzdText = "Iki tulisanku";
      break;
  }
  return lclzdText;
}