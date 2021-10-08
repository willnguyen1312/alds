/*
This problem was asked by Stripe.

Write a map implementation with a get function that
lets you retrieve the value of a key at a particular time.

It should contain the following methods:

set(key, value, time): sets key to value for t = time.
get(key, time): gets the key at t = time.
The map should work like this. If we set a key at a particular time,
it will maintain that value forever or until it gets set at a later time.
In other words, when we get a key at a time,
it should return the value that was set for that key set at the most recent time.

Consider the following examples:

# Python
d.set(1, 1, 0) # set key 1 to value 1 at time 0
d.set(1, 2, 2) # set key 1 to value 2 at time 2
d.get(1, 1) # get key 1 at time 1 should be 1
d.get(1, 3) # get key 1 at time 3 should be 2
d.set(1, 1, 5) # set key 1 to value 1 at time 5
d.get(1, 0) # get key 1 at time 0 should be null
d.get(1, 10) # get key 1 at time 10 should be 1
d.set(1, 1, 0) # set key 1 to value 1 at time 0
d.set(1, 2, 0) # set key 1 to value 2 at time 0
d.get(1, 0) # get key 1 at time 0 should be 2
*/

export function getValueAtTime() {
  const cacheMap: Map<number, [{ time: number; value: number }]> = new Map();
  return {
    get: (key: number, time: number) => {
      const items = cacheMap.get(key);
      if (items.length === 1) {
        return items[0].value;
      }

      for (let index = 0; index < items.length - 1; index++) {
        const item = items[index];
        if (item.time === time) {
          return item.value;
        }

        const nextItem = items[index + 1] ?? {
          time: Number.MIN_VALUE,
          value: Number.MIN_VALUE,
        };

        if (time > item.time && time < nextItem.time) {
          const diff1 = time - item.time;
          const diff2 = nextItem.time;
          const resultItem = diff1 <= diff2 ? item : nextItem;
          return resultItem.value;
        }
      }

      return items[items.length - 1].value;
    },
    set: (key: number, value: number, time: number) => {
      const items = cacheMap.get(key);
      if (!items) {
        cacheMap.set(key, [{ value, time }]);
        return;
      }

      const foundItem = items.find((item) => item.time === time);
      if (foundItem) {
        foundItem.value = value;
        return;
      }

      items.push({ time, value });
    },
  };
}
