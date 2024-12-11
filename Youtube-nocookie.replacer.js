var cari = window.location.href; var alihkan = cari.search("="); if(alihkan>1) { var tautan = window.location.href; var barU = tautan.substring(0, tautan.indexOf("="));   window.open(barU); }
