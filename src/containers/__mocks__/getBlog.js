const blog = [{"id":1,"title":"My First Blog","content":"This is my first blog post","date":"2017-09-13T04:33:38.159201Z","comments":[{"user":"User1","content":"This blog post is awesome!","date":"2017-09-13T04:33:38.172422Z"},{"user":"User2","content":"Make more posts just like this.","date":"2017-09-13T04:33:38.172422Z"}]},{"id":2,"title":"My Second Blog Post","content":"This is the content for my first blog post. Hello all! What else should I add here?","date":"2017-09-13T04:33:38.159201Z","comments":[{"user":"Jack","content":"I have a comment for the second post.","date":"2017-09-10T04:37:31Z"}]},{"id":3,"title":"My Third Blog Post","content":"This is the content for my third blog post. This is the best blog post. More post like this should be added!!","date":"2017-09-17T19:21:05.926297Z","comments":[]},{"id":4,"title":"My Fourth Blog post","content":"Let's keep the post for this blog coming. Write more post to this blog","date":"2017-09-17T19:31:56.074729Z","comments":[]},{"id":5,"title":"another blog post","content":"testing blog post","date":"2017-09-18T00:34:23.263684Z","comments":[]},{"id":6,"title":"another testing post","content":"testing here","date":"2017-09-18T00:35:33.967524Z","comments":[]},{"id":7,"title":"testing","content":"one more test","date":"2017-09-18T00:37:28.205840Z","comments":[]},{"id":8,"title":"test","content":"test","date":"2017-09-18T00:39:10.404271Z","comments":[]},{"id":9,"title":"bla bla","content":"bla bla","date":"2017-09-18T00:41:00.373730Z","comments":[]},{"id":10,"title":"test","content":"test","date":"2017-09-20T02:21:18.990052Z","comments":[]},{"id":11,"title":"test","content":"another test","date":"2017-09-20T02:24:50.559382Z","comments":[]},{"id":12,"title":"one more test","content":"one two three","date":"2017-09-20T02:27:34.527585Z","comments":[]}]

export default function getBlog(url) {
  return new Promise((resolve, reject) => {
    process.nextTick(
      () => resolve(blog)
    )    
  })
}





// const users = {
//   4: {name: 'Mark'},
//   5: {name: 'Paul'},
// };

// export default function request(url) {
//   return new Promise((resolve, reject) => {
//     const userID = parseInt(url.substr('/users/'.length), 10);
//     process.nextTick(
//       () => users[userID] ? resolve(users[userID]) : reject({
//         error: 'User with ' + userID + ' not found.',
//       })
//     );
//   });
// }