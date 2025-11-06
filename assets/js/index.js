
const nameLogoImagen = document.getElementById("logoAmora");

if(nameLogoImagen != null){
    const urlLogo = nameLogoImagen.getAttribute('data-img');
    nameLogoImagen.src = CONFIG.BASE_URL + urlLogo;
}

const nameFavicon   = document.getElementById("faviconLogo");

if(nameFavicon != null){
    const urlFavicon    = nameFavicon.getAttribute('data-favicon');
    nameFavicon.href    = CONFIG.BASE_URL + urlFavicon;
}


