if(process.env.NODE_ENV === 'production'){
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}
 
// process.env.NODE_ENV 환경변수 로컬인지 배포환경인지  production 일경우 로컬 
