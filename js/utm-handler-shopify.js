(function () {
    const config = {
        'token': '',
        'clickIdParam': 'click_id',
        'pixelIdParam': 'pixel_id'
    };

    function initializeFromScript() {
        const currentScript = document.currentScript;
        if (currentScript) {
            config.token = currentScript.getAttribute("data-token") || '';
            config.clickIdParam = currentScript.getAttribute("data-click-id-param") || 'click_id';
            config.pixelIdParam = currentScript.getAttribute("data-pixel-id-param") || 'pixel_id';
        }
    }

    window.configureUtmHandler = function (customConfig) {
        config.token = customConfig.token || '';
        config.clickIdParam = customConfig.clickIdParam || 'click_id';
        config.pixelIdParam = customConfig.pixelIdParam || 'pixel_id';
    };

    function getUrlParameters() {
        const params = {};
        const urlSearchParams = new URLSearchParams(window.location.search);
        for (const [key, value] of urlSearchParams) {
            params[key] = value;
        }
        return params;
    }

    function handleUtmParameters() {
        const urlParams = getUrlParameters();
        
        const clickId = urlParams[config.clickIdParam] || null;
        const pixelId = urlParams[config.pixelIdParam] || '';
        const utmValue = (config.token + "::" + clickId + "::" + pixelId);
        const hasRegisteredClickId = localStorage.getItem(`KWAI_UTM_TRACK_${config.token}`)

        if (clickId && clickId.length >= 5) {
            const currentUrl = new URL(window.location.href);
            currentUrl.searchParams.set("utm_source", utmValue);
            localStorage.setItem(`KWAI_UTM_TRACK_${config.token}`, utmValue);
            window.history.pushState({}, '', currentUrl.toString());
        }

        if (hasRegisteredClickId) {
            const currentUrl = new URL(window.location.href);
            currentUrl.searchParams.set("utm_source", localStorage.getItem(`KWAI_UTM_TRACK_${config.token}`));
            window.history.pushState({}, '', currentUrl.toString());
        }
    }

    initializeFromScript();
    window.addEventListener("load", handleUtmParameters);
})();