var cari = window.location.href; var alihkan = cari.search("&pp="); if(alihkan>1) { var tautan = window.location.href; var barU = tautan.substring(0, tautan.indexOf("&pp="));   window.open(barU); }
