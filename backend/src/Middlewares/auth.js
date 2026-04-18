const adminAuth  =  (req,res,next) =>
{console.log("Admin auth gettin checked")
    const token = "123"
    const isAdminAuthorised = token === "123"  // Define the variable
if( !isAdminAuthorised){
    res.status(401).send("Unauthorised request")
    } else{
        next()
    }
}  

const userAuth  =  (req,res,next) =>
{console.log("User auth gettin checked")
    const token = "123"
    const isUserAuthorised = token === "123"  // Define the variable
if( !isUserAuthorised){
    res.status(401).send("Unauthorised request")
    } else{
        next()
    }
}  

module.exports = {
    adminAuth,
    userAuth,
}