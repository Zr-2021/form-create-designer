import is, {hasProperty} from '@form-create/utils/lib/type';
import {parseFn} from '@form-create/utils/lib/json';
import toCase from '@form-create/utils/lib/tocase';
import {computed, isRef, unref, ref} from 'vue';
import ZhCn from '../locale/zh-cn';

export function makeRequiredRule() {
    return {
        type: 'Required', field: 'formCreate$required', title: '是否必填'
    };
}

export function makedefaultValueRule() {
    return {
        type: 'input', field: 'formCreate$defaultValue', title: '默认值'
    };
}

export function makerefRule() {
    return {
        type: 'input', field: 'ref', title: '关联值'
    };
}

export function makerefvalRule() {
    return {
        type: 'input', field: 'formCreate$refval', title: '关联传值'
    };
}

export function makefuncRule() {
    return {
        type: 'input', field: 'formCreate$func', title: '数值衍生值'
    };
}

export function makelogicalFuncRule() {
    return {
        type: 'input', field: 'formCreate$logicalFunc', title: '逻辑衍生值'
    };
}

export function maketitleWidthRule() {
    return {
        type: 'number', field: 'formCreate$titleWidth', title: '标题宽度'
    };
}

export function makeinputWidthRule() {
    return {
        type: 'number', field: 'formCreate$inputWidth', title: '输入宽度'
    };
}

export function makehelpFieldRule() {
    return {
        type: 'input', field: 'formCreate$helpField', title: '帮助信息'
    };
}

export function makeisShowHelpFieldRule() {
    return {
        type: 'switch', field: 'formCreate$isShowHelpField', title: '是否显示帮助信息'
    };
}

export function maketabNameRule() {
    return {
        type: 'input', field: 'formCreate$tabName', title: '分页名'
    };
}

export function maketabIndexRule() {
    return {
        type: 'number', field: 'formCreate$tabIndex', title: '页编号'
    };
}

export function makeOptionsRule(t, to, flag) {
    const options = [
        {'label': t('props.optionsType.json'), 'value': 0},
        {'label': t('props.optionsType.fetch'), 'value': 1},
    ];

    const control = [
        {
            value: 0,
            rule: [
                {
                    type: 'Struct',
                    field: 'formCreate' + upper(to).replace('.', '>'),
                    props: {defaultValue: []}
                },
            ],
        },
        {
            value: 1,
            rule: [
                {
                    type: 'Fetch',
                    field: 'formCreateEffect>fetch',
                    props: {
                        to
                    }
                }
            ]
        }
    ];

    if (flag !== false) {
        options.splice(0, 0, {'label': t('props.optionsType.struct'), 'value': 2});
        control.push({
            value: 2,
            rule: [
                {
                    type: 'TableOptions',
                    field: 'formCreate' + upper(to).replace('.', '>'),
                    props: {defaultValue: []}
                },
            ],
        });
    }

    return {
        type: 'radio',
        title: t('props.options'),
        field: '_optionType',
        value: flag !== false ? 2 : 0,
        options,
        props: {
            type: 'button'
        },
        control
    };
}

export function upper(str) {
    return str.replace(str[0], str[0].toLocaleUpperCase());
}


export const toJSON = function (val) {
    const type = /object ([a-zA-Z]*)/.exec(Object.prototype.toString.call(val));
    if (type && _toJSON[type[1].toLowerCase()]) {
        return _toJSON[type[1].toLowerCase()](val);
    } else {
        return val;
    }
};

const _toJSON = {
    object: function (val) {
        var json = [];
        for (var i in val) {
            if (!hasProperty(val, i)) continue;
            json.push(
                toJSON(i) + ': ' +
                ((val[i] != null) ? toJSON(val[i]) : 'null')
            );
        }
        return '{\n ' + json.join(',\n ') + '\n}';
    },
    function: function (val) {
        var exec = (/^ *([\w]+) *\(/).exec(val);
        if (exec && exec[1] !== 'function') {
            return 'function ' + val;
        }
        return val;
    },
    array: function (val) {
        for (var i = 0, json = []; i < val.length; i++)
            json[i] = (val[i] != null) ? toJSON(val[i]) : 'null';
        return '[' + json.join(', ') + ']';
    },
    string: function (val) {
        var tmp = val.split('');
        for (var i = 0; i < tmp.length; i++) {
            var c = tmp[i];
            (c >= ' ') ?
                (c === '\\') ? (tmp[i] = '\\\\') :
                    (c === '"') ? (tmp[i] = '\\"') : 0 :
                (tmp[i] =
                        (c === '\n') ? '\\n' :
                            (c === '\r') ? '\\r' :
                                (c === '\t') ? '\\t' :
                                    (c === '\b') ? '\\b' :
                                        (c === '\f') ? '\\f' :
                                            (c = c.charCodeAt(), ('\\u00' + ((c > 15) ? 1 : 0) + (c % 16)))
                );
        }
        return '"' + tmp.join('') + '"';
    }
};

export const deepParseFn = function (target) {
    for (let key in target) {
        if (Object.prototype.hasOwnProperty.call(target, key)) {
            let data = target[key];
            if (Array.isArray(data) || is.Object(data)) {
                deepParseFn(data);
            }
            if (is.String(data)) {
                target[key] = parseFn(data);
            }
        }
    }
    return target;
};


function get(object, path, defaultValue) {
    path = (path || '').split('.');

    let index = 0,
        length = path.length;

    while (object != null && index < length) {
        object = object[path[index++]];
    }
    return (index && index === length) ? (object !== undefined ? object : defaultValue) : defaultValue;
}

export const buildTranslator = (locale) => (path, option) => translate(path, option, unref(locale));

export const translate = (path, option, locale) =>
    get(locale, path, '').replace(
        /\{(\w+)\}/g,
        (_, key) => `${option?.[key] ?? `{${key}}`}`
    )

export const buildLocaleContext = (locale) => {
    const lang = computed(() => unref(locale).name)
    const name = computed(() => upper(toCase(lang.value || '')))
    const localeRef = isRef(locale) ? locale : ref(locale)
    return {
        lang,
        name,
        locale: localeRef,
        t: buildTranslator(locale),
    }
}

export const useLocale = (locale) => {
    return buildLocaleContext(computed(() => locale.value || ZhCn))
}


export const localeProps = (t, prefix, rules) => {
    return rules.map(rule => {
        if (rule.field === 'formCreate$required') {
            rule.title = t('props.required') || rule.title;
        } else if (rule.field && rule.field !== '_optionType') {
            rule.title = t('components.' + prefix + '.' + rule.field) || rule.title;
        }
        return rule;
    })
}
