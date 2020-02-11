Written by; Gavin McDowell (ENG Support 2019)

Learning: Angular Path on PluralSight; https://app.pluralsight.com/paths/skills/angular (Recommended Starting Point)

Setting up the Angular Application;
	'angular.json';
		projects > ANG-APP > architect > build > configurations > production;
			baseHref & deployUrl: Set these values to the domain that will be used on the IIS; ("/{domain}/")
				Example; "/drainagestructurecalc/" for "devnet/drainagestructurecalc"

Compiling the Angular Application;
	IIS (After configuring 'angular.json' file);
		ng build --prod (This is ran automatically on publish, see .csproj file)
	
	Local Development w/API Wrapper;
		ng build --watch (Watch is optional, will automatically rebuild if any files changed until terminated)

	Local Development w/o API Wrapper;
		ng serve

Security through JSON Web Tokens (JWT)
	The authorize attribute will use JWT Bearer scheme if the header is 'Authenticate: Bearer {Token}' which is provided by the 'token.interceptor.ts'
		but will automatically fallback to Windows if enabled, this will trigger a prompt to input user credentials,
		avoid these scenarios by protecting the routes on the client side using guards when nessesary.
		IMPORTANT; The only route that will not have the header changed to 'Authenticate: Bearer {Token}' is 'api/Token/RequestToken' route.
	The secret can be found in 'appsettings.json'.
	'auth.can-activate.guard.ts': Should be applied to any routes that require authentication.
	'token.interceptor.ts': Applied at the root in the 'app.module.ts' as a provider.
		This will intercept any http request and attach a authorization header using the stored JWT token. 
		IMPORTANT; This will also catch any HTTP 401 responses; meaning you can also use the 'Authorize' attributes to protect endpoints using JWT authentication
			and it will be handled on the client side by destroying any old tokens and redirecting them to the Login/Authorization route.
	'auth.service.ts': Change the 'login' function to fit needs. 
	IMPORTANT; Unless the token is encrypted, the Claims stored in the token can be decoded but not altered (If altered, the signature will no longer match and will fail to validate.)
		DO NOT STORE SENSITIVE DATA IN THE TOKEN.
		If encrypted, the claims can no longer be decoded client side. You will need to pass client-side authorization data alongside the token instead.

Important Warnings;
	MEMORY LEAKS; Angular, by nature, is extremely prone to memory leaks. 
		Observables not called through the Angular AsyncPipe are not disposed of automatically and need to be handled appropriately. (Opinion; I personally prefer the explicit sub/unsub process as it lends more control of the data to the developer.)
		During development keep a close eye on the "Performance Monitor" (Chrome) window and pay attention to the JS Heap size.

	PERFORMANCE; Angular by default will update everything if a single change occurs, this is extremely inefficient (even more so for large projects). 
		It is better to use the OnPush method or initiate the checks by either using the ChangeDetectorRef:MarkForCheck function or
		use the ChangeDetectorRef:Detach/DetectChanges functions to explicitly trigger an update when needed.