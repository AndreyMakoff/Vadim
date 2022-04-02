// 1. У любого пользователя будет как минимум в БД qualites & profession
// 2. Они ровны mock данным

const Profession = require('../models/Profession');
const Quality = require('../models/Quality');
const professionMock = require('../mock/professoins.json');
const qualitiesMock = require('../mock/qualities.json');

module.exports = async () => {
  const professions = await Profession.find();
  if (professions.length !== professionMock.length) {
    await createIinialEntity(Profession, professionMock);
  }
};

module.exports = async () => {
  const qualities = await Quality.find();
  if (qualities.length !== qualitiesMock.length) {
    await createIinialEntity(Quality, qualitiesMock);
  }
};

async function createIinialEntity(Model, data) {
  await Model.collection.drop();
  return Promise.all(
    data.map(async (item) => {
      try {
        delete item._id;
        const newItem = new Model(item);
        await newItem.save();
        return newItem;
      } catch (e) {
        return e;
      }
    })
  );
}
