const Run = require('../../lib/models/Run');
const mongoose = require('mongoose');

describe('Run schema', () => {
  test('creates a run with user, date, distance, time, pace, notes ', () => {
    const activity = new Run({
      user: 'cara',
      title: 'I am dying',
      date: '11.10.2010',
      distance: 10,
      time: 90,
      pace: 10 / 90,
      notes: 'that was hard'
    });

    expect(activity.toJSON()).toEqual({
      user: 'cara',
      title: 'I am dying',
      date: '11.10.2010',
      distance: 10,
      time: 90,
      pace: 10 / 90,
      notes: 'that was hard',
      _id: expect.any(mongoose.Types.ObjectId)
    });
  });

  test('user is required', () => {
    const activity = new Run({
      title: 'I am dying',
      date: '11.10.2010',
      distance: 10,
      time: 90,
      pace: 10 / 90,
      notes: 'that was hard'
    });

    const errors = activity.validateSync().errors;
    expect(errors.user.message).toEqual('Path `user` is required.');
  });

  test('date is required', () => {
    const activity = new Run({
      user: 'a person',
      distance: 10,
      time: 90,
      pace: 10 / 90,
      notes: 'that was hard'
    });

    const errors = activity.validateSync().errors;
    expect(errors.date.message).toEqual('Path `date` is required.');
  });

  test('distance is required', () => {
    const activity = new Run({
      user: 'a person',
      date: '11.10.1982',
      time: 90,
      pace: 10 / 90,
      notes: 'that was hard'
    });

    const errors = activity.validateSync().errors;
    expect(errors.distance.message).toEqual('Path `distance` is required.');
  });

  test('time is required', () => {
    const activity = new Run({
      user: 'a person',
      date: '11.10.1982',
      distance: 10,
      pace: 10 / 90,
      notes: 'that was hard'
    });

    const errors = activity.validateSync().errors;
    expect(errors.time.message).toEqual('Path `time` is required.');
  });

  test('pace is required', () => {
    const activity = new Run({
      user: 'a person',
      date: '11.10.1982',
      distance: 10,
      time: 90,
      notes: 'that was hard'
    });

    const errors = activity.validateSync().errors;
    expect(errors.pace.message).toEqual('Path `pace` is required.');
  });


});
