class AppController {

    //home page
    async home(req, res) {
        try {
            // rendering testimonials for the home page
            const testimonials = [
            {
                name: "Maria",
                role: "Boss",
                text: "Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito charity theme",
                image: "/images/avatar/portrait-beautiful-young-woman-standing-grey-wall.jpg"
            },
            {
                name: "Thomas",
                role: "Partner",
                text: "Sed leo nisl, posuere at molestie ac, suscipit auctor mauris quis metus tempor orci",
                image: "/images/avatar/portrait-young-redhead-bearded-male.jpg"
            },
            {
                name: "Jane",
                role: "Advisor",
                text: "Great support and experience overall!",
                image: "/images/avatar/pretty-blonde-woman-wearing-white-t-shirt.jpg"
            },
            {
                name: "Bob",
                role: "Entrepreneur",
                text: "Would definitely recommend this platform!",
                image: "/images/avatar/studio-portrait-emotional-happy-funny.jpg"
            }
            ];
            // recent news for the home page
            const news = [
                {
                title: "Food donation area",
                date: "October 16, 2036",
                image: "/images/news/africa-humanitarian-aid-doctor.jpg",
                url: "#"
                },
                {
                title: "Volunteering Clean",
                date: "October 24, 2036",
                image: "/images/news/close-up-happy-people-working-together.jpg",
                url: "#"
                }
            ];

            const categories = [
                { name: "Drinking water", count: 20 },
                { name: "Food Donation", count: 30 },
                { name: "Children Education", count: 10 },
                { name: "Poverty Development", count: 15 },
                { name: "Clothing Donation", count: 20 }
            ];

            const tags = ["Donation", "Clothing", "Food", "Children", "Education", "Poverty", "Clean Water"];

            res.render('home', {
                title: 'Home - Kind Heart Charity',
                testimonials: testimonials,
                news: news,
                categories: categories,
                tags: tags
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
    // testimonials section on home page


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