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
