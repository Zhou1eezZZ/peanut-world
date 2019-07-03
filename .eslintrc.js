module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        // 'eslint:recommended'
        'plugin:vue/recommended'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // 缩进相关
        'vue/script-indent': ['error', 4, { baseIndent: 0 }],
        'vue/html-indent': ['error', 4, { baseIndent: 1 }],
        // 标签多行属性数量
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: 4,
                multiline: {
                    max: 2,
                    allowFirstLine: false
                }
            }
        ],
        // 关闭标签内容必须换行
        'vue/singleline-html-element-content-newline': [
            'off',
            {
                ignoreWhenNoAttributes: true,
                ignoreWhenEmpty: true
            }
        ]
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
