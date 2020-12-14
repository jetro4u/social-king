const proxyRoute = process.env.PROXY_ROUTE;
const backupShopIcon = "https://www.bongiorno.eu/assets/img/facebook/bongiorno.jpg";

exports.newsFeed = ({shop, blogs}) => {
    
    const showEmojis = (blog) => {
        return activeEmojis;
    }

    const showLoadedBlogs = () => {
        console.log('blogs in showLoadedBlogs func: ', blogs)

        return blogs.map((blog, i) => `
                <div class="pure-u-1">
                    <div class="l-box community-card">
                        <a href="${proxyRoute}/user/${blog.postedBy.username}">
                            <img src="${blog.postedBy && blog.postedBy.cover_photo ? blog.postedBy.cover_photo : backupShopIcon}" class="community-user-icon" />
                            <div class="community-author">Posted by ${blog.postedBy.name}</div>
                         </a>
                        <a href="${proxyRoute}/blog/${blog.slug}">
                            <h3>${blog.title}</h3>
                            ${blog.coverMedia ? "<img class='cover-img' src='"+blog.coverMedia+"'/>" : '<br/>'}
                            <p>${blog.excerpt}</p>
                        </a>
                       <div class='text'><p class='community-post-slug-${blog.slug} community-instant-post community-reactions'>Add 😀</p></div>
                       <a href='https://${shop.shopify_domain+proxyRoute}/user/profile?slug=${blog.slug}&email={{ customer.email }}&name={{ customer.name }}&hash={{ customer.email | append: "somecrazyhash" | md5 }}#/add-comment'>
                            <input type="text" class="community-instant-post" placeholder="Add Comment" />
                        </a>
                     </div>
                </div>
            `).join('');
    };

    return `
        <div class="pure-u-md-2-3 pure-u-sm-1 community-newsfeed-box">
            <div class="community-pad-20">
                <div class="community-card">
                    <div class="community-card-body">
                        <a href='https://${shop ? shop.shopify_domain+proxyRoute : 'social-king-app.myshopify.com'+proxyRoute}/user/profile?email={{ customer.email }}&name={{ customer.name }}&hash={{ customer.email | append: "somecrazyhash" | md5 }}'>
                            <input type="text" class="community-instant-post" placeholder="Create Post" />
                        </a>
                    
                    </div>
                </div>
                <div class="pure-g">${showLoadedBlogs()}</div>
            </div>
        </div>

        <script src='https://cdn.jsdelivr.net/npm/emoji-button@2.2.2/dist/index.min.js'></script> 
        <script src='https://cdn.jsdelivr.net/npm/axios@0.20.0/dist/axios.min.js'></script>        

        <script>                
            axios({
              method: 'post',
              url: '${proxyRoute}/blog/emojis'
            }).then((response) => {
              console.log('emoji Data:  ',response.data);
              let emojiData = response.data;

              let communityReaction = document.querySelectorAll('.community-reactions');

              console.log('')

              communityReaction.forEach(item => {
                let blogSlug = item.classList[0].split('community-post-slug-')[1];
                console.log('blogSlug', blogSlug);

                let postEmojis = emojiData.filter((reaction)=>reaction.postSlug==blogSlug);

                console.log('Emojis of the post ' + blogSlug + postEmojis);

                let input = document.querySelector('.'+item.classList[0]);

                let emojiSummary = [];

                postEmojis.forEach((reaction)=>{
                  emojiSummary.push({name: reaction.postedBy ? reaction.postedBy.name : 'New Shopper', emoji: reaction.emoji}); 
                })

                if (emojiSummary === undefined || emojiSummary.length == 0) {
                    input.innerHTML = '😊 Add Emoji'
                } else {
                    input.innerHTML = emojiSummary.map((reaction)=>{
                        return reaction.name + ': ' + reaction.emoji;
                    }).join(', ');
                }

                item.addEventListener('click', event => {
                  console.log('item.classList[0]: ',item.classList[0])

                  let picker = new EmojiButton({
                      position: 'auto',
                      rows: 8,
                      showRecents: true
                  })

                  picker.on('emoji', function(emoji){
                      let userName = '{{ customer.name }}';
                      if(input.innerHTML.includes('Add Emoji')){
                          emojiSummary.push({name: userName, emoji: emoji})
                      } else if(!input.innerHTML.includes('{{ customer.name }}')){
                          emojiSummary.push({name: userName, emoji: emoji})
                      } else {
                        console.log('postEmojis: ',postEmojis)
                        let reactionToReplace = emojiSummary.find((reaction)=>{
                         return reaction.name == userName 
                        })
                        
                        let index = emojiSummary.indexOf(reactionToReplace);

                        emojiSummary[index] = {name: userName, emoji: emoji};

                        console.log('emojiSummary array after updating: ', emojiSummary)
                      }

                      input.innerHTML = emojiSummary.map((reaction)=>{
                          return reaction.name + ': ' + reaction.emoji;
                      }).join(', ');
                      
                      axios({
                        method: 'post',
                        url: '${proxyRoute}/user/blog/emoji?slug='+blogSlug+'&emoji='+emoji+'&email={{ customer.email }}&name={{ customer.name }}&hash={{ customer.email | append: 'somecrazyhash' | md5 }}',
                        data: {
                          firstName: 'Finn',
                          lastName: 'Williams'
                        }
                      }).then((response) => {
                        console.log(response.data);
                        if(response.data.redirectTo!=undefined){
                          window.location.href = response.data.redirectTo; 
                        }
                      }, (error) => {
                        console.log(error);
                      });
                  })

                  picker.pickerVisible ? picker.hidePicker() : picker.showPicker(input)
                  
                })
              })

            }, (error) => {
              console.log(error);
            });

        </script>
        `
};


