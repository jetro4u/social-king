exports.renderBlocks = (blog) => {
    return `
        <div>${blog.body[0].blocks ? 
           blog.body[0].blocks.map((block, i) => {
                switch(block.type) {
                    case 'paragraph':
                        return `<br/><p>${block.data.text}</p>`
                        break;
                    case 'image':
                        return `<br/><img width='100%' src='${block.data.file.url}'/>
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
