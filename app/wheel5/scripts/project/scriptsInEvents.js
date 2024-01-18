


const scriptsInEvents = {

	async Es_menu_Event1_Act1(runtime, localVars)
	{
		const url = window.parent.location.href;
		const queryString = url.includes('?') ? url.split('?')[1] : '';
		const urlParams = new URLSearchParams(queryString);
		const keyword = urlParams.get('keyword');
		
		runtime.globalVars.keywordC3 = keyword;
		
		
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

