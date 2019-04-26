module.exports = function($rootScope, $location) {
    var currIndex = 0;

    $rootScope.pages = [
        {title: "ScrollBar",    href: "#!/"},
        {title: "RadioButtons", href:"#!/radio"},
        {title: "CheckBoxes",   href:"#!/check"},
        {title: "TrueorFalse",   href:"#!/vouf"}
    ];
    $rootScope.myCurrent = 1;
    $rootScope.myTotal = "25%";
    
    $rootScope.changePage = function(dir) {
        if (dir == "next" && currIndex < $rootScope.pages.length - 1) {            
            $location.path($rootScope.pages[++currIndex].href.substring(2));
            $rootScope.title = $rootScope.pages[currIndex].title;
            
        }
        else if(dir == "previous" && currIndex > 0) {
            $location.path($rootScope.pages[--currIndex].href.substring(2));
            $rootScope.title = $rootScope.pages[currIndex].title;

        }
        $rootScope.myCurrent = currIndex + 1;
        
        var vl = currIndex + 1;
        var tl = $rootScope.pages.length;
        
        rs = (vl / tl) * 100;
        
        $rootScope.myTotal = rs + '%';
    };    
};