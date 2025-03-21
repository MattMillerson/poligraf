body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    text-align: center;
    background-image: url('handshake_background.jpg');
    background-size: cover;
    background-position: center;
}
.header {
    padding: 20px;
    background-color: white;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    text-align: center;
    padding-bottom: 10px;
}
.logo {
    width: 200px;
}
.subtitle {
    font-size: 18px;
    color: #555;
    margin-top: 5px;
}
.container {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}
.column {
    width: 45%;
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
.vote-bar-container {
    width: 50%;
    margin: 20px auto;
    height: 20px;
    background-color: #ddd;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
}
#vote-bar {
    height: 100%;
    width: 50%;
    background: linear-gradient(to right, blue, orange);
    border-radius: 10px;
    position: absolute;
    left: 25%;
    transition: all 0.3s ease-in-out;
}
.vote-btn {
    display: block;
    margin: 10px auto;
    padding: 10px;
    border: none;
    background-color: #007bff;
    color: white;
    cursor: pointer;
}
.vote-btn:hover {
    background-color: #0056b3;
}
.comment-section {
    width: 80%;
    margin: auto;
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    margin-top: 20px;
}
textarea {
    width: 90%;
    height: 50px;
    padding: 5px;
}
button {
    margin-top: 10px;
    padding: 10px;
    cursor: pointer;
}
