function onAddPost(res) {
    console.log("onAddPost(res)");
    if(res === null) {
        return;
    }
    console.log("res.Result"+res.Result);
    var  addPost = JSON.parse(res.Result);
    console.log("addPost"+  addPost.Id);
    root.currentContext["addedPostModel"].append(addPost);
    console.log( root.currentContext["addedPostModel"].count);


}
