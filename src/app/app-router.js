
/**
 * 路由 懒加载 配置文件 
 */
import app from '@/app/app-main'

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('/', {
            url: '/',
            templateUrl: '/src/app/templates/app-html.html',
            controller: 'appController',
        })
}])
