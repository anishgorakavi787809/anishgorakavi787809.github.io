// <script src="index.css"></script>  <!---S-->
let name = "Anish Gorakavi";
let serverurl = "https://day2comp.anishgorakavi.repl.co";

var list = "";

function addmessage(stuff) {
    list = stuff;
}

//Sends request to server to autherizize user
function accountverification() {
    let uname = document.getElementById("username").value;
    let pword = document.getElementById("password").value;
    console.log(`${uname} ${pword}`);
    if (uname == null) {
        alert("Hey, enter username!");
    }
    else if (pword == null) {
        alert("Hey,enter password");
    }
    else {
     var headers = new Headers();
     headers.append("Authorization", `Basic ${btoa(`${uname}:${pword}`)}`);
     var construction = {
         method:'GET',
         headers:headers,
         redirect: 'follow'
     };
     fetch(`${serverurl}/api/testlogin`,construction).then( response => response.text()).then(
         result => {
         console.log(result)
         const parsedjson = JSON.parse(result);
         if(parsedjson.success == 'Logged in!') {
             localStorage.setItem("uname&pword",btoa(`${uname}:${pword}`));
             localStorage.setItem("uname",uname);
             localStorage.setItem("pword",pword);
             portal();
         }
         else {
             init(parsedjson.error,null);
         }
     }
     ).catch(error => console.log("Error:" + error));
        
        
}
}

//function search()
function logout() {
localStorage.clear();
init(null,null);
}

function portal() {
if (localStorage.getItem("uname&pword") != null) {
document.getElementById("lol").innerHTML = `
Veieu
<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portal</title>
    <style>
        a.right-out {
            float: right;
        }
    </style>
</head>
<body>
    <a href="#" class="right-out" onclick="logout();">Sign Out!</a>
    <br>
    <center>
        <h1>You are logged in!</h1>
        <button onclick="render_search(null,null,null,null,null,null,null,null,null,null);" class="btn btn-primary">Search</button>
        <br>
        <br>
        <button onclick="math_render(null);" class="btn btn-danger">Math</button>
    </center>
</body>
</html>
`;
    }
else {
    init(null,null)
}
}

function init( error, success ) {
    if (localStorage.getItem("uname&pword") == null ) {
        if(error == null ) {
            error = "";
            
        }
        else if (error != null){
            console.log("Time to print")
            error = ` <div class="alert alert-danger">
            <p">${error}</p>
            </div>`
        }
        if (success == null) {
            success = "";
        }
        else if (success != null) {
            success = ` <div class="alert alert-success">
            <p">${success}</p>
            </div>`
        }
    
         document.getElementById("lol").innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
<script src="index.css"></script>  <!---S-->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>REST Form</title>
</head>
<body>
  

    <center>
        <h2>REST calc login</h2>
       <br>
       <div class="form-group">
           <p>Username:</p>
           <input type="text" name="username" id="username" required>
           <br>
           </div>
           <div class="form-group">
           <p>Password:</p>
           <input type="password" name="password" id="password" required>
           <br>
           <br>
           </div>
           <input type="submit" value="submit" onclick="accountverification();" class="btn btn-success btn-lg">
   <br>
       <br>
       <br>
       
       <button onclick="signup_render();" class="btn btn-primary btn-lg" >Sign up!</button>
       <br>

       ${error}
       <p style="color: rgb(69, 228, 69);">${success}</p>
       <br>
       <p>Made by ${name}</p>
    </center>
</body>
</html>`;
    
    }
   else {
       portal();
   }
}

function render_search(url1,url2,url3,url4,url5,url6,url7,url8,url9,url10) {
    if (url1 == null){
        url1 = ""
    }
    if (url2 == null){
        url2 = ""
    }
    if (url3 == null){
        url3 = ""
    }
    if (url4 == null){
        url4 = ""
    }
    if (url5 == null){
        url5 = ""
    }
    if (url6 == null){
        url6 = ""
    }
    if (url7 == null){
        url7 = ""
    }
    if (url8 == null){
        url8 = ""
    }
    if (url9 == null){
        url9 = ""
    }
    if (url10 == null){
        url10 = ""
    }
    document.getElementById('lol').innerHTML = `
    <!DOCTYPE html>
<html lang="en">
<head>
<script src="index.css"></script>  <!---S-->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Search</title>
    <style>
        a.right-out {
            float: right;
        }
    </style>
</head>
<body>
    <a href="#" class="right-out">Sign Out!</a>
    <br>

    <center>
        <p>Query:</p>
        <input type="text" name="query" id="query" required>
        <br>
        <input type="submit" value="Submit" onclick="searchlogic();" class="btn btn-success">
        <br>
        <p>Result:</p>

        <div id="result">
        <a href=${url1}>${url1}</a>
        <br>
        <a href=${url2}>${url2}</a>
        <br>
        <a href=${url3}>${url3}</a>
        <br>
        <a href=${url4}>${url4}</a>
        <br>
        <a href=${url5}>${url5}</a>
        <br>
        <a href=${url6}>${url6}</a>
        <br>
        <a href=${url7}>${url7}</a>
        <br>
        <a href=${url8}>${url8}</a>
        <br>
        <a href=${url9}>${url9}</a>
        <br>
        <a href=${url10}>${url10}</a>

        </div>
</center>
</body>
</html>
    `;
}

function searchlogic() {
    let query = document.getElementById("query").value;

    var header = new Headers()
    render_search("Please Wait......",null,null,null,null,null,null,null,null,null);
    header.append("Authorization", `Basic ${localStorage.getItem("uname&pword")}`);
    var  constucted = {
        method: "GET",
        headers: header,  
        redirect:"follow"
    };
    fetch(`${serverurl}/api/search/${query}`,constucted).then(
        response => response.text()
    )
    .then(
        result => {
            console.log(result);
            let jsoned_data = JSON.parse(result);
            render_search(jsoned_data.url1,jsoned_data.url2,jsoned_data.url3,jsoned_data.url4,jsoned_data.url5,jsoned_data.url6,jsoned_data.url7,jsoned_data.url8,jsoned_data.url9,jsoned_data.url10)
        }
    ).catch(error => console.log(error));
}

function math_render(result) {
    if (result == null) {
        result = "";
    }
    document.getElementById("lol").innerHTML = `
    <!DOCTYPE html>
<html lang="en">
<head>
<script src="index.css"></script>  <!---S-->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Math Operations!</title>
    <style>
        a.right-out {
            float: right;
        }
    </style>
</head>
<body>
    <a href="#" class="right-out" onclick="logout();">Sign Out!</a>
    <br>
    <br>
        <center>
        <p>First Number:</p>
        <input type="number" name="firstnum" id="firstnum">
        <br>
        <p>Operator:</p>
        <select name="operator" id="operator">
            <option value="add">+</option>
            <option value="sub">-</option>
            <option value="mul">*</option>
            <option value="div">/</option>
            <option value="mod">%</option>
        </select>
        <br>
        <p>Second Number:</p>
        <input type="number" name="secondnum" id="secondnum">
        <br>
        <input type="submit" value="submit" onclick="math_logic();" class="btn btn-success">

<br>
<p>
    Result:
</p>
<p>${result}</p>
</center>

</body>
</html>

    `;
}

function math_logic() {
    console.log(document.getElementById('firstnum').value)
    console.log(document.getElementById('secondnum').value)
    console.log(document.getElementById('operator').value)
    var firstnum = document.getElementById('firstnum').value;
    var secondnum = document.getElementById('secondnum').value;
    var operator = document.getElementById('operator').value;
    var header = new Headers();
    header.append("Authorization", `Basic ${localStorage.getItem("uname&pword")}`);
    header.append("Content-Type", "application/json");
    var construction = {
        "method":"POST",
        headers:header,
        body: JSON.stringify({"arg1":firstnum, "arg2":secondnum}),
        redirect: 'follow'
    }
    fetch(`${serverurl}/api/operation/${operator}`,construction)
    .then(
        response => response.text()
    )
    .then(
       result => {
           var jsoned_data = JSON.parse(result);
           math_render(jsoned_data.result);
       } 
    ).catch( error => console.log(error));
}

function signup_render() {
    document.getElementById("lol").innerHTML = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>REST Form</title>
</head>
<body>
  

    <center>
        <h2>REST calc signup</h2>
           <p>Username:</p>
           <input type="text" name="username" id="username" required>
           <br>
           <p>Password:</p>
           <input type="password" name="password" id="password" required>
           <br>
           <input type="submit" value="submit" onclick="signup_logic();">
       </form>
       <br>
       <a href="#init" onclick="init(null,null);">Sign in!</a>
       <br>
       <a href="#">Forgot password?</a>
       <br>
       
    </center>
</body>
</html>
    `
}

function signup_logic() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    var header = new Headers();
    header.append("Authorization", `Basic ${btoa(username + ":" + password)}`);

    var construction = {
        method:"POST",
        headers:header,
        redirect:'follow'
    };
    fetch(`${serverurl}/api/signup`,construction).then(
        response => response.text()
    )
    .then(
        result => {
            console.log(result)
            init(null,"success: your account has now been created!")
        }
    )
    .catch(error => console.log(error));
}
