import * as R from 'ramda';

const db = [
  {id: 1, views: 0, clicks: 0},
  {id: 2, views: 0, clicks: 0},
  {id: 3, views: 0, clicks: 0},
  {id: 4, views: 0, clicks: 0},
  {id: 5, views: 0, clicks: 0},
  {id: 6, views: 0, clicks: 0},
  {id: 7, views: 0, clicks: 0},
  {id: 8, views: 0, clicks: 0},
  {id: 9, views: 0, clicks: 0},
  {id: 0, views: 0, clicks: 0},
  {id: 11, views: 0, clicks: 0},
  {id: 12, views: 0, clicks: 0},
  {id: 13, views: 0, clicks: 0},
  {id: 14, views: 0, clicks: 0},
  {id: 15, views: 0, clicks: 0},
  {id: 16, views: 0, clicks: 0},
  {id: 17, views: 0, clicks: 0},
  {id: 18, views: 0, clicks: 0},
  {id: 19, views: 0, clicks: 0},
  {id: 20, views: 0, clicks: 0},
  {id: 21, views: 0, clicks: 0},
  {id: 22, views: 0, clicks: 0},
  {id: 23, views: 0, clicks: 0},
  {id: 24, views: 0, clicks: 0},
  {id: 25, views: 0, clicks: 0},
  {id: 26, views: 0, clicks: 0},
  {id: 27, views: 0, clicks: 0},
  {id: 28, views: 0, clicks: 0},
  {id: 29, views: 0, clicks: 0}
];

const updateViews_ = (recommendationList) => {
  recommendationList.map((r) => {
    db.find((e) => e.id === r.id).views++;
  });

  return recommendationList;
};

const computeRatio_ = (a) => a.clicks / a.views;

const recommend = () => {
  let recommendationList;
  if (Math.random() > 0.5) {
    console.log('explore');
    recommendationList = R.sort(() => Math.random() > 0.5, db);
  } else {
    console.log('exploit');
    recommendationList = R.sort(
      (a, b) => computeRatio_(a) > computeRatio_(b),
      db
    );
  }
  return updateViews_(recommendationList);
};

const click = (id) => {
  db.find((e) => e.id === id).clicks++;
  return 'OK';
};

const viewAll = () => db;

export {recommend, click, viewAll};
