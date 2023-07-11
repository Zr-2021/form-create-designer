import uniqueId from '@form-create/utils/lib/unique';
import {localeProps, makeRequiredRule,makedefaultValueRule, 
    maketitleWidthRule, makeinputWidthRule, makehelpFieldRule,
    makeisShowHelpFieldRule, maketabNameRule, maketabIndexRule} from '../../utils';

const label = '富文本框';
const name = 'fc-editor';

export default {
    icon: 'icon-editor',
    label,
    name,
    rule({t}) {
        return {
            type: name,
            field: uniqueId(),
            title: t('components.fc-editor.name'),
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
            
            {
            type: 'switch',
            field: 'disabled',
            title: '是否禁用'
        }]);
    }
};
