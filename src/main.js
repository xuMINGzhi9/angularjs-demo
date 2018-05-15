import app from '@/app/app-main';
import configs from '@/app/app-config/config';
import filters from '@/app/app-config/filter';
import services from '@/app/app-config/service';
import controllers from '@/app/app-config/controller';
import '@/app/app-router'

for(let config of configs){
    app.config(config);
}
for(let filter of filters){
    app.filter(filter.name, filter.content);
}
for(let service of services){
    app.service(service.name, service.content);
}
for(let controller of controllers){
    app.controller(controller.name, controller.content);
}







