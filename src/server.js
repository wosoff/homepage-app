const expressService = require('./express-service');
const routes = require('./routes');
const pidRouter = require('./child-routers/portfolio-pid-router')

expressService.listenHTTPS();

expressService.addRoutes(routes);

expressService.mountChildRouter('/portfolio', pidRouter)
