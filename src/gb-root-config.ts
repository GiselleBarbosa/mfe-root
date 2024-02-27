import { LifeCycles, registerApplication, start } from "single-spa";

registerApplication({
	name: "@single-spa/welcome",
	app: () =>
		System.import<LifeCycles>(
			"https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
		),
	activeWhen: ["/"],
});

registerApplication({
	name: "@angular-mfe",
	app: () => System.import<LifeCycles>("angular-mfe"),
	activeWhen: ["/angular-mfe"],
});

start({
	urlRerouteOnly: true,
});
