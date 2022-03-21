module.exports.getReq = async (req,res) => {

    try{

        const call = async () =>{
            console.log("Get Request");
        }

        await call();

        return res.send({
            status : 200,
            message :"Get Request"
        })
    }
    catch(e){

        console.log("Error in getReq",e);

        return res.send({
            status : 500,
            message :" Server side error",

        })
    }

}
module.exports.postReq = async(req,res) => {

    try{
        const call = async(req) =>{
            console.log("Post Request");
            console.log("Payload",req.body);
            
        }

        await call(req);
        
        return res.send({
            status : 200,
            message :"Post Request"
        })
    }
    catch(e){

        console.log("Error in postReq",e);

        return res.send({
            status : 500,
            message :" Server side error",
            
        })
    }

}

module.exports.putReq = async(req,res) => {

    try{
        const call = async(req) =>{
            console.log("Put Request");
            console.log("Payload",req.body);
            
        }
        await call(req);

        return res.send({
            status : 200,
            message :"Put Request"
        })
    }
    catch(e){

        console.log("Error in putReq",e);

        return res.send({
            status : 500,
            message :" Server side error",
            
        })
    }

}