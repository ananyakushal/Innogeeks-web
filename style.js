function getDetails(){
    document.getElementById('output').style.display="block";
    const name=document.getElementById('username').value;
    fetch(`https://api.github.com/users/${name}`)
    .then(response=>response.json().then(data=>{
        console.log(data)
        document.getElementById('name').innerHTML=data.name;
        document.getElementById('bio').innerHTML=data.bio;
        document.getElementById('followers').innerHTML=data.followers +" Followers";
        document.getElementById('following').innerHTML=data.following + " Following";
        document.getElementById('profile').innerHTML=`
        <img src="${data.avatar_url}" />`
    }))
}