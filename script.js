const submit = document.getElementById('submit');
        const check = document.getElementById('checkbox');
        submit.addEventListener('click',()=>{
            const user = document.getElementById('username').value;
            const pass = document.getElementById('password').value;
            const data = localStorage.getItem(user);
            if(check.checked){
                localStorage.setItem("username",user);
                localStorage.setItem("password",pass);
                alert(`Logged in as ${user}`);
            }
            if(!check.checked){
                localStorage.removeItem("username");
                localStorage.removeItem("password");
                alert("data is removed");
            }
        })
        function input(){
            const user = document.getElementById('username').value;
            const pass = document.getElementById('password').value;
            const data = localStorage.getItem("username");
            if(data){
                const existing = document.createElement('button');
                existing.id="exist";
                existing.textContent = "Login as existing user";
                existing.addEventListener('click',()=>{
                    alert(`Logged in as ${user}`);
                })
                const form = document.getElementById('form');
                form.appendChild(existing);
            }
        }