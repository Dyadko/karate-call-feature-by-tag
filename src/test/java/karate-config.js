function fn() {
  var env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);

  var config = {}

  if (env == 1) {
    config.globalVariable = karate.callSingle('classpath:examples/users/callable1.feature').globalVariable;
  } else if (env == 2) {
    config.globalVariable = karate.callSingle('classpath:examples/users/callable2.feature@second').globalVariable;
  }

  return config;
}