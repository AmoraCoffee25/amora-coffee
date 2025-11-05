const isLocal = location.hostname === "localhost" || location.hostname === "127.0.0.1";

const CONFIG = {
  BASE_URL: isLocal
    ? "http://localhost/misitio/"
    : "https://amora-coffee.netlify.app/"
};