


    const updater = ()=>{

        fetch("http://jsonplaceholder.typicode.com/users",  { 
            method : 'GET',
            mode : 'cors',
            headers : {
                "Content-Type" : "application/json",
            } 
        } )
        .then( (res) => res.json())
        .then( (data) => {
            console.log(data)
            console.log(data [5].company.name)
            console.log(data [5].email)
            console.log(data [5].name)

            data.map((e)=> {
                document.getElementById("root").innerHTML += Card(
                    e.name,
                    e.email,
                    e.phone, 
                )
            } ) 
        } )
    }

    window.Card = (name, email, phone) => {
        return `
            <div class="card">
                <h1>${name}</h1>
                <h3>${email}</h3>
                <p>${phone}</p>
            </div>
            <hr/>
        `

    }

    updater()