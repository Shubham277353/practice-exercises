"use strict";

async function loadJson(url) {
  const response = await fetch(url);
  try {
    if (response.status == 200) {
      const data = await response.json();
    }
  } catch (response) {
    console.log(response.status);
  }
}

loadJson("https://javascript.info/no-such-user.json");
