(function(){
    System.config({
      // Referentie naar de juiste folders etc
      paths: {
        'npm:':'node_modules/'
      },

      map: {
        'app': 'app',

        // angular 5 bundles
        '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
        '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
        '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
        '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
        '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',

        // other libraries
        'rxjs': 'npm:rxjs'
        //'rxjs/observable/merge': 'npm:rxjs/observable/*.js'

      },

      packages: {
        app: {
          defaultExtension: 'js',
          meta: {
            './*.js': {
              loader: 'systemjs-angular-loader.js'
            }
          }
        },
        rxjs: {
          defaultExtension: 'js'
        }
      }
    });
})();
