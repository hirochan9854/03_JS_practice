chiikawas.forEach((chiiikawaStorys) => {
  const newStory = new Chiikawa(
    chiiikawaStorys.story,
    chiiikawaStorys.title,
    chiiikawaStorys.image,
    chiiikawaStorys.id
  );
  document
    .querySelector(".contents")
    .insertAdjacentHTML("beforeend", newStory.descript());
});

import { chiikawas } from "./object.js";
import { Chiikawa } from "./class.js";
