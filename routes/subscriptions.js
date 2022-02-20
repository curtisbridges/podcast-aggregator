import express from 'express'
import { Subscription } from '../models/subscription.js'

const router = express.Router()

const subscriptions = []
const subscription = new Subscription('https://atp.fm/rss')

import { fetch } from '../utils/feed.js'

const feed = fetch(subscription.url)
console.log(`! feed`, feed)
subscriptions.push(subscription)

router.get('/', (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  // Subscription.find({}, 'url')
  //   .then((data) => res.json(data))
  //   .catch(next);
  res.json(subscriptions)
})

router.post('/', (req, res, next) => {
  if (req.body.url) {
    // Subscription.create(req.body)
    //   .then((data) => res.json(data))
    //   .catch(next);
    const subscription = new Subscription(url)
    const feed = fetch(url)
    subscriptions.push(subscription)
  } else {
    res.json({
      error: 'The input field is empty',
    })
  }
})

router.delete('/:id', (req, res, next) => {
  // Subscription.findOneAndDelete({ _id: req.params.id })
  //   .then((data) => res.json(data))
  //   .catch(next);

  try {
    const id = parseInt(req.params.id)
    res.json(subscriptions[id])
  } catch (err) {
    res.sendStatus(400)
  }
})

export default router
