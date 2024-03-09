export default class SimplexApp {
    private _numberOfVariables: number
    inputTable: HTMLElement

    constructor(n: number, inputTable: HTMLElement) {
        if(n < 0) throw new Error("Number of variables negative");
        this._numberOfVariables = n;
        this.inputTable = inputTable;

        this.renderObjectiveFunction();
    }

    get numberOfVariables() {
        return this._numberOfVariables;
    }

    set numberOfVariables(n: number) {
        if(n < 0) return;
        this._numberOfVariables = n;
        this.renderObjectiveFunction();
    }

    renderObjectiveFunction() {
        const oldObjetiveFunctionEl = document.querySelector('.objectiveFunction');

        oldObjetiveFunctionEl && oldObjetiveFunctionEl.remove();

        const objFunctionEl = document.createElement('div');
        objFunctionEl.classList.add("objectiveFunction");
        const selectFunctionTypeEl = document.createElement('select');
        selectFunctionTypeEl.setAttribute('name', 'functionType')
        const maximizeEl = document.createElement('option');
        maximizeEl.setAttribute('value', 'max');
        maximizeEl.textContent = "Maximize"
        const minimizeEl = document.createElement('option');
        minimizeEl.setAttribute('value', 'min');
        minimizeEl.textContent = "Minimize";
        const objFunctionMembersEl = document.createElement('div');
        objFunctionMembersEl.classList.add("objectiveFunctionMembers");

        
        selectFunctionTypeEl.appendChild(maximizeEl);
        selectFunctionTypeEl.appendChild(minimizeEl);
        objFunctionEl.appendChild(selectFunctionTypeEl);
        
        for(let i = 0; i < this._numberOfVariables; i++) {
            const objFunctionMemberEl = document.createElement('div');
            objFunctionMemberEl.classList.add("objectiveFunctionMember");

            const removeButton = document.createElement('button');
            removeButton.textContent = 'X';

            const wrapperEl = document.createElement('div');
            
            const varInputEl = document.createElement('input');
            varInputEl.setAttribute('type', 'number');
            varInputEl.setAttribute('name', `x${i}`);

            wrapperEl.appendChild(varInputEl);
            wrapperEl.innerHTML += ` X${i}`;
            if(i !== this._numberOfVariables - 1) {
                wrapperEl.innerHTML += ` + `;
            }

            objFunctionMemberEl.appendChild(removeButton);
            objFunctionMemberEl.appendChild(wrapperEl);
            objFunctionMembersEl.appendChild(objFunctionMemberEl);

        }

        objFunctionEl.appendChild(objFunctionMembersEl);
        this.inputTable.appendChild(objFunctionEl);
    }
}