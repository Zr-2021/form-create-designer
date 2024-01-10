import uniqueId from '@form-create/utils/lib/unique';
import {localeProps, makeRequiredRule,makedefaultValueRule, 
    maketitleWidthRule, makeinputWidthRule, makehelpFieldRule,
    makeisShowHelpFieldRule, maketabNameRule, maketabIndexRule} from '../../utils';

const label = '开关';
const name = 'switch';

export default {
    icon: 'icon-switch',
    label,
    name,
    rule({t}) {
        return {
            type: name,
            field: uniqueId(),
            title: t('components.switch.name'),
            $required: false,
            $defaultValue: '',
            $titleWidth: 110,
            $inputWidth: 190,
            $helpField: '',
            $isShowHelpField: false,
            $tabName: '',
            $tabIndex: 0,
            props: {},
        };
    },
    props(_, {t}) {
        return localeProps(t, name + '.props', [
            makeRequiredRule(),
            makedefaultValueRule(),
            maketitleWidthRule(),
            makeinputWidthRule(),
            makehelpFieldRule(),
            makeisShowHelpFieldRule(),
            maketabNameRule(),
            maketabIndexRule(),
        
            // {
            //     type: 'switch',
            //     field: 'disabled',
            //     title: '是否禁用'
            // }, 
            {
                type: 'inputNumber',
                field: 'width',
                title: '宽度（px）',
                props: {min: 0},
            }, {type: 'input', field: 'activeText', title: 'switch 打开时的文字描述'}, {
                type: 'input',
                field: 'inactiveText',
                title: 'switch 关闭时的文字描述'
            }, {type: 'input', field: 'activeValue', title: 'switch 打开时的值'}, {
                type: 'input',
                field: 'inactiveValue',
                title: 'switch 关闭时的值'
            }, {type: 'input', field: 'activeColor', title: 'switch 打开时的背景色'}, {
                type: 'input',
                field: 'inactiveColor',
                title: 'switch 关闭时的背景色'
            }]);
    }
};
