'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.post("/dataVisualization/selectGoodsInfo", controller.dataVisualization.selectGoodsInfo)
  router.post("/dataVisualization/selectOrderInfo", controller.dataVisualization.selectOrderInfo)

  router.get("/machine/getIndustrial", controller.machine.getIndustrial)

  router.get("/QSWorldRankingUniversity", controller.qSWorldRankingUniversity.index)

  router.post("/Youtube", controller.youtube.index)

  router.get("/Student", controller.student.index)

  router.get("/sex", controller.sex.index)

  router.get("/keep", controller.keep.index)

  router.post("/war", controller.war.index)

  router.get("/shoot", controller.shoot.index)

  router.get("/AIDS", controller.aids.index)

  router.get("/Murder", controller.murder.index)

  router.get("/EarthQuakes", controller.earthQuakes.index)

  router.get("/Gold", controller.gold.index)

  router.get("/cat", controller.cat.index)

  router.get("/stream", controller.stream.index)

  router.get("/gpu", controller.gpu.index)

  router.get("/NorthAmericaBearKillings", controller.northAmericaBearKillings.index)
};
