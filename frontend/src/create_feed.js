export function create_feed(apiUrl, auth) {
    // create feed
    const feed = document.createElement("div");
    feed.setAttribute("id", "feed");
    const h3 = document.createElement("h4");
    h3.innerText = "Popular posts";
    feed.appendChild(h3);
    root.appendChild(feed);
    // not logged it
    if (auth === "") {
        fetch(`${apiUrl}/post/public`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            return response.json();
        }).then((json) => {
            console.log(json.posts[1]);
            let i = 0;
            while (json.posts[i]) {
                // create div new div to hold post
                const postDiv = document.createElement("div");
                postDiv.setAttribute("class", "post");
                feed.appendChild(postDiv);
                // div to hold seddit, author, time
                const topDiv = document.createElement("div");
                topDiv.style.display = "flex";
                topDiv.setAttribute("class", "topdiv");
                postDiv.appendChild(topDiv);
                //subseddit
                const postSub = document.createElement("p");
                postSub.setAttribute("class", "post-seddit");
                const sub = document.createTextNode(`s/${json.posts[i].meta.subseddit} ·`);
                postSub.appendChild(sub);
                topDiv.appendChild(postSub);
                // author
                const postAuth = document.createElement("p");
                postAuth.setAttribute("class", "post-author");
                const author = document.createTextNode(`\xa0 Posted by u/${json.posts[i].meta.author}\xa0`);
                postAuth.appendChild(author);
                topDiv.appendChild(postAuth);
                // time
                const postTime = document.createElement("p");
                postTime.setAttribute("class", "post-author");
                const dateObj = new Date(json.posts[i].meta.published * 1000); 
                const utcString = dateObj.toUTCString(); 
                console.log(utcString);
                const time = document.createTextNode(`on: ${utcString}`);
                postTime.appendChild(time);
                topDiv.appendChild(postTime);                           
                // title
                const postTitle = document.createElement("h4");
                postTitle.setAttribute("class", "post-title");
                const title = document.createTextNode(json.posts[i].title);
                postTitle.appendChild(title);
                postDiv.appendChild(postTitle);
                // text
                const postText = document.createElement("p");
                postText.setAttribute("class", "post-content");
                const text = document.createTextNode(json.posts[i].text);
                postText.appendChild(text);
                postDiv.appendChild(postText);
                //img
                if (json.posts[i].image != null) {
                    const img = document.createElement("img");  
                    img.setAttribute("class", "post-img");    
                    img.src = "data:image/jpeg;base64," + json.posts[i].image;
                    postDiv.appendChild(img);
                }   
                
                // div to hold likes and comments
                const likesDiv = document.createElement("div");
                likesDiv.setAttribute("class", "likes-div");
                postDiv.appendChild(likesDiv);
                // likes
                const postLikes = document.createElement("p");
                postLikes.setAttribute("class", "post vote");
                const likes = document.createTextNode(`Likes: ${json.posts[i].meta.upvotes.length}`);
                postLikes.appendChild(likes);
                likesDiv.appendChild(postLikes);
                // comments
                const postCom = document.createElement("p");
                postCom.setAttribute("class", "post vote");
                const com = document.createTextNode(`Comments: ${json.posts[i].comments.length}`);
                postCom.appendChild(com);
                likesDiv.appendChild(postCom);
                i++;
            }
        })
    // logged in
    } else {
        fetch(`${apiUrl}/user/feed`, {
            method: "GET",
            headers: {
                Authorization: `Token ${auth}`
            }
        }).then(response => {
            return response.json();
        }).then((json) => {
            console.log(json.posts[1]);
            let i = 0;
            while (json.posts[i]) {
                // create div new div to hold post
                const postDiv = document.createElement("div");
                postDiv.setAttribute("class", "post");
                feed.appendChild(postDiv);
                // div to hold seddit, author, time
                const topDiv = document.createElement("div");
                topDiv.style.display = "flex";
                topDiv.setAttribute("class", "topdiv");
                postDiv.appendChild(topDiv);
                //subseddit
                const postSub = document.createElement("p");
                postSub.setAttribute("class", "post-seddit");
                const sub = document.createTextNode(`s/${json.posts[i].meta.subseddit} ·`);
                postSub.appendChild(sub);
                topDiv.appendChild(postSub);
                // author
                const postAuth = document.createElement("p");
                postAuth.setAttribute("class", "post-author");
                const author = document.createTextNode(`\xa0 Posted by u/${json.posts[i].meta.author}\xa0`);
                postAuth.appendChild(author);
                topDiv.appendChild(postAuth);
                // time
                const postTime = document.createElement("p");
                postTime.setAttribute("class", "post-author");
                const dateObj = new Date(json.posts[i].meta.published * 1000); 
                const utcString = dateObj.toUTCString(); 
                console.log(utcString);
                const time = document.createTextNode(`on: ${utcString}`);
                postTime.appendChild(time);
                topDiv.appendChild(postTime);                           
                // title
                const postTitle = document.createElement("h4");
                postTitle.setAttribute("class", "post-title");
                const title = document.createTextNode(json.posts[i].title);
                postTitle.appendChild(title);
                postDiv.appendChild(postTitle);
                // text
                const postText = document.createElement("p");
                postText.setAttribute("class", "post-content");
                const text = document.createTextNode(json.posts[i].text);
                postText.appendChild(text);
                postDiv.appendChild(postText);
                //img
                if (json.posts[i].image != null) {
                    const img = document.createElement("img");  
                    img.setAttribute("class", "post-img");    
                    img.src = "data:image/jpeg;base64," + json.posts[i].image;
                    postDiv.appendChild(img);
                }   
                
                // div to hold likes and comments
                const likesDiv = document.createElement("div");
                likesDiv.setAttribute("class", "likes-div");
                postDiv.appendChild(likesDiv);
                // likes
                const postLikes = document.createElement("p");
                postLikes.setAttribute("class", "post vote");
                const likes = document.createTextNode(`Likes: ${json.posts[i].meta.upvotes.length}`);
                postLikes.appendChild(likes);
                likesDiv.appendChild(postLikes);
                // comments
                const postCom = document.createElement("p");
                postCom.setAttribute("class", "post vote");
                const com = document.createTextNode(`Comments: ${json.posts[i].comments.length}`);
                postCom.appendChild(com);
                likesDiv.appendChild(postCom);
                i++;
            }
        })
    }
}