import { route, param } from 'typesafe-react-router';

const Routes = {
  EVENT: route('event', param('eventId')),
};

console.log(Routes.EVENT.template())
