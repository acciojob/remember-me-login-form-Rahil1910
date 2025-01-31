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
                alert("Logged in as username");
            }
        })
        function input(){
            const user = document.getElementById('username').value;
            const pass = document.getElementById('password').value;
            const data = localStorage.getItem("username");
            const data1 = localStorage.getItem("password");
            if(data && data1){
                const exist = document.querySelector("#existing");
				exist.classList.toggle("show");
                exist.addEventListener('click',()=>{
                    alert(`Login as existing user`);
                })
                const form = document.getElementById('form');
                form.appendChild(existing);
            }
        }