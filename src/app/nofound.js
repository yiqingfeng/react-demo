function NoFound(props) {
    let text = props.text || '该页面不存在，无法访问';
    return (
        <div>{ text }</div>
    );
}

export default NoFound;
