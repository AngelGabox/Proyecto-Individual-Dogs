//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { preloadTemps } = require('./src/controllers/tempController.js');
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT || 3001, async() => {
    try {
      console.log('%s Cargando ...')
      const preloadT = await preloadTemps()
      console.log('%s ' + preloadT)
      console.log('%s listening at 3001'); // eslint-disable-line no-console
    } catch (error) {
      console.log(error) 
    }
    });
});
