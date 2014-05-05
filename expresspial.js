module.exports = function(espial){

    return {

        default: function(req, res, next){
            if(!espial.is_master()){
                var master = espial.master;
                res.location(master.ip);
            }
            else
                next();
        }

    }
}
