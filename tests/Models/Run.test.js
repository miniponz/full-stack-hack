const Run = require('../../lib/models/Run');
const mongoose = require('mongoose');

describe('Run schema', () => {
  test('creates a run with user, date, distance, time, pace, notes ', () => {
    const activity = new Run({
      user: 'cara',
      runTitle: 'I am dying',
      date: '11.10.2010',
      distance: 10,
      time: 90,
      pace: 10 / 90,
      notes: 'that was hard'
    });

    expect(activity.toJSON()).toEqual({
      user: 'cara',
      runTitle: 'I am dying',
      date: '11.10.2010',
      distance: 10,
      time: 90,
      pace: 10 / 90,
      notes: 'that was hard',
      _id: expect.any(mongoose.Types.ObjectId)
    });
  });
});
