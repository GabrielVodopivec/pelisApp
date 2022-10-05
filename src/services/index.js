import Swal from "sweetalert2";

export const formValidation = (email, password) => {
    const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        if (email === "" || password === "") {
            Swal.fire({
                title: "Missing data",
                icon: 'error'
            })
        } else if (email !== "" && !emailRegex.test(email)) {
            Swal.fire({
                title: "Invalid Email",
                icon: 'error',
                color: '#212529'
            })
        } else {
            return true
        }

        
        
}