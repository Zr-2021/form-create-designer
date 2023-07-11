import IconRefresh from '../../components/IconRefresh.vue';
import {markRaw} from 'vue';

export default function field({t}) {
    return [
        {
            type: 'input',
            field: 'field',
            value: '',
            title: t('form.field'),
        }, {
            type: 'input',
            field: 'title',
            value: '',
            title: t('form.title'),
        }
        //新增规则配置在属性配置中，基础配置不能数据双向绑定
        // {
        //     type: 'input',
        //     field: 'helpField',
        //     value: '',
        //     title: t('form.info'),
        // }, {
        //     type: 'switch',
        //     field: 'isShowHelpField',
        //     title: t('form.isShowInfo'),
        // }, {
        //     type: 'input',
        //     field: 'defaultValue',
        //     value: '',
        //     title: t('form.defaultValue'),
        // }, {
        //     type: 'input',
        //     field: 'ref',
        //     value: '',
        //     title: t('form.ref'),
        // }, {
        //     type: 'input',
        //     field: 'refval',
        //     value: '',
        //     title: t('form.refval'),
        // }, {
        //     type: 'input',
        //     field: 'func',
        //     value: '',
        //     title: t('form.func'),
        // }, {
        //     type: 'input',
        //     field: 'logicalFunc',
        //     value: '',
        //     title: t('form.logicalFunc'),
        // }, {
        //     type: 'number',
        //     field: 'titleWidth',
        //     value: 110,
        //     title: t('form.titleWidth'),
        // }, {
        //     type: 'number',
        //     field: 'inputWidth',
        //     value: 190,
        //     title: t('form.inputWidth'),
        // }, {
        //     type: 'input',
        //     field: 'tabName',
        //     value: '',
        //     title: t('form.pageName'),
        // },, {
        //     type: 'number',
        //     field: 'tabIndex',
        //     value: '',
        //     title: t('form.pageNumber'),
        // }
        // {
        //     type: 'Struct',
        //     field: '_control',
        //     value: [],
        //     title: t('form.control'),
        //     props: {
        //         defaultValue: [],
        //         validate(val) {
        //             if (!Array.isArray(val)) return false;
        //             if (!val.length) return true;
        //             return !val.some(({rule}) => {
        //                 return !Array.isArray(rule);
        //             });
        //         }
        //     }
        // }, {
        //     type: 'col',
        //     props: {
        //         span: 24
        //     },
        //     children: [
        //         {
        //             type: 'el-button',
        //             props: {
        //                 type: 'primary',
        //                 size: 'small',
        //             },
        //             inject: true,
        //             on: {
        //                 click({$f}) {
        //                     const rule = $f.activeRule;
        //                     if (rule) {
        //                         rule.__fc__.updateKey();
        //                         rule.value = undefined;
        //                         rule.__fc__.$api.sync(rule);
        //                     }
        //                 },
        //             },
        //             native: true,
        //             children: [{type: 'i', class: 'fc-icon icon-delete'}, t('form.clear')]
        //         }, {
        //             type: 'el-button',
        //             props: {
        //                 type: 'success',
        //                 size: 'small',
        //                 icon: markRaw(IconRefresh),
        //             },
        //             inject: true,
        //             on: {
        //                 click({$f}) {
        //                     const rule = $f.activeRule;
        //                     if (rule) {
        //                         rule.__fc__.updateKey(true);
        //                         rule.__fc__.$api.sync(rule);
        //                     }
        //                 },
        //             },
        //             native: true,
        //             children: [t('form.refresh')]
        //         },
        //     ]
        // }
    ];
}
