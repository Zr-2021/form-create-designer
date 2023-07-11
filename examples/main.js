import {createApp} from 'vue';
import ELEMENT from 'element-plus';
import 'element-plus/dist/index.css';
import formCreate from '@form-create/element-ui';
import App from './App.vue';
import FcDesigner from '../src/index';

const app = createApp(App);

app.use(ELEMENT).use(formCreate).use(FcDesigner).mount('#app')
