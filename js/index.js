const body = document.querySelector('body');
const mobileNav = document.querySelector('.mobile-nav');
const hammertime = new Hammer(body);

function openMobileNav() {
	body.style.overflow = 'hidden';
	mobileNav.style.marginLeft = '0';
}

function closeMobileNav() {
	body.style.overflow = 'auto';
	mobileNav.style.marginLeft = '-85%';
}

document.querySelector('.mobile-nav-trigger').onclick = openMobileNav;
document.querySelector('.mobile-nav__close-btn').onclick = closeMobileNav;

hammertime.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
hammertime.on('swipe', function(event) {
	if (window.innerWidth > 600) return;
	if (event.direction === 4) openMobileNav();
	if (event.direction === 2) closeMobileNav();
});