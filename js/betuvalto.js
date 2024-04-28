
function toggleTheme() { 

    var theme = document.getElementsByTagName('link')[0]; 

    if (theme.getAttribute('href') == './css/alap.css') { 
        theme.setAttribute('href', './css/nagybetus.css'); 
    } else { 
        theme.setAttribute('href', './css/alap.css'); 
    } 
} 
