# Vanlife - a van renting app

-BrowserRouter, Routes, Route
-Route Params - useParams()
-Nested Routes (only to nest route if there is a shared ui)
-Layout Route
-Index Route
-NavLink
-Active navLinks
-Relative paths
-"." represents current path
-".." if we want to go one route back wrt url we use `relative="path"` prop
-searchParams - used for sorting, filtering, sharing same ui between other users
-useSearchParams hook - return searchParams which is URLSearchParams obj which has all the params && setSearchParams which we can use to append or set new params
-setSearchParams - takes an object which has key value pairs which are then converted into searchParams under the hood it uses URLSearchParams constructor
-Link state can be used to preserve params between routes
-useLocation returns a obj which has current pathname, search-(params), state-(prev route state), key
-catchAll routes - if we want to render a component for all the routes which are not defined we use `path="*"` which is a catch all route
-useRouteError
-loader
-Protected Routes - if we want to protect a route we can use a Wrapper component which will check if the user is logged in or not and then render the component
-Navigate - used to navigate to a route programmatically/forcefully (can be used in protected routes)
-redirect() - used to redirect to a route programmatically/forcefully inside a loader
-useNavigate() - returns navigate fn which can be used to navigate to a route programmatically/forcefully
-we can use `replace` prop in navigate to replace the current route in the history stack for
-we can also pass search params in redirect fn for eg: `redirect("/login?message=Please Login")`
-Form component from react-router-dom is like normal javascript form where we do not need to manage the state of the form
-action function - called when the form is submitted
-we can add replace prop in form to replace the current route in the history stack
-useActionData - use to get the data returned from the action function
-useNavigation - used to get the navigation state, and other properties
