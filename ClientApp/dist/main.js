(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/account/login/login.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/account/login/login.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-4 bg-white rounded shadow-2 mt-8\">\r\n\t<h1>Login</h1>\r\n\t<form (ngSubmit)=\"onSubmit()\">\r\n\t\t<label class=\"mr-2\">Username:</label>\r\n\t\t<input [(ngModel)]=\"username\" name=\"username\">\r\n\t\t<label class=\"mr-2\">Password:</label>\r\n\t\t<input [(ngModel)]=\"password\" name=\"password\" type=\"password\" />\r\n\t\t<div class=\"flex pt-4\">\r\n\t\t\t<button class=\"btn mr-2\" type=\"submit\">Submit</button>\r\n\t\t\t<button class=\"btn\" type=\"button\" (click)=\"loginWithAD()\">Login with AD</button>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/account/profile/profile.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/account/profile/profile.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-4 bg-white rounded shadow-2 mt-8\">\r\n\t<h1>Profile</h1>\r\n\t<h4>This is a protected route, user will be blocked if not authenticated.</h4>\r\n\t<h6>{{protectedData}}</h6>\r\n\t<button class=\"btn mt-4\" (click)=\"logout()\">Logout</button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"page\">\r\n\t<header class=\"z-50 items-center shadow-2 flex justify-between bg-teal-900 py-4\">\r\n\t\t<div class=\"pl-10\">\r\n\t\t\t<img src=\"../assets/images/logo.svg\" />\r\n\t\t</div>\r\n\t\t<div class=\"pr-20\">\r\n\t\t\t<a class=\"text-white\" [routerLink]=\"['/account']\" [routerLinkActive]=\"['active-link']\">Account</a>\r\n\t\t</div>\r\n\t</header>\r\n\r\n\t<nav class=\"p-8 flex flex-col shadow-4\">\r\n\t\t<p class=\"-ml-4 font-medium\">Sections</p>\r\n\t\t<a class=\"py-1\" [routerLink]=\"['/']\" [routerLinkActive]=\"['active-link']\" [routerLinkActiveOptions]=\"{exact:true}\">Home</a>\r\n\t\t<a class=\"py-1\" disabled>Acquisition</a>\r\n\t\t<a class=\"py-1\" disabled>Appraisal</a>\r\n\t\t<a class=\"py-1\" [routerLink]=\"['/certtitle']\" [routerLinkActive]=\"['active-link']\">Certificate of Title</a>\r\n\t\t<a class=\"py-1\" [routerLink]=\"['/engineering-home']\" [routerLinkActive]=\"['active-link']\">Engineering</a>\r\n\t\t<a disabled class=\"py-1\">Inventory</a>\r\n\t\t<a class=\"py-1\" disabled>Joint Use</a>\r\n\t\t<a disabled class=\"py-1\">Property Management</a>\r\n\r\n\t\t<a class=\"py-1\" [routerLink]=\"['/employees']\" [routerLinkActive]=\"['active-link']\">Employee List</a>\r\n\r\n\t\t<a [routerLink]=\"['/rrtable']\" [routerLinkActive]=\"['active-link']\" class=\"py-1\">Railroad</a>\r\n\t\t<a class=\"py-1\" disabled>Relocation</a>\r\n\t\t<a disabled class=\"py-1\">RID</a>\r\n\t\t<a class=\"py-1\" disabled>Schedule</a>\r\n\t\t<a disabled class=\"py-1\">Tracts</a>\r\n\r\n\t\t<p class=\"-ml-4 py-1 font-medium\">People</p>\r\n\t\t<a class=\"py-1\" disabled>Consultants</a>\r\n\t\t<a class=\"py-1\" disabled>Right-of-Way Staff</a>\r\n\t\t<a class=\"py-1\" disabled>KDOT Design Squads</a>\r\n\t</nav>\r\n\r\n\t<!--<ul>\r\n\t\t<li><a (click)='showModalExampleA()'>Modal: Default</a></li>\r\n\t\t<li><a (click)='showModalExampleB()'>Modal: Static</a></li>\r\n\t\t<li><a (click)='showModalExampleC()'>Modal: Full Page</a></li>\r\n\t</ul>-->\r\n\t<!--<app-time></app-time>-->\r\n\t<main class=\"px-48 h-screen bg-gray-200\">\r\n\t\t<router-outlet></router-outlet>\r\n\t</main>\r\n\r\n\t<!--<app-weather></app-weather>-->\r\n\t<app-modal>\r\n\t\t<div class=\"flex justify-end bg-white rounded-t pr-3 pt-2\">\r\n\t\t\t<button class=\"modal-close btn mx-1 my-1\">Close</button>\r\n\t\t</div>\r\n\t</app-modal>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cert-title/cert-title-details/cert-title-details.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cert-title/cert-title-details/cert-title-details.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex justify-end mt-2\">\r\n\t<button class=\"btn-reverse\" (click)=\"addCertTitle()\">Add</button>\r\n</div>\r\n<div class=\"w-full rounded shadow-2 p-10 bg-white mt-2\">\r\n\t<form (ngSubmit)=\"onSubmit()\">\r\n\t\t<div class=\"flex justify-center\">\r\n\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Status</label>\r\n\r\n\t\t\t\t\t<select class=\"border rounded p-1\" [(ngModel)]=\"certTitle.rcT_STATUS\" name=\"rcT_STATUS\">\r\n\r\n\t\t\t\t\t\t<option *ngFor=\"let systemCode of systemCodes\" [selected]=\"certTitle.rcT_STATUS == systemCode.cD_ID\" [value]=\"systemCode.cD_ID\">{{systemCode.cD_DISPLAY}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col py-2\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Request</label>\r\n\r\n\t\t\t\t\t<select class=\"border rounded p-1\" [(ngModel)]=\"certTitle.rcT_REQUEST\" name=\"rcT_REQUEST\">\r\n\r\n\t\t\t\t\t\t<option *ngFor=\"let systemCode of systemCodes\" [selected]=\"certTitle.rcT_REQUEST == systemCode.cD_ID\" [value]=\"systemCode.cD_ID\">{{systemCode.cD_DISPLAY}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Ordered By</label>\r\n\r\n\t\t\t\t\t<select class=\"border rounded p-1\" [(ngModel)]=\"certTitle.rcT_ORDERED_BY\" name=\"rcT_ORDERED_BY\">\r\n\r\n\t\t\t\t\t\t<option *ngFor=\"let staff of staff\" [selected]=\"certTitle.rcT_ORDERED_BY == staff.rS_ID\" [value]=\"staff.rS_ID\">{{staff.rS_FIRST_NAME}} {{staff.rS_LAST_NAME}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col py-2\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Returned To</label>\r\n\r\n\t\t\t\t\t<select class=\"border rounded p-1\" [(ngModel)]=\"certTitle.rcT_RETURNED_TO\" name=\"rcT_RETURNED_TO\">\r\n\r\n\t\t\t\t\t\t<option *ngFor=\"let staff of staff\" [selected]=\"certTitle.rcT_RETURNED_TO == staff.rS_ID\" [value]=\"staff.rS_ID\">{{staff.rS_FIRST_NAME}} {{staff.rS_LAST_NAME}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Assigned To</label>\r\n\r\n\t\t\t\t\t<select class=\"border rounded p-1\" [(ngModel)]=\"certTitle.rcT_ASSIGNED_TO\" name=\"rcT_ASSIGNED_TO\">\r\n\r\n\t\t\t\t\t\t<option *ngFor=\"let ctAgent of ctAgents\" [selected]=\"certTitle.rcT_ASSIGNED_TO == ctAgent.rvA_ID\" [value]=\"ctAgent.rvA_ID\">{{ctAgent.rvA_COMPANY_NAME}}: {{ctAgent.rvA_FIRST_NAME}} {{ctAgent.rvA_LAST_NAME}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"flex flex-col mx-8\">\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Tract</label>\r\n\t\t\t\t\t<input [(ngModel)]=\"certTitle.rcT_TRACT_CT\" type=\"text\" name=\"rcT_TRACT_CT\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col py-4\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Ordered</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"certTitle.rcT_ORDERED_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"certTitle.rcT_ORDERED_DT = $event\" name=\"rcT_ORDERED_DT\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Due</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"certTitle.rcT_DUE_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"certTitle.rcT_DUE_DT = $event\" name=\"rcT_DUE_DT\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col py-4\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Returned</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"certTitle.rcT_RETURNED_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"certTitle.rcT_RETURNED_DT = $event\" name=\"rcT_RETURNED_DT\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Estimated Completion</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"certTitle.rcT_EST_COMP_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"certTitle.rcT_EST_COMP_DT = $event\" name=\"rcT_EST_COMP_DT\" />\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t<div class=\"flex flex-col pb-4\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Created By/Date</label>\r\n\t\t\t\t\t<input class=\"bg-gray-200\" readonly type=\"text\" [(ngModel)]=\"certTitle.rcT_CREATED_BY\" name=\"rcT_CREATED_BY\" />\r\n\r\n\t\t\t\t\t<input class=\"bg-gray-200\" readonly type=\"date\" [ngModel]=\"certTitle.rcT_CREATED_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"certTitle.rcT_CREATED_DT = $event\" name=\"rcT_CREATED_DT\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Modified By/Date</label>\r\n\t\t\t\t\t<input class=\"bg-gray-200\" readonly type=\"text\" [(ngModel)]=\"certTitle.rcT_MODIFIED_BY\" name=\"rcT_MODIFIED_BY\" />\r\n\r\n\t\t\t\t\t<input class=\"bg-gray-200\" readonly type=\"date\" [ngModel]=\"certTitle.rcT_MODIFIED_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"certTitle.rcT_MODIFIED_DT = $event\" name=\"rcT_MODIFIED_DT\" />\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"flex justify-end mt-4\">\r\n\t\t\t<button class=\"btn\" type='submit'>\r\n\t\t\t\tSubmit\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cert-title/certificate-of-title-home/certificate-of-title.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cert-title/certificate-of-title-home/certificate-of-title.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-full rounded-b bg-white\">\r\n\t<form (ngSubmit)=\"onSubmit()\">\r\n\t\t<div class=\"flex justify-center px-8\">\r\n\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Status</label>\r\n\r\n\t\t\t\t\t<select class=\"border rounded p-1\" [(ngModel)]=\"certTitle.rcT_STATUS\" name=\"rcT_STATUS\">\r\n\r\n\t\t\t\t\t\t<option *ngFor=\"let systemCode of systemCodes\" [selected]=\"certTitle.rcT_STATUS == systemCode.cD_ID\" [value]=\"systemCode.cD_ID\">{{systemCode.cD_DISPLAY}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col py-2\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Request</label>\r\n\r\n\t\t\t\t\t<select class=\"border rounded p-1\" [(ngModel)]=\"certTitle.rcT_REQUEST\" name=\"rcT_REQUEST\">\r\n\r\n\t\t\t\t\t\t<option *ngFor=\"let systemCode of systemCodes\" [selected]=\"certTitle.rcT_REQUEST == systemCode.cD_ID\" [value]=\"systemCode.cD_ID\">{{systemCode.cD_DISPLAY}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Ordered By</label>\r\n\r\n\t\t\t\t\t<select class=\"border rounded p-1\" [(ngModel)]=\"certTitle.rcT_ORDERED_BY\" name=\"rcT_ORDERED_BY\">\r\n\r\n\t\t\t\t\t\t<option *ngFor=\"let staff of staff\" [selected]=\"certTitle.rcT_ORDERED_BY == staff.rS_ID\" [value]=\"staff.rS_ID\">{{staff.rS_FIRST_NAME}} {{staff.rS_LAST_NAME}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col py-2\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Returned To</label>\r\n\r\n\t\t\t\t\t<select class=\"border rounded p-1\" [(ngModel)]=\"certTitle.rcT_RETURNED_TO\" name=\"rcT_RETURNED_TO\">\r\n\r\n\t\t\t\t\t\t<option *ngFor=\"let staff of staff\" [selected]=\"certTitle.rcT_RETURNED_TO == staff.rS_ID\" [value]=\"staff.rS_ID\">{{staff.rS_FIRST_NAME}} {{staff.rS_LAST_NAME}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Assigned To</label>\r\n\r\n\t\t\t\t\t<select class=\"border rounded p-1\" [(ngModel)]=\"certTitle.rcT_ASSIGNED_TO\" name=\"rcT_ASSIGNED_TO\">\r\n\r\n\t\t\t\t\t\t<option *ngFor=\"let ctAgent of ctAgents\" [selected]=\"certTitle.rcT_ASSIGNED_TO == ctAgent.rvA_ID\" [value]=\"ctAgent.rvA_ID\">{{ctAgent.rvA_COMPANY_NAME}}: {{ctAgent.rvA_FIRST_NAME}} {{ctAgent.rvA_LAST_NAME}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"flex flex-col mx-8\">\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Tract</label>\r\n\t\t\t\t\t<input [(ngModel)]=\"certTitle.rcT_TRACT_CT\" type=\"text\" name=\"rcT_TRACT_CT\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col py-4\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Ordered</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"certTitle.rcT_ORDERED_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"certTitle.rcT_ORDERED_DT = $event\" name=\"rcT_ORDERED_DT\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Due</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"certTitle.rcT_DUE_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"certTitle.rcT_DUE_DT = $event\" name=\"rcT_DUE_DT\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col py-4\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Returned</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"certTitle.rcT_RETURNED_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"certTitle.rcT_RETURNED_DT = $event\" name=\"rcT_RETURNED_DT\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Estimated Completion</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"certTitle.rcT_EST_COMP_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"certTitle.rcT_EST_COMP_DT = $event\" name=\"rcT_EST_COMP_DT\" />\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"flex justify-end py-4 pr-4\">\r\n\t\t\t<button class=\"btn\" type='submit'>\r\n\t\t\t\tSubmit\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/employee/employee-detail/employee-detail.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/employee/employee-detail/employee-detail.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"border-16 border-red-400 p-2\">\r\n\t<button class=\"btn m-2\" (click)=\"onClose()\">Close</button>\r\n\t<h1>Employee Details: {{id}}</h1>\r\n\r\n\t<div *ngIf=\"employee\">\r\n\t\t<div>Name: {{employee.name}}</div>\r\n\t\t<div>User: {{employee.username}}</div>\r\n\t\t<div>Email: {{employee.email}}</div>\r\n\t\t<div>Street: {{employee.address.street}}</div>\r\n\t\t<div>City: {{employee.address.city}}</div>\r\n\t\t<div>Phone: {{employee.phone}}</div>\r\n\t\t<div>Company: {{employee.company.name}}</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/employee/employee-list/employee-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/employee/employee-list/employee-list.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"border-16 border-blue-400 p-2\">\r\n\t<h1>Employee List: {{filteredEmployees.length}}</h1>\r\n\r\n\t<p>This component demonstrates fetching data from an external webhost.</p>\r\n\t<p>Table is tracked by the ID, observe Elements tab of chrome DevTools.</p>\r\n\t<p>Employee Data is guarded, will redirect to login if not logged in.</p>\r\n\r\n\t<div *ngIf=\"employees && employees.length; else noContent\" style=\"display:flex;\">\r\n\t\t<button class=\"btn mr-2\" (click)=\"toggleEmployees()\">{{showEmployees ? 'Hide' : 'Show'}} Employees</button>\r\n\t\t<button class=\"btn\" *ngIf=\"showEmployees\" (click)=\"refreshEmployees()\">Refresh</button>\r\n\t</div>\r\n\r\n\t<div *ngIf=\"showEmployees\">\r\n\t\t<div class=\"flex justify-between\">\r\n\t\t\t<div class=\"my-auto\">\r\n\t\t\t\t<label class=\"mr-2\">Filter:</label>\r\n\t\t\t\t<input [(ngModel)]=\"listFilter\" name=\"listFilter\" type=\"text\" placeholder=\"Name\" />\r\n\t\t\t</div>\r\n\t\t\t<app-pagination [items]=\"filteredEmployees\" [pageSize]=\"5\" (changePage)=\"onChangePage($event)\"></app-pagination>\r\n\t\t</div>\r\n\t\t<table>\r\n\t\t\t<thead>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>ID</th>\r\n\t\t\t\t\t<th>Name</th>\r\n\t\t\t\t\t<th>User</th>\r\n\t\t\t\t\t<th>Email</th>\r\n\t\t\t\t\t<th>Address</th>\r\n\t\t\t\t\t<th>City</th>\r\n\t\t\t\t\t<th>Phone</th>\r\n\t\t\t\t</tr>\r\n\t\t\t</thead>\r\n\t\t\t<tbody>\r\n\t\t\t\t<!--TrackBy improves performace by telling Angular what it needs to redraw when the list data is refreshed.-->\r\n\t\t\t\t<tr *ngFor=\"let employee of pagedEmployees; trackBy: trackById\" [routerLink]=\"['/employees', { outlets: { 'secondary': [employee.id] } } ]\" [routerLinkActive]=\"['active']\">\r\n\t\t\t\t\t<td>{{employee.id}}</td>\r\n\t\t\t\t\t<td>{{employee.name}}</td>\r\n\t\t\t\t\t<td>{{employee.username}}</td>\r\n\t\t\t\t\t<td>{{employee.email}}</td>\r\n\t\t\t\t\t<td>{{employee.address.street}}</td>\r\n\t\t\t\t\t<td>{{employee.address.city}}</td>\r\n\t\t\t\t\t<td>{{employee.phone}}</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</tbody>\r\n\t\t</table>\r\n\t</div>\r\n\t<h6 *ngIf=\"employees\" style=\"text-align: right; margin: 0.25rem;\">Last Updated: {{ lastUpdated | date:'HH:mm:ss' }}</h6>\r\n\t<ng-template #noContent>\r\n\t\t<h4>Requesting Employee Data..</h4>\r\n\t</ng-template>\r\n\t<router-outlet name=\"secondary\"></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/engineering/cert-title/cert-title-details/cert-title-details.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/engineering/cert-title/cert-title-details/cert-title-details.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex justify-end mt-2\">\r\n\t<button class=\"btn-reverse\" (click)=\"addCertTitle()\">Add</button>\r\n</div>\r\n<div class=\"w-full rounded shadow-2 p-10 bg-white mt-2\">\r\n\t<form (ngSubmit)=\"onSubmit()\">\r\n\t\t<div class=\"flex justify-center\">\r\n\t\t\t<div class=\"flex flex-col\">\r\n\r\n\t\t\t\t<div class=\"flex flex-col py-4\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Ordered</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"engineering.enG_CT_ORDER_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"engineering.enG_CT_ORDER_DT = $event\" name=\"enG_CT_ORDER_DT\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Due</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"engineering.enG_CT_DUE_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"engineering.enG_CT_DUE_DT = $event\" name=\"enG_CT_DUE_DT\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col py-4\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Received</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"engineering.enG_CT_REC_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"engineering.enG_CT_REC_DT = $event\" name=\"enG_CT_REC_DT\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Contact</label>\r\n\r\n\t\t\t\t\t<select class=\"border rounded p-1\" [(ngModel)]=\"engineering.enG_CT_CONTACT\" name=\"enG_CT_CONTACT\">\r\n\r\n\t\t\t\t\t\t<option *ngFor=\"let staff of staff\" [selected]=\"engineering.enG_CT_CONTACT == staff.rS_ID\" [value]=\"staff.rS_ID\">{{staff.rS_FIRST_NAME}} {{staff.rS_LAST_NAME}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\t\t\t\r\n\t\t</div>\r\n\t\t<div class=\"flex justify-end mt-4\">\r\n\t\t\t<button class=\"btn\" type='submit'>\r\n\t\t\t\tSubmit\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/engineering/cert-title/certificate-of-title-home/certificate-of-title.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/engineering/cert-title/certificate-of-title-home/certificate-of-title.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-full rounded-b bg-white\">\r\n\t<form (ngSubmit)=\"onSubmit()\">\r\n\t\t<div class=\"flex justify-center px-10\">\r\n\t\t\t<div class=\"flex flex-col\">\r\n\r\n\t\t\t\t<div class=\"flex flex-col py-4\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Ordered</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"engineering.enG_CT_ORDER_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"engineering.enG_CT_ORDER_DT = $event\" name=\"enG_CT_ORDER_DT\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Due</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"engineering.enG_CT_DUE_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"engineering.enG_CT_DUE_DT = $event\" name=\"enG_CT_DUE_DT\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col py-4\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Received</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"engineering.enG_CT_REC_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"engineering.enG_CT_REC_DT = $event\" name=\"enG_CT_REC_DT\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Contact</label>\r\n\r\n\t\t\t\t\t<select class=\"border rounded p-1\" [(ngModel)]=\"engineering.enG_CT_CONTACT\" name=\"enG_CT_CONTACT\">\r\n\r\n\t\t\t\t\t\t<option *ngFor=\"let staff of staff\" [selected]=\"engineering.enG_CT_CONTACT == staff.rS_ID\" [value]=\"staff.rS_ID\">{{staff.rS_FIRST_NAME}} {{staff.rS_LAST_NAME}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"flex justify-end p-4\">\r\n\t\t\t<button class=\"btn\" type='submit'>\r\n\t\t\t\tSubmit\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/engineering/checking/checking-details/checking-details.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/engineering/checking/checking-details/checking-details.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex justify-end mt-2\">\r\n\t<button class=\"btn-reverse\" (click)=\"addChecking()\">Add</button>\r\n</div>\r\n<div class=\"w-full rounded shadow-2 p-10 bg-white mt-2\">\r\n\t<form (ngSubmit)=\"onSubmit()\">\r\n\t\t<div class=\"flex justify-center\">\r\n\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Expected Date to Checker</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"engineering.enG_TO_CHECKER_TAR_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"engineering.enG_TO_CHECKER_TAR_DT = $event\" name=\"enG_TO_CHECKER_TAR_DT\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col py-2\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Actual Date to Checker</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"engineering.enG_TO_CHECKER_ACT_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"engineering.enG_TO_CHECKER_ACT_DT = $event\" name=\"enG_TO_CHECKER_ACT_DT\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Requested Due Back Date</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"engineering.enG_CHECKER_TAR_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"engineering.enG_CHECKER_TAR_DT = $event\" name=\"enG_CHECKER_TAR_DT\" />\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"flex flex-col ml-8\">\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Back from Checker</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"engineering.enG_CHECKER_ACT_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"engineering.enG_CHECKER_ACT_DT = $event\" name=\"enG_CHECKER_ACT_DT\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex flex-col pt-2\">\r\n\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Checked By</label>\r\n\r\n\t\t\t\t\t<select class=\"border rounded p-1\" [(ngModel)]=\"engineering.enG_CHECKER\" name=\"enG_CHECKER\">\r\n\r\n\t\t\t\t\t\t<option *ngFor=\"let staff of staff\" [selected]=\"engineering.enG_CHECKER == staff.rS_ID\" [value]=\"staff.rS_ID\">{{staff.rS_FIRST_NAME}} {{staff.rS_LAST_NAME}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"flex justify-end\">\r\n\t\t\t<button class=\"btn\"\r\n\t\t\t\t\ttype='submit'>\r\n\t\t\t\tSubmit\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/engineering/checking/checking-home/checking.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/engineering/checking/checking-home/checking.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-full rounded-b bg-white\">\r\n\t<form (ngSubmit)=\"onSubmit()\">\r\n\t\t<div class=\"flex justify-center px-8\">\r\n\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Expected Date to Checker</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"engineering.enG_TO_CHECKER_TAR_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"engineering.enG_TO_CHECKER_TAR_DT = $event\" name=\"enG_TO_CHECKER_TAR_DT\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col py-2\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Actual Date to Checker</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"engineering.enG_TO_CHECKER_ACT_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"engineering.enG_TO_CHECKER_ACT_DT = $event\" name=\"enG_TO_CHECKER_ACT_DT\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Requested Due Back Date</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"engineering.enG_CHECKER_TAR_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"engineering.enG_CHECKER_TAR_DT = $event\" name=\"enG_CHECKER_TAR_DT\" />\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"flex flex-col ml-8\">\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Back from Checker</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"engineering.enG_CHECKER_ACT_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"engineering.enG_CHECKER_ACT_DT = $event\" name=\"enG_CHECKER_ACT_DT\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex flex-col pt-2\">\r\n\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Checked By</label>\r\n\r\n\t\t\t\t\t<select class=\"border rounded p-1\" [(ngModel)]=\"engineering.enG_CHECKER\" name=\"enG_CHECKER\">\r\n\r\n\t\t\t\t\t\t<option *ngFor=\"let staff of staff\" [selected]=\"engineering.enG_CHECKER == staff.rS_ID\" [value]=\"staff.rS_ID\">{{staff.rS_FIRST_NAME}} {{staff.rS_LAST_NAME}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"flex justify-end py-4 pr-4\">\r\n\t\t\t<button class=\"btn\" type='submit'>\r\n\t\t\t\tSubmit\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/engineering/existing-rw/existing-rw.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/engineering/existing-rw/existing-rw.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>existing-rw works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/engineering/general/general.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/engineering/general/general.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-full rounded shadow-2 p-10 bg-white mt-2\">\r\n\t<form (ngSubmit)=\"onSubmit()\">\r\n\t\t<div class=\"flex justify-around\">\r\n\t\t\t<div class=\"flex flex-col rounded shadow-2 p-4\">\r\n\t\t\t\t<p class=\"text-lg\">Progress</p>\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Percentage Complete</label>\r\n\t\t\t\t\t<input type=\"text\" [ngModel]=\"(engineering.enG_PERCENT_COMP/100) | percent\" (ngModelChange)=\"engineering.enG_PERCENT_COMP = $event\" name=\"enG_PERCENT_COMP\" />\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"flex flex-col rounded shadow-2 p-4\">\r\n\t\t\t\t<p class=\"text-lg\">Funding</p>\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Percentage Complete</label>\r\n\t\t\t\t\t<input type=\"text\" [ngModel]=\"(engineering.enG_PERCENT_COMP/100) | percent\" (ngModelChange)=\"engineering.enG_PERCENT_COMP = $event\" name=\"enG_PERCENT_COMP\" />\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"flex flex-col rounded shadow-2 p-4\">\r\n\t\t\t\t<p class=\"text-lg\">Important Dates</p>\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Percentage Complete</label>\r\n\t\t\t\t\t<input type=\"text\" [ngModel]=\"(engineering.enG_PERCENT_COMP/100) | percent\" (ngModelChange)=\"engineering.enG_PERCENT_COMP = $event\" name=\"enG_PERCENT_COMP\" />\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"flex justify-end mt-4\">\r\n\t\t\t<button class=\"btn\" type='submit'>\r\n\t\t\t\tSubmit\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/engineering/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/engineering/home/home.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex justify-end fade-in\">\r\n\t<div class=\"max-w-sm p-3 bg-white rounded-b-lg overflow-hidden shadow-2 flex flex-end mb-4 flex justify-center\">\r\n\t\t<p class=\"text-2xl\">Engineering</p>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"flex items-center justify-center\">\r\n\t<div>\r\n\t\t<a class=\"bg-white items-center text-teal-900 flex p-2 rounded-l-lg text-sm uppercase h-16 shadow-1\" [routerLink]=\"['/engineering-home']\" [routerLinkActive]=\"['active-link']\">\r\n\t\t\tHome\r\n\t\t</a>\r\n\t</div>\r\n\t<div class=\"shadow-1 mx-1\">\r\n\t\t<a class=\"bg-white items-center text-teal-900 flex p-2 text-sm uppercase h-16\" [routerLink]=\"['/engineering-home', {outlets: {'secondary': ['general']}}]\"\r\n\t\t   [routerLinkActive]=\"['active']\">\r\n\t\t\tGeneral\r\n\t\t</a>\r\n\t</div>\r\n\t<div class=\"shadow-1 mr-1\">\r\n\t\t<a class=\"bg-white items-center text-teal-900 flex p-2 text-sm uppercase h-16\" [routerLink]=\"['/engineering-home', {outlets: {'secondary': ['existing-rw']}}]\"\r\n\t\t   [routerLinkActive]=\"['active']\">\r\n\t\t\tExisting R/W\r\n\t\t</a>\r\n\t</div>\r\n\t<div class=\"shadow-1 mr-1\">\r\n\t\t<a class=\"bg-white items-center text-teal-900 flex p-2 text-sm uppercase h-16\" [routerLink]=\"['/engineering-home', {outlets: {'secondary': ['checking']}}]\"\r\n\t\t   [routerLinkActive]=\"['active']\">\r\n\t\t\tChecking\r\n\t\t</a>\r\n\t</div>\r\n\t<div class=\"shadow-1 mr-1\">\r\n\t\t<a class=\"bg-white items-center text-teal-900 flex p-2 text-sm uppercase h-16\" [routerLink]=\"['/engineering-home', {outlets: {'secondary': ['planning']}}]\"\r\n\t\t   [routerLinkActive]=\"['active']\">\r\n\t\t\tPlanning\r\n\t\t</a>\r\n\t</div>\r\n\t<div class=\"shadow-1 mr-1\">\r\n\t\t<a class=\"bg-white items-center text-teal-900 flex p-2 text-sm uppercase h-16\" [routerLink]=\"['/engineering-home', {outlets: {'secondary': ['certificate-of-title']}}]\"\r\n\t\t   [routerLinkActive]=\"['active']\">\r\n\t\t\tCertificate of Title\r\n\t\t</a>\r\n\t</div>\r\n\t<div class=\"shadow-1 mr-1\">\r\n\t\t<a class=\"bg-white items-center text-teal-900 flex p-2 text-sm uppercase h-16\" [routerLink]=\"['/engineering-home', {outlets: {'secondary': ['legal']}}]\"\r\n\t\t   [routerLinkActive]=\"['active']\">\r\n\t\t\tLegal\r\n\t\t</a>\r\n\t</div>\r\n\t<div class=\"shadow-1 mr-1\">\r\n\t\t<a class=\"bg-white items-center text-teal-900 flex p-2 text-sm uppercase h-16\" [routerLink]=\"['/engineering-home', {outlets: {'secondary': ['technician-history']}}]\"\r\n\t\t   [routerLinkActive]=\"['active']\">\r\n\t\t\tTechnician History\r\n\t\t</a>\r\n\t</div>\r\n\t<div class=\"shadow-1 mr-1\">\r\n\t\t<a class=\"bg-white items-center text-teal-900 flex p-2 text-sm uppercase h-16\" [routerLink]=\"['/engineering-home', {outlets: {'secondary': ['project-notes']}}]\"\r\n\t\t   [routerLinkActive]=\"['active']\">\r\n\t\t\tProject Notes\r\n\t\t</a>\r\n\t</div>\r\n\t<div class=\"shadow-1 mr-1\">\r\n\t\t<a class=\"bg-white items-center text-teal-900 flex p-2 text-sm uppercase h-16\" [routerLink]=\"['/engineering-home', {outlets: {'secondary': ['survey-notes']}}]\"\r\n\t\t   [routerLinkActive]=\"['active']\">\r\n\t\t\tSurvey Notes\r\n\t\t</a>\r\n\t</div>\r\n\t<div class=\"shadow-1\">\r\n\t\t<a class=\"bg-white items-center text-teal-900 flex p-2 text-sm uppercase h-16\" [routerLink]=\"['/engineering-home', {outlets: {'secondary': ['plan-files']}}]\"\r\n\t\t   [routerLinkActive]=\"['active']\">\r\n\t\t\tPlan Files\r\n\t\t</a>\r\n\t</div>\r\n\t<div class=\"shadow-1 mx-1\">\r\n\t\t<a class=\"bg-white items-center text-teal-900 flex p-2 text-sm uppercase h-16\" [routerLink]=\"['/engineering-home', {outlets: {'secondary': ['plan-revisions']}}]\"\r\n\t\t   [routerLinkActive]=\"['active']\">\r\n\t\t\tPlan Revisions\r\n\t\t</a>\r\n\t</div>\r\n\t<div>\r\n\t\t<a class=\"bg-white items-center text-teal-900 flex p-2 rounded-r-lg text-sm uppercase h-16 shadow-1\" href=\"http://reports/BIPortal/Contents.aspx?categoryId=39014\" target=\"_blank\">\r\n\t\t\tEngineering Reports\r\n\t\t</a>\r\n\t</div>\r\n</div>\r\n\r\n<router-outlet name=\"secondary\"></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/engineering/legal/legal.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/engineering/legal/legal.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>legal works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/engineering/plan-files/plan-files-details/plan-files-details.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/engineering/plan-files/plan-files-details/plan-files-details.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex justify-end mt-2\">\r\n\t<button class=\"btn-reverse\" (click)=\"addPlanFile()\">Add</button>\r\n</div>\r\n<div class=\"w-full rounded shadow-2 p-10 bg-white mt-2\">\r\n\t<form (ngSubmit)=\"onSubmit()\">\r\n\t\t<div class=\"flex justify-around\">\r\n\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Box</label>\r\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"planFile.epF_BOX\" name=\"epF_BOX\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col py-4\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">County</label>\r\n\r\n\t\t\t\t\t<select class=\"border rounded p-1\" [(ngModel)]=\"planFile.epF_COUNTY\" name=\"epF_COUNTY\">\r\n\r\n\t\t\t\t\t\t<option *ngFor=\"let county of counties\" [selected]=\"planFile.epF_COUNTY == county.rcO_NUM\" [value]=\"county.rcO_NUM\">{{county.rcO_NAME}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">File Status</label>\r\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"planFile.epF_FILE_STATUS_STRING\" name=\"epF_FILE_STATUS_STRING\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col py-4\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">File Location</label>\r\n\t\t\t\t\t<select class=\"border rounded p-1\" [(ngModel)]=\"planFile.epF_FILE_LOCATION_STRING\" name=\"epF_FILE_LOCATION_STRING\">\r\n\t\t\t\t\t\t<option value=\"Cleared Side\">Active Side</option>\r\n\t\t\t\t\t\t<option value=\"Box\">Box</option>\r\n\t\t\t\t\t\t<option value=\"Cleared Side\">Cleared Side</option>\r\n\t\t\t\t\t\t<option value=\"Done\">Done</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Folder Color</label>\r\n\t\t\t\t\t<select class=\"border rounded p-1\" [(ngModel)]=\"planFile.epF_FOLDER_COLOR_STRING\" name=\"epF_FOLDER_COLOR_STRING\">\r\n\t\t\t\t\t\t<option value=\"Black\">Black</option>\r\n\t\t\t\t\t\t<option value=\"Blue\">Blue</option>\r\n\t\t\t\t\t\t<option value=\"Brown\">Brown</option>\r\n\t\t\t\t\t\t<option value=\"Green\">Green</option>\r\n\t\t\t\t\t\t<option value=\"Orange\">Orange</option>\r\n\t\t\t\t\t\t<option value=\"Pink\">Pink</option>\r\n\t\t\t\t\t\t<option value=\"Purple\">Purple</option>\r\n\t\t\t\t\t\t<option value=\"Red\">Red</option>\r\n\t\t\t\t\t\t<option value=\"Tan\">Tan</option>\r\n\t\t\t\t\t\t<option value=\"White\">White</option>\r\n\t\t\t\t\t\t<option value=\"Yellow\">Yellow</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">File Number</label>\r\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"planFile.epF_FILE_NUM\" name=\"epF_FILE_NUM\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col py-2\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">File Part</label>\r\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"planFile.epF_FILE_PART\" name=\"epF_FILE_PART\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Comments</label>\r\n\t\t\t\t\t<textarea class=\"border h-24 p-2 rounded\" type=\"text\" [(ngModel)]=\"planFile.epF_COMMENTS\" name=\"epF_COMMENTS\"></textarea>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex items-center py-4\">\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<input type=\"checkbox\" disabled [ngModel]=\"planFile.epF_CLEARED_SIDE | convertToBoolean: 'Y'\" (ngModelChange)=\"planFile.epF_CLEARED_SIDE = $event ? 'Y' : 'N'\" name=\"epF_CLEARED_SIDE\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<label class=\"text-sm text-gray-600 ml-2\">Cleared Side</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col pt-1\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Cleared</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"planFile.epF_CLEARED_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"planFile.epF_CLEARED_DT = $event\" name=\"epF_CLEARED_DT\" />\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t<div class=\"flex flex-col pb-2\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Condition Cleared</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"planFile.epF_COND_CLEAR_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"planFile.epF_COND_CLEAR_DT = $event\" name=\"epF_COND_CLEAR_DT\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">To Scanner</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"planFile.epF_TO_SCANNER_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"planFile.epF_TO_SCANNER_DT = $event\" name=\"epF_TO_SCANNER_DT\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex py-3\">\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<input type=\"checkbox\" [ngModel]=\"planFile.epF_DGN | convertToBoolean: 'Y'\" (ngModelChange)=\"planFile.epF_DGN = $event ? 'Y' : 'N'\" name=\"epF_DGN\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<label class=\"text-sm text-gray-700 ml-2\">DGN</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex\">\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<input type=\"checkbox\" [ngModel]=\"planFile.epF_PLAN_FILE_MISSING | convertToBoolean: 'Y'\" (ngModelChange)=\"planFile.epF_PLAN_FILE_MISSING = $event ? 'Y' : 'N'\" name=\"epF_PLAN_FILE_MISSING\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<label class=\"text-sm text-gray-700 ml-2\"> Plan File Missing</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex py-3\">\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<input type=\"checkbox\" disabled [ngModel]=\"planFile.epF_MISSING | convertToBoolean: 'Y'\" (ngModelChange)=\"planFile.epF_MISSING = $event ? 'Y' : 'N'\" name=\"epF_MISSING\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<label class=\"text-sm text-gray-600 ml-2\">Missing</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex\">\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<input type=\"checkbox\" disabled [ngModel]=\"planFile.epF_SCANNED | convertToBoolean: 'Y'\" (ngModelChange)=\"planFile.epF_SCANNED = $event ? 'Y' : 'N'\" name=\"epF_SCANNED\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<label class=\"text-sm text-gray-600 ml-2\">Scanned</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex py-3\">\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<input disabled type=\"checkbox\" [ngModel]=\"planFile.epF_MicroFilmed | convertToBoolean: 'Y'\" (ngModelChange)=\"planFile.epF_MicroFilmed = $event ? 'Y' : 'N'\" name=\"epF_MicroFilmed\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<label class=\"text-sm text-gray-600 ml-2\">Microfilmed</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex\">\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<input disabled type=\"checkbox\" [ngModel]=\"planFile.epF_ACTIVE_SIDE | convertToBoolean: 'Y'\" (ngModelChange)=\"planFile.epF_ACTIVE_SIDE = $event ? 'Y' : 'N'\" name=\"epF_ACTIVE_SIDE\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<label class=\"text-sm text-gray-600 ml-2\">Active Side</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Tracts</label>\r\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"planFile.epF_TRACTS\" name=\"epF_TRACTS\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col py-2\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Description</label>\r\n\t\t\t\t\t<textarea class=\"border rounded h-24 p-2\" type=\"text\" [(ngModel)]=\"planFile.epF_DESCRIPT\" name=\"epF_DESCRIPT\"></textarea>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Created By/Date</label>\r\n\t\t\t\t\t<input class=\"bg-gray-200\" readonly type=\"text\" [(ngModel)]=\"planFile.epF_CREATED_BY\" name=\"epF_CREATED_BY\" />\r\n\r\n\t\t\t\t\t<input class=\"bg-gray-200\" readonly type=\"date\" [ngModel]=\"planFile.epF_CREATED_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"planFile.epF_CREATED_DT = $event\" name=\"epF_CREATED_DT\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col pt-2\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Modified By/Date</label>\r\n\t\t\t\t\t<input class=\"bg-gray-200\" readonly type=\"text\" [(ngModel)]=\"planFile.epF_MODIFIED_BY\" name=\"epF_MODIFIED_BY\" />\r\n\r\n\t\t\t\t\t<input class=\"bg-gray-200\" readonly type=\"date\" [ngModel]=\"planFile.epF_MODIFIED_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"planFile.epF_MODIFIED_DT = $event\" name=\"epF_MODIFIED_DT\" />\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"flex justify-end mt-4\">\r\n\t\t\t<button class=\"btn\" type='submit'>\r\n\t\t\t\tSubmit\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/engineering/plan-files/plan-files-home/plan-files.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/engineering/plan-files/plan-files-home/plan-files.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-full rounded-b bg-white\">\r\n\t<form (ngSubmit)=\"onSubmit()\">\r\n\t\t<div class=\"flex justify-center px-8\">\r\n\t\t\t<div class=\"flex flex-col mr-8\">\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Box</label>\r\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"planFile.epF_BOX\" name=\"epF_BOX\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col py-2\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">County</label>\r\n\t\t\t\t\t<select class=\"border rounded p-1\" [(ngModel)]=\"planFile.epF_COUNTY\" name=\"epF_COUNTY\">\r\n\r\n\t\t\t\t\t\t<option *ngFor=\"let county of counties\" [selected]=\"planFile.epF_COUNTY == county.rcO_NUM\" [value]=\"county.rcO_NUM\">{{county.rcO_NAME}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">File Status</label>\r\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"planFile.epF_FILE_STATUS_STRING\" name=\"epF_FILE_STATUS_STRING\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col py-2\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">File Location</label>\r\n\t\t\t\t\t<select class=\"border rounded p-1\" [(ngModel)]=\"planFile.epF_FILE_LOCATION_STRING\" name=\"epF_FILE_LOCATION_STRING\">\r\n\t\t\t\t\t\t<option value=\"Cleared Side\">Active Side</option>\r\n\t\t\t\t\t\t<option value=\"Box\">Box</option>\r\n\t\t\t\t\t\t<option value=\"Cleared Side\">Cleared Side</option>\r\n\t\t\t\t\t\t<option value=\"Done\">Done</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Folder Color</label>\r\n\t\t\t\t\t<select class=\"border rounded p-1\" [(ngModel)]=\"planFile.epF_FOLDER_COLOR_STRING\" name=\"epF_FOLDER_COLOR_STRING\">\r\n\t\t\t\t\t\t<option value=\"Black\">Black</option>\r\n\t\t\t\t\t\t<option value=\"Blue\">Blue</option>\r\n\t\t\t\t\t\t<option value=\"Brown\">Brown</option>\r\n\t\t\t\t\t\t<option value=\"Green\">Green</option>\r\n\t\t\t\t\t\t<option value=\"Orange\">Orange</option>\r\n\t\t\t\t\t\t<option value=\"Pink\">Pink</option>\r\n\t\t\t\t\t\t<option value=\"Purple\">Purple</option>\r\n\t\t\t\t\t\t<option value=\"Red\">Red</option>\r\n\t\t\t\t\t\t<option value=\"Tan\">Tan</option>\r\n\t\t\t\t\t\t<option value=\"White\">White</option>\r\n\t\t\t\t\t\t<option value=\"Yellow\">Yellow</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"flex flex-col mr-8\">\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">File Number</label>\r\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"planFile.epF_FILE_NUM\" name=\"epF_FILE_NUM\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex flex-col py-2\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">File Part</label>\r\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"planFile.epF_FILE_PART\" name=\"epF_FILE_PART\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Comments</label>\r\n\t\t\t\t\t<textarea class=\"border rounded h-24 p-2\" type=\"text\" [(ngModel)]=\"planFile.epF_COMMENTS\" name=\"epF_COMMENTS\"></textarea>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex flex-col pt-2\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Cleared</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"planFile.epF_CLEARED_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"planFile.epF_CLEARED_DT = $event\" name=\"epF_CLEARED_DT\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"flex flex-col mr-8\">\r\n\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Condition Cleared</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"planFile.epF_COND_CLEAR_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"planFile.epF_COND_CLEAR_DT = $event\" name=\"epF_COND_CLEAR_DT\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col py-2\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">To Scanner</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"planFile.epF_TO_SCANNER_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"planFile.epF_TO_SCANNER_DT = $event\" name=\"epF_TO_SCANNER_DT\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex\">\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<input type=\"checkbox\" [ngModel]=\"planFile.epF_PLAN_FILE_MISSING | convertToBoolean: 'Y'\" (ngModelChange)=\"planFile.epF_PLAN_FILE_MISSING = $event ? 'Y' : 'N'\" name=\"epF_PLAN_FILE_MISSING\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<label class=\"text-sm text-gray-600 ml-2\"> Plan File Missing</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex flex-col py-2\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Tracts</label>\r\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"planFile.epF_TRACTS\" name=\"epF_TRACTS\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Description</label>\r\n\t\t\t\t\t<textarea class=\"border rounded h-24 p-2\" type=\"text\" [(ngModel)]=\"planFile.epF_DESCRIPT\" name=\"epF_DESCRIPT\"></textarea>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"flex justify-end pr-4 py-4\">\r\n\t\t\t<button class=\"btn\"\r\n\t\t\t\t\ttype='submit'>\r\n\t\t\t\tSubmit\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/engineering/plan-revisions/plan-revisions-details/plan-revisions-details.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/engineering/plan-revisions/plan-revisions-details/plan-revisions-details.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex justify-end mt-2\">\r\n\t<button class=\"btn-reverse\" (click)=\"addPlanRevision()\">Add</button>\r\n</div>\r\n<div class=\"w-full rounded shadow-2 p-10 bg-white mt-2\">\r\n\t<form (ngSubmit)=\"onSubmit()\">\r\n\t\t<div class=\"flex justify-center\">\r\n\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Change Received</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"planRevision.epR_PLAN_CHANGE_REC_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"planRevision.epR_PLAN_CHANGE_REC_DT = $event\" name=\"epR_PLAN_CHANGE_REC_DT\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col py-2\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Request Received</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"planRevision.epR_REQUEST_REC_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"planRevision.epR_REQUEST_REC_DT = $event\" name=\"epR_REQUEST_REC_DT\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">To Design</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"planRevision.epR_TO_DESIGN_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"planRevision.epR_TO_DESIGN_DT = $event\" name=\"epR_TO_DESIGN_DT\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex flex-col pt-2\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Completed</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"planRevision.epR_COMPLETED_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"planRevision.epR_COMPLETED_DT = $event\" name=\"epR_COMPLETED_DT\" />\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"flex flex-col ml-8\">\r\n\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Requestor</label>\r\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"planRevision.epR_REQUESTOR\" name=\"epR_REQUESTOR\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex flex-col py-2\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Request</label>\r\n\t\t\t\t\t<textarea class=\"border rounded h-24 p-2\" [(ngModel)]=\"planRevision.epR_REQUEST\" name=\"epR_REQUEST\" type=\"text\"></textarea>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"flex flex-col ml-8\">\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Created By/Date</label>\r\n\t\t\t\t\t<input class=\"bg-gray-200\" readonly type=\"text\" [(ngModel)]=\"planRevision.epR_CREATED_BY\" name=\"epR_CREATED_BY\" />\r\n\r\n\t\t\t\t\t<input class=\"bg-gray-200\" readonly type=\"date\" [ngModel]=\"planRevision.epR_CREATED_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"planRevision.epR_CREATED_DT = $event\" name=\"epR_CREATED_DT\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col pt-2\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Modified By/Date</label>\r\n\t\t\t\t\t<input class=\"bg-gray-200\" readonly type=\"text\" [(ngModel)]=\"planRevision.epR_MODIFIED_BY\" name=\"epR_MODIFIED_BY\" />\r\n\r\n\t\t\t\t\t<input class=\"bg-gray-200\" readonly type=\"date\" [ngModel]=\"planRevision.epR_MODIFIED_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"planRevision.epR_MODIFIED_DT = $event\" name=\"epR_MODIFIED_DT\" />\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"flex justify-end\">\r\n\t\t\t<button class=\"btn\"\r\n\t\t\t\t\ttype='submit'>\r\n\t\t\t\tSubmit\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/engineering/plan-revisions/plan-revisions-home/plan-revisions.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/engineering/plan-revisions/plan-revisions-home/plan-revisions.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-full rounded-b bg-white\">\r\n\t<form (ngSubmit)=\"onSubmit()\">\r\n\t\t<div class=\"flex justify-center px-8\">\r\n\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Change Received</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"planRevision.epR_PLAN_CHANGE_REC_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"planRevision.epR_PLAN_CHANGE_REC_DT = $event\" name=\"epR_PLAN_CHANGE_REC_DT\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col py-2\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Request Received</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"planRevision.epR_REQUEST_REC_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"planRevision.epR_REQUEST_REC_DT = $event\" name=\"epR_REQUEST_REC_DT\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">To Design</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"planRevision.epR_TO_DESIGN_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"planRevision.epR_TO_DESIGN_DT = $event\" name=\"epR_TO_DESIGN_DT\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex flex-col pt-2\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Completed</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"planRevision.epR_COMPLETED_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"planRevision.epR_COMPLETED_DT = $event\" name=\"epR_COMPLETED_DT\" />\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"flex flex-col ml-8\">\r\n\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Requestor</label>\r\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"planRevision.epR_REQUESTOR\" name=\"epR_REQUESTOR\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex flex-col py-2\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Request</label>\r\n\t\t\t\t\t<textarea class=\"border rounded h-24 p-2\" [(ngModel)]=\"planRevision.epR_REQUEST\" name=\"epR_REQUEST\" type=\"text\"></textarea>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"flex justify-end p-4\">\r\n\t\t\t<button class=\"btn\"\r\n\t\t\t\t\ttype='submit'>\r\n\t\t\t\tSubmit\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/engineering/planning/planning.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/engineering/planning/planning.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>planning works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/engineering/project-notes/project-notes-details/project-notes-details.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/engineering/project-notes/project-notes-details/project-notes-details.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex justify-end mt-2\">\r\n\t<button class=\"btn-reverse\" (click)=\"addProjectNote()\">Add</button>\r\n</div>\r\n<div class=\"w-full rounded shadow-2 p-10 bg-white mt-2\">\r\n\t<form (ngSubmit)=\"onSubmit()\">\r\n\t\t<div class=\"flex justify-center\">\r\n\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Engineer ID</label>\r\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"projectNote.eN_ENG_ID\" name=\"eN_ENG_ID\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col py-2\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Order</label>\r\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"projectNote.eN_ORDER\" name=\"eN_ORDER\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex\">\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<input type=\"checkbox\" [ngModel]=\"projectNote.eN_ON_REPORT | convertToBoolean: 'Y'\" (ngModelChange)=\"projectNote.eN_ON_REPORT = $event ? 'Y' : 'N'\" name=\"eN_ON_REPORT\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<label class=\"text-sm text-gray-600 ml-2\">On Report</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col pt-2\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Comments</label>\r\n\t\t\t\t\t<textarea class=\"border p-2 h-32 rounded\" [(ngModel)]=\"projectNote.eN_COMMENT\" type=\"text\" name=\"eN_COMMENT\"></textarea>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"flex flex-col ml-8\">\r\n\t\t\t\t<div class=\"flex flex-col pb-2\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Created By/Date</label>\r\n\t\t\t\t\t<input class=\"bg-gray-200\" readonly type=\"text\" [(ngModel)]=\"projectNote.eN_CREATED_BY\" name=\"eN_CREATED_BY\" />\r\n\r\n\t\t\t\t\t<input class=\"bg-gray-200\" readonly type=\"date\" [ngModel]=\"projectNote.eN_CREATED_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"projectNote.eN_CREATED_DT = $event\" name=\"eN_CREATED_DT\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Modified By/Date</label>\r\n\t\t\t\t\t<input class=\"bg-gray-200\" readonly type=\"text\" [(ngModel)]=\"projectNote.eN_MODIFIED_BY\" name=\"eN_MODIFIED_BY\" />\r\n\r\n\t\t\t\t\t<input class=\"bg-gray-200\" readonly type=\"date\" [ngModel]=\"projectNote.eN_MODIFIED_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"projectNote.eN_MODIFIED_DT = $event\" name=\"eN_MODIFIED_DT\" />\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"flex justify-end mt-4\">\r\n\t\t\t<button class=\"btn\" type='submit'>\r\n\t\t\t\tSubmit\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/engineering/project-notes/project-notes-home/project-notes.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/engineering/project-notes/project-notes-home/project-notes.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-full rounded-b bg-white\">\r\n\t<form (ngSubmit)=\"onSubmit()\">\r\n\t\t<div class=\"flex px-8 justify-center\">\r\n\t\t\t<div class=\"flex flex-col mr-12\">\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Engineer ID</label>\r\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"projectNote.eN_ENG_ID\" name=\"eN_ENG_ID\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col py-2\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Order</label>\r\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"projectNote.eN_ORDER\" name=\"eN_ORDER\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex\">\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<input type=\"checkbox\" [ngModel]=\"projectNote.eN_ON_REPORT | convertToBoolean: 'Y'\" (ngModelChange)=\"projectNote.eN_ON_REPORT = $event ? 'Y' : 'N'\" name=\"eN_ON_REPORT\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<label class=\"text-sm text-gray-600 ml-2\">On Report</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t<div class=\"flex flex-col pb-2\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Comments</label>\r\n\t\t\t\t\t<textarea class=\"border rounded p-2 h-32\" [(ngModel)]=\"projectNote.eN_COMMENT\" type=\"text\" name=\"eN_COMMENT\"></textarea>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"flex justify-end pr-4 pb-4 pt-2\">\r\n\t\t\t<button class=\"btn\"\r\n\t\t\t\t\ttype='submit'>\r\n\t\t\t\tSubmit\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/engineering/survey-notes/survey-notes-details/survey-notes-details.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/engineering/survey-notes/survey-notes-details/survey-notes-details.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex justify-end mt-2\">\r\n\t<button class=\"btn-reverse\" (click)=\"addSurvey()\">Add</button>\r\n</div>\r\n<div class=\"w-full rounded shadow-2 p-10 bg-white mt-2\">\r\n\t<form (ngSubmit)=\"onSubmit()\">\r\n\t\t<div class=\"flex justify-center\">\r\n\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Assigned</label>\r\n\r\n\t\t\t\t\t<select class=\"border rounded p-1\" [(ngModel)]=\"surveyNote.srV_ASSIGNED\" name=\"srV_ASSIGNED\">\r\n\r\n\t\t\t\t\t\t<option *ngFor=\"let staff of staff\" [selected]=\"surveyNote.srV_ASSIGNED == staff.rS_ID\" [value]=\"staff.rS_ID\">{{staff.rS_FIRST_NAME}} {{staff.rS_LAST_NAME}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col py-4\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Assigned Date</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"surveyNote.srV_ASSIGNED_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"surveyNote.srV_ASSIGNED_DT = $event\" name=\"srV_ASSIGNED_DT\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Received Date</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"surveyNote.srV_RCVD_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"surveyNote.srV_RCVD_DT = $event\" name=\"srV_RCVD_DT\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex flex-col pt-4\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Items Received</label>\r\n\t\t\t\t\t<textarea class=\"border rounded p-2 h-24\" type=\"text\" [(ngModel)]=\"surveyNote.srV_ITEMS_RCVD\" name=\"srV_ITEMS_RCVD\"></textarea>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"flex flex-col mx-8\">\r\n\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Project Number</label>\r\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"surveyNote.srV_PROJ_NUM\" name=\"srV_PROJ_NUM\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex flex-col py-2\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Remarks</label>\r\n\t\t\t\t\t<textarea class=\"border rounded p-2 h-24\" [(ngModel)]=\"surveyNote.srV_REMARKS\" name=\"srV_REMARKS\" type=\"text\"></textarea>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Created By/Date</label>\r\n\t\t\t\t\t<input class=\"bg-gray-200\" readonly type=\"text\" [(ngModel)]=\"surveyNote.srV_CREATED_BY\" name=\"srV_CREATED_BY\" />\r\n\r\n\t\t\t\t\t<input class=\"bg-gray-200\" readonly type=\"date\" [ngModel]=\"surveyNote.srV_CREATED_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"surveyNote.srV_CREATED_DT = $event\" name=\"srV_CREATED_DT\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Modified By/Date</label>\r\n\t\t\t\t\t<input class=\"bg-gray-200\" readonly type=\"text\" [(ngModel)]=\"surveyNote.srV_MODIFIED_BY\" name=\"srV_MODIFIED_BY\" />\r\n\r\n\t\t\t\t\t<input class=\"bg-gray-200\" readonly type=\"date\" [ngModel]=\"surveyNote.srV_MODIFIED_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"surveyNote.srV_MODIFIED_DT = $event\" name=\"srV_MODIFIED_DT\" />\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"flex justify-end\">\r\n\t\t\t<button class=\"btn\"\r\n\t\t\t\t\ttype='submit'>\r\n\t\t\t\tSubmit\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/engineering/survey-notes/survey-notes-home/survey-notes.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/engineering/survey-notes/survey-notes-home/survey-notes.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-full rounded-b bg-white\">\r\n\t<form (ngSubmit)=\"onSubmit()\">\r\n\t\t<div class=\"flex justify-center px-8\">\r\n\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Assigned</label>\r\n\r\n\t\t\t\t\t<select class=\"border rounded p-1\" [(ngModel)]=\"surveyNote.srV_ASSIGNED\" name=\"srV_ASSIGNED\">\r\n\r\n\t\t\t\t\t\t<option *ngFor=\"let staff of staff\" [selected]=\"surveyNote.srV_ASSIGNED == staff.rS_ID\" [value]=\"staff.rS_ID\">{{staff.rS_FIRST_NAME}} {{staff.rS_LAST_NAME}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col py-4\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Assigned Date</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"surveyNote.srV_ASSIGNED_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"surveyNote.srV_ASSIGNED_DT = $event\" name=\"srV_ASSIGNED_DT\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Received Date</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"surveyNote.srV_RCVD_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"surveyNote.srV_RCVD_DT = $event\" name=\"srV_RCVD_DT\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex flex-col pt-4\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Items Received</label>\r\n\t\t\t\t\t<textarea class=\"border rounded p-2 h-24\" type=\"text\" [(ngModel)]=\"surveyNote.srV_ITEMS_RCVD\" name=\"srV_ITEMS_RCVD\"></textarea>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"flex flex-col mx-8\">\r\n\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Project Number</label>\r\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"surveyNote.srV_PROJ_NUM\" name=\"srV_PROJ_NUM\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex flex-col py-2\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Remarks</label>\r\n\t\t\t\t\t<textarea class=\"border rounded p-2 h-24\" [(ngModel)]=\"surveyNote.srV_REMARKS\" name=\"srV_REMARKS\" type=\"text\"></textarea>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"flex justify-end pr-4 py-4\">\r\n\t\t\t<button class=\"btn\"\r\n\t\t\t\t\ttype='submit'>\r\n\t\t\t\tSubmit\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/engineering/technician-history/technician-history-details/technician-history-details.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/engineering/technician-history/technician-history-details/technician-history-details.component.html ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex justify-end mt-2\">\r\n\t<button class=\"btn-reverse\" (click)=\"addTechnician()\">Add</button>\r\n</div>\r\n<div class=\"w-full rounded shadow-2 p-10 bg-white mt-2\">\r\n\t<form (ngSubmit)=\"onSubmit()\">\r\n\t\t<div class=\"flex justify-center\">\r\n\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Engineer ID</label>\r\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"technician.tecH_ENG_ID\" name=\"tecH_ENG_ID\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col py-4\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Assigned Date</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"technician.tecH_ASSIGNED_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"technician.tecH_ASSIGNED_DT = $event\" name=\"tecH_ASSIGNED_DT\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Unassigned Date</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"technician.tecH_UNASSIGNED_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"technician.tecH_UNASSIGNED_DT = $event\" name=\"tecH_UNASSIGNED_DT\" />\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"flex flex-col ml-8 pb-2\">\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Technician</label>\r\n\r\n\t\t\t\t\t<select class=\"border rounded p-1\" [(ngModel)]=\"technician.tecH_RS_ID\" name=\"tecH_RS_ID\">\r\n\r\n\t\t\t\t\t\t<option *ngFor=\"let staff of staff\" [selected]=\"technician.tecH_RS_ID == staff.rS_ID\" [value]=\"staff.rS_ID\">{{staff.rS_FIRST_NAME}} {{staff.rS_LAST_NAME}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col py-2\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Created By/Date</label>\r\n\t\t\t\t\t<input class=\"bg-gray-200\" readonly type=\"text\" [(ngModel)]=\"technician.tecH_CREATED_BY\" name=\"tecH_CREATED_BY\" />\r\n\r\n\t\t\t\t\t<input class=\"bg-gray-200\" readonly type=\"date\" [ngModel]=\"technician.tecH_CREATED_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"technician.tecH_CREATED_DT = $event\" name=\"tecH_CREATED_DT\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Modified By/Date</label>\r\n\t\t\t\t\t<input class=\"bg-gray-200\" readonly type=\"text\" [(ngModel)]=\"technician.tecH_MODIFIED_BY\" name=\"tecH_MODIFIED_BY\" />\r\n\r\n\t\t\t\t\t<input class=\"bg-gray-200\" readonly type=\"date\" [ngModel]=\"technician.tecH_MODIFIED_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"technician.tecH_MODIFIED_DT = $event\" name=\"tecH_MODIFIED_DT\" />\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"flex justify-end mt-4\">\r\n\t\t\t<button class=\"btn\" type='submit'>\r\n\t\t\t\tSubmit\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/engineering/technician-history/technician-history-home/technician-history.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/engineering/technician-history/technician-history-home/technician-history.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-full rounded-b bg-white\">\r\n\t<form (ngSubmit)=\"onSubmit()\">\r\n\t\t<div class=\"flex justify-center px-8\">\r\n\t\t\t<div class=\"flex flex-col mr-12\">\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Engineer ID</label>\r\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"technician.tecH_ENG_ID\" name=\"tecH_ENG_ID\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col py-4\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Assigned Date</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"technician.tecH_ASSIGNED_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"technician.tecH_ASSIGNED_DT = $event\" name=\"tecH_ASSIGNED_DT\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Unassigned Date</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"technician.tecH_UNASSIGNED_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"technician.tecH_UNASSIGNED_DT = $event\" name=\"tecH_UNASSIGNED_DT\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Technician</label>\r\n\r\n\t\t\t\t\t<select class=\"border rounded p-1\" [(ngModel)]=\"technician.tecH_RS_ID\" name=\"tecH_RS_ID\">\r\n\r\n\t\t\t\t\t\t<option *ngFor=\"let staff of staff\" [selected]=\"technician.tecH_RS_ID == staff.rS_ID\" [value]=\"staff.rS_ID\">{{staff.rS_FIRST_NAME}} {{staff.rS_LAST_NAME}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"flex justify-end pr-4 pb-4 pt-2\">\r\n\t\t\t<button class=\"btn\"\r\n\t\t\t\t\tvalue='Submit'>\r\n\t\t\t\tSubmit\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/welcome/welcome.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/welcome/welcome.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"border-16 border-orange-600 p-2\">\r\n\t<p *ngIf=\"displayName\">User has token with '<i>ClaimType.Name</i>': <b>{{displayName}}</b></p>\r\n\t<p>Welcome to a really basic angular application (Not Responsive, just an example.) O_O</p>\r\n\t<p *ngIf=\"id\"><u>A number was provided as input from the parent</u>: <strong>{{id}}</strong></p>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/railroad/rrdetails/rrdetails.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/railroad/rrdetails/rrdetails.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-full rounded shadow-2 p-4 bg-white mt-2\">\r\n\t<form (ngSubmit)=\"onSubmit()\">\r\n\t\t<div *ngIf=\"railroad\">\r\n\t\t\t<div class=\"mb-2 flex justify-between bg-gray-400 rounded p-2\">\r\n\t\t\t\t<div class=\"w-2/5 mr-8\">\r\n\t\t\t\t\t<input class=\"bg-transparent focus:outline-none focus:shadow-outline block w-full appearance-none leading-normal font-medium\" type=\"text\" [(ngModel)]=\"railroad.rrA_RR_COMPANY_NAME\" name=\"rrA_RR_COMPANY_NAME\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<input class=\"w-16 bg-transparent font-medium\" type=\"text\" [(ngModel)]=\"railroad.rrA_QTR_SECTION\" name=\"rrA_QTR_SECTION\" />\r\n\t\t\t\t\t<input class=\"w-8 bg-transparent font-medium\" type=\"text\" [(ngModel)]=\"railroad.rrA_SECTION\" name=\"rrA_SECTION\" />\r\n\t\t\t\t\t<input class=\"w-8 bg-transparent font-medium\" type=\"text\" [(ngModel)]=\"railroad.rrA_TOWNSHIP\" name=\"rrA_TOWNSHIP\" />\r\n\t\t\t\t\t<input class=\"w-8 bg-transparent font-medium\" type=\"text\" [(ngModel)]=\"railroad.rrA_TOWNSHIP_DIR\" name=\"rrA_TOWNSHIP_DIR\" />\r\n\t\t\t\t\t<input class=\"w-8 bg-transparent font-medium\" type=\"text\" [(ngModel)]=\"railroad.rrA_RANGE\" name=\"rrA_RANGE\" />\r\n\t\t\t\t\t<input class=\"w-8 bg-transparent font-medium\" type=\"text\" [(ngModel)]=\"railroad.rrA_RANGE_DIR\" name=\"rrA_RANGE_DIR\" />\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"flex justify-between\">\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t\t<label class=\"text-sm text-gray-600\">County</label>\r\n\r\n\t\t\t\t\t\t<select class=\"border\" [(ngModel)]=\"railroad.rrA_COUNTY\" name=\"rrA_COUNTY\">\r\n\r\n\t\t\t\t\t\t\t<option *ngFor=\"let county of counties\" [selected]=\"railroad.rrA_COUNTY == county.rcO_NUM\" [value]=\"county.rcO_NUM\">{{county.rcO_NAME}}</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"flex flex-col py-1\">\r\n\t\t\t\t\t\t<label class=\"text-sm text-gray-600\">Termination Reason</label>\r\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"railroad.rrA_REASON_FOR_TERMINATION\" name=\"rrA_REASON_FOR_TERMINATION\" />\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t\t<label class=\"text-sm text-gray-600\">Description</label>\r\n\t\t\t\t\t\t<textarea class=\"border p-2 h-20\" type=\"text\" [(ngModel)]=\"railroad.rrA_DESCRIPTION\" name=\"rrA_DESCRIPTION\"></textarea>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex-col\">\r\n\t\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t\t<label class=\"text-sm text-gray-600\">CD Number</label>\r\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"railroad.rrA_CD_NUM\" name=\"rrA_CD_NUM\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"flex flex-col py-1\">\r\n\t\t\t\t\t\t<label class=\"text-sm text-gray-600\">LD Number</label>\r\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"railroad.rrA_LD_NUM\" name=\"rrA_LD_NUM\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"flex items-center\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<input type=\"checkbox\" [ngModel]=\"railroad.rrA_HIGHWAY_STATUS | convertToBoolean: 'Y'\" (ngModelChange)=\"railroad.rrA_HIGHWAY_STATUS = $event ? 'Y' : 'N'\" name=\"rrA_HIGHWAY_STATUS\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<label class=\"text-sm text-gray-600 ml-2\">Highway Status</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"flex items-center py-1\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<input type=\"checkbox\" [ngModel]=\"railroad.rrA_PLANS_MARKED | convertToBoolean: 'Y'\" (ngModelChange)=\"railroad.rrA_PLANS_MARKED = $event ? 'Y' : 'N'\" name=\"rrA_PLANS_MARKED\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<label class=\"text-sm text-gray-600 ml-2\">Plans Marked</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t\t<label class=\"text-sm text-gray-600\">Agreement Number</label>\r\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"railroad.rrA_AGREEMENT_NUMBER\" name=\"rrA_AGREEMENT_NUMBER\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t\t<label class=\"text-sm text-gray-600\">Route</label>\r\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"railroad.rrA_ROUTE\" name=\"rrA_ROUTE\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"flex flex-col py-1\">\r\n\t\t\t\t\t\t<label class=\"text-sm text-gray-600\">Location</label>\r\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"railroad.rrA_LOCATION\" name=\"rrA_LOCATION\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t\t<label class=\"text-sm text-gray-600\">Area</label>\r\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"railroad.rrA_AREA\" name=\"rrA_AREA\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"flex flex-col py-1\">\r\n\t\t\t\t\t\t<label class=\"text-sm text-gray-600\">Length</label>\r\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"railroad.rrA_LENGTH\" name=\"rrA_LENGTH\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"flex items-center\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<input type=\"checkbox\" [ngModel]=\"railroad.rrA_SPOT | convertToBoolean: 'Y'\" (ngModelChange)=\"railroad.rrA_SPOT = $event ? 'Y' : 'N'\" name=\"rrA_SPOT\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<label class=\"text-sm text-gray-600 ml-2\">Spot</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t\t<label class=\"text-sm text-gray-600\">Last Agreement Date</label>\r\n\t\t\t\t\t\t<input type=\"date\" [ngModel]=\"railroad.rrA_LAST_AGREEMENT_DATE | date:'yyyy-MM-dd'\" (ngModelChange)=\"railroad.rrA_LAST_AGREEMENT_DATE = $event\" name=\"rrA_LAST_AGREEMENT_DATE\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"flex flex-col py-1\">\r\n\t\t\t\t\t\t<label class=\"text-sm text-gray-600\">Last Agreement Duration</label>\r\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"railroad.rrA_DURATION\" name=\"rrA_DURATION\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t\t<label class=\"text-sm text-gray-600\">Last Agreement Expiration Date</label>\r\n\t\t\t\t\t\t<input type=\"date\" [ngModel]=\"railroad.rrA_LAST_AGREEMENT_EXPIRATION_DATE | date:'yyyy-MM-dd'\" (ngModelChange)=\"railroad.rrA_LAST_AGREEMENT_EXPIRATION_DATE = $event\" name=\"rrA_LAST_AGREEMENT_EXPIRATION_DATE\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"flex flex-col py-1\">\r\n\t\t\t\t\t\t<label class=\"text-sm text-gray-600\">Audit Number</label>\r\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"railroad.rrA_AUDIT_NUM\" name=\"rrA_AUDIT_NUM\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t\t<label class=\"text-sm text-gray-600\">Rent Amount</label>\r\n\t\t\t\t\t\t<input placeholder=\"$\" type=\"text\" [(ngModel)]=\"railroad.rrA_RENT_AMOUNT\" name=\"rrA_RENT_AMOUNT\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t\t<label class=\"text-sm text-gray-600\">Lease Purpose</label>\r\n\t\t\t\t\t\t<textarea class=\"border p-2 h-20\" type=\"text\" [(ngModel)]=\"railroad.rrA_LEASE_PURPOSE\" name=\"rrA_LEASE_PURPOSE\"></textarea>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"flex flex-col py-1\">\r\n\t\t\t\t\t\t<label class=\"text-sm text-gray-600\">Created By/Date</label>\r\n\t\t\t\t\t\t<input class=\"bg-gray-200\" readonly type=\"text\" [(ngModel)]=\"railroad.rrA_CREATED_BY\" name=\"rrA_CREATED_BY\" />\r\n\r\n\t\t\t\t\t\t<input class=\"bg-gray-200\" readonly type=\"date\" [ngModel]=\"railroad.rrA_CREATED_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"railroad.rrA_CREATED_DT = $event\" name=\"rrA_CREATED_DT\" />\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t\t<label class=\"text-sm text-gray-600\">Modified By/Date</label>\r\n\t\t\t\t\t\t<input class=\"bg-gray-200\" readonly type=\"text\" [(ngModel)]=\"railroad.rrA_MODIFIED_BY\" name=\"rrA_MODIFIED_BY\" />\r\n\r\n\t\t\t\t\t\t<input class=\"bg-gray-200\" readonly type=\"date\" [ngModel]=\"railroad.rrA_MODIFIED_DT | date:'yyyy-MM-dd'\" (ngModelChange)=\"railroad.rrA_MODIFIED_DT = $event\" name=\"rrA_MODIFIED_DT\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"flex justify-end mt-2\">\r\n\t\t\t\t<button class=\"btn\" value='Submit'>\r\n\t\t\t\t\tSubmit\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/railroad/rrnew/rrnew.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/railroad/rrnew/rrnew.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-full rounded-b p-4 bg-white\">\r\n\t<form (ngSubmit)=\"onSubmit()\">\r\n\t\t<div class=\"mb-8 flex justify-start\">\r\n\t\t\t<div class=\"flex flex-col mr-8\">\r\n\t\t\t\t<label class=\"text-sm text-gray-600\">Company Name</label>\r\n\r\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"railroad.rrA_RR_COMPANY_NAME\" name=\"rrA_RR_COMPANY_NAME\" />\r\n\t\t\t</div>\r\n\t\t\t<div class=\"flex justify-between\">\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Quarter</label>\r\n\t\t\t\t\t<input class=\"w-16\" type=\"text\" [(ngModel)]=\"railroad.rrA_QTR_SECTION\" name=\"rrA_QTR_SECTION\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex flex-col mx-4\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Section</label>\r\n\t\t\t\t\t<input class=\"w-16\" type=\"text\" [(ngModel)]=\"railroad.rrA_SECTION\" name=\"rrA_SECTION\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Township</label>\r\n\t\t\t\t\t<input class=\"w-16\" type=\"text\" [(ngModel)]=\"railroad.rrA_TOWNSHIP\" name=\"rrA_TOWNSHIP\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex flex-col mx-4\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Direction</label>\r\n\t\t\t\t\t<input class=\"w-16\" type=\"text\" [(ngModel)]=\"railroad.rrA_TOWNSHIP_DIR\" name=\"rrA_TOWNSHIP_DIR\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Range</label>\r\n\t\t\t\t\t<input class=\"w-16\" type=\"text\" [(ngModel)]=\"railroad.rrA_RANGE\" name=\"rrA_RANGE\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex flex-col ml-4\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Direction</label>\r\n\t\t\t\t\t<input class=\"w-16\" type=\"text\" [(ngModel)]=\"railroad.rrA_RANGE_DIR\" name=\"rrA_RANGE_DIR\" />\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"flex justify-between\">\r\n\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">County</label>\r\n\r\n\t\t\t\t\t<select class=\"border\" [(ngModel)]=\"railroad.rrA_COUNTY\" name=\"rrA_COUNTY\">\r\n\r\n\t\t\t\t\t\t<option *ngFor=\"let county of counties\" [selected]=\"railroad.rrA_COUNTY == county.rcO_NUM\" [value]=\"county.rcO_NUM\">{{county.rcO_NAME}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col py-1\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Termination Reason</label>\r\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"railroad.rrA_REASON_FOR_TERMINATION\" name=\"rrA_REASON_FOR_TERMINATION\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Description</label>\r\n\t\t\t\t\t<textarea class=\"border p-2 h-20\" type=\"text\" [(ngModel)]=\"railroad.rrA_DESCRIPTION\" name=\"rrA_DESCRIPTION\"></textarea>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"flex-col mx-8\">\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">CD Number</label>\r\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"railroad.rrA_CD_NUM\" name=\"rrA_CD_NUM\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex flex-col py-1\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">LD Number</label>\r\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"railroad.rrA_LD_NUM\" name=\"rrA_LD_NUM\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex items-center\">\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<input type=\"checkbox\" [ngModel]=\"railroad.rrA_HIGHWAY_STATUS | convertToBoolean: 'Y'\" (ngModelChange)=\"railroad.rrA_HIGHWAY_STATUS = $event ? 'Y' : 'N'\" name=\"rrA_HIGHWAY_STATUS\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<label class=\"text-sm text-gray-600 ml-2\">Highway Status</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex items-center py-1\">\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<input type=\"checkbox\" [ngModel]=\"railroad.rrA_PLANS_MARKED | convertToBoolean: 'Y'\" (ngModelChange)=\"railroad.rrA_PLANS_MARKED = $event ? 'Y' : 'N'\" name=\"rrA_PLANS_MARKED\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<label class=\"text-sm text-gray-600 ml-2\">Plans Marked</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Agreement Number</label>\r\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"railroad.rrA_AGREEMENT_NUMBER\" name=\"rrA_AGREEMENT_NUMBER\" />\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Route</label>\r\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"railroad.rrA_ROUTE\" name=\"rrA_ROUTE\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex flex-col py-1\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Location</label>\r\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"railroad.rrA_LOCATION\" name=\"rrA_LOCATION\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Area</label>\r\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"railroad.rrA_AREA\" name=\"rrA_AREA\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex flex-col py-2\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Length</label>\r\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"railroad.rrA_LENGTH\" name=\"rrA_LENGTH\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t\t<div class=\"flex flex-col mx-8\">\r\n\t\t\t\t<div class=\"flex items-center\">\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<input type=\"checkbox\" [ngModel]=\"railroad.rrA_SPOT | convertToBoolean: 'Y'\" (ngModelChange)=\"railroad.rrA_SPOT = $event ? 'Y' : 'N'\" name=\"rrA_SPOT\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<label class=\"text-sm text-gray-600 ml-2\">Spot</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex flex-col py-3\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Last Agreement Date</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"railroad.rrA_LAST_AGREEMENT_DATE | date:'yyyy-MM-dd'\" (ngModelChange)=\"railroad.rrA_LAST_AGREEMENT_DATE = $event\" name=\"rrA_LAST_AGREEMENT_DATE\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Last Agreement Duration</label>\r\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"railroad.rrA_DURATION\" name=\"rrA_DURATION\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex flex-col py-2\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Last Agreement Expiration Date</label>\r\n\t\t\t\t\t<input type=\"date\" [ngModel]=\"railroad.rrA_LAST_AGREEMENT_EXPIRATION_DATE | date:'yyyy-MM-dd'\" (ngModelChange)=\"railroad.rrA_LAST_AGREEMENT_EXPIRATION_DATE = $event\" name=\"rrA_LAST_AGREEMENT_EXPIRATION_DATE\" />\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Audit Number</label>\r\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"railroad.rrA_AUDIT_NUM\" name=\"rrA_AUDIT_NUM\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex flex-col py-1\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Rent Amount</label>\r\n\t\t\t\t\t<input placeholder=\"$\" type=\"text\" [ngModel]=\"railroad.rrA_RENT_AMOUNT | currency\" (ngModelChange)=\"railroad.rrA_RENT_AMOUNT = $event\" name=\"rrA_RENT_AMOUNT\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex flex-col\">\r\n\t\t\t\t\t<label class=\"text-sm text-gray-600\">Lease Purpose</label>\r\n\t\t\t\t\t<textarea class=\"border p-2 h-20\" type=\"text\" [(ngModel)]=\"railroad.rrA_LEASE_PURPOSE\" name=\"rrA_LEASE_PURPOSE\"></textarea>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"flex justify-end mt-2\">\r\n\t\t\t<button class=\"btn\" value='Submit'>\r\n\t\t\t\tSubmit\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/railroad/rrtable/rrtable.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/railroad/rrtable/rrtable.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex justify-end fade-in\">\r\n\t<div class=\"max-w-sm p-3 bg-white rounded-b overflow-hidden shadow-2 flex flex-end mb-4 flex justify-center\">\r\n\t\t<p class=\"text-2xl\">Railroad Agreement</p>\r\n\t</div>\r\n</div>\r\n\r\n<div *ngIf=\"showRailroads\">\r\n\t<div class=\"flex justify-end\">\r\n\t\t<!--<div class=\"my-auto\">\r\n\t\t\t<label class=\"mr-2\">Filter</label>\r\n\t\t\t<input [(ngModel)]=\"listFilter\" name=\"listFilter\" type=\"text\" placeholder=\"Name\" />\r\n\t\t</div>-->\r\n\t\t<app-pagination [items]=\"filteredRailroads\" [pageSize]=\"10\" (changePage)=\"onChangePage($event)\"></app-pagination>\r\n\t</div>\r\n\r\n\t<div class=\"rounded shadow-2 p-8 bg-white mt-2\">\r\n\t\t<table class=\"w-full\">\r\n\t\t\t<thead>\r\n\t\t\t\t<tr class=\"text-gray-600 text-sm\">\r\n\t\t\t\t\t<th class=\"font-normal\">Agreement Number</th>\r\n\t\t\t\t\t<th class=\"font-normal\">County Name</th>\r\n\t\t\t\t\t<th class=\"font-normal\">Railroad Company</th>\r\n\t\t\t\t\t<th class=\"font-normal\">Last Agreement Expiration Date</th>\r\n\t\t\t\t\t<th class=\"font-normal\">Location</th>\r\n\t\t\t\t</tr>\r\n\t\t\t</thead>\r\n\t\t\t<tbody>\r\n\t\t\t\t<tr class=\"cursor-pointer td\" *ngFor=\"let railroad of railroads; trackBy: trackById\" [routerLink]=\"['/rrtable', { outlets: { 'secondary': [railroad.rrA_ID] } } ]\" [routerLinkActive]=\"['active']\">\r\n\t\t\t\t\t<td>{{railroad.rrA_AGREEMENT_NUMBER}}</td>\r\n\t\t\t\t\t<td>{{railroad.rrA_COUNTY_NAME}}</td>\r\n\t\t\t\t\t<td>{{railroad.rrA_RR_COMPANY_NAME}}</td>\r\n\t\t\t\t\t<td>{{railroad.rrA_LAST_AGREEMENT_EXPIRATION_DATE | date:'MM/dd/yyyy'}}</td>\r\n\t\t\t\t\t<td>{{railroad.rrA_LOCATION}}</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</tbody>\r\n\t\t</table>\r\n\t\t<button class=\"btn mt-2\" (click)=\"refreshRailroads()\" *ngIf=\"showRailroads\">Refresh</button>\r\n\t\t<button class=\"btn mt-2 ml-2\" (click)=\"addRailroad()\">Add</button>\r\n\r\n\t</div>\r\n\r\n</div>\r\n<div *ngIf=\"railroads && railroads.length; else noContent\">\r\n</div>\r\n<router-outlet name=\"secondary\"></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/modal/modal.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/modal/modal.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"modal\" (click)=\"closeModal($event);\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<div class=\"modal-content\" [class.modal-full]=\"isFullPage\">\r\n\t\t\t<ng-content></ng-content> <!--Static Content; Close Button, Header, etc.-->\r\n\t\t\t<div id=\"modal-content\" class=\"bg-white rounded\"></div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/pagination/pagination.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/pagination/pagination.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\t<ul class=\"pagination\" *ngIf=\"pager.pages && pager.pages.length\">\r\n\t\t<li>\r\n\t\t\t<a class=\"btn\" [ngClass]=\"{disabled:pager.currentPage === 1}\" (click)=\"setPage(1)\">First</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<a class=\"btn\" [ngClass]=\"{disabled:pager.currentPage === 1}\" (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n\t\t</li>\r\n\t\t<li *ngFor=\"let page of pager.pages\">\r\n\t\t\t<a class=\"btn\" [ngClass]=\"{active:pager.currentPage === page}\" (click)=\"setPage(page)\">{{page}}</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<a class=\"btn\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<a class=\"btn\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" (click)=\"setPage(pager.totalPages)\">Last</a>\r\n\t\t</li>\r\n\t</ul>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/projects/projects/projects.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/projects/projects/projects.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/time/time.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/time/time.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"border-16 border-indigo-700\">\r\n\t<b [ngStyle]=\"styles\">{{ date | date:'M/d/yyyy HH:mm' }}</b>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/weather/weather.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/weather/weather.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"border-16 border-green-300 p-2\">\r\n\t<h1>Weather Forecasts</h1>\r\n\t<p>This component demonstrates fetching data from the local webhost. (API delayed by 3-6 seconds, Client polls every 10 seconds.)</p>\r\n\r\n\t<table *ngIf=\"forecasts; else noContent\">\r\n\t\t<thead>\r\n\t\t\t<tr>\r\n\t\t\t\t<th>Date</th>\r\n\t\t\t\t<th>Temp (C)</th>\r\n\t\t\t\t<th>Temp (F)</th>\r\n\t\t\t\t<th>Summary</th>\r\n\t\t\t</tr>\r\n\t\t</thead>\r\n\t\t<tbody>\r\n\t\t\t<tr *ngFor=\"let forecast of forecasts\">\r\n\t\t\t\t<td>{{ forecast.dateFormatted }}</td>\r\n\t\t\t\t<td class=\"text-center\">{{ forecast.temperatureC }}</td>\r\n\t\t\t\t<td class=\"text-center\">{{ forecast.temperatureF }}</td>\r\n\t\t\t\t<td>{{ forecast.summary }}</td>\r\n\t\t\t</tr>\r\n\t\t</tbody>\r\n\t</table>\r\n\t<h6 *ngIf=\"forecasts\" class=\"text-right m-1\">Last Updated: {{ lastUpdated | date:'HH:mm:ss' }}</h6>\r\n\t<ng-template #noContent>\r\n\t\t<h4>Requesting Weather Data..</h4>\r\n\t</ng-template>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/account/account-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/account/account-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function() { return AccountRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/account/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/account/profile/profile.component.ts");
/* harmony import */ var _shared_security_guards_auth_can_activate_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/security/_guards/auth.can-activate.guard */ "./src/app/shared/security/_guards/auth.can-activate.guard.ts");






const routes = [
    { path: 'account', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], canActivate: [_shared_security_guards_auth_can_activate_guard__WEBPACK_IMPORTED_MODULE_5__["AuthCanActivateGuard"]] },
    { path: 'account/login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
];
let AccountRoutingModule = class AccountRoutingModule {
};
AccountRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AccountRoutingModule);



/***/ }),

/***/ "./src/app/account/account.module.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/account/login/login.component.ts");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account-routing.module */ "./src/app/account/account-routing.module.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/account/profile/profile.component.ts");








let AccountModule = class AccountModule {
};
AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _account_routing_module__WEBPACK_IMPORTED_MODULE_6__["AccountRoutingModule"]
        ]
    })
], AccountModule);



/***/ }),

/***/ "./src/app/account/login/login.component.scss":
/*!****************************************************!*\
  !*** ./src/app/account/login/login.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/account/login/login.component.ts":
/*!**************************************************!*\
  !*** ./src/app/account/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_security_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/security/_services/auth.service */ "./src/app/shared/security/_services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let LoginComponent = class LoginComponent {
    constructor(cdr, route, router, authService) {
        this.cdr = cdr;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"](); //Acts as a container for multiple subscriptions by using the Add function.
    }
    check() {
        this.cdr.markForCheck();
    }
    ngOnInit() {
        this.check();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Account';
    }
    ngOnDestroy() {
        if (!this.subscription.closed) //CYA; Always unsubscribe on destroy event to prevent memory leaks.
            this.subscription.unsubscribe();
    }
    loginWithAD() {
        this.subscription.add(this.authService.login().subscribe(() => {
            this.router.navigateByUrl(this.returnUrl);
        }, error => console.log(error)));
    }
    onSubmit() {
        this.subscription.add(this.authService.login({ username: this.username, password: this.password }).subscribe(() => {
            this.router.navigateByUrl(this.returnUrl);
        }, error => console.log(error)));
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _shared_security_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        //selector: 'app-login', //Used in routing; doesn't need a tag selector.
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/account/login/login.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/account/login/login.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _shared_security_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/account/profile/_services/index.ts":
/*!****************************************************!*\
  !*** ./src/app/account/profile/_services/index.ts ***!
  \****************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.service */ "./src/app/account/profile/_services/profile.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return _profile_service__WEBPACK_IMPORTED_MODULE_0__["ProfileService"]; });




/***/ }),

/***/ "./src/app/account/profile/_services/profile.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/account/profile/_services/profile.service.ts ***!
  \**************************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ProfileService = class ProfileService {
    constructor(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.apiUrl = 'api/SampleData/ProtectedResponse';
    }
    getData() {
        return this.http.get(`${this.baseUrl}${this.apiUrl}`, { responseType: "text" }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log('Protected Data:', data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(err) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent)
            errorMessage = `Error: ${err.error.message}.`;
        else
            errorMessage = `Status Code: ${err.status}, Error: ${err.message}.`;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
ProfileService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['BASE_URL',] }] }
];
ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root' //Singleton
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('BASE_URL')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String])
], ProfileService);



/***/ }),

/***/ "./src/app/account/profile/profile.component.scss":
/*!********************************************************!*\
  !*** ./src/app/account/profile/profile.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/account/profile/profile.component.ts":
/*!******************************************************!*\
  !*** ./src/app/account/profile/profile.component.ts ***!
  \******************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_security_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/security/_services */ "./src/app/shared/security/_services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_services */ "./src/app/account/profile/_services/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let ProfileComponent = class ProfileComponent {
    constructor(cdr, router, authService, profileService) {
        this.cdr = cdr;
        this.router = router;
        this.authService = authService;
        this.profileService = profileService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"](); //Acts as a container for multiple subscriptions by using the Add function.
        this.cdr.detach(); //Detach from main CDR Tree.
    }
    check() {
        this.cdr.detectChanges();
    }
    ngOnInit() {
        this.subscription.add(this.profileService.getData().subscribe(data => {
            this.protectedData = data;
            this.check();
        }, error => console.log(error)));
    }
    ngOnDestroy() {
        if (!this.subscription.closed) //CYA; Always unsubscribe on destroy event to prevent memory leaks.
            this.subscription.unsubscribe();
    }
    logout() {
        this.authService.logout();
        this.router.navigate(["account/login"]);
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _shared_security_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        //selector: 'app-profile', //Used in routing; doesn't need a tag selector.
        template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/account/profile/profile.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/account/profile/profile.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _shared_security_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]])
], ProfileComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    { path: '**', redirectTo: '', pathMatch: 'full' } //Custom 404 page here.
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active-link {\n  color: #4f748a;\n  padding-left: 0.5rem;\n  border-left-width: 4px;\n  border-color: #4f748a;\n}\n\n#page {\n  display: grid;\n  width: 100%;\n  grid-template-areas: \"head head\" \"nav main\";\n  grid-template-columns: 250px 1fr;\n}\n\n#page > header {\n  grid-area: head;\n}\n\n#page > nav {\n  grid-area: nav;\n}\n\n#page > main {\n  grid-area: main;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxDYWl0LlNpZGVuZXJcXHNvdXJjZVxccmVwb3NcXFJhaWRQcm9qZWN0XFxDbGllbnRBcHAvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSwyQ0FBQTtFQUNBLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZlLWxpbmsge1xuICBjb2xvcjogIzRmNzQ4YTtcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiA0cHg7XG4gIGJvcmRlci1jb2xvcjogIzRmNzQ4YTtcbn1cblxuI3BhZ2Uge1xuICBkaXNwbGF5OiBncmlkO1xuICB3aWR0aDogMTAwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJoZWFkIGhlYWRcIiBcIm5hdiBtYWluXCI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggMWZyO1xufVxuXG4jcGFnZSA+IGhlYWRlciB7XG4gIGdyaWQtYXJlYTogaGVhZDtcbn1cblxuI3BhZ2UgPiBuYXYge1xuICBncmlkLWFyZWE6IG5hdjtcbn1cblxuI3BhZ2UgPiBtYWluIHtcbiAgZ3JpZC1hcmVhOiBtYWluO1xufVxyXG4iLCIuYWN0aXZlLWxpbmsge1xuICBjb2xvcjogIzRmNzQ4YTtcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiA0cHg7XG4gIGJvcmRlci1jb2xvcjogIzRmNzQ4YTtcbn1cblxuI3BhZ2Uge1xuICBkaXNwbGF5OiBncmlkO1xuICB3aWR0aDogMTAwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJoZWFkIGhlYWRcIiBcIm5hdiBtYWluXCI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggMWZyO1xufVxuXG4jcGFnZSA+IGhlYWRlciB7XG4gIGdyaWQtYXJlYTogaGVhZDtcbn1cblxuI3BhZ2UgPiBuYXYge1xuICBncmlkLWFyZWE6IG5hdjtcbn1cblxuI3BhZ2UgPiBtYWluIHtcbiAgZ3JpZC1hcmVhOiBtYWluO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_modal_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/modal/_services */ "./src/app/shared/modal/_services/index.ts");
/* harmony import */ var _home_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/welcome/welcome.component */ "./src/app/home/welcome/welcome.component.ts");




let AppComponent = class AppComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.title = 'ANG-APP';
    }
    showModalExampleA() {
        this.modalService.show(_home_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"], undefined, undefined, { id: 5 });
    }
    showModalExampleB() {
        this.modalService.show(_home_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"], true, undefined, { id: 1 });
    }
    showModalExampleC() {
        this.modalService.show(_home_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"], true, true, { id: 3 });
    }
};
AppComponent.ctorParameters = () => [
    { type: _shared_modal_services__WEBPACK_IMPORTED_MODULE_2__["ModalService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush //This applies to children as well. Prevents default change detection; it is inefficient to update EVERY component when one thing changes.
        ,
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_modal_services__WEBPACK_IMPORTED_MODULE_2__["ModalService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _employee_employee_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employee/employee.module */ "./src/app/employee/employee.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _home_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/welcome/welcome.component */ "./src/app/home/welcome/welcome.component.ts");
/* harmony import */ var _account_account_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./account/account.module */ "./src/app/account/account.module.ts");
/* harmony import */ var _shared_security_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/security/_interceptor */ "./src/app/shared/security/_interceptor/index.ts");
/* harmony import */ var _railroad_railroad_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./railroad/railroad.module */ "./src/app/railroad/railroad.module.ts");
/* harmony import */ var _engineering_engineering_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./engineering/engineering.module */ "./src/app/engineering/engineering.module.ts");
/* harmony import */ var _cert_title_cert_title_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cert-title/cert-title.module */ "./src/app/cert-title/cert-title.module.ts");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _cert_title_cert_title_module__WEBPACK_IMPORTED_MODULE_14__["CertTitleModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _account_account_module__WEBPACK_IMPORTED_MODULE_10__["AccountModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_8__["HomeModule"],
            _employee_employee_module__WEBPACK_IMPORTED_MODULE_7__["EmployeeModule"],
            _engineering_engineering_module__WEBPACK_IMPORTED_MODULE_13__["EngineeringModule"],
            _railroad_railroad_module__WEBPACK_IMPORTED_MODULE_12__["RailroadModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        ],
        entryComponents: [
            _home_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__["WelcomeComponent"] //Dynamically loaded components
        ],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                useClass: _shared_security_interceptor__WEBPACK_IMPORTED_MODULE_11__["TokenInterceptor"],
                multi: true
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/cert-title/_services/cert-title.service.ts":
/*!************************************************************!*\
  !*** ./src/app/cert-title/_services/cert-title.service.ts ***!
  \************************************************************/
/*! exports provided: CertTitleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertTitleService", function() { return CertTitleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let CertTitleService = class CertTitleService {
    constructor(http) {
        this.http = http;
        this._url = 'api/certtitle';
        this.id = 100;
    }
    registerCertTitle(userData) {
        return this.http.post(`${this._url}`, userData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log(data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getCertTitle(id) {
        return this.http.get(`${this._url}/getCertTitle/${this.id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log(`CertTitle ${this.id} Data: `, data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(err) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent)
            errorMessage = `Error: ${err.error.message}.`;
        else
            errorMessage = `Status Code: ${err.status}, Error: ${err.message}.`;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
CertTitleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CertTitleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], CertTitleService);



/***/ }),

/***/ "./src/app/cert-title/_services/index.ts":
/*!***********************************************!*\
  !*** ./src/app/cert-title/_services/index.ts ***!
  \***********************************************/
/*! exports provided: CertTitleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cert_title_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cert-title.service */ "./src/app/cert-title/_services/cert-title.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CertTitleService", function() { return _cert_title_service__WEBPACK_IMPORTED_MODULE_0__["CertTitleService"]; });




/***/ }),

/***/ "./src/app/cert-title/cert-title-details/cert-title-details.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/cert-title/cert-title-details/cert-title-details.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NlcnQtdGl0bGUvY2VydC10aXRsZS1kZXRhaWxzL2NlcnQtdGl0bGUtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/cert-title/cert-title-details/cert-title-details.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/cert-title/cert-title-details/cert-title-details.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CertTitleDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertTitleDetailsComponent", function() { return CertTitleDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _certificate_of_title_home_certificate_of_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../certificate-of-title-home/certificate-of-title.component */ "./src/app/cert-title/certificate-of-title-home/certificate-of-title.component.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/_services */ "./src/app/shared/_services/index.ts");
/* harmony import */ var _shared_modal_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/modal/_services */ "./src/app/shared/modal/_services/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services */ "./src/app/cert-title/_services/index.ts");








let CertTitleDetailsComponent = class CertTitleDetailsComponent {
    constructor(cdr, route, modalService, certTitleService, staffService, systemCodesService, ctAgentsService) {
        this.cdr = cdr;
        this.route = route;
        this.modalService = modalService;
        this.certTitleService = certTitleService;
        this.staffService = staffService;
        this.systemCodesService = systemCodesService;
        this.ctAgentsService = ctAgentsService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.initialized = false;
        this.cdr.detach();
        this.ngOnInit();
    }
    check() {
        this.cdr.detectChanges();
    }
    ngOnInit() {
        if (!this.initialized) {
            this.subscription.add(this.route.paramMap.subscribe(paramMap => {
                this.id = +paramMap.get('id');
                this.subscription.add(this.certTitleService.getCertTitle(this.id).subscribe(certTitle => {
                    this.certTitle = certTitle;
                    this.check();
                }, error => console.log(error)));
            }));
            this.subscription.add(this.staffService.getAllStaff().subscribe((staff) => {
                this.staff = staff;
                this.check();
            }));
            this.subscription.add(this.systemCodesService.getAllSystemCodes().subscribe((systemCodes) => {
                this.systemCodes = systemCodes;
                this.check();
            }));
            this.subscription.add(this.ctAgentsService.getAllCTAgents().subscribe((ctAgents) => {
                this.ctAgents = ctAgents;
                this.check();
            }));
            this.initialized = true;
        }
    }
    ngOnDestroy() {
        if (!this.subscription.closed)
            this.subscription.unsubscribe();
    }
    onSubmit() {
        console.log(this.certTitle);
        // this.certTitleService.register(this.certTitle)
        //		.subscribe(data => {
        //		this.certTitle = data;
        //		this.check();
        //	})
    }
    addCertTitle() {
        this.modalService.show(_certificate_of_title_home_certificate_of_title_component__WEBPACK_IMPORTED_MODULE_4__["CertificateOfTitleComponent"]);
    }
};
CertTitleDetailsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _shared_modal_services__WEBPACK_IMPORTED_MODULE_6__["ModalService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["CertTitleService"] },
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_5__["StaffService"] },
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_5__["SystemCodesService"] },
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_5__["CTAgentsService"] }
];
CertTitleDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cert-title-details',
        template: __webpack_require__(/*! raw-loader!./cert-title-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/cert-title/cert-title-details/cert-title-details.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./cert-title-details.component.scss */ "./src/app/cert-title/cert-title-details/cert-title-details.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_modal_services__WEBPACK_IMPORTED_MODULE_6__["ModalService"], _services__WEBPACK_IMPORTED_MODULE_7__["CertTitleService"], _shared_services__WEBPACK_IMPORTED_MODULE_5__["StaffService"], _shared_services__WEBPACK_IMPORTED_MODULE_5__["SystemCodesService"], _shared_services__WEBPACK_IMPORTED_MODULE_5__["CTAgentsService"]])
], CertTitleDetailsComponent);



/***/ }),

/***/ "./src/app/cert-title/cert-title-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/cert-title/cert-title-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CertTitleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertTitleRoutingModule", function() { return CertTitleRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cert_title_details_cert_title_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cert-title-details/cert-title-details.component */ "./src/app/cert-title/cert-title-details/cert-title-details.component.ts");
/* harmony import */ var _shared_security_guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/security/_guards */ "./src/app/shared/security/_guards/index.ts");
/* harmony import */ var _certificate_of_title_home_certificate_of_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./certificate-of-title-home/certificate-of-title.component */ "./src/app/cert-title/certificate-of-title-home/certificate-of-title.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");






const routes = [
    {
        path: 'certtitle',
        component: _cert_title_details_cert_title_details_component__WEBPACK_IMPORTED_MODULE_2__["CertTitleDetailsComponent"],
        canActivate: [_shared_security_guards__WEBPACK_IMPORTED_MODULE_3__["AuthCanActivateGuard"]],
        children: [
            {
                path: 'certnew',
                component: _certificate_of_title_home_certificate_of_title_component__WEBPACK_IMPORTED_MODULE_4__["CertificateOfTitleComponent"],
                outlet: 'secondary'
            }
        ]
    }
];
let CertTitleRoutingModule = class CertTitleRoutingModule {
};
CertTitleRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], CertTitleRoutingModule);



/***/ }),

/***/ "./src/app/cert-title/cert-title.module.ts":
/*!*************************************************!*\
  !*** ./src/app/cert-title/cert-title.module.ts ***!
  \*************************************************/
/*! exports provided: CertTitleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertTitleModule", function() { return CertTitleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _cert_title_details_cert_title_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cert-title-details/cert-title-details.component */ "./src/app/cert-title/cert-title-details/cert-title-details.component.ts");
/* harmony import */ var _certificate_of_title_home_certificate_of_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./certificate-of-title-home/certificate-of-title.component */ "./src/app/cert-title/certificate-of-title-home/certificate-of-title.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _cert_title_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cert-title-routing.module */ "./src/app/cert-title/cert-title-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








let CertTitleModule = class CertTitleModule {
};
CertTitleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _cert_title_details_cert_title_details_component__WEBPACK_IMPORTED_MODULE_2__["CertTitleDetailsComponent"],
            _certificate_of_title_home_certificate_of_title_component__WEBPACK_IMPORTED_MODULE_3__["CertificateOfTitleComponent"]
        ],
        imports: [
            _cert_title_routing_module__WEBPACK_IMPORTED_MODULE_6__["CertTitleRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        entryComponents: [
            _certificate_of_title_home_certificate_of_title_component__WEBPACK_IMPORTED_MODULE_3__["CertificateOfTitleComponent"]
        ],
        providers: []
    })
], CertTitleModule);



/***/ }),

/***/ "./src/app/cert-title/certificate-of-title-home/certificate-of-title.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/cert-title/certificate-of-title-home/certificate-of-title.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NlcnQtdGl0bGUvY2VydGlmaWNhdGUtb2YtdGl0bGUtaG9tZS9jZXJ0aWZpY2F0ZS1vZi10aXRsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/cert-title/certificate-of-title-home/certificate-of-title.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/cert-title/certificate-of-title-home/certificate-of-title.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CertificateOfTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificateOfTitleComponent", function() { return CertificateOfTitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/_services */ "./src/app/shared/_services/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/cert-title/_services/index.ts");





let CertificateOfTitleComponent = class CertificateOfTitleComponent {
    constructor(cdr, certTitleService, staffService, systemCodesService, ctAgentsService) {
        this.cdr = cdr;
        this.certTitleService = certTitleService;
        this.staffService = staffService;
        this.systemCodesService = systemCodesService;
        this.ctAgentsService = ctAgentsService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.cdr.detach();
    }
    check() {
        this.cdr.detectChanges();
    }
    ngOnInit() {
        this.certTitle = {};
        this.subscription.add(this.staffService.getAllStaff().subscribe((staff) => {
            this.staff = staff;
            this.check();
        }));
        this.subscription.add(this.systemCodesService.getAllSystemCodes().subscribe((systemCodes) => {
            this.systemCodes = systemCodes;
            this.check();
        }));
        this.subscription.add(this.ctAgentsService.getAllCTAgents().subscribe((ctAgents) => {
            this.ctAgents = ctAgents;
            this.check();
        }));
    }
    onSubmit() {
        console.log(this.certTitle);
        //this.certTitleService.registerCertTitle(this.certTitle)
        //    .subscribe(data => {
        //        this.certTitle = data;
        //        this.check();
        //    })
    }
};
CertificateOfTitleComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["CertTitleService"] },
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_2__["StaffService"] },
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_2__["SystemCodesService"] },
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_2__["CTAgentsService"] }
];
CertificateOfTitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-certificate-of-title',
        template: __webpack_require__(/*! raw-loader!./certificate-of-title.component.html */ "./node_modules/raw-loader/index.js!./src/app/cert-title/certificate-of-title-home/certificate-of-title.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./certificate-of-title.component.scss */ "./src/app/cert-title/certificate-of-title-home/certificate-of-title.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _services__WEBPACK_IMPORTED_MODULE_4__["CertTitleService"], _shared_services__WEBPACK_IMPORTED_MODULE_2__["StaffService"], _shared_services__WEBPACK_IMPORTED_MODULE_2__["SystemCodesService"], _shared_services__WEBPACK_IMPORTED_MODULE_2__["CTAgentsService"]])
], CertificateOfTitleComponent);



/***/ }),

/***/ "./src/app/employee/_services/employee.service.ts":
/*!********************************************************!*\
  !*** ./src/app/employee/_services/employee.service.ts ***!
  \********************************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let EmployeeService = class EmployeeService {
    constructor(http) {
        this.http = http;
        this.employeeList_Saved = [];
        this.employeeList_Show = false;
        this.apiUrl = 'https://jsonplaceholder.typicode.com/users';
    }
    getEmployees() {
        return this.http.get(this.apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log('Employee Data:', data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getEmployee(id) {
        return this.http.get(`${this.apiUrl}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log(`Employee ${id} Data:`, data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(err) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent)
            errorMessage = `Error: ${err.error.message}.`;
        else
            errorMessage = `Status Code: ${err.status}, Error: ${err.message}.`;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
EmployeeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], EmployeeService);



/***/ }),

/***/ "./src/app/employee/_services/index.ts":
/*!*********************************************!*\
  !*** ./src/app/employee/_services/index.ts ***!
  \*********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee.service */ "./src/app/employee/_services/employee.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return _employee_service__WEBPACK_IMPORTED_MODULE_0__["EmployeeService"]; });




/***/ }),

/***/ "./src/app/employee/employee-detail/_guards/index.ts":
/*!***********************************************************!*\
  !*** ./src/app/employee/employee-detail/_guards/index.ts ***!
  \***********************************************************/
/*! exports provided: InvalidIDCanActivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _invalid_id_can_activate_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invalid-id.can-activate.guard */ "./src/app/employee/employee-detail/_guards/invalid-id.can-activate.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InvalidIDCanActivateGuard", function() { return _invalid_id_can_activate_guard__WEBPACK_IMPORTED_MODULE_0__["InvalidIDCanActivateGuard"]; });




/***/ }),

/***/ "./src/app/employee/employee-detail/_guards/invalid-id.can-activate.guard.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/employee/employee-detail/_guards/invalid-id.can-activate.guard.ts ***!
  \***********************************************************************************/
/*! exports provided: InvalidIDCanActivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvalidIDCanActivateGuard", function() { return InvalidIDCanActivateGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let InvalidIDCanActivateGuard = class InvalidIDCanActivateGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        let id = +next.paramMap.get('id');
        if (isNaN(id) || id < 1) {
            alert("Invalid Employee ID");
            this.router.navigate(['/employees']);
            return false;
        }
        return true;
    }
};
InvalidIDCanActivateGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
InvalidIDCanActivateGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root' //Singleton
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], InvalidIDCanActivateGuard);



/***/ }),

/***/ "./src/app/employee/employee-detail/employee-detail.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/employee/employee-detail/employee-detail.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2VtcGxveWVlLWRldGFpbC9lbXBsb3llZS1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/employee/employee-detail/employee-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/employee/employee-detail/employee-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: EmployeeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDetailComponent", function() { return EmployeeDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/employee/_services/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let EmployeeDetailComponent = class EmployeeDetailComponent {
    constructor(cdr, route, router, employeeService) {
        this.cdr = cdr;
        this.route = route;
        this.router = router;
        this.employeeService = employeeService;
        this.initialized = false;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"](); //Acts as a container for multiple subscriptions by using the Add function.
        this.cdr.detach();
        this.ngOnInit(); //Temp fix for bug where 'ngOnInit' is not called automatically.
    }
    check() {
        this.cdr.detectChanges();
    }
    ngOnInit() {
        if (!this.initialized) { //If already ran, fall through
            this.subscription.add(this.route.paramMap.subscribe(paramMap => {
                this.id = +paramMap.get('id'); //'+' shortcut to convert to numeric from string.
                this.subscription.add(this.employeeService.getEmployee(this.id).subscribe(employee => {
                    this.employee = employee;
                    this.check();
                }, error => console.log(error)));
            }));
            this.initialized = true;
        }
    }
    ngOnDestroy() {
        if (!this.subscription.closed) //CYA; Always unsubscribe on destroy event to prevent memory leaks.
            this.subscription.unsubscribe();
    }
    onClose() {
        this.router.navigate(['/employees']);
    }
};
EmployeeDetailComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"] }
];
EmployeeDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        //selector: 'app-employee-detail', //Used in routing; doesn't need a tag selector.
        template: __webpack_require__(/*! raw-loader!./employee-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/employee/employee-detail/employee-detail.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./employee-detail.component.scss */ "./src/app/employee/employee-detail/employee-detail.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"]])
], EmployeeDetailComponent);



/***/ }),

/***/ "./src/app/employee/employee-list/employee-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/employee/employee-list/employee-list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table tbody tr {\n  cursor: pointer;\n}\ntable tbody tr.active, table tbody tr:hover {\n  background-color: #c3dafe;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWUtbGlzdC9DOlxcVXNlcnNcXENhaXQuU2lkZW5lclxcc291cmNlXFxyZXBvc1xcUmFpZFByb2plY3RcXENsaWVudEFwcC9zcmNcXGFwcFxcZW1wbG95ZWVcXGVtcGxveWVlLWxpc3RcXGVtcGxveWVlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VtcGxveWVlL2VtcGxveWVlLWxpc3QvZW1wbG95ZWUtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUNDRjtBREFFO0VBRUUseUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2VtcGxveWVlLWxpc3QvZW1wbG95ZWUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHRib2R5IHRyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAmLmFjdGl2ZSxcclxuXHQmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzNkYWZlO1xuICB9XG59XHJcbiIsInRhYmxlIHRib2R5IHRyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxudGFibGUgdGJvZHkgdHIuYWN0aXZlLCB0YWJsZSB0Ym9keSB0cjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjM2RhZmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/employee/employee-list/employee-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/employee/employee-list/employee-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/employee/_services/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let EmployeeListComponent = class EmployeeListComponent {
    constructor(cdr, employeeService) {
        this.cdr = cdr;
        this.employeeService = employeeService;
        this.employees = [];
        this.filteredEmployees = [];
        this.pagedEmployees = [];
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"](); //Acts as a container for multiple subscriptions by using the Add function.
        this.refreshData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"](); //Acts as an observable that can be manually triggered.
        this.cdr.detach(); //Detach from main CDR Tree.
    }
    get listFilter() {
        return this._listFilter; //Avoid manipulating the data in the getter, formatting/etc. should be done with pipes.
    }
    set listFilter(value) {
        this._listFilter = value;
        this.filteredEmployees = this._listFilter ? this.performFilter(this.listFilter) : this.employees;
        this.check();
    }
    check() {
        this.cdr.detectChanges();
    }
    ngOnInit() {
        this.showEmployees = this.employeeService.employeeList_Show; //Allow the setting to persist even after navigation by storing it in the service.
        this.filteredEmployees = this.employees = this.employeeService.employeeList_Saved; //Temporary until replaced by the initial call to API.
        this.lastUpdated = this.employeeService.employeeList_LastUpdate; //Shows that the data is outdated.
        this.check();
        this.subscription.add(this.refreshData.pipe(//Refresh triggered by the Subject observable.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(0), //Get data initially
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.employeeService.getEmployees())).subscribe(employees => {
            this.filteredEmployees = this.employees = employees; //Shuffle data to show that the data is fresh.
            this.lastUpdated = new Date();
            this.check();
        }, error => console.log(error)));
    }
    ngOnDestroy() {
        this.employeeService.employeeList_Show = this.showEmployees; //Store state for later.
        this.employeeService.employeeList_Saved = this.employees;
        this.employeeService.employeeList_LastUpdate = this.lastUpdated;
        if (!this.subscription.closed) //CYA; Always unsubscribe on destroy event to prevent memory leaks.
            this.subscription.unsubscribe();
    }
    onChangePage(pageItems) {
        this.pagedEmployees = pageItems;
        this.check();
    }
    trackById(index, employee) {
        if (!employee)
            return null;
        //console.log(`Track [ROW:ID]: [${index + 1}:${employee.id}]`);
        return employee.id;
    }
    performFilter(filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.employees.filter((employee) => employee.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    toggleEmployees() {
        this.showEmployees = !this.showEmployees;
        this.check();
    }
    refreshEmployees() {
        this.refreshData.next(); //Trigger observable.
    }
};
EmployeeListComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"] }
];
EmployeeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        //selector: 'app-employees', //Used in routing; doesn't need a tag selector.
        template: __webpack_require__(/*! raw-loader!./employee-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/employee/employee-list/employee-list.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./employee-list.component.scss */ "./src/app/employee/employee-list/employee-list.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _services__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]])
], EmployeeListComponent);



/***/ }),

/***/ "./src/app/employee/employee-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/employee/employee-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: EmployeeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeRoutingModule", function() { return EmployeeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-list/employee-list.component */ "./src/app/employee/employee-list/employee-list.component.ts");
/* harmony import */ var _employee_detail_employee_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employee-detail/employee-detail.component */ "./src/app/employee/employee-detail/employee-detail.component.ts");
/* harmony import */ var _employee_detail_guards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee-detail/_guards */ "./src/app/employee/employee-detail/_guards/index.ts");






const routes = [
    {
        path: 'employees', component: _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeListComponent"], children: [
            {
                path: ':id',
                component: _employee_detail_employee_detail_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeDetailComponent"],
                canActivate: [_employee_detail_guards__WEBPACK_IMPORTED_MODULE_5__["InvalidIDCanActivateGuard"]],
                outlet: 'secondary'
            }
        ]
    }
];
let EmployeeRoutingModule = class EmployeeRoutingModule {
};
EmployeeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], EmployeeRoutingModule);



/***/ }),

/***/ "./src/app/employee/employee.module.ts":
/*!*********************************************!*\
  !*** ./src/app/employee/employee.module.ts ***!
  \*********************************************/
/*! exports provided: EmployeeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeModule", function() { return EmployeeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _employee_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employee-routing.module */ "./src/app/employee/employee-routing.module.ts");
/* harmony import */ var _employee_detail_employee_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee-detail/employee-detail.component */ "./src/app/employee/employee-detail/employee-detail.component.ts");
/* harmony import */ var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employee-list/employee-list.component */ "./src/app/employee/employee-list/employee-list.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_services */ "./src/app/employee/_services/index.ts");









let EmployeeModule = class EmployeeModule {
};
EmployeeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeListComponent"],
            _employee_detail_employee_detail_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeDetailComponent"]
        ],
        providers: [
            _services__WEBPACK_IMPORTED_MODULE_8__["EmployeeService"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _employee_routing_module__WEBPACK_IMPORTED_MODULE_4__["EmployeeRoutingModule"]
        ]
    })
], EmployeeModule);



/***/ }),

/***/ "./src/app/engineering/_services/engineering.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/engineering/_services/engineering.service.ts ***!
  \**************************************************************/
/*! exports provided: EngineeringService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineeringService", function() { return EngineeringService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let EngineeringService = class EngineeringService {
    constructor(http) {
        this.http = http;
        this._url = '/api/engineering';
        this.surveyList_Saved = [];
        this.surveyList_Show = true;
        this.id = 656;
        this.noteID = 5;
    }
    register(userData) {
        return this.http.post(`${this._url}`, userData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log(data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getSurvey(id) {
        return this.http.get(`${this._url}/getSurveyNote/${this.id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log(`Project ${this.id} Data: `, data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    registerProjectNotes(userData) {
        return this.http.post(`${this._url}`, userData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log(data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getProjectNote(id) {
        console.log(`${this._url}/getProjectNote/${this.id}`);
        return this.http.get(`${this._url}/getProjectNote/${this.noteID}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log(`Project ${this.id} Data: `, data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    registerTechnician(userData) {
        return this.http.post(`${this._url}`, userData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log(data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getTechnician(id) {
        console.log(`${this._url}/getTechnician/${id}`);
        return this.http.get(`${this._url}/getTechnician/${this.id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log(`Technician ${this.id} Data: `, data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    registerPlanRevision(userData) {
        return this.http.post(`${this._url}`, userData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log(data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getPlanRevision(id) {
        return this.http.get(`${this._url}/getPlanRevision/${this.id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log(`Plan Revision ${this.id} Data: `, data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    registerPlanFile(userData) {
        return this.http.post(`${this._url}`, userData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log(data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getPlanFile(id) {
        return this.http.get(`${this._url}/getPlanFile/${this.id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log(`Plan File ${this.id} Data: `, data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    registerEngineering(userData) {
        return this.http.post(`${this._url}`, userData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log(data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getEngineering(id) {
        return this.http.get(`${this._url}/getEngineering/${this.id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log(`Engineering ${this.id} Data: `, data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(err) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent)
            errorMessage = `Error: ${err.error.message}.`;
        else
            errorMessage = `Status Code: ${err.status}, Error: ${err.message}.`;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
EngineeringService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EngineeringService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root' // Singleton
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], EngineeringService);



/***/ }),

/***/ "./src/app/engineering/_services/index.ts":
/*!************************************************!*\
  !*** ./src/app/engineering/_services/index.ts ***!
  \************************************************/
/*! exports provided: EngineeringService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _engineering_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engineering.service */ "./src/app/engineering/_services/engineering.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EngineeringService", function() { return _engineering_service__WEBPACK_IMPORTED_MODULE_0__["EngineeringService"]; });




/***/ }),

/***/ "./src/app/engineering/cert-title/cert-title-details/cert-title-details.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/engineering/cert-title/cert-title-details/cert-title-details.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VuZ2luZWVyaW5nL2NlcnQtdGl0bGUvY2VydC10aXRsZS1kZXRhaWxzL2NlcnQtdGl0bGUtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/engineering/cert-title/cert-title-details/cert-title-details.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/engineering/cert-title/cert-title-details/cert-title-details.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CertTitleDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertTitleDetailsComponent", function() { return CertTitleDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services */ "./src/app/engineering/_services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_modal_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/modal/_services */ "./src/app/shared/modal/_services/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/_services */ "./src/app/shared/_services/index.ts");
/* harmony import */ var _certificate_of_title_home_certificate_of_title_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../certificate-of-title-home/certificate-of-title.component */ "./src/app/engineering/cert-title/certificate-of-title-home/certificate-of-title.component.ts");








let CertTitleDetailsComponent = class CertTitleDetailsComponent {
    constructor(cdr, route, modalService, engineeringService, staffService) {
        this.cdr = cdr;
        this.route = route;
        this.modalService = modalService;
        this.engineeringService = engineeringService;
        this.staffService = staffService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
        this.cdr.detach();
        this.ngOnInit();
    }
    check() {
        this.cdr.detectChanges();
    }
    ngOnInit() {
        this.subscription.add(this.route.paramMap.subscribe(paramMap => {
            this.id = +paramMap.get('id');
            this.subscription.add(this.engineeringService.getEngineering(this.id).subscribe(engineering => {
                this.engineering = engineering;
                this.check();
            }, error => console.log(error)));
        }));
        this.subscription.add(this.staffService.getAllStaff().subscribe((staff) => {
            this.staff = staff;
            this.check();
        }));
    }
    ngOnDestroy() {
        if (!this.subscription.closed)
            this.subscription.unsubscribe();
    }
    onSubmit() {
        console.log(this.engineering);
        //this.engineeringService.registerEngineering(this.engineering)
        //	.subscribe(data => {
        //		this.engineering = data;
        //		this.check();
        //	})
    }
    addCertTitle() {
        this.modalService.show(_certificate_of_title_home_certificate_of_title_component__WEBPACK_IMPORTED_MODULE_7__["CertificateOfTitleComponent"]);
    }
};
CertTitleDetailsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _shared_modal_services__WEBPACK_IMPORTED_MODULE_4__["ModalService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["EngineeringService"] },
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_6__["StaffService"] }
];
CertTitleDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cert-title-details',
        template: __webpack_require__(/*! raw-loader!./cert-title-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/engineering/cert-title/cert-title-details/cert-title-details.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./cert-title-details.component.scss */ "./src/app/engineering/cert-title/cert-title-details/cert-title-details.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _shared_modal_services__WEBPACK_IMPORTED_MODULE_4__["ModalService"], _services__WEBPACK_IMPORTED_MODULE_2__["EngineeringService"], _shared_services__WEBPACK_IMPORTED_MODULE_6__["StaffService"]])
], CertTitleDetailsComponent);



/***/ }),

/***/ "./src/app/engineering/cert-title/certificate-of-title-home/certificate-of-title.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/engineering/cert-title/certificate-of-title-home/certificate-of-title.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VuZ2luZWVyaW5nL2NlcnQtdGl0bGUvY2VydGlmaWNhdGUtb2YtdGl0bGUtaG9tZS9jZXJ0aWZpY2F0ZS1vZi10aXRsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/engineering/cert-title/certificate-of-title-home/certificate-of-title.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/engineering/cert-title/certificate-of-title-home/certificate-of-title.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: CertificateOfTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificateOfTitleComponent", function() { return CertificateOfTitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/_services */ "./src/app/shared/_services/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services */ "./src/app/engineering/_services/index.ts");





let CertificateOfTitleComponent = class CertificateOfTitleComponent {
    constructor(cdr, engineeringService, staffService) {
        this.cdr = cdr;
        this.engineeringService = engineeringService;
        this.staffService = staffService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.cdr.detach();
    }
    check() {
        this.cdr.detectChanges();
    }
    ngOnInit() {
        this.engineering = {};
        this.subscription.add(this.staffService.getAllStaff().subscribe((staff) => {
            this.staff = staff;
            this.check();
        }));
    }
    onSubmit() {
        console.log(this.engineering);
        //this.engineeringService.registerEngineering(this.engineering)
        //    .subscribe(data => {
        //        this.engineering = data;
        //        this.check();
        //    })
    }
};
CertificateOfTitleComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["EngineeringService"] },
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_2__["StaffService"] }
];
CertificateOfTitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-certificate-of-title',
        template: __webpack_require__(/*! raw-loader!./certificate-of-title.component.html */ "./node_modules/raw-loader/index.js!./src/app/engineering/cert-title/certificate-of-title-home/certificate-of-title.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./certificate-of-title.component.scss */ "./src/app/engineering/cert-title/certificate-of-title-home/certificate-of-title.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _services__WEBPACK_IMPORTED_MODULE_4__["EngineeringService"], _shared_services__WEBPACK_IMPORTED_MODULE_2__["StaffService"]])
], CertificateOfTitleComponent);



/***/ }),

/***/ "./src/app/engineering/checking/checking-details/checking-details.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/engineering/checking/checking-details/checking-details.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VuZ2luZWVyaW5nL2NoZWNraW5nL2NoZWNraW5nLWRldGFpbHMvY2hlY2tpbmctZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/engineering/checking/checking-details/checking-details.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/engineering/checking/checking-details/checking-details.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CheckingDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckingDetailsComponent", function() { return CheckingDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services */ "./src/app/engineering/_services/index.ts");
/* harmony import */ var _shared_modal_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/modal/_services */ "./src/app/shared/modal/_services/index.ts");
/* harmony import */ var _checking_home_checking_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../checking-home/checking.component */ "./src/app/engineering/checking/checking-home/checking.component.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/_services */ "./src/app/shared/_services/index.ts");








let CheckingDetailsComponent = class CheckingDetailsComponent {
    constructor(cdr, route, router, engineeringService, modalService, staffService) {
        this.cdr = cdr;
        this.route = route;
        this.router = router;
        this.engineeringService = engineeringService;
        this.modalService = modalService;
        this.staffService = staffService;
        this.initialized = false;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.cdr.detach();
        this.ngOnInit();
    }
    check() {
        this.cdr.detectChanges();
    }
    ngOnInit() {
        if (!this.initialized) {
            this.subscription.add(this.route.paramMap.subscribe(paramMap => {
                this.id = +paramMap.get('id');
                this.subscription.add(this.engineeringService.getEngineering(this.id).subscribe(engineering => {
                    this.engineering = engineering;
                    this.check();
                }, error => console.log(error)));
            }));
            this.subscription.add(this.staffService.getAllStaff().subscribe((staff) => {
                this.staff = staff;
                this.check();
            }));
            this.initialized = true;
        }
    }
    ngOnDestroy() {
        if (!this.subscription.closed)
            this.subscription.unsubscribe();
    }
    onSubmit() {
        console.log(this.engineering);
        //this.engineeringService.registerEngineering(this.engineering)
        //	.subscribe(data => {
        //		this.engineering = data;
        //		this.check();
        //	})
    }
    addChecking() {
        this.modalService.show(_checking_home_checking_component__WEBPACK_IMPORTED_MODULE_6__["CheckingComponent"]);
    }
};
CheckingDetailsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["EngineeringService"] },
    { type: _shared_modal_services__WEBPACK_IMPORTED_MODULE_5__["ModalService"] },
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_7__["StaffService"] }
];
CheckingDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checking-details',
        template: __webpack_require__(/*! raw-loader!./checking-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/engineering/checking/checking-details/checking-details.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./checking-details.component.scss */ "./src/app/engineering/checking/checking-details/checking-details.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services__WEBPACK_IMPORTED_MODULE_4__["EngineeringService"], _shared_modal_services__WEBPACK_IMPORTED_MODULE_5__["ModalService"], _shared_services__WEBPACK_IMPORTED_MODULE_7__["StaffService"]])
], CheckingDetailsComponent);



/***/ }),

/***/ "./src/app/engineering/checking/checking-home/checking.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/engineering/checking/checking-home/checking.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VuZ2luZWVyaW5nL2NoZWNraW5nL2NoZWNraW5nLWhvbWUvY2hlY2tpbmcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/engineering/checking/checking-home/checking.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/engineering/checking/checking-home/checking.component.ts ***!
  \**************************************************************************/
/*! exports provided: CheckingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckingComponent", function() { return CheckingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/_services */ "./src/app/shared/_services/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services */ "./src/app/engineering/_services/index.ts");





let CheckingComponent = class CheckingComponent {
    constructor(cdr, engineeringService, staffService) {
        this.cdr = cdr;
        this.engineeringService = engineeringService;
        this.staffService = staffService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"];
        this.cdr.detach();
    }
    check() {
        this.cdr.detectChanges();
    }
    ngOnInit() {
        this.engineering = {};
        this.subscription.add(this.staffService.getAllStaff().subscribe((staff) => {
            this.staff = staff;
            this.check();
        }));
    }
    onSubmit() {
        console.log(this.engineering);
        //this.engineeringService.registerEngineering(this.engineering)
        //    .subscribe(data => {
        //        this.engineering = data;
        //        this.check();
        //    })
    }
};
CheckingComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["EngineeringService"] },
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_2__["StaffService"] }
];
CheckingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checking',
        template: __webpack_require__(/*! raw-loader!./checking.component.html */ "./node_modules/raw-loader/index.js!./src/app/engineering/checking/checking-home/checking.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./checking.component.scss */ "./src/app/engineering/checking/checking-home/checking.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _services__WEBPACK_IMPORTED_MODULE_4__["EngineeringService"], _shared_services__WEBPACK_IMPORTED_MODULE_2__["StaffService"]])
], CheckingComponent);



/***/ }),

/***/ "./src/app/engineering/engineering-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/engineering/engineering-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: EngineeringRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineeringRoutingModule", function() { return EngineeringRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/engineering/home/home.component.ts");
/* harmony import */ var _general_general_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./general/general.component */ "./src/app/engineering/general/general.component.ts");
/* harmony import */ var _existing_rw_existing_rw_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./existing-rw/existing-rw.component */ "./src/app/engineering/existing-rw/existing-rw.component.ts");
/* harmony import */ var _planning_planning_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./planning/planning.component */ "./src/app/engineering/planning/planning.component.ts");
/* harmony import */ var _legal_legal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./legal/legal.component */ "./src/app/engineering/legal/legal.component.ts");
/* harmony import */ var _survey_notes_survey_notes_home_survey_notes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./survey-notes/survey-notes-home/survey-notes.component */ "./src/app/engineering/survey-notes/survey-notes-home/survey-notes.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_security_guards__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/security/_guards */ "./src/app/shared/security/_guards/index.ts");
/* harmony import */ var _survey_notes_survey_notes_details_survey_notes_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./survey-notes/survey-notes-details/survey-notes-details.component */ "./src/app/engineering/survey-notes/survey-notes-details/survey-notes-details.component.ts");
/* harmony import */ var _project_notes_project_notes_details_project_notes_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./project-notes/project-notes-details/project-notes-details.component */ "./src/app/engineering/project-notes/project-notes-details/project-notes-details.component.ts");
/* harmony import */ var _project_notes_project_notes_home_project_notes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./project-notes/project-notes-home/project-notes.component */ "./src/app/engineering/project-notes/project-notes-home/project-notes.component.ts");
/* harmony import */ var _technician_history_technician_history_home_technician_history_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./technician-history/technician-history-home/technician-history.component */ "./src/app/engineering/technician-history/technician-history-home/technician-history.component.ts");
/* harmony import */ var _technician_history_technician_history_details_technician_history_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./technician-history/technician-history-details/technician-history-details.component */ "./src/app/engineering/technician-history/technician-history-details/technician-history-details.component.ts");
/* harmony import */ var _plan_revisions_plan_revisions_details_plan_revisions_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./plan-revisions/plan-revisions-details/plan-revisions-details.component */ "./src/app/engineering/plan-revisions/plan-revisions-details/plan-revisions-details.component.ts");
/* harmony import */ var _plan_revisions_plan_revisions_home_plan_revisions_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./plan-revisions/plan-revisions-home/plan-revisions.component */ "./src/app/engineering/plan-revisions/plan-revisions-home/plan-revisions.component.ts");
/* harmony import */ var _plan_files_plan_files_details_plan_files_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./plan-files/plan-files-details/plan-files-details.component */ "./src/app/engineering/plan-files/plan-files-details/plan-files-details.component.ts");
/* harmony import */ var _plan_files_plan_files_home_plan_files_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./plan-files/plan-files-home/plan-files.component */ "./src/app/engineering/plan-files/plan-files-home/plan-files.component.ts");
/* harmony import */ var _cert_title_cert_title_details_cert_title_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./cert-title/cert-title-details/cert-title-details.component */ "./src/app/engineering/cert-title/cert-title-details/cert-title-details.component.ts");
/* harmony import */ var _cert_title_certificate_of_title_home_certificate_of_title_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./cert-title/certificate-of-title-home/certificate-of-title.component */ "./src/app/engineering/cert-title/certificate-of-title-home/certificate-of-title.component.ts");
/* harmony import */ var _checking_checking_details_checking_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./checking/checking-details/checking-details.component */ "./src/app/engineering/checking/checking-details/checking-details.component.ts");
/* harmony import */ var _checking_checking_home_checking_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./checking/checking-home/checking.component */ "./src/app/engineering/checking/checking-home/checking.component.ts");























const routes = [
    {
        path: 'engineering-home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        canActivate: [_shared_security_guards__WEBPACK_IMPORTED_MODULE_9__["AuthCanActivateGuard"]],
        children: [
            {
                path: 'general',
                component: _general_general_component__WEBPACK_IMPORTED_MODULE_3__["GeneralComponent"],
                outlet: 'secondary'
            },
            {
                path: 'existing-rw',
                component: _existing_rw_existing_rw_component__WEBPACK_IMPORTED_MODULE_4__["ExistingRwComponent"],
                outlet: 'secondary'
            },
            {
                path: 'checking',
                component: _checking_checking_details_checking_details_component__WEBPACK_IMPORTED_MODULE_21__["CheckingDetailsComponent"],
                outlet: 'secondary',
                children: [
                    {
                        path: 'id',
                        component: _checking_checking_home_checking_component__WEBPACK_IMPORTED_MODULE_22__["CheckingComponent"],
                        outlet: 'tertiary'
                    }
                ]
            },
            {
                path: 'planning',
                component: _planning_planning_component__WEBPACK_IMPORTED_MODULE_5__["PlanningComponent"],
                outlet: 'secondary'
            },
            {
                path: 'certificate-of-title',
                component: _cert_title_cert_title_details_cert_title_details_component__WEBPACK_IMPORTED_MODULE_19__["CertTitleDetailsComponent"],
                outlet: 'secondary',
                children: [
                    {
                        path: 'id',
                        component: _cert_title_certificate_of_title_home_certificate_of_title_component__WEBPACK_IMPORTED_MODULE_20__["CertificateOfTitleComponent"],
                        outlet: 'tertiary'
                    }
                ]
            },
            {
                path: 'legal',
                component: _legal_legal_component__WEBPACK_IMPORTED_MODULE_6__["LegalComponent"],
                outlet: 'secondary'
            },
            {
                path: 'technician-history',
                component: _technician_history_technician_history_details_technician_history_details_component__WEBPACK_IMPORTED_MODULE_14__["TechnicianHistoryDetailsComponent"],
                outlet: 'secondary',
                children: [
                    {
                        path: 'id',
                        component: _technician_history_technician_history_home_technician_history_component__WEBPACK_IMPORTED_MODULE_13__["TechnicianHistoryComponent"],
                        outlet: 'tertiary'
                    }
                ]
            },
            {
                path: 'project-notes',
                component: _project_notes_project_notes_details_project_notes_details_component__WEBPACK_IMPORTED_MODULE_11__["ProjectNotesDetailsComponent"],
                outlet: 'secondary',
                children: [
                    {
                        path: 'id',
                        component: _project_notes_project_notes_home_project_notes_component__WEBPACK_IMPORTED_MODULE_12__["ProjectNotesComponent"],
                        outlet: 'tertiary'
                    }
                ]
            },
            {
                path: 'survey-notes',
                component: _survey_notes_survey_notes_details_survey_notes_details_component__WEBPACK_IMPORTED_MODULE_10__["SurveyNotesDetailsComponent"],
                outlet: 'secondary',
                children: [
                    {
                        path: ':id',
                        component: _survey_notes_survey_notes_home_survey_notes_component__WEBPACK_IMPORTED_MODULE_7__["SurveyNotesComponent"],
                        outlet: 'tertiary'
                    }
                ]
            },
            {
                path: 'plan-files',
                component: _plan_files_plan_files_details_plan_files_details_component__WEBPACK_IMPORTED_MODULE_17__["PlanFilesDetailsComponent"],
                outlet: 'secondary',
                children: [
                    {
                        path: ':id',
                        component: _plan_files_plan_files_home_plan_files_component__WEBPACK_IMPORTED_MODULE_18__["PlanFilesComponent"],
                        outlet: 'tertiary'
                    }
                ]
            },
            {
                path: 'plan-revisions',
                component: _plan_revisions_plan_revisions_details_plan_revisions_details_component__WEBPACK_IMPORTED_MODULE_15__["PlanRevisionsDetailsComponent"],
                outlet: 'secondary',
                children: [
                    {
                        path: ':id',
                        component: _plan_revisions_plan_revisions_home_plan_revisions_component__WEBPACK_IMPORTED_MODULE_16__["PlanRevisionsComponent"],
                        outlet: 'tertiary'
                    }
                ]
            }
        ]
    },
];
let EngineeringRoutingModule = class EngineeringRoutingModule {
};
EngineeringRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], EngineeringRoutingModule);



/***/ }),

/***/ "./src/app/engineering/engineering.module.ts":
/*!***************************************************!*\
  !*** ./src/app/engineering/engineering.module.ts ***!
  \***************************************************/
/*! exports provided: EngineeringModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineeringModule", function() { return EngineeringModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _general_general_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general/general.component */ "./src/app/engineering/general/general.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/engineering/home/home.component.ts");
/* harmony import */ var _existing_rw_existing_rw_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./existing-rw/existing-rw.component */ "./src/app/engineering/existing-rw/existing-rw.component.ts");
/* harmony import */ var _legal_legal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./legal/legal.component */ "./src/app/engineering/legal/legal.component.ts");
/* harmony import */ var _survey_notes_survey_notes_home_survey_notes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./survey-notes/survey-notes-home/survey-notes.component */ "./src/app/engineering/survey-notes/survey-notes-home/survey-notes.component.ts");
/* harmony import */ var _planning_planning_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./planning/planning.component */ "./src/app/engineering/planning/planning.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _engineering_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./engineering-routing.module */ "./src/app/engineering/engineering-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _services_engineering_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_services/engineering.service */ "./src/app/engineering/_services/engineering.service.ts");
/* harmony import */ var _survey_notes_survey_notes_details_survey_notes_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./survey-notes/survey-notes-details/survey-notes-details.component */ "./src/app/engineering/survey-notes/survey-notes-details/survey-notes-details.component.ts");
/* harmony import */ var _project_notes_project_notes_home_project_notes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./project-notes/project-notes-home/project-notes.component */ "./src/app/engineering/project-notes/project-notes-home/project-notes.component.ts");
/* harmony import */ var _project_notes_project_notes_details_project_notes_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./project-notes/project-notes-details/project-notes-details.component */ "./src/app/engineering/project-notes/project-notes-details/project-notes-details.component.ts");
/* harmony import */ var _technician_history_technician_history_home_technician_history_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./technician-history/technician-history-home/technician-history.component */ "./src/app/engineering/technician-history/technician-history-home/technician-history.component.ts");
/* harmony import */ var _technician_history_technician_history_details_technician_history_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./technician-history/technician-history-details/technician-history-details.component */ "./src/app/engineering/technician-history/technician-history-details/technician-history-details.component.ts");
/* harmony import */ var _plan_revisions_plan_revisions_details_plan_revisions_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./plan-revisions/plan-revisions-details/plan-revisions-details.component */ "./src/app/engineering/plan-revisions/plan-revisions-details/plan-revisions-details.component.ts");
/* harmony import */ var _plan_revisions_plan_revisions_home_plan_revisions_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./plan-revisions/plan-revisions-home/plan-revisions.component */ "./src/app/engineering/plan-revisions/plan-revisions-home/plan-revisions.component.ts");
/* harmony import */ var _plan_files_plan_files_details_plan_files_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./plan-files/plan-files-details/plan-files-details.component */ "./src/app/engineering/plan-files/plan-files-details/plan-files-details.component.ts");
/* harmony import */ var _plan_files_plan_files_home_plan_files_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./plan-files/plan-files-home/plan-files.component */ "./src/app/engineering/plan-files/plan-files-home/plan-files.component.ts");
/* harmony import */ var _cert_title_cert_title_details_cert_title_details_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./cert-title/cert-title-details/cert-title-details.component */ "./src/app/engineering/cert-title/cert-title-details/cert-title-details.component.ts");
/* harmony import */ var _cert_title_certificate_of_title_home_certificate_of_title_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./cert-title/certificate-of-title-home/certificate-of-title.component */ "./src/app/engineering/cert-title/certificate-of-title-home/certificate-of-title.component.ts");
/* harmony import */ var _checking_checking_details_checking_details_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./checking/checking-details/checking-details.component */ "./src/app/engineering/checking/checking-details/checking-details.component.ts");
/* harmony import */ var _checking_checking_home_checking_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./checking/checking-home/checking.component */ "./src/app/engineering/checking/checking-home/checking.component.ts");


























let EngineeringModule = class EngineeringModule {
};
EngineeringModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _cert_title_certificate_of_title_home_certificate_of_title_component__WEBPACK_IMPORTED_MODULE_23__["CertificateOfTitleComponent"],
            _checking_checking_home_checking_component__WEBPACK_IMPORTED_MODULE_25__["CheckingComponent"],
            _existing_rw_existing_rw_component__WEBPACK_IMPORTED_MODULE_4__["ExistingRwComponent"],
            _general_general_component__WEBPACK_IMPORTED_MODULE_2__["GeneralComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
            _legal_legal_component__WEBPACK_IMPORTED_MODULE_5__["LegalComponent"],
            _plan_files_plan_files_home_plan_files_component__WEBPACK_IMPORTED_MODULE_21__["PlanFilesComponent"],
            _planning_planning_component__WEBPACK_IMPORTED_MODULE_7__["PlanningComponent"],
            _plan_revisions_plan_revisions_home_plan_revisions_component__WEBPACK_IMPORTED_MODULE_19__["PlanRevisionsComponent"],
            _project_notes_project_notes_home_project_notes_component__WEBPACK_IMPORTED_MODULE_14__["ProjectNotesComponent"],
            _survey_notes_survey_notes_home_survey_notes_component__WEBPACK_IMPORTED_MODULE_6__["SurveyNotesComponent"],
            _survey_notes_survey_notes_details_survey_notes_details_component__WEBPACK_IMPORTED_MODULE_13__["SurveyNotesDetailsComponent"],
            _project_notes_project_notes_details_project_notes_details_component__WEBPACK_IMPORTED_MODULE_15__["ProjectNotesDetailsComponent"],
            _technician_history_technician_history_home_technician_history_component__WEBPACK_IMPORTED_MODULE_16__["TechnicianHistoryComponent"],
            _technician_history_technician_history_details_technician_history_details_component__WEBPACK_IMPORTED_MODULE_17__["TechnicianHistoryDetailsComponent"],
            _plan_revisions_plan_revisions_details_plan_revisions_details_component__WEBPACK_IMPORTED_MODULE_18__["PlanRevisionsDetailsComponent"],
            _plan_files_plan_files_details_plan_files_details_component__WEBPACK_IMPORTED_MODULE_20__["PlanFilesDetailsComponent"],
            _cert_title_cert_title_details_cert_title_details_component__WEBPACK_IMPORTED_MODULE_22__["CertTitleDetailsComponent"],
            _checking_checking_details_checking_details_component__WEBPACK_IMPORTED_MODULE_24__["CheckingDetailsComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _engineering_routing_module__WEBPACK_IMPORTED_MODULE_10__["EngineeringRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"]
        ],
        providers: [
            _services_engineering_service__WEBPACK_IMPORTED_MODULE_12__["EngineeringService"]
        ],
        entryComponents: [
            _cert_title_certificate_of_title_home_certificate_of_title_component__WEBPACK_IMPORTED_MODULE_23__["CertificateOfTitleComponent"],
            _checking_checking_home_checking_component__WEBPACK_IMPORTED_MODULE_25__["CheckingComponent"],
            _plan_files_plan_files_home_plan_files_component__WEBPACK_IMPORTED_MODULE_21__["PlanFilesComponent"],
            _plan_revisions_plan_revisions_home_plan_revisions_component__WEBPACK_IMPORTED_MODULE_19__["PlanRevisionsComponent"],
            _project_notes_project_notes_home_project_notes_component__WEBPACK_IMPORTED_MODULE_14__["ProjectNotesComponent"],
            _survey_notes_survey_notes_home_survey_notes_component__WEBPACK_IMPORTED_MODULE_6__["SurveyNotesComponent"],
            _technician_history_technician_history_home_technician_history_component__WEBPACK_IMPORTED_MODULE_16__["TechnicianHistoryComponent"]
        ]
    })
], EngineeringModule);



/***/ }),

/***/ "./src/app/engineering/existing-rw/existing-rw.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/engineering/existing-rw/existing-rw.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VuZ2luZWVyaW5nL2V4aXN0aW5nLXJ3L2V4aXN0aW5nLXJ3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/engineering/existing-rw/existing-rw.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/engineering/existing-rw/existing-rw.component.ts ***!
  \******************************************************************/
/*! exports provided: ExistingRwComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExistingRwComponent", function() { return ExistingRwComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ExistingRwComponent = class ExistingRwComponent {
    constructor() { }
    ngOnInit() {
    }
};
ExistingRwComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-existing-rw',
        template: __webpack_require__(/*! raw-loader!./existing-rw.component.html */ "./node_modules/raw-loader/index.js!./src/app/engineering/existing-rw/existing-rw.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./existing-rw.component.scss */ "./src/app/engineering/existing-rw/existing-rw.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ExistingRwComponent);



/***/ }),

/***/ "./src/app/engineering/general/general.component.scss":
/*!************************************************************!*\
  !*** ./src/app/engineering/general/general.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VuZ2luZWVyaW5nL2dlbmVyYWwvZ2VuZXJhbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/engineering/general/general.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/engineering/general/general.component.ts ***!
  \**********************************************************/
/*! exports provided: GeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralComponent", function() { return GeneralComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/engineering/_services/index.ts");
/* harmony import */ var _shared_modal_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/modal/_services */ "./src/app/shared/modal/_services/index.ts");






let GeneralComponent = class GeneralComponent {
    constructor(cdr, route, router, engineeringService, modalService) {
        this.cdr = cdr;
        this.route = route;
        this.router = router;
        this.engineeringService = engineeringService;
        this.modalService = modalService;
        this.initialized = false;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.cdr.detach();
    }
    check() {
        this.cdr.detectChanges();
    }
    ngOnInit() {
        if (!this.initialized) {
            this.subscription.add(this.route.paramMap.subscribe(paramMap => {
                this.id = +paramMap.get('id');
                this.subscription.add(this.engineeringService.getEngineering(this.id).subscribe(engineering => {
                    this.engineering = engineering;
                    this.check();
                }, error => console.log(error)));
            }));
            this.initialized = true;
        }
    }
    ngOnDestroy() {
        if (!this.subscription.closed)
            this.subscription.unsubscribe();
    }
    onSubmit() {
        console.log(this.engineering);
        //this.engineeringService.registerEngineering(this.engineering)
        //	.subscribe(data => {
        //		this.engineering = data;
        //		this.check();
        //	})
    }
};
GeneralComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["EngineeringService"] },
    { type: _shared_modal_services__WEBPACK_IMPORTED_MODULE_5__["ModalService"] }
];
GeneralComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-general',
        template: __webpack_require__(/*! raw-loader!./general.component.html */ "./node_modules/raw-loader/index.js!./src/app/engineering/general/general.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./general.component.scss */ "./src/app/engineering/general/general.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services__WEBPACK_IMPORTED_MODULE_4__["EngineeringService"], _shared_modal_services__WEBPACK_IMPORTED_MODULE_5__["ModalService"]])
], GeneralComponent);



/***/ }),

/***/ "./src/app/engineering/home/home.component.scss":
/*!******************************************************!*\
  !*** ./src/app/engineering/home/home.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active {\n  background-color: #4f748a;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW5naW5lZXJpbmcvaG9tZS9DOlxcVXNlcnNcXENhaXQuU2lkZW5lclxcc291cmNlXFxyZXBvc1xcUmFpZFByb2plY3RcXENsaWVudEFwcC9zcmNcXGFwcFxcZW5naW5lZXJpbmdcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VuZ2luZWVyaW5nL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZW5naW5lZXJpbmcvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Zjc0OGE7XG4gIGNvbG9yOiAjZmZmO1xufVxyXG4iLCIuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRmNzQ4YTtcbiAgY29sb3I6ICNmZmY7XG59Il19 */"

/***/ }),

/***/ "./src/app/engineering/home/home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/engineering/home/home.component.ts ***!
  \****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/engineering/home/home.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/engineering/home/home.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "./src/app/engineering/legal/legal.component.scss":
/*!********************************************************!*\
  !*** ./src/app/engineering/legal/legal.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VuZ2luZWVyaW5nL2xlZ2FsL2xlZ2FsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/engineering/legal/legal.component.ts":
/*!******************************************************!*\
  !*** ./src/app/engineering/legal/legal.component.ts ***!
  \******************************************************/
/*! exports provided: LegalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalComponent", function() { return LegalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LegalComponent = class LegalComponent {
    constructor() { }
    ngOnInit() {
    }
};
LegalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-legal',
        template: __webpack_require__(/*! raw-loader!./legal.component.html */ "./node_modules/raw-loader/index.js!./src/app/engineering/legal/legal.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./legal.component.scss */ "./src/app/engineering/legal/legal.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LegalComponent);



/***/ }),

/***/ "./src/app/engineering/plan-files/plan-files-details/plan-files-details.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/engineering/plan-files/plan-files-details/plan-files-details.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VuZ2luZWVyaW5nL3BsYW4tZmlsZXMvcGxhbi1maWxlcy1kZXRhaWxzL3BsYW4tZmlsZXMtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/engineering/plan-files/plan-files-details/plan-files-details.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/engineering/plan-files/plan-files-details/plan-files-details.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: PlanFilesDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanFilesDetailsComponent", function() { return PlanFilesDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services */ "./src/app/engineering/_services/index.ts");
/* harmony import */ var _shared_modal_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/modal/_services */ "./src/app/shared/modal/_services/index.ts");
/* harmony import */ var _plan_files_home_plan_files_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../plan-files-home/plan-files.component */ "./src/app/engineering/plan-files/plan-files-home/plan-files.component.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/_services */ "./src/app/shared/_services/index.ts");








let PlanFilesDetailsComponent = class PlanFilesDetailsComponent {
    constructor(cdr, route, router, engineeringService, modalService, countiesService) {
        this.cdr = cdr;
        this.route = route;
        this.router = router;
        this.engineeringService = engineeringService;
        this.modalService = modalService;
        this.countiesService = countiesService;
        this.initialized = false;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.cdr.detach();
        this.ngOnInit();
    }
    check() {
        this.cdr.detectChanges();
    }
    ngOnInit() {
        if (!this.initialized) {
            this.subscription.add(this.route.paramMap.subscribe(paramMap => {
                this.planID = +paramMap.get('planID');
                this.subscription.add(this.engineeringService.getPlanFile(this.planID).subscribe(planFile => {
                    this.planFile = planFile;
                    this.check();
                }, error => console.log(error)));
            }));
            this.subscription.add(this.countiesService.getAllCounties().subscribe((counties) => {
                this.counties = counties;
                this.check();
            }));
            this.initialized = true;
        }
    }
    ngOnDestroy() {
        if (!this.subscription.closed)
            this.subscription.unsubscribe();
    }
    onSubmit() {
        console.log(this.planFile);
        //this.engineeringService.registerPlanFile(this.planFile)
        //	.subscribe(data => {
        //		this.planFile = data;
        //		this.check();
        //	})
    }
    addPlanFile() {
        this.modalService.show(_plan_files_home_plan_files_component__WEBPACK_IMPORTED_MODULE_6__["PlanFilesComponent"]);
    }
};
PlanFilesDetailsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["EngineeringService"] },
    { type: _shared_modal_services__WEBPACK_IMPORTED_MODULE_5__["ModalService"] },
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_7__["CountiesService"] }
];
PlanFilesDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-plan-files-details',
        template: __webpack_require__(/*! raw-loader!./plan-files-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/engineering/plan-files/plan-files-details/plan-files-details.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./plan-files-details.component.scss */ "./src/app/engineering/plan-files/plan-files-details/plan-files-details.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services__WEBPACK_IMPORTED_MODULE_4__["EngineeringService"], _shared_modal_services__WEBPACK_IMPORTED_MODULE_5__["ModalService"], _shared_services__WEBPACK_IMPORTED_MODULE_7__["CountiesService"]])
], PlanFilesDetailsComponent);



/***/ }),

/***/ "./src/app/engineering/plan-files/plan-files-home/plan-files.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/engineering/plan-files/plan-files-home/plan-files.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VuZ2luZWVyaW5nL3BsYW4tZmlsZXMvcGxhbi1maWxlcy1ob21lL3BsYW4tZmlsZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/engineering/plan-files/plan-files-home/plan-files.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/engineering/plan-files/plan-files-home/plan-files.component.ts ***!
  \********************************************************************************/
/*! exports provided: PlanFilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanFilesComponent", function() { return PlanFilesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services */ "./src/app/engineering/_services/index.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/_services */ "./src/app/shared/_services/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let PlanFilesComponent = class PlanFilesComponent {
    constructor(cdr, engineeringService, countiesService) {
        this.cdr = cdr;
        this.engineeringService = engineeringService;
        this.countiesService = countiesService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.cdr.detach();
    }
    check() {
        this.cdr.detectChanges();
    }
    ngOnInit() {
        this.planFile = {};
        this.subscription.add(this.countiesService.getAllCounties().subscribe((counties) => {
            this.counties = counties;
            this.check();
        }));
    }
    ngOnDestroy() {
        if (!this.subscription.closed)
            this.subscription.unsubscribe();
    }
    onSubmit() {
        console.log('Plan File: ', this.planFile);
        //    this.engineeringService.registerPlanFile(this.planFile)
        //        .subscribe(data => {
        //            this.planFile = data;
        //this.check()
        //        })
    }
};
PlanFilesComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["EngineeringService"] },
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_3__["CountiesService"] }
];
PlanFilesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-plan-files',
        template: __webpack_require__(/*! raw-loader!./plan-files.component.html */ "./node_modules/raw-loader/index.js!./src/app/engineering/plan-files/plan-files-home/plan-files.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./plan-files.component.scss */ "./src/app/engineering/plan-files/plan-files-home/plan-files.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _services__WEBPACK_IMPORTED_MODULE_2__["EngineeringService"], _shared_services__WEBPACK_IMPORTED_MODULE_3__["CountiesService"]])
], PlanFilesComponent);



/***/ }),

/***/ "./src/app/engineering/plan-revisions/plan-revisions-details/plan-revisions-details.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/engineering/plan-revisions/plan-revisions-details/plan-revisions-details.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VuZ2luZWVyaW5nL3BsYW4tcmV2aXNpb25zL3BsYW4tcmV2aXNpb25zLWRldGFpbHMvcGxhbi1yZXZpc2lvbnMtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/engineering/plan-revisions/plan-revisions-details/plan-revisions-details.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/engineering/plan-revisions/plan-revisions-details/plan-revisions-details.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: PlanRevisionsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanRevisionsDetailsComponent", function() { return PlanRevisionsDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services */ "./src/app/engineering/_services/index.ts");
/* harmony import */ var _shared_modal_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/modal/_services */ "./src/app/shared/modal/_services/index.ts");
/* harmony import */ var _plan_revisions_home_plan_revisions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../plan-revisions-home/plan-revisions.component */ "./src/app/engineering/plan-revisions/plan-revisions-home/plan-revisions.component.ts");







let PlanRevisionsDetailsComponent = class PlanRevisionsDetailsComponent {
    constructor(cdr, route, router, engineeringService, modalService) {
        this.cdr = cdr;
        this.route = route;
        this.router = router;
        this.engineeringService = engineeringService;
        this.modalService = modalService;
        this.initialized = false;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.cdr.detach();
        this.ngOnInit();
    }
    check() {
        this.cdr.detectChanges();
    }
    ngOnInit() {
        if (!this.initialized) {
            this.subscription.add(this.route.paramMap.subscribe(paramMap => {
                this.planRevisionID = +paramMap.get('planRevisionID');
                this.subscription.add(this.engineeringService.getPlanRevision(this.planRevisionID).subscribe(planRevision => {
                    this.planRevision = planRevision;
                    this.check();
                }, error => console.log(error)));
            }));
            this.initialized = true;
        }
    }
    ngOnDestroy() {
        if (!this.subscription.closed)
            this.subscription.unsubscribe();
    }
    onSubmit() {
        console.log(this.planRevision);
        //     this.engineeringService.register(this.planRevision)
        //.subscribe(data => {
        //	this.planRevision = data;
        //	this.check();
        //})
    }
    addPlanRevision() {
        this.modalService.show(_plan_revisions_home_plan_revisions_component__WEBPACK_IMPORTED_MODULE_6__["PlanRevisionsComponent"]);
    }
};
PlanRevisionsDetailsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["EngineeringService"] },
    { type: _shared_modal_services__WEBPACK_IMPORTED_MODULE_5__["ModalService"] }
];
PlanRevisionsDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-plan-revisions-details',
        template: __webpack_require__(/*! raw-loader!./plan-revisions-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/engineering/plan-revisions/plan-revisions-details/plan-revisions-details.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./plan-revisions-details.component.scss */ "./src/app/engineering/plan-revisions/plan-revisions-details/plan-revisions-details.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services__WEBPACK_IMPORTED_MODULE_4__["EngineeringService"], _shared_modal_services__WEBPACK_IMPORTED_MODULE_5__["ModalService"]])
], PlanRevisionsDetailsComponent);



/***/ }),

/***/ "./src/app/engineering/plan-revisions/plan-revisions-home/plan-revisions.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/engineering/plan-revisions/plan-revisions-home/plan-revisions.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VuZ2luZWVyaW5nL3BsYW4tcmV2aXNpb25zL3BsYW4tcmV2aXNpb25zLWhvbWUvcGxhbi1yZXZpc2lvbnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/engineering/plan-revisions/plan-revisions-home/plan-revisions.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/engineering/plan-revisions/plan-revisions-home/plan-revisions.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PlanRevisionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanRevisionsComponent", function() { return PlanRevisionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services */ "./src/app/engineering/_services/index.ts");



let PlanRevisionsComponent = class PlanRevisionsComponent {
    constructor(cdr, engineeringService) {
        this.cdr = cdr;
        this.engineeringService = engineeringService;
        this.cdr.detach();
    }
    check() {
        this.cdr.detectChanges();
    }
    ngOnInit() {
        this.planRevision = {};
        this.check();
    }
    onSubmit() {
        console.log(this.planRevision);
        //this.engineeringService.registerPlanRevision(this.planRevision)
        //    .subscribe(data => {
        //        this.planRevision = data;
        //        this.check();
        //    })
    }
};
PlanRevisionsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["EngineeringService"] }
];
PlanRevisionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-plan-revisions',
        template: __webpack_require__(/*! raw-loader!./plan-revisions.component.html */ "./node_modules/raw-loader/index.js!./src/app/engineering/plan-revisions/plan-revisions-home/plan-revisions.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./plan-revisions.component.scss */ "./src/app/engineering/plan-revisions/plan-revisions-home/plan-revisions.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _services__WEBPACK_IMPORTED_MODULE_2__["EngineeringService"]])
], PlanRevisionsComponent);



/***/ }),

/***/ "./src/app/engineering/planning/planning.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/engineering/planning/planning.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VuZ2luZWVyaW5nL3BsYW5uaW5nL3BsYW5uaW5nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/engineering/planning/planning.component.ts":
/*!************************************************************!*\
  !*** ./src/app/engineering/planning/planning.component.ts ***!
  \************************************************************/
/*! exports provided: PlanningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanningComponent", function() { return PlanningComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PlanningComponent = class PlanningComponent {
    constructor() { }
    ngOnInit() {
    }
};
PlanningComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-planning',
        template: __webpack_require__(/*! raw-loader!./planning.component.html */ "./node_modules/raw-loader/index.js!./src/app/engineering/planning/planning.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./planning.component.scss */ "./src/app/engineering/planning/planning.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PlanningComponent);



/***/ }),

/***/ "./src/app/engineering/project-notes/project-notes-details/project-notes-details.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/engineering/project-notes/project-notes-details/project-notes-details.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VuZ2luZWVyaW5nL3Byb2plY3Qtbm90ZXMvcHJvamVjdC1ub3Rlcy1kZXRhaWxzL3Byb2plY3Qtbm90ZXMtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/engineering/project-notes/project-notes-details/project-notes-details.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/engineering/project-notes/project-notes-details/project-notes-details.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ProjectNotesDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectNotesDetailsComponent", function() { return ProjectNotesDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services */ "./src/app/engineering/_services/index.ts");
/* harmony import */ var _shared_modal_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/modal/_services */ "./src/app/shared/modal/_services/index.ts");
/* harmony import */ var _project_notes_home_project_notes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../project-notes-home/project-notes.component */ "./src/app/engineering/project-notes/project-notes-home/project-notes.component.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/_services */ "./src/app/shared/_services/index.ts");








let ProjectNotesDetailsComponent = class ProjectNotesDetailsComponent {
    constructor(cdr, route, router, engineeringService, modalService, staffService) {
        this.cdr = cdr;
        this.route = route;
        this.router = router;
        this.engineeringService = engineeringService;
        this.modalService = modalService;
        this.staffService = staffService;
        this.initialized = false;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.cdr.detach();
        this.ngOnInit();
    }
    check() {
        this.cdr.detectChanges();
    }
    ngOnInit() {
        if (!this.initialized) {
            this.subscription.add(this.route.paramMap.subscribe(paramMap => {
                this.id = +paramMap.get('id');
                this.subscription.add(this.engineeringService.getProjectNote(this.id).subscribe(projectNote => {
                    this.projectNote = projectNote;
                    this.check();
                }, error => console.log(error)));
            }));
            this.subscription.add(this.staffService.getAllStaff().subscribe((staff) => {
                this.staff = staff;
                this.check();
            }));
            this.initialized = true;
        }
    }
    ngOnDestroy() {
        if (!this.subscription.closed)
            this.subscription.unsubscribe();
    }
    onSubmit() {
        console.log(this.projectNote);
        //this.engineeringService.register(this.projectNote)
        //    .subscribe(data => {
        //        this.projectNote = data;
        //        this.check();
        //    })
    }
    addProjectNote() {
        this.modalService.show(_project_notes_home_project_notes_component__WEBPACK_IMPORTED_MODULE_6__["ProjectNotesComponent"]);
    }
};
ProjectNotesDetailsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["EngineeringService"] },
    { type: _shared_modal_services__WEBPACK_IMPORTED_MODULE_5__["ModalService"] },
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_7__["StaffService"] }
];
ProjectNotesDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project-notes-details',
        template: __webpack_require__(/*! raw-loader!./project-notes-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/engineering/project-notes/project-notes-details/project-notes-details.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./project-notes-details.component.scss */ "./src/app/engineering/project-notes/project-notes-details/project-notes-details.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services__WEBPACK_IMPORTED_MODULE_4__["EngineeringService"], _shared_modal_services__WEBPACK_IMPORTED_MODULE_5__["ModalService"], _shared_services__WEBPACK_IMPORTED_MODULE_7__["StaffService"]])
], ProjectNotesDetailsComponent);



/***/ }),

/***/ "./src/app/engineering/project-notes/project-notes-home/project-notes.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/engineering/project-notes/project-notes-home/project-notes.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VuZ2luZWVyaW5nL3Byb2plY3Qtbm90ZXMvcHJvamVjdC1ub3Rlcy1ob21lL3Byb2plY3Qtbm90ZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/engineering/project-notes/project-notes-home/project-notes.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/engineering/project-notes/project-notes-home/project-notes.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ProjectNotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectNotesComponent", function() { return ProjectNotesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_engineering_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/engineering.service */ "./src/app/engineering/_services/engineering.service.ts");



let ProjectNotesComponent = class ProjectNotesComponent {
    constructor(cdr, engineeringService) {
        this.cdr = cdr;
        this.engineeringService = engineeringService;
        this.cdr.detach();
    }
    check() {
        this.cdr.detectChanges();
    }
    ngOnInit() {
        this.projectNote = {};
        this.check();
    }
    onSubmit() {
        console.log(this.projectNote);
        //this.engineeringService.registerProjectNotes(this.projectNote)
        //    .subscribe(data => {
        //        this.projectNote = data;
        //        this.check();
        //    }) 
    }
};
ProjectNotesComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _services_engineering_service__WEBPACK_IMPORTED_MODULE_2__["EngineeringService"] }
];
ProjectNotesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project-notes',
        template: __webpack_require__(/*! raw-loader!./project-notes.component.html */ "./node_modules/raw-loader/index.js!./src/app/engineering/project-notes/project-notes-home/project-notes.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./project-notes.component.scss */ "./src/app/engineering/project-notes/project-notes-home/project-notes.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _services_engineering_service__WEBPACK_IMPORTED_MODULE_2__["EngineeringService"]])
], ProjectNotesComponent);



/***/ }),

/***/ "./src/app/engineering/survey-notes/survey-notes-details/survey-notes-details.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/engineering/survey-notes/survey-notes-details/survey-notes-details.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VuZ2luZWVyaW5nL3N1cnZleS1ub3Rlcy9zdXJ2ZXktbm90ZXMtZGV0YWlscy9zdXJ2ZXktbm90ZXMtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/engineering/survey-notes/survey-notes-details/survey-notes-details.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/engineering/survey-notes/survey-notes-details/survey-notes-details.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: SurveyNotesDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyNotesDetailsComponent", function() { return SurveyNotesDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services */ "./src/app/engineering/_services/index.ts");
/* harmony import */ var _shared_modal_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/modal/_services */ "./src/app/shared/modal/_services/index.ts");
/* harmony import */ var _survey_notes_home_survey_notes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../survey-notes-home/survey-notes.component */ "./src/app/engineering/survey-notes/survey-notes-home/survey-notes.component.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/_services */ "./src/app/shared/_services/index.ts");








let SurveyNotesDetailsComponent = class SurveyNotesDetailsComponent {
    constructor(cdr, route, router, engineeringService, staffService, modalService) {
        this.cdr = cdr;
        this.route = route;
        this.router = router;
        this.engineeringService = engineeringService;
        this.staffService = staffService;
        this.modalService = modalService;
        this.initialized = false;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.cdr.detach();
        this.ngOnInit();
    }
    check() {
        this.cdr.detectChanges();
    }
    ngOnInit() {
        if (!this.initialized) {
            this.subscription.add(this.route.paramMap.subscribe(paramMap => {
                this.id = +paramMap.get('id');
                this.subscription.add(this.engineeringService.getSurvey(this.id).subscribe(surveyNote => {
                    this.surveyNote = surveyNote;
                    this.check();
                }, error => console.log(error)));
            }));
            this.subscription.add(this.staffService.getAllStaff().subscribe((staff) => {
                this.staff = staff;
                this.check();
            }));
            this.initialized = true;
        }
    }
    ngOnDestroy() {
        if (!this.subscription.closed)
            this.subscription.unsubscribe();
    }
    onSubmit() {
        console.log(this.surveyNote);
        //     this.engineeringService.register(this.surveyNote)
        //.subscribe(data => {
        //	this.surveyNote = data;
        //	this.check();
        //})
    }
    addSurvey() {
        this.modalService.show(_survey_notes_home_survey_notes_component__WEBPACK_IMPORTED_MODULE_6__["SurveyNotesComponent"]);
    }
};
SurveyNotesDetailsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["EngineeringService"] },
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_7__["StaffService"] },
    { type: _shared_modal_services__WEBPACK_IMPORTED_MODULE_5__["ModalService"] }
];
SurveyNotesDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-survey-notes-details',
        template: __webpack_require__(/*! raw-loader!./survey-notes-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/engineering/survey-notes/survey-notes-details/survey-notes-details.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./survey-notes-details.component.scss */ "./src/app/engineering/survey-notes/survey-notes-details/survey-notes-details.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services__WEBPACK_IMPORTED_MODULE_4__["EngineeringService"], _shared_services__WEBPACK_IMPORTED_MODULE_7__["StaffService"], _shared_modal_services__WEBPACK_IMPORTED_MODULE_5__["ModalService"]])
], SurveyNotesDetailsComponent);



/***/ }),

/***/ "./src/app/engineering/survey-notes/survey-notes-home/survey-notes.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/engineering/survey-notes/survey-notes-home/survey-notes.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VuZ2luZWVyaW5nL3N1cnZleS1ub3Rlcy9zdXJ2ZXktbm90ZXMtaG9tZS9zdXJ2ZXktbm90ZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/engineering/survey-notes/survey-notes-home/survey-notes.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/engineering/survey-notes/survey-notes-home/survey-notes.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SurveyNotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyNotesComponent", function() { return SurveyNotesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_engineering_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/engineering.service */ "./src/app/engineering/_services/engineering.service.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/_services */ "./src/app/shared/_services/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let SurveyNotesComponent = class SurveyNotesComponent {
    constructor(cdr, engineeringService, staffService) {
        this.cdr = cdr;
        this.engineeringService = engineeringService;
        this.staffService = staffService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.cdr.detach();
    }
    check() {
        this.cdr.detectChanges();
    }
    ngOnInit() {
        this.survey = {};
        this.subscription.add(this.staffService.getAllStaff().subscribe((staff) => {
            this.staff = staff;
            this.check();
        }));
    }
    onSubmit() {
        console.log(this.survey);
        //this.engineeringService.register(this.survey)
        //    .subscribe(data => {
        //        this.survey = data;
        //        this.check();
        //    })
    }
};
SurveyNotesComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _services_engineering_service__WEBPACK_IMPORTED_MODULE_2__["EngineeringService"] },
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_3__["StaffService"] }
];
SurveyNotesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-survey-notes',
        template: __webpack_require__(/*! raw-loader!./survey-notes.component.html */ "./node_modules/raw-loader/index.js!./src/app/engineering/survey-notes/survey-notes-home/survey-notes.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./survey-notes.component.scss */ "./src/app/engineering/survey-notes/survey-notes-home/survey-notes.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _services_engineering_service__WEBPACK_IMPORTED_MODULE_2__["EngineeringService"], _shared_services__WEBPACK_IMPORTED_MODULE_3__["StaffService"]])
], SurveyNotesComponent);



/***/ }),

/***/ "./src/app/engineering/technician-history/technician-history-details/technician-history-details.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/engineering/technician-history/technician-history-details/technician-history-details.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VuZ2luZWVyaW5nL3RlY2huaWNpYW4taGlzdG9yeS90ZWNobmljaWFuLWhpc3RvcnktZGV0YWlscy90ZWNobmljaWFuLWhpc3RvcnktZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/engineering/technician-history/technician-history-details/technician-history-details.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/engineering/technician-history/technician-history-details/technician-history-details.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: TechnicianHistoryDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnicianHistoryDetailsComponent", function() { return TechnicianHistoryDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services */ "./src/app/engineering/_services/index.ts");
/* harmony import */ var _shared_modal_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/modal/_services */ "./src/app/shared/modal/_services/index.ts");
/* harmony import */ var _technician_history_home_technician_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../technician-history-home/technician-history.component */ "./src/app/engineering/technician-history/technician-history-home/technician-history.component.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/_services */ "./src/app/shared/_services/index.ts");








let TechnicianHistoryDetailsComponent = class TechnicianHistoryDetailsComponent {
    constructor(cdr, route, router, engineeringService, modalService, staffService) {
        this.cdr = cdr;
        this.route = route;
        this.router = router;
        this.engineeringService = engineeringService;
        this.modalService = modalService;
        this.staffService = staffService;
        this.initialized = false;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.cdr.detach();
        this.ngOnInit();
    }
    check() {
        this.cdr.detectChanges();
    }
    ngOnInit() {
        if (!this.initialized) {
            this.subscription.add(this.route.paramMap.subscribe(paramMap => {
                this.technicianID = +paramMap.get('technicianID');
                this.subscription.add(this.engineeringService.getTechnician(this.technicianID).subscribe(technician => {
                    this.technician = technician;
                    this.check();
                }, error => console.log(error)));
            }));
            this.subscription.add(this.staffService.getAllStaff().subscribe((staff) => {
                this.staff = staff;
                this.check();
            }));
            this.initialized = true;
        }
    }
    ngOnDestroy() {
        if (!this.subscription.closed)
            this.subscription.unsubscribe();
    }
    onSubmit() {
        console.log(this.technician);
        //this.engineeringService.register(this.technician)
        //    .subscribe(data => {
        //        this.technician = data;
        //        this.check();
        //    })
    }
    addTechnician() {
        this.modalService.show(_technician_history_home_technician_history_component__WEBPACK_IMPORTED_MODULE_6__["TechnicianHistoryComponent"]);
    }
};
TechnicianHistoryDetailsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["EngineeringService"] },
    { type: _shared_modal_services__WEBPACK_IMPORTED_MODULE_5__["ModalService"] },
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_7__["StaffService"] }
];
TechnicianHistoryDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-technician-history-details',
        template: __webpack_require__(/*! raw-loader!./technician-history-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/engineering/technician-history/technician-history-details/technician-history-details.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./technician-history-details.component.scss */ "./src/app/engineering/technician-history/technician-history-details/technician-history-details.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services__WEBPACK_IMPORTED_MODULE_4__["EngineeringService"], _shared_modal_services__WEBPACK_IMPORTED_MODULE_5__["ModalService"], _shared_services__WEBPACK_IMPORTED_MODULE_7__["StaffService"]])
], TechnicianHistoryDetailsComponent);



/***/ }),

/***/ "./src/app/engineering/technician-history/technician-history-home/technician-history.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/engineering/technician-history/technician-history-home/technician-history.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VuZ2luZWVyaW5nL3RlY2huaWNpYW4taGlzdG9yeS90ZWNobmljaWFuLWhpc3RvcnktaG9tZS90ZWNobmljaWFuLWhpc3RvcnkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/engineering/technician-history/technician-history-home/technician-history.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/engineering/technician-history/technician-history-home/technician-history.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: TechnicianHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnicianHistoryComponent", function() { return TechnicianHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services */ "./src/app/engineering/_services/index.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/_services */ "./src/app/shared/_services/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let TechnicianHistoryComponent = class TechnicianHistoryComponent {
    constructor(cdr, engineeringService, staffService) {
        this.cdr = cdr;
        this.engineeringService = engineeringService;
        this.staffService = staffService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.cdr.detach();
    }
    check() {
        this.cdr.detectChanges();
    }
    ngOnInit() {
        this.technician = {};
        this.subscription.add(this.staffService.getAllStaff().subscribe((staff) => {
            this.staff = staff;
            this.check();
        }));
    }
    onSubmit() {
        console.log(this.technician);
        //this.engineeringService.registerTechnician
        //    (this.technician)
        //    .subscribe(data => {
        //        this.technician = data;
        //        this.check();
        //    })
    }
};
TechnicianHistoryComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["EngineeringService"] },
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_3__["StaffService"] }
];
TechnicianHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-technician-history',
        template: __webpack_require__(/*! raw-loader!./technician-history.component.html */ "./node_modules/raw-loader/index.js!./src/app/engineering/technician-history/technician-history-home/technician-history.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./technician-history.component.scss */ "./src/app/engineering/technician-history/technician-history-home/technician-history.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _services__WEBPACK_IMPORTED_MODULE_2__["EngineeringService"], _shared_services__WEBPACK_IMPORTED_MODULE_3__["StaffService"]])
], TechnicianHistoryComponent);



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/home/welcome/welcome.component.ts");




const routes = [
    { path: '', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"] }
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomeRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/home/welcome/welcome.component.ts");





let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"]
        ]
    })
], HomeModule);



/***/ }),

/***/ "./src/app/home/welcome/welcome.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/home/welcome/welcome.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/welcome/welcome.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/welcome/welcome.component.ts ***!
  \***************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_security_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/security/_services/auth.service */ "./src/app/shared/security/_services/auth.service.ts");




let WelcomeComponent = class WelcomeComponent {
    constructor(cdr, authService) {
        this.cdr = cdr;
        this.authService = authService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"](); //Acts as a container for multiple subscriptions by using the Add function.
        this.cdr.detach();
    }
    check() {
        this.cdr.detectChanges();
    }
    ngOnInit() {
        let updated = false, storageItem = this.authService.getStorageItem();
        if (this.id)
            updated = true;
        if (storageItem) {
            this.displayName = this.authService.getTokenValue('unique_name'); //Retreive the Name Claim from the token.
            updated = true;
        }
        if (updated)
            this.check(); //Changes were made and need to be rendered.
    }
    ngOnDestroy() {
        if (!this.subscription.closed) //CYA; Always unsubscribe on destroy event to prevent memory leaks.
            this.subscription.unsubscribe();
    }
};
WelcomeComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _shared_security_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], WelcomeComponent.prototype, "id", void 0);
WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        //selector: 'app-welcome', //Used in routing; doesn't need a tag selector.
        template: __webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/welcome/welcome.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./welcome.component.scss */ "./src/app/home/welcome/welcome.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _shared_security_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], WelcomeComponent);



/***/ }),

/***/ "./src/app/railroad/_services/index.ts":
/*!*********************************************!*\
  !*** ./src/app/railroad/_services/index.ts ***!
  \*********************************************/
/*! exports provided: RailroadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _railroad_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./railroad.service */ "./src/app/railroad/_services/railroad.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RailroadService", function() { return _railroad_service__WEBPACK_IMPORTED_MODULE_0__["RailroadService"]; });




/***/ }),

/***/ "./src/app/railroad/_services/railroad.service.ts":
/*!********************************************************!*\
  !*** ./src/app/railroad/_services/railroad.service.ts ***!
  \********************************************************/
/*! exports provided: RailroadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RailroadService", function() { return RailroadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let RailroadService = class RailroadService {
    constructor(http) {
        this.http = http;
        this.railroadList_Saved = [];
        this.railroadList_Show = true;
        this.railroadURL = '/api/railroad';
    }
    register(userData) {
        return this.http.post(`${this.railroadURL}`, userData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log(data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getRailroads() {
        return this.http.get(`${this.railroadURL}/getRailroads`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log(data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getRailroad(id) {
        return this.http.get(`${this.railroadURL}/getRailroad/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log(`Railroad ${id} Data: `, data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(err) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent)
            errorMessage = `Error: ${err.error.message}.`;
        else
            errorMessage = `Status Code: ${err.status}, Error: ${err.message}.`;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
RailroadService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RailroadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], RailroadService);



/***/ }),

/***/ "./src/app/railroad/railroad-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/railroad/railroad-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RailroadRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RailroadRoutingModule", function() { return RailroadRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _rrtable_rrtable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rrtable/rrtable.component */ "./src/app/railroad/rrtable/rrtable.component.ts");
/* harmony import */ var _rrdetails_rrdetails_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rrdetails/rrdetails.component */ "./src/app/railroad/rrdetails/rrdetails.component.ts");
/* harmony import */ var _shared_security_guards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/security/_guards */ "./src/app/shared/security/_guards/index.ts");
/* harmony import */ var _rrnew_rrnew_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rrnew/rrnew.component */ "./src/app/railroad/rrnew/rrnew.component.ts");







const routes = [
    {
        path: 'rrtable', component: _rrtable_rrtable_component__WEBPACK_IMPORTED_MODULE_3__["RrtableComponent"],
        canActivate: [_shared_security_guards__WEBPACK_IMPORTED_MODULE_5__["AuthCanActivateGuard"]],
        children: [
            {
                path: ':id',
                component: _rrdetails_rrdetails_component__WEBPACK_IMPORTED_MODULE_4__["RrdetailsComponent"],
                outlet: 'secondary'
            }
        ]
    },
    { path: 'rrnew', component: _rrnew_rrnew_component__WEBPACK_IMPORTED_MODULE_6__["RrnewComponent"] }
];
let RailroadRoutingModule = class RailroadRoutingModule {
};
RailroadRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], RailroadRoutingModule);



/***/ }),

/***/ "./src/app/railroad/railroad.module.ts":
/*!*********************************************!*\
  !*** ./src/app/railroad/railroad.module.ts ***!
  \*********************************************/
/*! exports provided: RailroadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RailroadModule", function() { return RailroadModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _railroad_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./railroad-routing.module */ "./src/app/railroad/railroad-routing.module.ts");
/* harmony import */ var _rrtable_rrtable_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rrtable/rrtable.component */ "./src/app/railroad/rrtable/rrtable.component.ts");
/* harmony import */ var _rrdetails_rrdetails_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rrdetails/rrdetails.component */ "./src/app/railroad/rrdetails/rrdetails.component.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_services */ "./src/app/railroad/_services/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _rrnew_rrnew_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rrnew/rrnew.component */ "./src/app/railroad/rrnew/rrnew.component.ts");










let RailroadModule = class RailroadModule {
};
RailroadModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _rrtable_rrtable_component__WEBPACK_IMPORTED_MODULE_4__["RrtableComponent"],
            _rrdetails_rrdetails_component__WEBPACK_IMPORTED_MODULE_5__["RrdetailsComponent"],
            _rrnew_rrnew_component__WEBPACK_IMPORTED_MODULE_9__["RrnewComponent"],
            _rrtable_rrtable_component__WEBPACK_IMPORTED_MODULE_4__["RrtableComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _railroad_routing_module__WEBPACK_IMPORTED_MODULE_3__["RailroadRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
        ],
        entryComponents: [
            _rrnew_rrnew_component__WEBPACK_IMPORTED_MODULE_9__["RrnewComponent"]
        ],
        providers: [
            _services__WEBPACK_IMPORTED_MODULE_6__["RailroadService"]
        ]
    })
], RailroadModule);



/***/ }),

/***/ "./src/app/railroad/rrdetails/rrdetails.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/railroad/rrdetails/rrdetails.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhaWxyb2FkL3JyZGV0YWlscy9ycmRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/railroad/rrdetails/rrdetails.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/railroad/rrdetails/rrdetails.component.ts ***!
  \***********************************************************/
/*! exports provided: RrdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RrdetailsComponent", function() { return RrdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/railroad/_services/index.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/_services */ "./src/app/shared/_services/index.ts");






let RrdetailsComponent = class RrdetailsComponent {
    constructor(cdr, route, router, railroadService, countiesService) {
        this.cdr = cdr;
        this.route = route;
        this.router = router;
        this.railroadService = railroadService;
        this.countiesService = countiesService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.cdr.detach();
    }
    check() {
        this.cdr.detectChanges();
    }
    ngOnInit() {
        this.subscription.add(this.route.paramMap.subscribe(paramMap => {
            this.id = +paramMap.get('id');
            this.subscription.add(this.railroadService.getRailroad(this.id).subscribe(railroad => {
                this.railroad = railroad;
                this.check();
            }, error => console.log(error)));
        }));
        this.subscription.add(this.countiesService.getAllCounties().subscribe((counties) => {
            this.counties = counties;
            this.check();
        }));
    }
    ngOnDestroy() {
        if (!this.subscription.closed)
            this.subscription.unsubscribe();
    }
    onSubmit() {
        console.log(this.railroad);
        //this.railroadService.register(this.railroad)
        //	.subscribe(data => {
        //		this.railroad = data;
        //		this.check();
        //	})
    }
};
RrdetailsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["RailroadService"] },
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_5__["CountiesService"] }
];
RrdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rrdetails',
        template: __webpack_require__(/*! raw-loader!./rrdetails.component.html */ "./node_modules/raw-loader/index.js!./src/app/railroad/rrdetails/rrdetails.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./rrdetails.component.scss */ "./src/app/railroad/rrdetails/rrdetails.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services__WEBPACK_IMPORTED_MODULE_4__["RailroadService"], _shared_services__WEBPACK_IMPORTED_MODULE_5__["CountiesService"]])
], RrdetailsComponent);



/***/ }),

/***/ "./src/app/railroad/rrnew/rrnew.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/railroad/rrnew/rrnew.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhaWxyb2FkL3JybmV3L3JybmV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/railroad/rrnew/rrnew.component.ts":
/*!***************************************************!*\
  !*** ./src/app/railroad/rrnew/rrnew.component.ts ***!
  \***************************************************/
/*! exports provided: RrnewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RrnewComponent", function() { return RrnewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/railroad/_services/index.ts");



let RrnewComponent = class RrnewComponent {
    constructor(cdr, railroadService) {
        this.cdr = cdr;
        this.railroadService = railroadService;
        this.cdr.detach();
    }
    check() {
        this.cdr.detectChanges();
    }
    ngOnInit() {
        this.railroad = {};
        this.check();
    }
    onSubmit() {
        console.log(this.railroad);
        //this.railroadService.register(this.railroad)
        //    .subscribe(data => {
        //        this.railroad = data;
        //        this.check();
        //    })
    }
};
RrnewComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["RailroadService"] }
];
RrnewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rrnew',
        template: __webpack_require__(/*! raw-loader!./rrnew.component.html */ "./node_modules/raw-loader/index.js!./src/app/railroad/rrnew/rrnew.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./rrnew.component.scss */ "./src/app/railroad/rrnew/rrnew.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _services__WEBPACK_IMPORTED_MODULE_2__["RailroadService"]])
], RrnewComponent);



/***/ }),

/***/ "./src/app/railroad/rrtable/rrtable.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/railroad/rrtable/rrtable.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhaWxyb2FkL3JydGFibGUvcnJ0YWJsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/railroad/rrtable/rrtable.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/railroad/rrtable/rrtable.component.ts ***!
  \*******************************************************/
/*! exports provided: RrtableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RrtableComponent", function() { return RrtableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/railroad/_services/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_modal_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/modal/_services */ "./src/app/shared/modal/_services/index.ts");
/* harmony import */ var _rrnew_rrnew_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rrnew/rrnew.component */ "./src/app/railroad/rrnew/rrnew.component.ts");







let RrtableComponent = class RrtableComponent {
    constructor(cdr, railroadService, modalService) {
        this.cdr = cdr;
        this.railroadService = railroadService;
        this.modalService = modalService;
        this.filteredRailroads = [];
        this.pagedRailroads = [];
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.refreshData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.cdr.detach();
    }
    get listFilter() {
        return this._listFilter; //Avoid manipulating the data in the getter, formatting/etc. should be done with pipes.
    }
    set listFilter(value) {
        this._listFilter = value;
        this.filteredRailroads = this._listFilter ? this.performFilter(this.listFilter) : this.railroads;
        this.check();
    }
    check() {
        this.cdr.detectChanges();
    }
    ngOnInit() {
        this.showRailroads =
            this.railroadService.railroadList_Show;
        this.filteredRailroads = this.railroads =
            this.railroadService.railroadList_Saved;
        this.check();
        this.subscription.add(this.refreshData.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.railroadService.getRailroads())).subscribe(railroads => {
            this.filteredRailroads = this.railroads =
                railroads;
            this.check();
        }, error => console.log(error)));
    }
    ngOnDestroy() {
        this.railroadService.railroadList_Show = this.showRailroads;
        this.railroadService.railroadList_Saved = this.railroads;
        if (!this.subscription.closed)
            this.subscription.unsubscribe();
    }
    onChangePage(pageItems) {
        this.pagedRailroads = pageItems;
        this.check();
    }
    trackById(index, railroad) {
        if (!railroad)
            return null;
        return railroad.rrA_ID;
    }
    performFilter(filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.railroads.filter((railroad) => railroad.rrA_RR_COMPANY_NAME.toLocaleLowerCase().indexOf(filterBy) !== -1);
        this.check();
    }
    toggleRailroads() {
        this.showRailroads = !this.showRailroads;
        this.check();
    }
    refreshRailroads() {
        this.refreshData.next();
    }
    addRailroad() {
        this.modalService.show(_rrnew_rrnew_component__WEBPACK_IMPORTED_MODULE_6__["RrnewComponent"]);
    }
};
RrtableComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["RailroadService"] },
    { type: _shared_modal_services__WEBPACK_IMPORTED_MODULE_5__["ModalService"] }
];
RrtableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rrtable',
        template: __webpack_require__(/*! raw-loader!./rrtable.component.html */ "./node_modules/raw-loader/index.js!./src/app/railroad/rrtable/rrtable.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./rrtable.component.scss */ "./src/app/railroad/rrtable/rrtable.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _services__WEBPACK_IMPORTED_MODULE_2__["RailroadService"], _shared_modal_services__WEBPACK_IMPORTED_MODULE_5__["ModalService"]])
], RrtableComponent);



/***/ }),

/***/ "./src/app/shared/_pipes/convert-to-boolean.pipe.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/_pipes/convert-to-boolean.pipe.ts ***!
  \**********************************************************/
/*! exports provided: ConvertToBoolean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertToBoolean", function() { return ConvertToBoolean; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ConvertToBoolean = class ConvertToBoolean {
    transform(value, characterTrue) {
        return value == characterTrue ? true : false;
    }
};
ConvertToBoolean = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'convertToBoolean'
    })
], ConvertToBoolean);



/***/ }),

/***/ "./src/app/shared/_pipes/index.ts":
/*!****************************************!*\
  !*** ./src/app/shared/_pipes/index.ts ***!
  \****************************************/
/*! exports provided: ConvertToBoolean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _convert_to_boolean_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convert-to-boolean.pipe */ "./src/app/shared/_pipes/convert-to-boolean.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConvertToBoolean", function() { return _convert_to_boolean_pipe__WEBPACK_IMPORTED_MODULE_0__["ConvertToBoolean"]; });




/***/ }),

/***/ "./src/app/shared/_services/counties.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/_services/counties.service.ts ***!
  \******************************************************/
/*! exports provided: CountiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountiesService", function() { return CountiesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let CountiesService = class CountiesService {
    constructor(http) {
        this.http = http;
        this._url = '/api/County/GetAllCounties';
    }
    getAllCounties() {
        return this.http.get(this._url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log(data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(err) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent)
            errorMessage = `Error: ${err.error.message}.`;
        else
            errorMessage = `Status Code: ${err.status}, Error: ${err.message}.`;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
CountiesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CountiesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root' // Singleton
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], CountiesService);



/***/ }),

/***/ "./src/app/shared/_services/ct-agents.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/_services/ct-agents.service.ts ***!
  \*******************************************************/
/*! exports provided: CTAgentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CTAgentsService", function() { return CTAgentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let CTAgentsService = class CTAgentsService {
    constructor(http) {
        this.http = http;
        this._url = '/api/cTAgents/GetAllCTAgents';
    }
    getAllCTAgents() {
        return this.http.get(this._url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log(data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(err) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent)
            errorMessage = `Error: ${err.error.message}.`;
        else
            errorMessage = `Status Code: ${err.status}, Error: ${err.message}.`;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
CTAgentsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CTAgentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], CTAgentsService);



/***/ }),

/***/ "./src/app/shared/_services/dom.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/_services/dom.service.ts ***!
  \*************************************************/
/*! exports provided: DOMService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMService", function() { return DOMService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DOMService = class DOMService {
    constructor(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    appendComponentTo(parentId, child, childConfig) {
        const childComponentRef = this.componentFactoryResolver.resolveComponentFactory(child).create(this.injector); //Component Reference from Component
        Object.assign(childComponentRef.instance, childConfig);
        this.appRef.attachView(childComponentRef.hostView);
        const childDomElem = childComponentRef.hostView.rootNodes[0];
        document.getElementById(parentId).appendChild(childDomElem);
        return childComponentRef;
    }
    removeComponent(componentRef) {
        this.appRef.detachView(componentRef.hostView);
        componentRef.destroy();
    }
};
DOMService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
DOMService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root' //Singleton
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], DOMService);



/***/ }),

/***/ "./src/app/shared/_services/index.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/_services/index.ts ***!
  \*******************************************/
/*! exports provided: DOMService, CountiesService, StaffService, SystemCodesService, CTAgentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.service */ "./src/app/shared/_services/dom.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DOMService", function() { return _dom_service__WEBPACK_IMPORTED_MODULE_0__["DOMService"]; });

/* harmony import */ var _counties_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counties.service */ "./src/app/shared/_services/counties.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CountiesService", function() { return _counties_service__WEBPACK_IMPORTED_MODULE_1__["CountiesService"]; });

/* harmony import */ var _staff_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./staff.service */ "./src/app/shared/_services/staff.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaffService", function() { return _staff_service__WEBPACK_IMPORTED_MODULE_2__["StaffService"]; });

/* harmony import */ var _system_codes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./system-codes.service */ "./src/app/shared/_services/system-codes.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SystemCodesService", function() { return _system_codes_service__WEBPACK_IMPORTED_MODULE_3__["SystemCodesService"]; });

/* harmony import */ var _ct_agents_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ct-agents.service */ "./src/app/shared/_services/ct-agents.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CTAgentsService", function() { return _ct_agents_service__WEBPACK_IMPORTED_MODULE_4__["CTAgentsService"]; });








/***/ }),

/***/ "./src/app/shared/_services/staff.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/_services/staff.service.ts ***!
  \***************************************************/
/*! exports provided: StaffService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffService", function() { return StaffService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let StaffService = class StaffService {
    constructor(http) {
        this.http = http;
        this._url = '/api/staff/GetAllStaff';
    }
    getAllStaff() {
        return this.http.get(this._url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log(data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(err) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent)
            errorMessage = `Error: ${err.error.message}.`;
        else
            errorMessage = `Status Code: ${err.status}, Error: ${err.message}.`;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
StaffService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
StaffService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], StaffService);



/***/ }),

/***/ "./src/app/shared/_services/system-codes.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/_services/system-codes.service.ts ***!
  \**********************************************************/
/*! exports provided: SystemCodesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemCodesService", function() { return SystemCodesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let SystemCodesService = class SystemCodesService {
    constructor(http) {
        this.http = http;
        this._url = '/api/systemCodes/GetAllSystemCodes';
    }
    getAllSystemCodes() {
        return this.http.get(this._url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log(data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(err) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent)
            errorMessage = `Error: ${err.error.message}.`;
        else
            errorMessage = `Status Code: ${err.status}, Error: ${err.message}.`;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
SystemCodesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SystemCodesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], SystemCodesService);



/***/ }),

/***/ "./src/app/shared/modal/_services/index.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/modal/_services/index.ts ***!
  \*************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.service */ "./src/app/shared/modal/_services/modal.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return _modal_service__WEBPACK_IMPORTED_MODULE_0__["ModalService"]; });




/***/ }),

/***/ "./src/app/shared/modal/_services/modal.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/modal/_services/modal.service.ts ***!
  \*********************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services */ "./src/app/shared/_services/index.ts");



let ModalService = class ModalService {
    constructor(domService) {
        this.domService = domService;
        this.modal_added = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true); //Async; Doesn't need to wait
        this.modal_removing = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](false); //Sync; Let the subscriber act first
        this.modalContentElementId = 'modal-content';
    }
    show(component, isStatic, isFullPage, config) {
        this.modalComponentRef = this.domService.appendComponentTo(this.modalContentElementId, component, config);
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
        this.modal_added.emit({
            isStatic: isStatic,
            isFullPage: isFullPage
        });
    }
    hide() {
        this.modal_removing.emit();
        this.domService.removeComponent(this.modalComponentRef);
        document.getElementsByTagName('body')[0].style.overflow = 'auto';
    }
};
ModalService.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["DOMService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], ModalService.prototype, "modal_added", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], ModalService.prototype, "modal_removing", void 0);
ModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root' //Singleton
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["DOMService"]])
], ModalService);



/***/ }),

/***/ "./src/app/shared/modal/modal.component.scss":
/*!***************************************************!*\
  !*** ./src/app/shared/modal/modal.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#modal {\n  position: fixed;\n  display: none;\n  background-color: rgba(0, 0, 0, 0.32);\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 9999;\n}\n#modal .modal-dialog {\n  pointer-events: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n#modal .modal-dialog .modal-content {\n  pointer-events: auto;\n  overflow: auto;\n  max-width: 100%;\n  max-height: 100%;\n}\n#modal .modal-dialog .modal-content.modal-full {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZGFsL0M6XFxVc2Vyc1xcQ2FpdC5TaWRlbmVyXFxzb3VyY2VcXHJlcG9zXFxSYWlkUHJvamVjdFxcQ2xpZW50QXBwL3NyY1xcYXBwXFxzaGFyZWRcXG1vZGFsXFxtb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0FDQ0Y7QURBRTtFQUNFLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRUo7QURESTtFQUNFLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0dOO0FERk07RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0lSIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzIpO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDk5OTk7XG4gIC5tb2RhbC1kaWFsb2cge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAubW9kYWwtY29udGVudCB7XG4gICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICYubW9kYWwtZnVsbCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XHJcbiIsIiNtb2RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMyKTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiA5OTk5O1xufVxuI21vZGFsIC5tb2RhbC1kaWFsb2cge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4jbW9kYWwgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudCB7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuI21vZGFsIC5tb2RhbC1kaWFsb2cgLm1vZGFsLWNvbnRlbnQubW9kYWwtZnVsbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/modal/modal.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/modal/modal.component.ts ***!
  \*************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services */ "./src/app/shared/modal/_services/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let ModalComponent = class ModalComponent {
    constructor(cdr, modalService, elementRef) {
        this.cdr = cdr;
        this.modalService = modalService;
        this.elementRef = elementRef;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.cdr.detach();
    }
    check() {
        this.cdr.detectChanges();
    }
    ngOnInit() {
        this.subscription.add(this.modalService.modal_added.subscribe((config) => {
            this.isStatic = config.isStatic || false;
            this.isFullPage = config.isFullPage || false;
            this.check();
            this.show();
        }));
        this.subscription.add(this.modalService.modal_removing.subscribe(() => this.hide()));
    }
    ngAfterViewInit() {
        this.elementRef.nativeElement.querySelector('.modal-close').addEventListener('click', this.closeModal.bind(this));
    }
    ngOnDestroy() {
        if (!this.subscription.closed)
            this.subscription.unsubscribe();
    }
    closeModal(event) {
        if (event.target !== event.currentTarget || (event.target.id === 'modal' && this.isStatic))
            return;
        this.modalService.hide();
    }
    show() {
        let nativeElement = this.elementRef.nativeElement.querySelector('#modal');
        //Animations to FadeIn?
        nativeElement.style.display = 'block';
    }
    hide() {
        let nativeElement = this.elementRef.nativeElement.querySelector('#modal');
        //Animations to FadeOut?
        nativeElement.style.display = 'none';
    }
};
ModalComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["ModalService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal',
        template: __webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/modal/modal.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./modal.component.scss */ "./src/app/shared/modal/modal.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _services__WEBPACK_IMPORTED_MODULE_2__["ModalService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], ModalComponent);



/***/ }),

/***/ "./src/app/shared/pagination/_services/index.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/pagination/_services/index.ts ***!
  \******************************************************/
/*! exports provided: PaginatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _paginator_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paginator.service */ "./src/app/shared/pagination/_services/paginator.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginatorService", function() { return _paginator_service__WEBPACK_IMPORTED_MODULE_0__["PaginatorService"]; });




/***/ }),

/***/ "./src/app/shared/pagination/_services/paginator.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/pagination/_services/paginator.service.ts ***!
  \******************************************************************/
/*! exports provided: PaginatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorService", function() { return PaginatorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PaginatorService = class PaginatorService {
    paginate(totalItems, currentPage, pageSize, maxPages) {
        let totalPages = Math.ceil(totalItems / pageSize), startPage, endPage;
        if (currentPage < 1)
            currentPage = 1;
        else if (currentPage > totalPages)
            currentPage = totalPages;
        if (totalPages <= maxPages) {
            startPage = 1;
            endPage = totalPages;
        }
        else {
            let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2), maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
            if (currentPage <= maxPagesBeforeCurrentPage) {
                startPage = 1;
                endPage = maxPages;
            }
            else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
                startPage = totalPages - maxPages + 1;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - maxPagesBeforeCurrentPage;
                endPage = currentPage + maxPagesAfterCurrentPage;
            }
        }
        let startIndex = (currentPage - 1) * pageSize, endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1), pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
};
PaginatorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root' //Singleton
    })
], PaginatorService);



/***/ }),

/***/ "./src/app/shared/pagination/pagination.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/shared/pagination/pagination.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pagination {\n  display: flex;\n  list-style: none;\n  justify-content: center;\n  flex-wrap: wrap;\n  padding: 0.25rem;\n  margin: 0;\n}\n.pagination li a {\n  margin-left: -1px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3BhZ2luYXRpb24vQzpcXFVzZXJzXFxDYWl0LlNpZGVuZXJcXHNvdXJjZVxccmVwb3NcXFJhaWRQcm9qZWN0XFxDbGllbnRBcHAvc3JjXFxhcHBcXHNoYXJlZFxccGFnaW5hdGlvblxccGFnaW5hdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQ0NGO0FEQ0k7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnaW5hdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmc6IDAuMjVyZW07XG4gIG1hcmdpbjogMDtcbiAgbGkge1xuICAgIGEge1xuICAgICAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG59XHJcbiIsIi5wYWdpbmF0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZzogMC4yNXJlbTtcbiAgbWFyZ2luOiAwO1xufVxuLnBhZ2luYXRpb24gbGkgYSB7XG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/pagination/pagination.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/pagination/pagination.component.ts ***!
  \***********************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services */ "./src/app/shared/pagination/_services/index.ts");



let PaginationComponent = class PaginationComponent {
    constructor(cdr, pagerService) {
        this.cdr = cdr;
        this.pagerService = pagerService;
        this.initialPage = 1;
        this.pageSize = 15;
        this.maxPages = 8;
        this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.pager = {};
    }
    check() {
        this.cdr.markForCheck(); //Utilize OnPush change detection on parent.
    }
    ngOnInit() {
        if (this.items && this.items.length)
            this.setPage(this.initialPage);
        this.check();
    }
    ngOnChanges(changes) {
        if (changes.items.currentValue !== changes.items.previousValue) {
            this.setPage(this.initialPage);
        }
        else
            this.check();
    }
    setPage(page) {
        this.pager = this.pagerService.paginate(this.items.length, page, this.pageSize, this.maxPages);
        var pageOfItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1);
        this.changePage.emit(pageOfItems);
        this.check();
    }
};
PaginationComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["PaginatorService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], PaginationComponent.prototype, "items", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PaginationComponent.prototype, "initialPage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PaginationComponent.prototype, "pageSize", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PaginationComponent.prototype, "maxPages", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PaginationComponent.prototype, "changePage", void 0);
PaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pagination',
        template: __webpack_require__(/*! raw-loader!./pagination.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/pagination/pagination.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./pagination.component.scss */ "./src/app/shared/pagination/pagination.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _services__WEBPACK_IMPORTED_MODULE_2__["PaginatorService"]])
], PaginationComponent);



/***/ }),

/***/ "./src/app/shared/projects/_guards/index.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/projects/_guards/index.ts ***!
  \**************************************************/
/*! exports provided: NoProjectCanActivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _no_project_can_activate_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./no-project.can-activate.guard */ "./src/app/shared/projects/_guards/no-project.can-activate.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoProjectCanActivateGuard", function() { return _no_project_can_activate_guard__WEBPACK_IMPORTED_MODULE_0__["NoProjectCanActivateGuard"]; });




/***/ }),

/***/ "./src/app/shared/projects/_guards/no-project.can-activate.guard.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/projects/_guards/no-project.can-activate.guard.ts ***!
  \**************************************************************************/
/*! exports provided: NoProjectCanActivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoProjectCanActivateGuard", function() { return NoProjectCanActivateGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/shared/projects/_services/index.ts");




let NoProjectCanActivateGuard = class NoProjectCanActivateGuard {
    constructor(router, projectService) {
        this.router = router;
        this.projectService = projectService;
    }
    canActivate(next, state) {
        if (this.projectService.projectID) {
            return false;
        }
        return true;
    }
};
NoProjectCanActivateGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"] }
];
NoProjectCanActivateGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root' //Singleton
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"]])
], NoProjectCanActivateGuard);



/***/ }),

/***/ "./src/app/shared/projects/_services/index.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/projects/_services/index.ts ***!
  \****************************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projects_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.service */ "./src/app/shared/projects/_services/projects.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return _projects_service__WEBPACK_IMPORTED_MODULE_0__["ProjectsService"]; });




/***/ }),

/***/ "./src/app/shared/projects/_services/projects.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/projects/_services/projects.service.ts ***!
  \***************************************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ProjectsService = class ProjectsService {
    constructor(http) {
        this.http = http;
        this.apiUrl = '/project';
    }
    getProject() {
        console.log(this.projectID);
        return this.http.get(`${this.apiUrl}/${this.projectID}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log(`Project ${this.projectID} Data: `, data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(err) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent)
            errorMessage = `Error: ${err.error.message}.`;
        else
            errorMessage = `Status Code: ${err.status}, Error: ${err.message}.`;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
ProjectsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProjectsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root' // Singleton
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ProjectsService);



/***/ }),

/***/ "./src/app/shared/projects/projects/projects.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/projects/projects/projects.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wcm9qZWN0cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/projects/projects/projects.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/projects/projects/projects.component.ts ***!
  \****************************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/shared/projects/_services/index.ts");



let ProjectsComponent = class ProjectsComponent {
    constructor(cdr, projectService) {
        this.cdr = cdr;
        this.projectService = projectService;
        this.cdr.detach();
    }
    check() {
        this.cdr.detectChanges();
    }
    ngOnInit() {
        this.projectService.getProject().subscribe((data) => {
            this.projects = data;
            this.check();
        });
    }
};
ProjectsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"] }
];
ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projects',
        template: __webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/projects/projects/projects.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/shared/projects/projects/projects.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _services__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"]])
], ProjectsComponent);



/***/ }),

/***/ "./src/app/shared/security/_guards/auth.can-activate.guard.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/security/_guards/auth.can-activate.guard.ts ***!
  \********************************************************************/
/*! exports provided: AuthCanActivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthCanActivateGuard", function() { return AuthCanActivateGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/shared/security/_services/auth.service.ts");




let AuthCanActivateGuard = class AuthCanActivateGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(next, state) {
        if (this.authService.isAuthenticated())
            return true;
        this.router.navigate(['account/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
};
AuthCanActivateGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AuthCanActivateGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root' //Singleton
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], AuthCanActivateGuard);



/***/ }),

/***/ "./src/app/shared/security/_guards/index.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/security/_guards/index.ts ***!
  \**************************************************/
/*! exports provided: AuthCanActivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_can_activate_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.can-activate.guard */ "./src/app/shared/security/_guards/auth.can-activate.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthCanActivateGuard", function() { return _auth_can_activate_guard__WEBPACK_IMPORTED_MODULE_0__["AuthCanActivateGuard"]; });




/***/ }),

/***/ "./src/app/shared/security/_interceptor/index.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/security/_interceptor/index.ts ***!
  \*******************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _token_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token.interceptor */ "./src/app/shared/security/_interceptor/token.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return _token_interceptor__WEBPACK_IMPORTED_MODULE_0__["TokenInterceptor"]; });




/***/ }),

/***/ "./src/app/shared/security/_interceptor/token.interceptor.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/security/_interceptor/token.interceptor.ts ***!
  \*******************************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _security_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../security/_services/auth.service */ "./src/app/shared/security/_services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let TokenInterceptor = class TokenInterceptor {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    intercept(request, next) {
        const exclude = "api/Token/RequestToken", storageItem = this.authService.getStorageItem(), authReq = request.clone({ setHeaders: { 'Authorization': `Bearer ${storageItem && storageItem.token}` } });
        if (request.url.search(exclude) !== -1)
            return next.handle(request);
        return next.handle(authReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
            if (error.status === 401) {
                this.authService.logout();
                this.router.navigate(['account/login']);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
TokenInterceptor.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _security_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root' //Singleton
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _security_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], TokenInterceptor);



/***/ }),

/***/ "./src/app/shared/security/_services/auth.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/security/_services/auth.service.ts ***!
  \***********************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");






const jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"]();
let AuthService = class AuthService {
    constructor(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.apiUrl = 'api/Token';
        this.localStorageName = "userStore";
    }
    getStorageItem() {
        return JSON.parse(localStorage.getItem(this.localStorageName)); //Retreive from storage as a JSON object.
    }
    getTokenValue(key) {
        const storageItem = this.getStorageItem();
        return jwtHelper.decodeToken(storageItem.token)[key];
    }
    isAuthenticated() {
        const storageItem = this.getStorageItem();
        return storageItem ? !jwtHelper.isTokenExpired(storageItem.token) : false; //Verify that token exists and isn't expired.
    }
    login(args = undefined) {
        if (args) {
            return this.http.post(`${this.baseUrl}${this.apiUrl}/RequestToken`, {
                username: args.username,
                password: args.password
            }, { observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
                if (response.body.token) {
                    localStorage.setItem(this.localStorageName, JSON.stringify({
                        username: args.username,
                        token: response.body.token //IMPORTANT; Always store the token itself.
                    }));
                    return true;
                }
                return false;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
        return this.http.get(`${this.baseUrl}${this.apiUrl}/RequestToken`, { observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            if (response.body.token) {
                localStorage.setItem(this.localStorageName, JSON.stringify({
                    token: response.body.token //IMPORTANT; Always store the token itself.
                }));
                return true;
            }
            return false;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    logout() {
        localStorage.removeItem(this.localStorageName); //Removes token, effectivly logging the user out.
    }
    handleError(err) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent)
            errorMessage = `Error: ${err.error.message}.`;
        else
            errorMessage = `Status Code: ${err.status}, Error: ${err.message}.`;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['BASE_URL',] }] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root' //Singleton
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('BASE_URL')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], String])
], AuthService);



/***/ }),

/***/ "./src/app/shared/security/_services/index.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/security/_services/index.ts ***!
  \****************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/security/_services/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]; });




/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_pipes */ "./src/app/shared/_pipes/index.ts");
/* harmony import */ var _weather_weather_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weather/weather.component */ "./src/app/shared/weather/weather.component.ts");
/* harmony import */ var _time_time_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./time/time.component */ "./src/app/shared/time/time.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/shared/modal/modal.component.ts");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pagination/pagination.component */ "./src/app/shared/pagination/pagination.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_services */ "./src/app/shared/_services/index.ts");
/* harmony import */ var _modal_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modal/_services */ "./src/app/shared/modal/_services/index.ts");
/* harmony import */ var _pagination_services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pagination/_services */ "./src/app/shared/pagination/_services/index.ts");
/* harmony import */ var _security_services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./security/_services/auth.service */ "./src/app/shared/security/_services/auth.service.ts");
/* harmony import */ var _security_guards_auth_can_activate_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./security/_guards/auth.can-activate.guard */ "./src/app/shared/security/_guards/auth.can-activate.guard.ts");
/* harmony import */ var _security_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./security/_interceptor */ "./src/app/shared/security/_interceptor/index.ts");
/* harmony import */ var _weather_services__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./weather/_services */ "./src/app/shared/weather/_services/index.ts");
/* harmony import */ var _projects_projects_projects_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./projects/projects/projects.component */ "./src/app/shared/projects/projects/projects.component.ts");
/* harmony import */ var _projects_guards__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./projects/_guards */ "./src/app/shared/projects/_guards/index.ts");
/* harmony import */ var _services_counties_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_services/counties.service */ "./src/app/shared/_services/counties.service.ts");
/* harmony import */ var _services_staff_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_services/staff.service */ "./src/app/shared/_services/staff.service.ts");
/* harmony import */ var _services_system_codes_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_services/system-codes.service */ "./src/app/shared/_services/system-codes.service.ts");






















let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _pipes__WEBPACK_IMPORTED_MODULE_4__["ConvertToBoolean"],
            _weather_weather_component__WEBPACK_IMPORTED_MODULE_5__["WeatherComponent"],
            _time_time_component__WEBPACK_IMPORTED_MODULE_6__["TimeComponent"],
            _modal_modal_component__WEBPACK_IMPORTED_MODULE_7__["ModalComponent"],
            _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__["PaginationComponent"],
            _projects_projects_projects_component__WEBPACK_IMPORTED_MODULE_17__["ProjectsComponent"],
        ],
        providers: [
            _services_counties_service__WEBPACK_IMPORTED_MODULE_19__["CountiesService"],
            _services__WEBPACK_IMPORTED_MODULE_10__["DOMService"],
            _modal_services__WEBPACK_IMPORTED_MODULE_11__["ModalService"],
            _pagination_services__WEBPACK_IMPORTED_MODULE_12__["PaginatorService"],
            _security_services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"],
            _security_guards_auth_can_activate_guard__WEBPACK_IMPORTED_MODULE_14__["AuthCanActivateGuard"],
            _projects_guards__WEBPACK_IMPORTED_MODULE_18__["NoProjectCanActivateGuard"],
            _services_staff_service__WEBPACK_IMPORTED_MODULE_20__["StaffService"],
            _services_system_codes_service__WEBPACK_IMPORTED_MODULE_21__["SystemCodesService"],
            _security_interceptor__WEBPACK_IMPORTED_MODULE_15__["TokenInterceptor"],
            _weather_services__WEBPACK_IMPORTED_MODULE_16__["WeatherService"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
        ],
        exports: [
            _pipes__WEBPACK_IMPORTED_MODULE_4__["ConvertToBoolean"],
            _weather_weather_component__WEBPACK_IMPORTED_MODULE_5__["WeatherComponent"],
            _time_time_component__WEBPACK_IMPORTED_MODULE_6__["TimeComponent"],
            _modal_modal_component__WEBPACK_IMPORTED_MODULE_7__["ModalComponent"],
            _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__["PaginationComponent"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/shared/time/time.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/time/time.component.ts ***!
  \***********************************************/
/*! exports provided: TimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeComponent", function() { return TimeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TimeComponent = class TimeComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.styles = {
            color: '#000' //Default Color Value
        };
        this.cdr.detach();
    }
    check() {
        this.cdr.detectChanges();
    }
    ngOnInit() {
        this.date = new Date();
        this.check();
        setInterval(() => {
            this.date = new Date();
            this.styles.color = `#${this.intToRGB(this.hashCode(this.date.toString()))}`;
            this.check();
        }, 10 * 1000);
    }
    hashCode(str) {
        var hash = 0;
        for (var i = 0; i < str.length; i++)
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        return hash;
    }
    intToRGB(i) {
        var c = (i & 0x00FFFFFF).toString(16).toUpperCase();
        return "00000".substring(0, 6 - c.length) + c;
    }
};
TimeComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
TimeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-time',
        template: __webpack_require__(/*! raw-loader!./time.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/time/time.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], TimeComponent);



/***/ }),

/***/ "./src/app/shared/weather/_services/index.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/weather/_services/index.ts ***!
  \***************************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather.service */ "./src/app/shared/weather/_services/weather.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return _weather_service__WEBPACK_IMPORTED_MODULE_0__["WeatherService"]; });




/***/ }),

/***/ "./src/app/shared/weather/_services/weather.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/weather/_services/weather.service.ts ***!
  \*************************************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let WeatherService = class WeatherService {
    constructor(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.apiUrl = 'api/SampleData/WeatherForecasts';
    }
    getWeather() {
        return this.http.get(`${this.baseUrl}${this.apiUrl}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log('Weather Data:', data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(err) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent)
            errorMessage = `Error: ${err.error.message}.`;
        else
            errorMessage = `Status Code: ${err.status}, Error: ${err.message}.`;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
WeatherService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['BASE_URL',] }] }
];
WeatherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root' //Singleton
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('BASE_URL')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String])
], WeatherService);



/***/ }),

/***/ "./src/app/shared/weather/weather.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/weather/weather.component.ts ***!
  \*****************************************************/
/*! exports provided: WeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherComponent", function() { return WeatherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services */ "./src/app/shared/weather/_services/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let WeatherComponent = class WeatherComponent {
    constructor(cdr, weatherService) {
        this.cdr = cdr;
        this.weatherService = weatherService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.cdr.detach();
    }
    check() {
        this.cdr.detectChanges();
    }
    ngOnInit() {
        this.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(10000).pipe(//Refresh triggered by the interval observable.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(0), //Get data initially
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.weatherService.getWeather())).subscribe(forecasts => {
            this.forecasts = forecasts;
            this.lastUpdated = new Date();
            this.check();
        }, error => console.log(error)));
    }
    ngOnDestroy() {
        if (!this.subscription.closed) //CYA; Always unsubscribe on destroy event to prevent memory leaks.
            this.subscription.unsubscribe();
    }
};
WeatherComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["WeatherService"] }
];
WeatherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-weather',
        template: __webpack_require__(/*! raw-loader!./weather.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/weather/weather.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _services__WEBPACK_IMPORTED_MODULE_2__["WeatherService"]])
], WeatherComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone-error */ "./node_modules/zone.js/dist/zone-error.js");
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__);
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
 // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Cait.Sidener\source\repos\RaidProject\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map