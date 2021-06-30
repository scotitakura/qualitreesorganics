import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Preloader
const Preloader = React.lazy(() => import("./components/layouts/Preloader"));

// Pages
const Home = React.lazy(() => import("./components/pages/Home"));
const Hometwo = React.lazy(() => import("./components/pages/Hometwo"));
const Homethree = React.lazy(() => import("./components/pages/Homethree"));
const Services = React.lazy(() => import("./components/pages/Services"));
const Servicedetails = React.lazy(() => import("./components/pages/Servicedetails"));
const Whyus = React.lazy(() => import("./components/pages/Whyus"));
const Contact = React.lazy(() => import("./components/pages/Contact"));
const About = React.lazy(() => import("./components/pages/About"));
const Team = React.lazy(() => import("./components/pages/Team"));
const Teamdetails = React.lazy(() => import("./components/pages/Teamdetails"));
const Faq = React.lazy(() => import("./components/pages/Faq"));
const Cart = React.lazy(() => import("./components/pages/Cart"));
const Shop = React.lazy(() => import("./components/pages/Shop"));
const Shopleft = React.lazy(() => import("./components/pages/Shopleft"));
const Shopdetails = React.lazy(() => import("./components/pages/Shopdetails"));
const Blogstandard = React.lazy(() => import("./components/pages/Blogstandard"));
const Bloggrid = React.lazy(() => import("./components/pages/Bloggrid"));
const Blogdetails = React.lazy(() => import("./components/pages/Blogdetails"));
const Straingrid = React.lazy(() => import("./components/pages/Straingrid"));
const Strainmasonry = React.lazy(() => import("./components/pages/Strainmasonry"));
const Strainslider = React.lazy(() => import("./components/pages/Strainslider"));
const Straindetails = React.lazy(() => import("./components/pages/Straindetails"));


function App() {
  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <Preloader />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home-v2" component={Hometwo} />
          <Route path="/home-v3" component={Homethree} />
          <Route path="/services" component={Services} />
          <Route path="/service-details" component={Servicedetails} />
          <Route path="/why-us" component={Whyus} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/team" component={Team} />
          <Route exact path="/team-details/:id" component={props => (<Teamdetails {...props} key={window.location.pathname}/>)} />
          <Route path="/faq" component={Faq} />
          <Route path="/cart" component={Cart} />
          <Route path="/shop" exact component={Shop} />
          <Route exact path="/shop/cat/:catId" component={props => (<Shop {...props} key={window.location.pathname}/>)} />
          <Route path="/shop-left" component={Shopleft} />
          <Route exact path="/shop-details/:id" component={props => (<Shopdetails {...props} key={window.location.pathname}/>)} />
          <Route path="/blog-standard" exact component={Blogstandard} />
          <Route exact path="/blog/cat/:catId" component={props => (<Blogstandard {...props} key={window.location.pathname}/>)} />
          <Route exact path="/blog/user/:userId" component={props => (<Blogstandard {...props} key={window.location.pathname}/>)} />
          <Route exact path="/blog/tag/:tagId" component={props => (<Blogstandard {...props} key={window.location.pathname}/>)} />
          <Route path="/blog-grid" component={Bloggrid} />
          <Route exact path="/blog-details/:id" component={props => (<Blogdetails {...props} key={window.location.pathname}/>)} />
          <Route path="/strain-grid" component={Straingrid} />
          <Route path="/strain-masonary" component={Strainmasonry} />
          <Route path="/strain-slider" component={Strainslider} />
          <Route exact path="/strain-details/:id" component={props => (<Straindetails {...props} key={window.location.pathname}/>)} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
