import.meta.env = {"VITE_AUTH0_CLIENT_ID": "i5lFAsOYxtinqYFCqHWDUfapGNZ76edL", "VITE_AUTH0_DOMAIN": "dev-cfckqel4dke5aogl.us.auth0.com", "BASE_URL": "/", "MODE": "development", "DEV": true, "PROD": false, "SSR": false};import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=b18384dd"; const _jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import "/src/index.css?t=1705420457675";
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=b18384dd"; const React = __vite__cjsImport2_react.__esModule ? __vite__cjsImport2_react.default : __vite__cjsImport2_react;
import __vite__cjsImport3_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=b18384dd"; const ReactDOM = __vite__cjsImport3_reactDom_client.__esModule ? __vite__cjsImport3_reactDom_client.default : __vite__cjsImport3_reactDom_client;
import App from "/src/App.jsx?t=1705420457675";
import { Provider } from "/node_modules/.vite/deps/react-redux.js?v=b18384dd";
import { store } from "/src/redux/store.js";
import { BrowserRouter } from "/node_modules/.vite/deps/react-router-dom.js?v=b18384dd";
import { Auth0Provider } from "/node_modules/.vite/deps/@auth0_auth0-react.js?v=b18384dd";
const { VITE_AUTH0_CLIENT_ID, VITE_AUTH0_DOMAIN } = import.meta.env;
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/ _jsxDEV(Auth0Provider, {
    domain: VITE_AUTH0_DOMAIN,
    clientId: VITE_AUTH0_CLIENT_ID,
    authorizationParams: {
        redirect_uri: window.location.origin
    },
    children: /*#__PURE__*/ _jsxDEV(Provider, {
        store: store,
        children: /*#__PURE__*/ _jsxDEV(React.StrictMode, {
            children: /*#__PURE__*/ _jsxDEV(BrowserRouter, {
                children: /*#__PURE__*/ _jsxDEV(App, {}, void 0, false, {
                    fileName: "C:/Users/Frango/Desktop/PF/TripInSight/client/src/main.jsx",
                    lineNumber: 22,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "C:/Users/Frango/Desktop/PF/TripInSight/client/src/main.jsx",
                lineNumber: 21,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "C:/Users/Frango/Desktop/PF/TripInSight/client/src/main.jsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "C:/Users/Frango/Desktop/PF/TripInSight/client/src/main.jsx",
        lineNumber: 19,
        columnNumber: 5
    }, this)
}, void 0, false, {
    fileName: "C:/Users/Frango/Desktop/PF/TripInSight/client/src/main.jsx",
    lineNumber: 14,
    columnNumber: 3
}, this));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XHJcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwLmpzeFwiO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuL3JlZHV4L3N0b3JlLmpzXCI7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBBdXRoMFByb3ZpZGVyIH0gZnJvbSBcIkBhdXRoMC9hdXRoMC1yZWFjdFwiO1xyXG5cclxuY29uc3Qge1ZJVEVfQVVUSDBfQ0xJRU5UX0lELCBWSVRFX0FVVEgwX0RPTUFJTn0gPSBpbXBvcnQubWV0YS5lbnZcclxuXHJcblxyXG5SZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSkucmVuZGVyKFxyXG4gIDxBdXRoMFByb3ZpZGVyXHJcbiAgICBkb21haW49e1ZJVEVfQVVUSDBfRE9NQUlOfVxyXG4gICAgY2xpZW50SWQ9e1ZJVEVfQVVUSDBfQ0xJRU5UX0lEfVxyXG4gICAgYXV0aG9yaXphdGlvblBhcmFtcz17eyByZWRpcmVjdF91cmk6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gfX1cclxuICA+XHJcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgPFJlYWN0LlN0cmljdE1vZGU+XHJcbiAgICAgICAgPEJyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgICA8QXBwIC8+XHJcbiAgICAgICAgPC9Ccm93c2VyUm91dGVyPlxyXG4gICAgICA8L1JlYWN0LlN0cmljdE1vZGU+XHJcbiAgICA8L1Byb3ZpZGVyPlxyXG4gIDwvQXV0aDBQcm92aWRlcj5cclxuKTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJBcHAiLCJQcm92aWRlciIsInN0b3JlIiwiQnJvd3NlclJvdXRlciIsIkF1dGgwUHJvdmlkZXIiLCJWSVRFX0FVVEgwX0NMSUVOVF9JRCIsIlZJVEVfQVVUSDBfRE9NQUlOIiwiZW52IiwiY3JlYXRlUm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiLCJkb21haW4iLCJjbGllbnRJZCIsImF1dGhvcml6YXRpb25QYXJhbXMiLCJyZWRpcmVjdF91cmkiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsIlN0cmljdE1vZGUiXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLGNBQWM7QUFDckIsT0FBT0EsV0FBVyxRQUFRO0FBQzFCLE9BQU9DLGNBQWMsbUJBQW1CO0FBQ3hDLE9BQU9DLFNBQVMsWUFBWTtBQUM1QixTQUFTQyxRQUFRLFFBQVEsY0FBYztBQUN2QyxTQUFTQyxLQUFLLFFBQVEsbUJBQW1CO0FBQ3pDLFNBQVNDLGFBQWEsUUFBUSxtQkFBbUI7QUFDakQsU0FBU0MsYUFBYSxRQUFRLHFCQUFxQjtBQUVuRCxNQUFNLEVBQUNDLG9CQUFvQixFQUFFQyxpQkFBaUIsRUFBQyxHQUFHLFlBQVlDLEdBQUc7QUFHakVSLFNBQVNTLFVBQVUsQ0FBQ0MsU0FBU0MsY0FBYyxDQUFDLFNBQVNDLE1BQU0sZUFDekQsUUFBQ1A7SUFDQ1EsUUFBUU47SUFDUk8sVUFBVVI7SUFDVlMscUJBQXFCO1FBQUVDLGNBQWNDLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBTTtJQUFDO2NBRTVELGNBQUEsUUFBQ2pCO1FBQVNDLE9BQU9BO2tCQUNmLGNBQUEsUUFBQ0osTUFBTXFCLFVBQVU7c0JBQ2YsY0FBQSxRQUFDaEI7MEJBQ0MsY0FBQSxRQUFDSCJ9