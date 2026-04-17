export const adminAuth  =  (req,res,next) =>
{console.log("Admin auth gettin checked")
    const token =  "123"
if( !isAdminAuthorised){
    res.status(401).send("Unauthorised request")
    } else{
        next()
    }
}