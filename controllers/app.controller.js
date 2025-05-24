class AppController {

    //home page
    async home(req, res) {
        try {
            res.render('home', {
                title: 'Home - Kind Heart Charity',
            });
        } catch (err) {
            throw err;
        }
    }
    //donate page
    async donate(req, res) {
        try {
            res.render('donate', {
                title: 'Donate - Kind Heart Charity',
            });
        } catch (err) {
            throw err;
        }
    }
    //News page
    async news(req, res) {
        try {
            res.render('news', {
                title: 'News - Kind Heart Charity',
            });
        } catch (err) {
            throw err;
        }
    }
    //About page
    async about(req, res) {
        try {
            res.render('about', {
                title: 'About - Kind Heart Charity',
            });
        } catch (err) {
            throw err;
        }
    }
     // Our Causes page
    async causes(req, res) {
        try {
            res.render('causes', {
                title: 'Our Causes - Kind Heart Charity',
            });
        } catch (err) {
            throw err;
        }
    }
    //Volunteer page            
    async volunteer(req, res) {
        try {
            res.render('volunteer', {
                title: 'Volunteer - Kind Heart Charity',
            });
        } catch (err) {
            throw err;
        }
    }
    //Contact page
    async contact(req, res) {
        try {
            res.render('contact', {
                title: 'Contact - Kind Heart Charity',
            });
        } catch (err) {
            throw err;
        }       
    }
    //404 page
    async notFound(req, res) {
        try {
            res.render('404', {
                title: '404 - Kind Heart Charity',
            });
        } catch (err) {
            throw err;
        }
    }


}


module.exports = new AppController();