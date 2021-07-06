import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Organization from './pages/Organization/OrganizationPage';
import Series from './pages/SeriesPage';
import Profile from './pages/ProfilePage';
import SignupPage from './pages/SignupPage';
import { CreateNewArticle } from './components/ArticleList/ArticleInput/CreateArticle';
import AdminSite from './pages/AdminPage';
import HorizontalArticles from './components/ArticleList/HorizontalArticleList';
import LoginPage from './pages/LoginPage';
import NewOrganizationPage from './pages/Organization/CreateOrganizationPage';
import './App.scss';
import ChangePayment from './pages/ChangePaymentInfo';
import EditProfilePage from './pages/EditProfilePage';
import EditorPage from './components/EditorPage/EditorPage';
import IndividualArticle from './components/ArticleList/IndividualArticle/IndividualArticle';
import writeRating from './components/rating/writeRating';
import EditPaymentPage from './pages/EditPaymentInfo';
import MyArticles from './components/MyArticles/myArticles';
import CreateSeries from './components/series/newSeries/createSeries';
import IndividualSeries from './components/series/individualSeries/IndividualSeries';
import IndividualOrganizationPage from './pages/Organization/IndividualOrgPage';

export default function ThePlatformWebsite(props: {}) {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" component={AdminSite} />
        <Route path="/series/:id" exact component={IndividualSeries} />
        <Route path="/organization" component={Organization} />
        <Route path="/ChangePaymentPage" component={ChangePayment} />
        <Route path="/series" component={Series} />
        <Route path="/seriesCreation" component={CreateSeries} />

        {/* <Route path="/rating" component={getRating} /> */}
        <Route path="/NewOrganizationPage" component={NewOrganizationPage} />
        <Route path="/profile" component={Profile} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/organization" component={Organization} />
        <Route path="/rating/:id" component={writeRating} />
        <Route path="/articles/:id" exact component={IndividualArticle} />
        <Route
          path="/individualOrganizationPage/:id"
          component={IndividualOrganizationPage}
        />
        <Route path="/articles" exact component={HorizontalArticles} />
        <Route path="/editor" component={EditorPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/newArticle" component={CreateNewArticle} />
        <Route path="/editProfilePage" component={EditProfilePage} />
        <Route path="/editPaymentPage" component={EditPaymentPage} />
        <Route path="/myArticles" component={MyArticles} />
        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}
