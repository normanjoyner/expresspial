module.exports = function(espial){

    return {

        default: function(req, res, next){
            if(!espial.is_master()){
                var master = espial.get_master();

                var port = req.headers.host.split(":");
                if(port.length > 1)
                    port = port[1];
                else
                    port = 80;

                var location = [req.protocol, "://", master.ip, ":", port, req.url].join("");
                res.redirect(307, location);
            }
            else
                next();
        }

    }
}
