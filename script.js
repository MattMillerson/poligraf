let leftVotes = 0;
let rightVotes = 0;

function vote(side) {
    if (side === 'left') {
        leftVotes++;
    } else {
        rightVotes++;
    }
    document.getElementById("left-votes").textContent = leftVotes;
    document.getElementById("right-votes").textContent = rightVotes;
    updateVoteBar();
}

function updateVoteBar() {
    let totalVotes = leftVotes + rightVotes;
    if (totalVotes === 0) return;
    
    let leftPercentage = (leftVotes / totalVotes) * 100;
    let rightPercentage = (rightVotes / totalVotes) * 100;

    let voteBar = document.getElementById("vote-bar");
    voteBar.style.width = `${leftPercentage}%`;
    voteBar.style.left = `${50 - (leftPercentage / 2)}%`;
}

function addComment() {
    let commentText = document.getElementById("comment-input").value;
    if (commentText.trim() !== "") {
        let commentBox = document.createElement("p");
        commentBox.textContent = commentText;
        document.getElementById("comments").appendChild(commentBox);
        document.getElementById("comment-input").value = "";
    }
}