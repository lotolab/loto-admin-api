/*
 * 提交规范
 * feat:     新增功能
 * fix:      修复 bug
 * docs:     文档变更
 * style:    代码格式（不影响功能，例如空格、分号等格式修正）
 * refactor: 代码重构（不包括 bug 修复、功能新增）
 * perf:     性能优化
 * test:     添加、修改测试用例
 * build:    构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）
 * ci:       修改 CI 配置、脚本
 * chore:    对构建过程或辅助工具和库的更改（不影响源文件、测试用例）
 * revert:   回滚 commit
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'test',
        'build',
        'ci',
        'chore',
        'pref',
      ],
    ],
  },
  prompt: {
    alias: {fd: 'docs: fix typos'},
    messages: {
      type: '选择一种你的提交类型:',
      scope: '选择一个scope (可选):',
      // used if allowCustomScopes is true
      customScope: '模块名称:',
      subject: '短描述:\n',
      body: '长描述，使用"|"换行(可选)：\n',
      breaking: '非兼容性说明 (可选):\n',
      footer: '关联关闭的issue，例如：#1, #2(可选):\n',
      generatedSelectByAI: 'Select suitable subject by AI generated:',
      confirmCommit: '确定提交?',
    },
    types: [
      {value: 'feat', name: '✨特性:   一个新的特性'},
      {value: 'fix', name: '🐛修复:   修复一个Bug'},
      {value: 'docs', name: '📝文档:   变更的只有文档'},
      {value: 'style', name: '🎨格式:   空格, 分号等格式修复'},
      {value: 'refactor', name: '🔨重构:   代码重构，注意和特性、修复区分开'},
      {value: 'test', name: '🧪测试:   添加一个测试'},
      {value: 'build', name: '📦构建:   影响构建系统或外部依赖项的更改'},
      {value: 'ci', name: '👷ci:   架构持续集成的功能维护'},
      {value: 'chore', name: '🚀chore:   日常维护'},
      {value: 'perf', name: '⚡️性能:   提升性能'},
      {value: 'revert', name: '⏪  revert:    代码回滚'},
    ],
    useEmoji: true,
    emojiAlign: 'center',
    useAI: false,
    aiNumber: 1,
    themeColorCode: '',
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: 'bottom',
    customScopesAlias: 'custom',
    emptyScopesAlias: 'empty',
    upperCaseSubject: false,
    markBreakingChangeMode: false,
    allowBreakingChanges: ['feat', 'fix'],
    breaklineNumber: 100,
    breaklineChar: '|',
    skipQuestions: [],
    issuePrefixes: [
      {value: 'closed', name: 'closed:   ISSUES has been processed'},
    ],
    customIssuePrefixAlign: 'top',
    emptyIssuePrefixAlias: 'skip',
    customIssuePrefixAlias: 'custom',
    allowCustomIssuePrefix: true,
    allowEmptyIssuePrefix: true,
    confirmColorize: true,
    scopeOverrides: undefined,
    defaultBody: '',
    defaultIssues: '',
    defaultScope: '',
    defaultSubject: '',
  },
};
