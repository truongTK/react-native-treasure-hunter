import { Meteor } from 'meteor/meteor';
import {Campaign, Step} from '/collections';

if (Meteor.isServer) {
  Meteor.startup(() => {
    // Campaign.remove({});
    // Step.remove({});
    if (Campaign.find().count() === 0) {
      // first start, init database
      const stepId1 = Step.insert({
        question: 'question 1',
        answer: '1',
        location: {lat: 10.729795, lng: 106.694756},
        textLocation: 'Đại học RMIT',
      });
      const stepId2 = Step.insert({
        question: 'question 2',
        answer: '2',
        location: {lat: 10.777021, lng: 106.695414},
        textLocation: 'Dinh độc lập',
      });
      const stepId3 = Step.insert({
        question: 'question 3',
        answer: '3',
        location: {lat: 10.772556, lng: 106.697991},
        textLocation: 'Chợ Bến Thành',
      });
      Campaign.insert({
        name: 'Campaign 1',
        gift: 'một tràng pháo tay',
        start: new Date(2016, 11, 16, 8),
        end: new Date(2016, 11, 16, 18),
        nStep: 3,
        steps: [ stepId1,stepId2,stepId3 ],
      });
    }
    console.log(Campaign.find().fetch());
  });
}
