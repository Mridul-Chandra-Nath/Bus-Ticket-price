function hideElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('hidden');
}

function addElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setbackgroundColorInKey(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('bg-green-300');
}