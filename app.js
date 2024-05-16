const techlonogyPagination = [...document.querySelectorAll('.technology__about-details_pagination-button')];

techlonogyPagination.forEach((technology, i) => {
    technology.addEventListener('click', (e) => {
        techlonogyPagination.forEach((paginationElement, index) => {
            if (i === index) {
                paginationElement.classList.add('technology-pagination-active');
            } else {
                paginationElement.classList.remove('technology-pagination-active')
            }
        })

        const technologyInfo = document.querySelector('.technology__about-details_info');
        const technologyImg = document.querySelector('.technology__about-img');
        if (i === 0) {
            technologyInfo.innerHTML = `
                <p class="technology__about-details_info-term">THE TERMINOLOGY…</p>
                <p class="technology__about-details_info-name">LAUNCH VEHICLE</p>
                <p class="technology__about-details_info-more">A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
            `;
            technologyImg.innerHTML = `<div class="technology__about-img_vehicle"></div>`;
        } else if (i === 1) {
            technologyInfo.innerHTML = `
                <p class="technology__about-details_info-term">THE TERMINOLOGY…</p>
                <p class="technology__about-details_info-name">SPACEPORT</p>
                <p class="technology__about-details_info-more">A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</p>
            `;
            technologyImg.innerHTML = `<div class="technology__about-img_spaceport"></div>`;
        } else if (i === 2) {
            technologyInfo.innerHTML = `
                <p class="technology__about-details_info-term">THE TERMINOLOGY…</p>
                <p class="technology__about-details_info-name">SPACE CAPSULE</p>
                <p class="technology__about-details_info-more">A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
            `;
            technologyImg.innerHTML = `<div class="technology__about-img_capsule"></div>`;
        }

    })
})

const crewPagination = [...document.querySelectorAll('.crew__about-person_pagination-button')];

crewPagination.forEach((crew, i) => {
    crew.addEventListener('click', (e) => {
        crewPagination.forEach((crewElement, index) => {
            if (i === index) {
                crewElement.classList.add('crew-pagination-active');
            } else {
                crewElement.classList.remove('crew-pagination-active');
            }
        })

        const crewPosition = document.querySelector('.crew__about-person_position');
        const crewName = document.querySelector('.crew__about-person_name');
        const crewInfo = document.querySelector('.crew__about-person_info');
        const crewImg = document.querySelector('.crew__about-img');

        if (i === 0) {
            crewPosition.textContent = `Commander`;
            crewName.textContent = `Douglas Hurley`;
            crewInfo.textContent = `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.`;
            crewImg.innerHTML = `<img src="./images/douglas-hurley.png" alt="douglas" class="img-douglas">`;
        } else if (i === 1) {
            crewPosition.textContent = `Mission Specialist `;
            crewName.textContent = `MARK SHUTTLEWORTH`;
            crewInfo.textContent = `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.`;
            crewImg.innerHTML = `<img src="./images/mark-shutteloworth.png" alt="mark" class="img-mark">`;
        } else if (i === 2) {
            crewPosition.textContent = `PILOT`;
            crewName.textContent = `Victor Glover`;
            crewInfo.textContent = `Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.`;
            crewImg.innerHTML = `<img src="./images/victor-glover.png" alt="victor" class="img-victor">`;
        } else if (i === 3) {
            crewPosition.textContent = `Flight Engineer`;
            crewName.textContent = `Anousheh Ansari`;
            crewInfo.textContent = `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.`;
            crewImg.innerHTML = `<img src="./images/anoushen-ansari.png" alt="anousheh" class="img-anousheh">`;
        }
    })
})

const destinationPagination = [...document.querySelectorAll('.destination__about-more_button')];

destinationPagination.forEach((destination, i) => {
    destination.addEventListener('click', (e) => {
        destinationPagination.forEach((destElement, index) => {
            if(i === index) {
                destElement.classList.add('destination-active');
            } else {
                destElement.classList.remove('destination-active');
            }
        })

        const destinationImg = document.querySelector('.destination__about-img');
        const destinationHeader = document.querySelector('.destination__about-more h3');
        const destinationInfo = document.querySelector('.destination__about-more_info');
        const distanceIndicator = document.querySelector('.distance-indicator');
        const timeIndicator = document.querySelector('.time-indicator');

        if (i === 0) {
            destinationImg.innerHTML = `<img src="./images/Moon.png" alt="moon">`;
            destinationHeader.textContent = `MOON`;
            destinationInfo.textContent = `See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`;
            distanceIndicator.textContent = `384,400 km`;
            timeIndicator.textContent = `3 days`;
        } else if (i === 1) {
            destinationImg.innerHTML = `<img src="./images/Mars.png" alt="moon">`;
            destinationHeader.textContent = `MARS`;
            destinationInfo.textContent = `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!`;
            distanceIndicator.textContent = `225 MIL. km`;
            timeIndicator.textContent = `9 months`;
        } else if (i === 2) {
            destinationImg.innerHTML = `<img src="./images/Europa.png" alt="moon">`;
            destinationHeader.textContent = `EUROPA`;
            destinationInfo.textContent = `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`;
            distanceIndicator.textContent = `628 MIL. km`;
            timeIndicator.textContent = `3 years`;
        } else if (i === 3) {
            destinationImg.innerHTML = `<img src="./images/Titan.png" alt="moon">`;
            destinationHeader.textContent = `TITAN`;
            destinationInfo.textContent = `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`;
            distanceIndicator.textContent = `1.6 BIL. km`;
            timeIndicator.textContent = `7 years`;
        }
    })
})

const burgerMenu = document.querySelector('.burger-menu');
const header = document.querySelector('.header');
const mobileMenu = document.createElement('div');
mobileMenu.classList.add('mobile-menu');

burgerMenu.addEventListener('click', function() {
    burgerMenu.classList.toggle('active-burger');
    if (burgerMenu.classList.contains('active-burger')) {
        header.appendChild(mobileMenu);
        mobileMenu.innerHTML = `
        <ul class="mobile_nav">
            <li><a href="./index.html"><span>00</span> HOME</a></li>
            <li><a href="./destination.html"><span>01</span> DESTINATION</a></li>
            <li><a href="./crew.html"><span>02</span> CREW</a></li>
            <li><a href="./technology.html"><span>03</span> TECHNOLOGY</a></li>
        </ul>
        `;
    } else {
        header.removeChild(mobileMenu);
    }
})