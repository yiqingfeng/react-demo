/**
 * @description 基础支持
 */
export function isFunction(fn) {
    return typeof fn === 'function';
}

export function firstUpperCase(str) {
    if (!str) return '';
    return str[0].toUpperCase() + str.slice(1);
}

/**
 * @description 模块名称转换
 */
function transformModuleName(str) {
    let name = str.match(/(\w+)\.js$/)?.[1] ?? '';
    // 取消下划线，将后面的字母大写
    name.replace(/\_([a-zA-Z])/gi, (match, p1) => p1.toUpperCase());
    return firstUpperCase(name);
}

/**
 * @description 同步自动导入
 */
export function importAll(context) {
    let cache = {};
    context.keys().forEach((key) => {
        let component = context(key)?.default;
        component && (cache[transformModuleName(key)] = component);
    });
    return cache;
}
