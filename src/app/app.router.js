"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./component/home/home.component');
var chatpage_component_1 = require('./component/chatpage/chatpage.component');
var AppRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'chatpage',
        component: chatpage_component_1.ChatpageComponent
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(AppRoutes);
//# sourceMappingURL=app.router.js.map