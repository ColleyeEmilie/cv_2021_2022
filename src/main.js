(function () {
        const DayNight = {
            cacheDom() {
                this.body = document.body;
		  		this.header = document.querySelector('header');
                this.button =  document.querySelector('.nav__contrast');

            },
            init() {
                window.document.documentElement.classList.add('js-enabled');
                this.cacheDom();
                this.addEventListeners();
            },
            addEventListeners() {
                console.log('test');
                this.button.addEventListener('click', () => {
                    this.body.classList.toggle('contrast');
		  this.header.classList.toggle('contrast2');
                })
            }

        };
        DayNight.init();
    }
)();

const ratio = .1;
const options = {
    root:null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function(entries, observer){
    entries.forEach(function(entry){
        if(entry.intersectionRatio > ratio){
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target);
        }
    })
}
const observer =  new IntersectionObserver(handleIntersect, options);
observer.observe(document.querySelectorAll('[class*=\"reveal-\"]').forEach(function (r){
    observer.observe(r)
}));

