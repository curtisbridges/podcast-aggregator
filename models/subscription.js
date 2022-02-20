// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// Create schema for todo
// const SubscriptionSchema = new Schema({
//   url: {
//     type: String,
//     required: [true, 'The subscription url is required'],
//   },
// });

// Create model for podcasts
// const Subscription = mongoose.model('subscription', SubscriptionSchema);

export class Subscription {
  constructor(url) {
    this.url = url
  }
}

// Podcast Subscription
// id (ID)
// url (string)
// title (string)
// subscribed (bool)
// notifications (bool)
// keep (number)
// skipIntro (number)
// skipOutro (number)
// sortUnplayed (bool)
// sortPlayed (bool)
// order
