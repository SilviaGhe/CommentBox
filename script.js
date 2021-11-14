var newCommentList = [];
function createNewCommentDiv(userMail, commentText) {
    var newCommentDiv = document.createElement('div')
     newCommentDiv.classList.add("new-comment-div")

    var newUserMail = document.createElement('h3')
    newUserMail.classList.add("new-user-mail")
    newUserMail.innerText = userMail;

    var newCommentText = document.createElement('p')
    newCommentText.classList.add("new-comment-text")
    newCommentText.innerText = commentText;

    var deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button")
    deleteButton.innerText = "Delete";
	deleteButton.style.backgroundColor="red";

    newCommentDiv.appendChild(newUserMail)
    newCommentDiv.appendChild(newCommentText)
    newCommentDiv.appendChild(deleteButton)

    
    deleteButton.addEventListener('click', function (event) {
        deleteButton.parentElement.remove()
    })

    return newCommentDiv;
}

for (var index = 0; index < newCommentList.length; index++) {
    var newComment = newCommentList[index];
    var newCommentListContainer = document.querySelector('.comment-list');
    var newCommentDiv1 = createNewCommentDiv(newComment.userMail, newComment.commentText)
    newCommentListContainer.appendChild(newCommentDiv1)
}

var btn = document.getElementById('add');
var inputUserMail = document.getElementById('userMail')
var inputCommentText = document.getElementById('commentText')

btn.addEventListener('click', function (event) {
    var newCommentListContainer = document.querySelector('.comment-list');
    var newCommentDiv1 = createNewCommentDiv(inputUserMail.value, inputCommentText.value)
    newCommentListContainer.appendChild(newCommentDiv1)
})
