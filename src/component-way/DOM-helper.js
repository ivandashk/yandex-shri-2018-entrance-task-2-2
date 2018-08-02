const mount = (component, container) => {
    const componentContainer = document.createElement('component');
    container.appendChild(componentContainer);
    componentContainer.innerHTML = component.render();
}

const unmount = (componentId) => {
    document.getElementById(componentId).parentNode.remove();
}

export { mount, unmount }