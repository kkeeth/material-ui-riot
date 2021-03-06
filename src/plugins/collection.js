import { install } from "riot";

export default class CollectionMixin {
  /**
   * Filter collection by criteria
   * @params prop - collection name
   * @params criteria - object (Which field should be filtred)
   */
  filter(prop, criteria) {
    return this[prop].filter((item) => {
      let criteriaPass = false;
      Object.keys(criteria).forEach((k) => {
        const v = criteria[k];
        let regexp = new RegExp(`${v}`, "i");
        criteriaPass = regexp.test(item[k]);
      });
      return criteriaPass;
    });
  }
  /**
   * Find something in collection
   * @params prop - collection name
   * @params criteria - object (Which field should be filtred)
   */
  find(data, criteria) {
    const searched = {};
    let i = 0;
    data.forEach((e) => {
      Object.keys(criteria).forEach((k) => {
        let v = criteria[k];
        if (e[k] == v) {
          searched.e = e;
          searched.k = i;
        }
      });
      i++;
    });
    return searched;
  }
}

install((component) => {
  component.collection = CollectionMixin;

  return component;
});
