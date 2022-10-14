/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'

import { faFacebook, faInstagram, faDribbble } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faStar, farStar, faFacebook, faInstagram, faDribbble)

export default FontAwesomeIcon;

