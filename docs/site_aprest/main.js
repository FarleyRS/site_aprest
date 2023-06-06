"use strict";
(self["webpackChunksite_aprest"] = self["webpackChunksite_aprest"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 8263);
/* harmony import */ var _components_pesquisa_pesquisa_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pesquisa/pesquisa.component */ 442);
/* harmony import */ var _components_load_load_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/load/load.component */ 1099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);






const routes = [{
  path: '',
  component: _components_load_load_component__WEBPACK_IMPORTED_MODULE_2__.LoadComponent
}, {
  path: "home",
  component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: "pesquisa",
  component: _components_pesquisa_pesquisa_component__WEBPACK_IMPORTED_MODULE_1__.PesquisaComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 6679);


class AppComponent {
  constructor() {
    this.title = 'site_aprest';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ 8263);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 3252);
/* harmony import */ var _components_pesquisa_pesquisa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pesquisa/pesquisa.component */ 442);
/* harmony import */ var _components_load_load_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/load/load.component */ 1099);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 3677);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 9240);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 6839);










class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__.NavbarComponent, _components_pesquisa_pesquisa_component__WEBPACK_IMPORTED_MODULE_4__.PesquisaComponent, _components_load_load_component__WEBPACK_IMPORTED_MODULE_5__.LoadComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule]
  });
})();

/***/ }),

/***/ 8263:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../navbar/navbar.component */ 3252);


class HomeComponent {}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)();
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 3,
  vars: 0,
  consts: [[1, "bloco"], ["src", "../../../assets/construction.svg", "alt", ""]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent],
  styles: [".bloco[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    min-height: calc(100% - 70px);\r\n    display: flex;\r\n    background: #363636;\r\n}\r\n\r\n.bloco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n    margin: 0 auto;\r\n    width: auto;\r\n    height: auto;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvY28ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSA3MHB4KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzYzNjM2O1xyXG59XHJcblxyXG4uYmxvY28gaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 1099:
/*!***************************************************!*\
  !*** ./src/app/components/load/load.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadComponent": () => (/* binding */ LoadComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 3677);



class LoadComponent {
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {
    var element = document.getElementById("butao");
    element.style.visibility = "hidden";
    setTimeout(() => {
      element.style.visibility = "visible";
    }, 3000);
  }
  mudarImg() {
    var element = document.getElementById("butao");
    element.style.visibility = "hidden";
    var img = document.getElementById("img_efeito");
    img.setAttribute('src', '../../../assets/hackeado.gif');
    navigator.vibrate([500, 200, 800, 200, 800, 200, 500]);
    setTimeout(() => {
      this.router.navigate(['pesquisa']);
      console.log("Vibrando");
    }, 5000);
  }
}
LoadComponent.ɵfac = function LoadComponent_Factory(t) {
  return new (t || LoadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
LoadComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LoadComponent,
  selectors: [["app-load"]],
  decls: 5,
  vars: 0,
  consts: [[1, "fundo"], [1, "img_carregar"], ["id", "img_efeito", "src", "../../../assets/giphy.gif"], ["id", "butao", "mat-button", "", 3, "click"]],
  template: function LoadComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoadComponent_Template_button_click_3_listener() {
        return ctx.mudarImg();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Iniciar");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton],
  styles: [".fundo[_ngcontent-%COMP%]{\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background-color: rgb(0, 0, 0);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n}\r\n.img_carregar[_ngcontent-%COMP%]{\r\n    height: 70vh;\r\n    width: 70vw;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.img_carregar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    height: 300px;\r\n    width:auto;\r\n}\r\n\r\n.fundo[_ngcontent-%COMP%]   #butao[_ngcontent-%COMP%]{\r\n    color: white;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sb2FkL2xvYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osOEJBQThCO0lBQzlCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIi5mdW5kb3tcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbn1cclxuLmltZ19jYXJyZWdhcntcclxuICAgIGhlaWdodDogNzB2aDtcclxuICAgIHdpZHRoOiA3MHZ3O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmltZ19jYXJyZWdhciBpbWd7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgd2lkdGg6YXV0bztcclxufVxyXG5cclxuLmZ1bmRvICNidXRhb3tcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 3252:
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 6679);


class NavbarComponent {
  ngOnInit() {
    (function ($) {
      $(function () {
        // If a link has a dropdown, add sub menu toggle.
        $('nav ul li a:not(:only-child)').click(function (e) {
          $(this).siblings('.nav-dropdown').toggle();
          // Close one dropdown when selecting another
          $('.nav-dropdown').not($(this).siblings()).hide();
          e.stopPropagation();
        });
        // Clicking away from dropdown will remove the dropdown class
        $('html').click(function () {
          $('.nav-dropdown').hide();
        });
        // Toggle open and close nav styles on click
        $('#nav-toggle').click(function () {
          $('nav ul').slideToggle();
        });
        // Hamburger to X toggle
        $('#nav-toggle').on('click', function () {
          this.classList.toggle('active');
        });
      }); // end DOM ready
    })(jQuery); // end jQuery
  }
}

NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
  return new (t || NavbarComponent)();
};
NavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NavbarComponent,
  selectors: [["app-navbar"]],
  decls: 19,
  vars: 0,
  consts: [[1, "navigation"], [1, "nav-container"], [1, "brand"], ["href", "#!"], [1, "nav"], [1, "nav-mobile"], ["id", "nav-toggle"], [1, "nav-list"], ["routerLink", "home"], ["routerLink", "pesquisa"]],
  template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Logo");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav", 4)(6, "div", 5)(7, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7)(10, "li")(11, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Inicio");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li")(14, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Pesquisa");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li")(17, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Contato");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: [".navigation[_ngcontent-%COMP%] {\r\n    height: 70px;\r\n    background: #262626;\r\n}\r\n\r\n.brand[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    padding-left: 20px;\r\n    float: left;\r\n    line-height: 70px;\r\n    text-transform: uppercase;\r\n    font-size: 1.4em;\r\n}\r\n\r\n.brand[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #ffffff;\r\n    text-decoration: none;\r\n}\r\n\r\n.nav-container[_ngcontent-%COMP%] {\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    float: left;\r\n    position: relative;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited {\r\n    display: block;\r\n    padding: 0 20px;\r\n    line-height: 70px;\r\n    background: #262626;\r\n    color: #ffffff;\r\n    text-decoration: none;\r\n\r\n    &:hover {\r\n        background: #2581DC;\r\n        color: #ffffff;\r\n    }\r\n\r\n    &:not(:only-child):after {\r\n        padding-left: 4px;\r\n        content: ' \u25BE';\r\n    }\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    min-width: 190px;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 15px;\r\n    line-height: 20px;\r\n}\r\n\r\nnav[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.nav-dropdown[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    display: none;\r\n    z-index: 1;\r\n    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n\r\n\r\n.nav-mobile[_ngcontent-%COMP%] {\r\n    display: none;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    background: #262626;\r\n    height: 70px;\r\n    width: 70px;\r\n}\r\n\r\n@media only screen and (max-width: 798px) {\r\n    .nav-mobile[_ngcontent-%COMP%] {\r\n        display: block;\r\n    }\r\n\r\n    .nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        display: none;\r\n        width: 100%;\r\n        text-align: center;\r\n    }\r\n\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        float: none;\r\n    }\r\n\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        padding: 15px;\r\n        line-height: 20px;\r\n    }\r\n\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        padding-left: 30px;\r\n    }\r\n\r\n    .nav[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        height: auto;\r\n        padding: 70px 0 0;\r\n    }\r\n\r\n    .nav-dropdown[_ngcontent-%COMP%] {\r\n        position: static;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 799px) {\r\n    .nav-list[_ngcontent-%COMP%] {\r\n        display: block !important;\r\n    }\r\n}\r\n\r\n#nav-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], span[_ngcontent-%COMP%]::before, span[_ngcontent-%COMP%]::after {\r\n    cursor: pointer;\r\n    border-radius: 1px;\r\n    height: 5px;\r\n    width: 35px;\r\n    background: #ffffff;\r\n    position: absolute;\r\n    display: block;\r\n    content: '';\r\n    transition: all 300ms ease-in-out;\r\n}\r\n\r\n#nav-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\r\n    bottom: -10px;\r\n}\r\n\r\n#nav-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before {\r\n    top: -10px;\r\n}\r\n\r\n#nav-toggle[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 18px;\r\n    top: 22px;\r\n    cursor: pointer;\r\n    padding: 10px 35px 16px 0px;\r\n\r\n    &.active span {\r\n        background-color: transparent;\r\n\r\n        &:before,\r\n        &:after {\r\n            top: 0;\r\n        }\r\n\r\n        &:before {\r\n            transform: rotate(45deg);\r\n        }\r\n\r\n        &:after {\r\n            transform: rotate(-45deg);\r\n        }\r\n    }\r\n}\r\n\r\narticle[_ngcontent-%COMP%] {\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n    padding: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxxQkFBcUI7O0lBRXJCO1FBQ0ksbUJBQW1CO1FBQ25CLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsYUFBYTtJQUNqQjtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFVBQVU7SUFDViwwQ0FBMEM7QUFDOUM7O0FBRUEsc0JBQXNCOztBQUV0QjtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7SUFDUixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixXQUFXO1FBQ1gsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksYUFBYTtRQUNiLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHlCQUF5QjtJQUM3QjtBQUNKOztBQUVBOzs7SUFHSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsV0FBVztJQUNYLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxlQUFlO0lBQ2YsMkJBQTJCOztJQUUzQjtRQUNJLDZCQUE2Qjs7UUFFN0I7O1lBRUksTUFBTTtRQUNWOztRQUVBO1lBQ0ksd0JBQXdCO1FBQzVCOztRQUVBO1lBQ0kseUJBQXlCO1FBQzdCO0lBQ0o7QUFDSjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsYUFBYTtBQUNqQiIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZpZ2F0aW9uIHtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIGJhY2tncm91bmQ6ICMyNjI2MjY7XHJcbn1cclxuXHJcbi5icmFuZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGxpbmUtaGVpZ2h0OiA3MHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbn1cclxuXHJcbi5icmFuZCBhIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4ubmF2LWNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG5uYXYgdWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbm5hdiB1bCBsaSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxubmF2IHVsIGxpIGEsXHJcbmE6dmlzaXRlZCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA3MHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzI2MjYyNjtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyNTgxREM7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoOm9ubHktY2hpbGQpOmFmdGVyIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDRweDtcclxuICAgICAgICBjb250ZW50OiAnIMOiwpbCvic7XHJcbiAgICB9XHJcbn1cclxuXHJcbm5hdiB1bCBsaSB1bCBsaSB7XHJcbiAgICBtaW4td2lkdGg6IDE5MHB4O1xyXG59XHJcblxyXG5uYXYgdWwgbGkgdWwgbGkgYSB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbm5hdiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5uYXYtZHJvcGRvd24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbn1cclxuXHJcbi8qIE1vYmlsZSBuYXZpZ2F0aW9uICovXHJcblxyXG4ubmF2LW1vYmlsZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjYyNjI2O1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzk4cHgpIHtcclxuICAgIC5uYXYtbW9iaWxlIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAubmF2IHVsIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBuYXYgdWwgbGkge1xyXG4gICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIG5hdiB1bCBsaSBhIHtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIG5hdiB1bCBsaSB1bCBsaSBhIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDcwcHggMCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXYtZHJvcGRvd24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc5OXB4KSB7XHJcbiAgICAubmF2LWxpc3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNuYXYtdG9nZ2xlIHNwYW4sXHJcbnNwYW46OmJlZm9yZSxcclxuc3Bhbjo6YWZ0ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4jbmF2LXRvZ2dsZSBzcGFuOmFmdGVyIHtcclxuICAgIGJvdHRvbTogLTEwcHg7XHJcbn1cclxuXHJcbiNuYXYtdG9nZ2xlIHNwYW46YmVmb3JlIHtcclxuICAgIHRvcDogLTEwcHg7XHJcbn1cclxuXHJcbiNuYXYtdG9nZ2xlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDE4cHg7XHJcbiAgICB0b3A6IDIycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDM1cHggMTZweCAwcHg7XHJcblxyXG4gICAgJi5hY3RpdmUgc3BhbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgICY6YmVmb3JlLFxyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuYXJ0aWNsZSB7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 442:
/*!***********************************************************!*\
  !*** ./src/app/components/pesquisa/pesquisa.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PesquisaComponent": () => (/* binding */ PesquisaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

class PesquisaComponent {}
PesquisaComponent.ɵfac = function PesquisaComponent_Factory(t) {
  return new (t || PesquisaComponent)();
};
PesquisaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PesquisaComponent,
  selectors: [["app-pesquisa"]],
  decls: 41,
  vars: 0,
  consts: [[1, "bloco"], [1, "container", "pai"], [1, "container", "filho"], ["action", "https://api.sheetmonkey.io/form/pPuCtaUoBt8vTwBBTTksGv", "method", "post", 1, "form"], [1, "form-group"], ["type", "text", "placeholder", "Nome", "required", "", 1, "form-control"], ["type", "text", "placeholder", "Sim ou N\u00E3o", "required", "", "name", "Quer ser volunt\u00E1rio?", 1, "form-control"], ["type", "text", "placeholder", "Springboot, Angular, Java, C++ ...", "name", "Skills", 1, "form-control"], ["type", "text", "placeholder", "Desenvolvimento de sites, aplicativos...", "name", "Servi\u00E7os", 1, "form-control"], ["type", "text", "placeholder", "SpaceX", "required", "", "name", "Nome da empresa", 1, "form-control"], ["type", "tel", "maxlength", "11", "required", "", "onkeypress", "$(this).mask('(00) 0 0000-0000')", "placeholder", "(00) 0 0000-0000", "name", "Contato", 1, "form-control"], ["id", "btnEntrar", "target", "_blank", "type", "submit", "value", "Submit", 1, "btn", "btn-secondary"]],
  template: function PesquisaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ol\u00E1, somos um grupo de alunos de SI e precisamos de voc\u00EA.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Estamos fundando uma empresa junior e queremos algumas opini\u00F5es dos alunos aqui do n\u00FAcleo.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Criamos um pequeno formul\u00E1rio de 5 perguntas para isso, n\u00E3o leva nem 3 minutos para responder todas.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Desde j\u00E1, agradecemos pela sua aten\u00E7\u00E3o.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2)(13, "form", 3)(14, "div", 4)(15, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Seu nome: *");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4)(19, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Voc\u00EA possui interesse em ser membro volunt\u00E1rio? *");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4)(23, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Caso responda sim para a pergunta anterior, quais s\u00E3o suas skills?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4)(27, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Na sua opini\u00E3o, que servi\u00E7o seria essencial que uma empresa de tecnologia ofertasse?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4)(31, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Se a empresa fosse sua, que nome daria para ela? *");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4)(35, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Telefone para contato: *");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 4)(39, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Enviar");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
  },
  styles: [".bloco[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    min-height: calc(100% - 70px);\r\n    display: flex;\r\n    background: #363636;\r\n}\r\n\r\n.pai[_ngcontent-%COMP%] {\r\n    max-width: 600px;\r\n}\r\n\r\n.filho[_ngcontent-%COMP%] {\r\n    max-width: 550px;\r\n    background: rgba(244, 253, 253, 0.801);\r\n    padding: 30px;\r\n    margin-top: 10px;\r\n    border-radius: 15px;\r\n    text-align: justify;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Lato';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: url(https://fonts.gstatic.com/s/lato/v24/S6uyw4BMUTPHjx4wXg.woff2) format('woff2');\r\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Latoo';\r\n    font-style: normal;\r\n    font-weight: 300;\r\n    src: url(https://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh7USSwiPGQ.woff2) format('woff2');\r\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n  }\r\n\r\nh2[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\r\n    font-family: 'Lato';\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n    font-family: 'Latoo';\r\n}\r\n\r\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button { \r\n    -webkit-appearance: none;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wZXNxdWlzYS9wZXNxdWlzYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNDQUFzQztJQUN0QyxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQix1RkFBdUY7SUFDdkYsaU1BQWlNO0FBQ3JNOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsMkZBQTJGO0lBQzNGLGlNQUFpTTtFQUNuTTs7QUFFRjtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHdCQUF3Qjs7QUFFNUIiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvY28ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSA3MHB4KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzYzNjM2O1xyXG59XHJcblxyXG4ucGFpIHtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbn1cclxuXHJcbi5maWxobyB7XHJcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDQsIDI1MywgMjUzLCAwLjgwMSk7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2xhdG8vdjI0L1M2dXl3NEJNVVRQSGp4NHdYZy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xyXG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzAzMDQsIFUrMDMwOCwgVSswMzI5LCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0xhdG9vJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbGF0by92MjQvUzZ1OXc0Qk1VVFBIaDdVU1N3aVBHUS53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xyXG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzAzMDQsIFUrMDMwOCwgVSswMzI5LCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcclxuICB9XHJcblxyXG5oMiwgcCB7XHJcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogJ0xhdG9vJztcclxufVxyXG5cclxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHsgXHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map