{%- if cookiecutter.frontend_pipeline == 'Webpack' -%}
import '../sass/project.scss';
import {Carousel, Input, Ripple, Modal, Dropdown, Collapse, initMDB } from "mdb-ui-kit";
initMDB({Input, Ripple, Modal, Dropdown, Carousel, Collapse });
{% endif -%}
/* Project specific Javascript goes here. */
