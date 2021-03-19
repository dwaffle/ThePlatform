import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Organization from "./pages/Organization/OrganizationPage";
import Series from "./pages/SeriesPage";
import Profile from "./pages/ProfilePage";
import SignupPage from "./pages/SignupPage";
import { CreateNewArticle } from "./components/ArticleList/ArticleInput/CreateArticle";
import AdminSite from "./pages/AdminPage";
import HorizontalArticles from "./components/ArticleList/HorizontalArticleList";
import LoginPage from "./pages/LoginPage";
import "./App.scss";
import EditProfilePage from "./pages/EditProfilePage";
import EditorPage from "./components/EditorPage/EditorPage";
import EditPaymentPage from './pages/EditPaymentInfo'
import WriteRating from './components/rating/writeRating'
import IndividualArticle from "./components/ArticleList/IndividualArticle/IndividualArticle";
// import {IndividualArticlePage} from './pages/IndividualArticlePage'


export default function ThePlatformWebsite(props: {}) {
  // const requireAuth = () => {
  //   if (!localStorage.getItem("token")) {
  //     return <Route path="/" component={LoginPage} />;
  //   }
  //   return <Route path="/" component={HomePage} />;
  // };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" component={AdminSite} />
        <Route path="/rating" component={WriteRating} />
        <Route path="/series" component={Series} />
        <Route path="/profile" component={Profile} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/organization" component={Organization} />
        <Route path="/articles/:id" exact component={IndividualArticle} />
        <Route path="/articles" exact component={HorizontalArticles} />
        <Route path="/editor" component={EditorPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/newArticle" component={CreateNewArticle} />
        <Route path="/editProfilePage" component={EditProfilePage} />
        <Route path="/editPaymentPage" component={EditPaymentPage} />
        <Route path="/:id" component={IndividualArticle} />
        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}
