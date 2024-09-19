
const passport = require("passport");
const {Strategy: LocalStrategy} = require("passport-local");
const pool = require("./accessDB");

function auth(){
  passport.use(new LocalStrategy({
        usernameField: 'name',
        passwordField: 'password'
      },
      function(name, password, done) {
        // sqlinjection
        const sql=`select * from user where name='${name}'`;
        pool.query(sql).then((data)=>{
          const user_data=data[0][0];

          if(user_data.password!=password){
            return done(null, false, { message: 'ユーザー名およびパスワードが間違っています。' });
          }

          return done(null, user_data);
        })


      })
  )
  ;



  passport.serializeUser(function (user_data, done) {
    done(null, user_data.id)
  });
  passport.deserializeUser(function (user_name_saved, done) {
    // ユーザーの情報をDBから探す
    const sql = `select * from user where name = '${user_name_saved}'`
    pool.query(sql).then((result)=>done(null, result[0])).catch((err)=>console.log(err));


  });

}

module.exports=auth;
