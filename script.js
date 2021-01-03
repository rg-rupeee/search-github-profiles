document.querySelector('.input').value = "";
const Mainurl = `https://api.github.com/users/`;

function getUser(url){
  fetch(url)
.then(result=>{
    return result.json();
  })
.then(data=>{
  // console.log(data);
  searchUser(data);
});



}

function searchUser(userData){

  if(userData.message === "Not Found"){
    console.log('data not found');
    document.querySelector('.card').innerHTML =  'No such user exists';
  }
  else{
    console.log(userData);
    document.querySelector('.name').innerHTML =  userData.name;
    document.querySelector('.id').innerHTML = userData.login;
    document.querySelector('.bio').innerHTML = userData.bio;
    document.querySelector('.loction-txt').innerHTML = userData.location;
    document.querySelector('.followers').innerHTML = userData.followers+ ' follwers';
    document.querySelector('.following').innerHTML = userData.following+' following';
    document.querySelector('.repositories').innerHTML = userData.public_repos + ' repositories';
    document.querySelector('.profile-pic').src = userData.avatar_url;
  }
}



document.querySelector('.btn').addEventListener('click', () =>{
  console.log('button was clicked');
  Pressed();
});

window.addEventListener('keypress', (e)=>{
  // console.log(e.keyCode);
  if(e.keyCode === 13){
    console.log('enter key was pressed');
    Pressed();
  }
})

function Pressed(){
  const input = document.querySelector('.input').value;
  console.log(input);
  url = Mainurl+input;
  console.log(url);
  getUser(url);
}