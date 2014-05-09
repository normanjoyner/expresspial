var _ = require("lodash");

module.exports = function(espial){

    return {

        redirect_to_master: function(req, res, next){
            if(!espial.is_master()){
                var master = espial.get_master();

                if(_.isUndefined(master.ip))
                    res.send(503);
                else{
                    var port = req.headers.host.split(":");
                    if(port.length > 1)
                        port = port[1];
                    else
                        port = 80;

                    var location = [req.protocol, "://", master.ip, ":", port, req.url].join("");
                    res.redirect(307, location);
                }
            }
            else
                return next();
        },

        redirect_to_slave: function(req, res, next){
            if(espial.is_master()){
                var slave = _.sample(espial.get_nodes());

                if(!_.has(slave, "ip"))
                    res.send(503);
                else{
                    var port = req.headers.host.split(":");
                    if(port.length > 1)
                        port = port[1];
                    else
                        port = 80;

                    var location = [req.protocol, "://", slave.ip, ":", port, req.url].join("");
                    res.redirect(307, location);
                }
            }
            else
                return next();
        }

    }
}
