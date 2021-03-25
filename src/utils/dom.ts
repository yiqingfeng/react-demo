/**
 * @description DOM 相关操作
 */

/**
 * @description 获取唯一元素选择器，不存在则创建一个新的DOM
 */
export function getIdDom(id: string, scope = document): HTMLElement {
    let el = document.getElementById(id);
    if (el === null) {
        el = document.createElement('div');
        el.id = id;
        scope.appendChild(el);
    }
    return el;
}
