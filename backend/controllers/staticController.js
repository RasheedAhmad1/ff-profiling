// @desc    home route
// route    GET /
// @access  public
const homeUrl = (req, res) => {
    res.status(200).render('./pages/index', { title: 'Home' });
}

// @desc    about route
// route    GET /about
// @access  public
const aboutUrl = (req, res) => {
    res.status(200).render('./pages/about', { title: 'About' });
}

// @desc    about-us to redirect to about route
// route    GET /about-us
// @access  public
const aboutUsUrl = (req, res) => {
    res.status(301).redirect('/about');
}

export { 
    homeUrl,
    aboutUrl,
    aboutUsUrl
}