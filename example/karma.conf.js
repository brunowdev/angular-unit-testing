module.exports = function(config) {
  config.set({

    // caminho base que será utilizado para montar todos os diretórios (ex. files, exclude)
    basePath: '',


    // frameworks utilizados
    // lista de frameworks disponíveis: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // lista de arquivos / patterns que serão carregados no browser
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/**/*.module.js',
      'src/**/*.js',
      'src/**/*.html'
    ],


    // lista de arquivos para serem excluídos
    exclude: [
    ],


    // pré-processadores antes de servir os arquivos no browser
    // lista de pré-processadores disponíveis: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.html': ['ng-html2js'],
      'src/**/!(*.mock|*.spec).js': ['coverage']
    },


    ngHtml2JsPreprocessor: {
      stripPrefix: 'src/',
      moduleName: 'templates'
    },


    // relatórios possíveis
    reporters: ['progress', 'coverage'],


    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },


    // porta do servidor web
    port: 9876,


    // habilita / desabilita cores na saída (relatórios e logs)
    colors: true,


    // níveis de logging
    // possíveis valores: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // habilita / desabilita monitoramento de mudanças dos arquivos de teste
    autoWatch: true,


    // browsers que serão utilizados
    // lista de browsers disponíveis: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Modo CI
    // se verdadeiro, efetua os testes e fecha o browser
    singleRun: false
  });
};



