import { test } from '~models';

const getTestA = async (req, res) => {
  const data = await test.testA.find((err, result) => result);
  console.log('[test_controller:getTestA] successful');
  res.json(data);
};

const saveTestA = (req, res) => {
  const data = {
    id: new Date().getTime(),
    name: req.body.name,
  };
  test.testA.create(data, (err, result) => {
    console.log(`[test_controller:saveTestA] successful, id: ${result.id}`);
    if (err) console.error(err);
  });
  res.send('saved');
};

export {
  getTestA,
  saveTestA,
};
