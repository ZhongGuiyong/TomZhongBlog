import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faChartBar ,faCode, faKeyboard, faGamepad, faLanguage, faComments, faUser, faCalendarDay, faEye, faComment, faChevronLeft, faChevronRight, faSearch} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

config.autoAddCss = false

library.add(faCode, faKeyboard, faChartBar, faGamepad, faLanguage, faComments, faUser, faCalendarDay, faEye, faComment, faChevronLeft, faChevronRight, faSearch)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
