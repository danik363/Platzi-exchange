const url = "https://api.coincap.io/v2";

async function getAssets() {
  let res = await fetch(`${url}/assets?limit=20`);

  res = await res.json();

  console.log("Ya termine de cargar");
  return res.data;
  // return res.data;
}

async function getAsset(coin) {
  let res = await fetch(`${url}/assets/${coin}`);

  res = await res.json();

  return res.data;
}

async function getAssetHistory(coin) {
  const now = new Date();
  const end = now.getTime();

  now.setDate(now.getDate() - 1);
  const start = now.getTime();

  let res = await fetch(
    `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  );

  res = await res.json();

  return res.data;
}

async function getMarkets(coin) {
  let res = await fetch(`${url}/assets/${coin}/markets?limit=5`);

  res = await res.json();

  return res.data;
}

async function getExchange(id) {
  let res = await fetch(`${url}/exchanges/${id}`);

  console.log(res.status);

  if (!res.ok) {
    throw new Error(`No se encuentra exchange para ${id}`);
  }
  res = await res.json();

  return res.data;
}
export default {
  getAssets,
  getAsset,
  getAssetHistory,
  getMarkets,
  getExchange,
};
