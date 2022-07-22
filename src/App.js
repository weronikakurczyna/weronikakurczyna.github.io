import {Switch, Route, Redirect} from "react-router-dom";
import HomePage from "./router-pages/HomePage";
import RecipesPage from "./router-pages/RecipesPage";
import ShoppingListPage from "./router-pages/ShoppingListPage";
import AuthenticationPage from "./router-pages/AuthenticationPage";
import MainContainer from "./components/MainContainer/MainContainer";
import ProfilePage from "./router-pages/ProfilePage";
import {useContext} from "react";
import AuthContext from "./store/auth-context";
import RecipeDetails from "./components/Recipes/SingleRecipe/RecipeDetails";
import RecipeDetailsPage from "./router-pages/RecipeDetailsPage";

function App() {
    const authContext = useContext(AuthContext);
    const isLoggedIn = authContext.isLoggedIn;

    return (
        <MainContainer>
            <Switch>
                <Route path='/auth'>
                    <AuthenticationPage/>
                </Route>
                <Route path='/' exact>
                    {!isLoggedIn && <Redirect to='/auth'/>}
                    {isLoggedIn && <Redirect to='/home'/>}
                </Route>
                <Route path='/home'>
                    {!isLoggedIn && <Redirect to='/auth'/>}
                    <HomePage/>
                </Route>
                <Route path='/recipes' exact>
                    {!isLoggedIn && <Redirect to='/auth'/>}
                    <RecipesPage/>
                </Route>
                <Route path='/shopping'>
                    {!isLoggedIn && <Redirect to='/auth'/>}
                    <ShoppingListPage/>
                </Route>
                <Route path='/profile'>
                    {!isLoggedIn && <Redirect to='/auth'/>}
                    <ProfilePage/>
                </Route>
                <Route path='/recipes/:id'>
                    {!isLoggedIn && <Redirect to='/auth'/>}
                    {isLoggedIn && <RecipeDetailsPage/>}
                </Route>
            </Switch>
        </MainContainer>
    );
}

export default App;
