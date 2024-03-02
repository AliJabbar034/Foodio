
const url=`http://localhost:8000/api`
export const CreateOrder = async ( order) =>{

    const response = await fetch(`${url}orders/`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    })

    if (!response.ok){
        throw new Error("Order not created successfully")
        return
    }

    const data = await response.json()

    return data
}


export const CreateReservation = async (reservation)=>{
    const response = await fetch(`${url}/reservation/`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reservation)
    })

    if (!response.ok){
        throw new Error("Reservation not created successfully")
        return
    }

    const data = await response.json()

    return data
}

export const CancelReservation = async (id) =>{
    const response = await fetch(`${url}reservations/${id}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (!response.ok){
        throw new Error("Reservation not cancelled successfully")
        return
    }

    const data = await response.json()

    return data
}


//  export const RegisterUser = async (user) => {
//     console.log(user);
//     const response = await fetch(`${url}/user/register`,{
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(user)
//     })



//     if (!response.ok){
//         throw new Error("User not created successfully")
//         return
//     }

//     const data = await response.json()
// console.log(data);
//     return data

//  }

export const RegisterUser = async (user) => {
    try {
        const response = await fetch(`${url}/user/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
 

        if (!response.ok) {
            throw new Error("User not created successfully");
        }

        const data = await response.json();
   
        return data;
    } catch (error) {
        console.error("Error registering user:", error);
        return null; // or handle the error as needed
    }
}


 export const LoginUser = async (user) => {
    const response = await fetch(`${url}users/login`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })

    if (!response.ok){
        throw new Error("User Found")
        return
    }

    const data = await response.json()

    return data
 }


 export const getProfile = async ()=>{
    const response = await fetch(`${url}/user/me`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (!response.ok){
      
        return
    }

    const data = await response.json()

    return data
 }